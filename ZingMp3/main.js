const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const App = $('.app')
const header = $('.header')
const headerSearch = $('.header__search')
const themeBtn = $('.header__menu-btn')
const modalTheme = $('.theme__modal')
const closeTheme = $('.close-theme-btn')
const themeContainer = $('.theme__content-container')
const settingBtn = $('.setting-btn')
const settingMenu = $('.header__menu-subnav')
const logoutBtn = $('.action-logout')
const logoutMenu = $('.logout__option')
const tabItems = $$('.app__navbar-item')
const slideImgs = $$('.slide__show-item')
const iconHearts = Array.from($$('.icon-heart.bi-heart-fill'))
const songLists = Array.from($$('.playlist'))
const playBtns = Array.from($$('.toggle-play-btn'))
const iconPlay = $('.icon-play')
const iconPause = $('.icon-pause')
const cdThumbs = Array.from($$('.thumb'))
const headings = Array.from($$('.player__name'))
const authors = Array.from($$('.player__author'))
const audio = $('#audio')
const players = Array.from($$('.player__control-btn'))
const nextBtns = Array.from($$('.next-btn'))
const prevBtns = Array.from($$('.prev-btn'))
const randomBtns = Array.from($$('.random-btn'))
const repeatBtns = Array.from($$('.repeat-btn'))
const progressAreas = Array.from($$('.progress-area'))
const progressBars = Array.from($$('.progress-bar'))
const durationTimes = Array.from($$('.duration-time'))
const musicCurrentTimes  = Array.from($$('.current-time'))
const actionBtn = $('.action-play-btn')
const cds = Array.from($$('.player__thumb'))
const thumbNails = Array.from($$('.thumbnail'))
const cdTranslateXs = Array.from($$('.player__current-song'))
const progressVolume = $('.progress-volume')
const lineVolumeCurrent = $('.line-volume-current')
const lineVolume = $('.line-volume')
const circleVolume = $('.circle-volume')
const volumeMutes = $$('.volume-mute')
const appContainers = $$('.app__container')
const playAlls = $$('.play-btn')
const panes = $$('.tab-content')
const container = $('.container')
const tabPlaylist = $('.tab__playlist-container')
const tabSinger = $('.tab__singer-container')
const tabAlbum = $('.tab__album-conatiner')
const tabMv = $('.tab__mv-container')
const sidebarNavItems = $$('.sidebar__navbar-item')
const sidebarSubnavItems = $$('.sidebar__navbar-item.sidebar__subnav-item')
const paneSidebars = $$('.app__container')
const exploreCorner = $('.container__corner')
const exploreNew = $('.container__explore-new')
const radioExplore = $('.radio__explore.row')
const postsContainer = $('.follow__post-container')
const cdMain = $('.player__main-thumb')
const thumbMain = $('.cd__main')
const nameMain = $('.player__main-name')
const authorMain = $('.player__main-author')
const playerMain = $('.player__main')
const player = $('.player')
const playerFooterMain = $('.player__main-footer')
const libraryBtns = Array.from($$('.sidebar__library-item'))


const app = {
    themeLists: JSON.parse(localStorage.getItem(THEME_LIST_STORAGE_KEY) || '[]'), 
    themes: JSON.parse(localStorage.getItem(THEME_STORAGE_KEY) || '[]'), 
    songs: JSON.parse(localStorage.getItem(SONG_STORAGE_KEY) || '[]'),
    listPlaylist: JSON.parse(localStorage.getItem(PLAYLIST__STORAGE__KEY) || '[]'),
    listSinger: JSON.parse(localStorage.getItem(SINGER__STORAGE__KEY) || '[]'),
    listAlbum: JSON.parse(localStorage.getItem(ALBUM__STORAGE__KEY) || '[]'),
    listMv: JSON.parse(localStorage.getItem(MV__STORAGE__KEY) || '[]'),
    radioPodcasts: JSON.parse(localStorage.getItem(RADIO__PODCAST__KEY) || '[]'),
    posts: JSON.parse(localStorage.getItem(POST__STORAGE__KEY) || '[]'),
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    
    

    html([first, ...string], ...values) {
        return values.reduce(
            (acc, cur) => acc.concat(cur, string.shift())
            , [first]
        )
        .filter(x => x && x !== true || x === 0)
        .join('')       
    },
    // render modal theme
    renderModalTheme() {
        themeContainer.innerHTML = app.html`
            ${this.themeLists.map((themeList, themeIndex)=> {
                return this.html`
                            <div class="row theme__list m-r">
                                
                            <div class="col l-12 m-12 c-12">
                                <h3 class="title">${themeList.type}</h3>

                            </div>
                            ${themeList.themes.map((theme, index)=> {
                                return app.html`
                                <div class="col l-2 m-4 c-6">
                                    <div class="theme__item" data-index="${index}">
                                        <div class="theme__item-image">
                                            <div class="theme__item-img">
                                                <img src="${theme.image}" alt="" class="theme-image br-5">
                                                <div class="theme__actions ">
                                                    <button class="theme__action-btn apply-btn button">Áp Dụng</button>
                                                    <button class="theme__action-btn preview-btn button">Xem Trước</button>
                                                </div>
                                            </div>
                                        </div>
                                    <div class="theme__item-name">${theme.name}</div>
    
                                    
                                    </div>
                                </div>
                                                          
                                `
                            })}
                        </div>
                `        
            })}
        `
    },
    // render songs
    renderSong() {
        
        songLists.forEach((songList, songIndex)=>{
            songList.innerHTML = app.html`${app.songs.map(function(song, index){
                return app.html`
                                                    
                        <div class="song__item ${index === app.currentIndex ? 'active' : ''}" data-index = "${index}">
                        <div class="media">
                            <div class="media-left">
                            ${songIndex===1 && app.html`
                            <div class="song-prefix"><i class="bi bi-music-note-beamed "></i></div>
                       
                            `}
                                <div class="song-thumb">
                                    <img src="${song.image}" alt="">
                                    <div class="song-thumb-action">
                                    <div class="action-play-btn">
                                    <img src="./asset/img/songThumb/icon-playing.gif" alt="" class="icon__playing">
                                            <i class="bi bi-play-fill icon-player"></i>
                                        </div>
                                    </div>

                                </div>
                                <div class="song-info">
                                    <div class="song-info-name">${song.name}</div>
                                    <span class="song-info-author">${song.singer}</span>
                                </div>
                            </div>
                            <div class="media-duration hide-on-mobile">${song.time}</div>
                            <div class="media-right">
                                <div class="level-item icon hide-on-mobile">
                                    <i class="bi bi-mic-fill"></i>
                                </div>
                                <div class="level-item icon hide-on-mobile">
                                    <i class="bi bi-heart-fill icon-heart"></i>
                                </div>
                                <div class="level-item icon hide-on-tablet">
                                    <i class="bi bi-three-dots "></i>
                                </div>
                            </div>
                        </div>
                        </div>
                `
            })}`
        })
    },
   
    // render listplaylist
        renderPlaylist(){
            tabPlaylist.innerHTML = app.html`
                ${app.listPlaylist.map((playlist, playlistIndex)=>{
                    return app.html`
              
                    <div class="col l-2-4 m-3 c-4 mb-30">
                    <div class="playlist-item">
                        <div class="playlist-cart-img">
                            <img src="${playlist.Image}" alt="" class="playlist-img">
                            <div class="playlist-item-action">
                                <div class="level-item icon  icon-primary">
                                    <i class="bi bi-heart-fill icon-heart"></i>
                                </div>
                                <div class="playlist-action-play">
                                    <i class="pd-5 bi bi-play-fill action-playlist"></i>
                                </div>
                                <div class="level-item icon  icon-primary">
                                    <i class="bi bi-three-dots playlist-action-dots"></i>
                                </div>
                            </div>
                        </div>
                        <div class="playlist-cart-content">
                            <h3>${playlist.name}</h3>
                            <h4>${playlist.brand}</h4>
                        </div>
                    </div>
                </div>
                    `
                })}
            `
        },
//    render Listsinger
        renderListSinger() {
            tabSinger.innerHTML = app.html`
                ${app.listSinger.map((singer, singerIndex)=>{
                    return app.html`
                    <div class="col l-2-4 m-3 mb-30 ">
                    <div class="singer-item">
                        <div class="singer-item-img">
                            <img src="${singer.image}" alt="">
                            <div class="playlist-item-action">                                            
                                <div class="playlist-action-play">
                                    <i class="pd-5 bi bi-play-fill action-playlist"></i>
                                </div>                                              
                            </div>
                        </div>
                        <div class="singer-item-info">
                            <span class="singer-name">${singer.name}</span>
                            <div class="singer-follow">${singer.follow}</div>
                        </div>
                        <div class="singer__subscribe-btn button">
                            <i class="bi bi-check2"></i>
                            <span>Đã Quan Tâm</span>
                        </div>
                    </div>
                </div>
                    `
                })}
            `
        },
        renderAlbum(){
            tabAlbum.innerHTML = app.html`
                ${app.listAlbum.map((album, albumIndex)=>{
                    return app.html`
                        
                    <div class="col l-2-4 m-3 mb-30">
                    <div class="playlist-item">
                        <div class="playlist-cart-img">
                            <img src="${album.image}" alt="" class="playlist-img">
                            <div class="playlist-item-action">
                                <div class="level-item icon  icon-primary">
                                    <i class="bi bi-heart-fill icon-heart"></i>
                                </div>
                                <div class="playlist-action-play">
                                    <i class="pd-5 bi bi-play-fill action-playlist"></i>
                                </div>
                                <div class="level-item icon  icon-primary">
                                    <i class="bi bi-three-dots playlist-action-dots"></i>
                                </div>
                            </div>
                        </div>
                        <div class="playlist-cart-content">
                            <h3>${album.name}</h3>
                        </div>
                    </div>
                </div>
                    
                    `
                })}
            `
        },
        // render MV
        renderMv(){
            tabMv.innerHTML = app.html`
                ${app.listMv.map((mv, mvIndex)=>{
                    return app.html`
                    <div class="col l-4 m-6 c-12 mb-30">
                    <div class="playlist-item">
                        <div class="playlist-cart-img">
                            <img src="${mv.image}" alt="" class="playlist-img">
                            <div class="playlist-item-action">                                            
                                <div class="playlist-action-play">
                                    <i class="pd-5 bi bi-play-fill action-playlist"></i>
                                </div>                                              
                            </div>
                            <div class="close__mv--btn">
                                <i class="bi bi-x-lg icon"></i>
                            </div>
                            <span class="mv--time">${mv.time}</span>
                        </div>
                        <div class="wrap__info--mv">
                            <div class="mv__img-author">
                                <img src="${mv.authorImg}" alt="">
                            </div>
                            <div class="playlist-cart-content">
                                <h3>${mv.name}</h3>
                                <h4>${mv.author}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                    
                    
                    `
                })}
            `
        },
     
    
 
        renderRadio() {
            radioExplore.innerHTML = app.html`
                ${app.radioPodcasts.map((radio, index)=>{
                    return app.html`
                        <div class="col l-2-4 m-3 c-4 ">
                        <div class="playlist-item podcast-item">
                            <div class="playlist-cart-img">
                                <img src="${radio.image}" alt="" class="playlist-img">                           
                            </div>
                            <div class="playlist-cart-content">
                                <h3 class="radio-title">${radio.name}</h3>
                            </div>
                        </div>
                    </div>
                   
                    `
                })}
            `
        },
        // render post
        renderPosts(){
           postsContainer.innerHTML = app.html`
            ${app.posts.map((post, index)=>{
                return app.html`
                <div class="col l-4 m-6 c-12">
                <div class="post__item">
                    <div class="post__item-author">
                        
                        <div class="post__item-img">
                            <img src="${post.imageAuthor}" alt="">
                        </div>
                        <div class="post__info">
                            <div class="post__info-top">
                                <h3>${post.name}</h3>
                                <span class="post-dots">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                                <span class="follow-btn">Quan tâm</span>
                            </div>
                            <div class="post__info-bot">4 tháng 11 lúc 20:23</div>
                        </div>
                    </div>
                    <div class="post__item-content">${post.content}</div>
                    <div class="post__item-slide" style="background: url('${post.image}') center top / cover no-repeat; border-radius: 8px; padding-bottom: 100%; cursor: pointer;margin-bottom: 15px;"></div>
                      <div class="post__item-footer">
                          <div class="like">
                            <i class="bi icon-heart bi-heart"></i>
                            <span>${Math.floor(Math.random()*1000)}</span>
                          </div>
                          <div class="comment">
                            <i class="bi bi-chat-dots"></i>
                            <span>${Math.floor(Math.random()*100)}</span>

                          </div>
                      </div> 
                  
                </div>
            </div>
                `
            })}
           `
        },
    // Render
    render:function() {
        this.renderModalTheme()
        this.renderSong()
        this.renderPlaylist()
        this.renderListSinger()
        this.renderAlbum()
        this.renderMv()      
        this.renderRadio()
        this.renderPosts()
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
 

    // XỬ LÝ SỰ KIỆN
    handleEvents: function() {
        const _this = this
        var lastValueVolume = 1;
        // open close player
        player.onclick = (e)=>{
            const controlNode = e.target.closest('.player__control-btn')
            const optionNode = e.target.closest('.player__option-icon-container')
            const progressNode = e.target.closest('.player__progess')
            const closePlayer = e.target.closest('.close__down-btn')
            const iconNode = e.target.closest('.player__song-icon')
            const cdNode = e.target.closest('.player__thumb')
            if (!controlNode && !optionNode && !progressNode && !iconNode  && !cdNode) {
                playerMain.classList.add('open')
            }
            if (closePlayer) {
                playerMain.classList.remove('open')
                
            }
        }
    //   when click item library
    libraryBtns.forEach(libraryBtn=>{
        libraryBtn.onclick  = ()=>{
            showNotification()
        }
    })
        // cd main play
        const cdAnimate = cdMain.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration:10000,
            iterations: Infinity
        })
        cdAnimate.pause()
        // gọi hàm render trước handle
        const listThemes = Array.from($$('.theme__content-container .theme__list'))
        // open close modal
        themeBtn.onclick = (e)=> {
            modalTheme.classList.add('open')
        }
        modalTheme.onclick = (e)=> {
         const themeContainer =   e.target.closest('.theme__container')
         if (themeContainer) {
             e.stopPropagation()
         }else {
             modalTheme.classList.remove('open')
         }
        }
        closeTheme.onclick = (e)=> {
            modalTheme.classList.remove('open')

        }
          // xử lý khi play song
        playBtns.forEach(playBtn=>{

            playBtn.onclick = ()=> {
            if (_this.isPlaying) {
                audio.pause()
            }else {
                audio.play()
            }
                 
             }
        })

      
          
    
         
          // khi song được play
          audio.onplay = function() {
            _this.isPlaying = true
            players.forEach(player=>{
                player.classList.add('playing')

            })
            App.classList.add('playing')
            cdTranslateXs.forEach((cdTranslateX, index)=>{
                cdTranslateX.classList.add('playing')
            })
            thumbNails.forEach(thumbNail=>{

                thumbNail.classList.add('playing')
            })
            cds.forEach(cd=>{
                cd.classList.add('playing')

            })
            cdAnimate.play()


        }
        // khi song bị pause
        audio.onpause = function() {
            _this.isPlaying = false
            players.forEach(player=>{
                player.classList.remove('playing')
            })
            App.classList.remove('playing')
            cdTranslateXs.forEach((cdTranslateX, index)=>{
                cdTranslateX.classList.remove('playing')
            })
            thumbNails.forEach(thumbNail=>{
                thumbNail.classList.remove('playing')
            
            })
            cds.forEach(cd=>{
                cd.classList.remove('playing')

            })
            cdAnimate.pause()

        }
      

    //   khi next song
    nextBtns.forEach(nextBtn=>{
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong()
            }else {
                _this.nextSong()
            }
            audio.play()
            _this.renderSong()
        }

    })
        // khi prev song
        prevBtns.forEach(prevBtn=>{
            prevBtn.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSong()
                }else {
    
                    _this.prevSong()
                }
                audio.play()
                _this.renderSong()
    
            }

        })
        // random
        randomBtns.forEach(randomBtn=>{
            randomBtn.onclick = function(e) {
                randomBtn.classList.toggle('active', _this.isRandom)
                _this.isRandom = !_this.isRandom
             
               
            }

        })
        // next when audio ended
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play()
            }else {
             nextBtns[0].click()
            }
        },
        // when click songLists

        songLists.forEach((songList, index)=>{
            songList.onclick = (e)=> {
                const songNode = e.target.closest('.song__item:not(.active)')
                if(songNode && !e.target.closest('.media-right')) {
                 //  xử lý khi click vào song
                  if(songNode) {
                   _this.currentIndex = Number(songNode.dataset.index)
                   _this.loadCurrentSong()
                   _this.renderSong()
                   audio.play()
                  }
                }
              
            }

        })

       
     
        // handle when change time
        audio.addEventListener("timeupdate", (e) => {
            const currentTime = e.target.currentTime 
            const duration = e.target.duration 
            let progressWidth = (currentTime / duration) * 100
            progressBars.forEach(progressBar=>{
                progressBar.style.width = `${progressWidth}%`;
            })
      
            audio.addEventListener("loadeddata", () => {
              //update song total duration
              let audioDuration = audio.duration
              let totalMin = Math.floor(audioDuration / 60)
              let totalSec = Math.floor(audioDuration % 60)
              if (totalSec < 10) {
                totalSec = `0${totalSec}`
              }
              durationTimes.forEach(durationTime=>{
                  durationTime.innerText = `${totalMin}:${totalSec}`
                  
              })
            })     
            //update playing song currentime
            let currentMin = Math.floor(currentTime / 60)
            let currentSec = Math.floor(currentTime % 60)
            if (currentSec < 10) {
              currentSec = `0${currentSec}`
            }
            musicCurrentTimes.forEach(musicCurrentTime=>{

                musicCurrentTime.innerText = `${currentMin}:${currentSec}`
            })
      
          })
          // xử lí tua song
          progressAreas.forEach(progressArea=>{

              progressArea.addEventListener("click",(e) => {
                let progressWidthval = progressArea.clientWidth
                let clickedOffset = e.offsetX
                let songDuration = audio.duration
          
                audio.currentTime = (clickedOffset / progressWidthval) * songDuration
            })
          })
          
        // handle when repeat
        repeatBtns.forEach(repeatBtn=>{
            repeatBtn.onclick = function() {
                _this.isRepeat= !_this.isRepeat
                repeatBtn.classList.toggle('active', _this.isRepeat)
                
              
            }

        })
        // when click play all
        playAlls.forEach(playAll=>{
            playAll.onclick = function() {
                _this.loadCurrentSong()
                audio.play()
            }

        })
        // handle change theme
        listThemes.forEach((listTheme, themeIndex)=> {
            listTheme.onclick = (e) => {
                const   applyThemeBtn = e.target.closest('.apply-btn')
                const   previewThemeBtn = e.target.closest('.preview-btn')
                const themeItem = e.target.closest('.theme__item')
               
                if (themeItem && (applyThemeBtn || previewThemeBtn)) {
                    var currentTheme = Number(themeItem.dataset.index)              
                }
                if (applyThemeBtn) {
                    
                    _this.loadThemeBg(themeIndex, currentTheme)
                    closeTheme.onclick()
                }
                if (previewThemeBtn) {
                    _this.loadThemeBg(themeIndex, currentTheme)
                    
                }
                
            }

        })
        // change volume
        progressVolume.oninput = function(){
            audio.volume = progressVolume.value / 100
            lineVolumeCurrent.style.width = audio.volume*100 + '%'
            circleVolume.style.left = `calc(${audio.volume * 100}% - 4px)`
            lastValueVolume = audio.volume      

        }
        // close open volume 
        volumeMutes.forEach(volumeMute=>{

            volumeMute.onclick = (e)=>{
                if (volumeMute.classList.contains('bi-volume-up') === true) {
                    volumeMute.classList.remove('bi-volume-up')
                    volumeMute.classList.add('bi-volume-mute')
                    lineVolumeCurrent.style.display = 'none'
                    audio.volume = 0
                }else {
                    volumeMute.classList.remove('bi-volume-mute')
                    volumeMute.classList.add('bi-volume-up')
                    lineVolumeCurrent.style.display = 'block'
                    audio.volume = lastValueVolume
                }
            }
        })
        // open close setting
        document.onclick = (e)=> {
            const showSetting = e.target.closest('.header__menu-subnav')
            if (!showSetting) {
                settingMenu.classList.remove('active')
                logoutMenu.classList.remove('active')    
            }

        }
        settingBtn.onclick = (e)=> {
            e.stopPropagation()
            settingMenu.classList.toggle('active')
        }
        settingMenu.onclick = (e)=> {
            e.stopPropagation()
        }
        // open close logout
        logoutBtn.onclick = (e)=> {
            e.stopPropagation()
            logoutMenu.classList.toggle('active')
        }
        logoutMenu.onclick = (e)=> {
            e.stopPropagation()
        }
        // header scrollY
        appContainers.forEach((appContainer, index)=>{
            appContainer.onscroll = ()=> {
                const appScroll = appContainer.scrollY || appContainer.scrollTop
                appScroll > 10 ? header.classList.add('active') : header.classList.remove('active')
            }

        })
       
        // tab active
        tabItems.forEach((tab, index)=> {
            tab.onclick = (e)=> {
                const pane = panes[index]
               $('.app__navbar-item.active').classList.remove('active')
               $('.tab-content.active').classList.remove('active')
               pane.classList.add('active')
                tab.classList.add('active')                
                e.stopPropagation()
            }
        })
        // sidebar
        sidebarNavItems.forEach((sidebarNavItem, index)=>{
            sidebarNavItem.onclick = (e)=>{
                const paneSidebar = paneSidebars[index]
                $('.sidebar__navbar-item.active').classList.remove('active')
                $('.app__container.active').classList.remove('active')
                paneSidebar.classList.add('active')
                sidebarNavItem.classList.add('active')
            }
        })
        sidebarSubnavItems.forEach((sidebarSubnavItem, index)=>{
            sidebarSubnavItem.onclick = (e)=>{
                e.stopPropagation()
                showNotification()
            }
        })
        // slide show
        let imgIndex = 2
        function slideShow() {
            const slideFirst = $('.slide__show-item.first')
            const slideSecond = $('.slide__show-item.second')
            const slideThird = slideImgs[imgIndex]
            const slideFourth = slideImgs[imgIndex === slideImgs.length -1 ?  0 : imgIndex + 1]
            slideFourth.classList.replace('fourth', 'third')
            slideThird.classList.replace('third', 'second')
            slideSecond.classList.replace('second', 'first')
            slideFirst.classList.replace('first', 'fourth')
            imgIndex++;
            if(imgIndex >= slideImgs.length) { 
                imgIndex = 0;
            }
            setTimeout(slideShow, 2000)
        }
        slideShow()
        // change slide songLists
    
        // click icon heart
        iconHearts.forEach((iconHeart, index)=> {
            iconHeart.onclick = (e)=> {
             if (iconHeart.classList.contains('bi-heart-fill') === true) {
                 iconHeart.classList.remove('bi-heart-fill')
                 iconHeart.classList.add('bi-heart')
             }else {
                iconHeart.classList.remove('bi-heart')
                iconHeart.classList.add('bi-heart-fill')
             }
            }

        })
    },
    loadThemeBg(themeListIndex, currentTheme) {
        const currentThemeColor = this.themes[themeListIndex][currentTheme].colors           
        document.documentElement.style.setProperty('--layout-bg', currentThemeColor.layoutBg)
        document.documentElement.style.setProperty('--sidebar-bg', currentThemeColor.sidebarBg)
        document.documentElement.style.setProperty('--text-primary', currentThemeColor.textPrimary)
        document.documentElement.style.setProperty('--link-text-hover', currentThemeColor.linkTextHover)
        document.documentElement.style.setProperty('--purple-primary', currentThemeColor.purplePrimary)
        document.documentElement.style.setProperty('--navigation-text', currentThemeColor.navigationText)
        document.documentElement.style.setProperty('--primary-bg', currentThemeColor.primaryBg)
        document.documentElement.style.setProperty('--alpha-bg', currentThemeColor.alphaBg)
        document.documentElement.style.setProperty('--search-text', currentThemeColor.searchText)
        document.documentElement.style.setProperty('--tab-active-bg', currentThemeColor.tabActiveBg)
        document.documentElement.style.setProperty('--border-secondary', currentThemeColor.borderSecondary)
        document.documentElement.style.setProperty('--text-secondary', currentThemeColor.textSecondary)
        document.documentElement.style.setProperty('--player-bg', currentThemeColor.playerBg)
        document.documentElement.style.setProperty('--border-player', currentThemeColor.borderPlayer)
        document.documentElement.style.setProperty('--thumbnail-player', currentThemeColor.thumbnailPlayer)
        document.documentElement.style.setProperty('--scroll-bg', currentThemeColor.scrollBg)
        document.documentElement.style.setProperty('--dark-alpha-50', currentThemeColor.darkAlpha50Bg)
        document.documentElement.style.setProperty('--box-item-bg', currentThemeColor.boxItemBg)

        if (this.themes[themeListIndex][currentTheme].image) {
            App.style.backgroundImage = `url('${this.themes[themeListIndex][currentTheme].image}')`
            playerMain.style.backgroundImage = `url('${this.themes[themeListIndex][currentTheme].image}')`
         
        }else {
            App.style.backgroundImage = 'none'
            playerMain.style.backgroundImage = "none"

        }
        if (this.themes[themeListIndex][currentTheme].playerImage) {
            player.style.backgroundImage = `url('${this.themes[themeListIndex][currentTheme].playerImage}')`
            playerFooterMain.style.backgroundImage = `url('${this.themes[themeListIndex][currentTheme].playerImage}')`
        }else{
            player.style.backgroundImage = "none"
            playerFooterMain.style.backgroundImage = "none"
        }
    


     
      
    },

    loadCurrentSong: function() {
        authors.forEach(author=>{
            author.textContent = `${this.currentSong.singer}`

        })
        headings.forEach(heading=>{
            heading.textContent =  `${this.currentSong.name}`

        })
          audio.src = `${this.currentSong.path}`
          cdThumbs.forEach(cdThumb=>{
              cdThumb.src = `${this.currentSong.image}`
          })
          thumbMain.src = `${this.currentSong.image}`
          nameMain.textContent = `${this.currentSong.name}`
          authorMain.textContent = `${this.currentSong.singer}`

    },
    nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1
        }
        this.loadCurrentSong()
    },
    playRandomSong:function () {
        let newIndex
        do {
            this.currentIndex = Math.floor(Math.random()*this.songs.length)
        } while (newIndex ===  this.currentIndex);
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
  
   

    start: function() {
        
        this.defineProperties()
        this.render()
        this.handleEvents()
        this.loadCurrentSong()
    }
    
}
app.start()


    


   




