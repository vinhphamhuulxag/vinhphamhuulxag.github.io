
  var listSong = [
 
    {
      name: "Đã lỡ yêu em nhiều",
      singer: "JustaTee",
      time: "04:19",
      path: "./asset/songs/daloyeu.mp3",
      image:"./asset/img/slideShow/daloyeu.jpg"
        
    },
    {
        name: "Lạ lùng",
        singer: "Vũ",
        time: "04:20",
        path: "./asset/songs/lalung.mp3",
        image:"./asset/img/songThumb/vu.jpg"
          
      },
      {
        name: "Vô tình",
        singer: "Xesi x Hoaprox",
        time: "04:29",
        path: "./asset/songs/votinh.mp3",
        image:"./asset/img/songThumb/xexi.jpg"
          
      },
      {
        name: "Kém duyên",
        singer: "Rum x Nit x Masew",
        time: "03:45",
        path: "./asset/songs/kemduyen.mp3",
        image:"./asset/img/slideShow/slide7.jpg"
          
      },
    
      {
        name: "Đừng ai nhắc về cô ấy",
        singer: "Anh Quân",
        time: "04:38",
        path: "./asset/songs/song1.mp3",
        image:"./asset/img/songThumb/anhquanAp.jpg"
          
      },
      {
        name: "Cùng Anh",
        singer: "Ngọc Dolil",
        time: "02:34",
        path: "./asset/songs/cunganh.mp3",
        image:"./asset/img/slideShow/slide10.jpg"
          
      },
      {
        name: "Cứ Chill Thôi",
        singer: "Suni Hạ Linh & Rhymastic",
        time: "04:40",
        path: "./asset/songs/cuchillthoi.mp3",
        image:"./asset/img/slideShow/slide11.jpg"
          
      },
      {
        name: "Sài gòn đau lòng quá",
        singer: "Hứa Kim Tuyền x Hoàng Duyên.v-1203",
        time: "05:03",
        path: "./asset/songs/saigon.mp3",
        image:"./asset/img/slideShow/sg.jpg"
          
      },
      {
        name: "Buồn của anh",
        singer: " K-ICM x Đạt G x Masew",
        time: "04:38",
        path: "./asset/songs/buoncuaanh.mp3",
        image:"./asset/img/slideShow/slide12.jpg"
          
      },
      {
        name: "Sợ lắm 2",
        singer: "NB3 Hoài Bảo x Freak D",
        time: "04:46",
        path: "./asset/songs/solam2.mp3",
        image:"./asset/img/slideShow/slide4.jpg"
          
      },
      {
        name: "có chàng trai viết lên cây",
        singer: "Phan Mạnh Quỳnh",
        time: "04:58",
        path: "./asset/songs/cochangtraivietlencay.mp3",
        image:"./asset/img/slideShow/slide13.jpg"
          
      },
      {
        name: "Khuê mộc lan",
        singer: " Hương Ly & Jombie (G5R)",
        time: "03:28",
        path: "./asset/songs/khuemoclan.mp3",
        image:"./asset/img/slideShow/khuemoclan.jpg"
          
      },
      {
        name: "Hoa nở không màu",
        singer: "Hoài Lâm",
        time: "05:34",
        path: "./asset/songs/hoanokhongmau.mp3",
        image:"./asset/img/slideShow/hoailam.jpg"
          
      },
      {
        name: "Người Lạ Ơi",
        singer: "Karik x Orange x Superbrothers ",
        time: "05:34",
        path: "./asset/songs/nguoilaoi.mp3",
        image:"./asset/img/slideShow/slide9.jpg"
          
      },
      {
        name: "Lạc trôi",
        singer: "Sơn Tùng MTP",
        time: "03:58",
        path: "./asset/songs/tp.mp3",
        image:"./asset/img/slideShow/st.jpg"
          
      },
      {
        name: "SOFAR",
        singer: "Binz",
        time: "03:24",
        path: "./asset/songs/sofar.mp3",
        image:"./asset/img/slideShow/slide14.jpg"
          
      },
      {
        name: "OK",
        singer: "Binz",
        time: "02:33",
        path: "./asset/songs/ok.mp3",
        image:"./asset/img/slideShow/slide15.jpg"
          
      },
      {
        name: "Hãy trao cho anh",
        singer: "Sơn Tùng MTP",
        time: "04:22",
        path: "./asset/songs/haytraochoanh.mp3",
        image:"./asset/img/slideShow/slide8.jpg"
          
      },
   
      {
        name: "Ép duyên",
        singer: " YUNIBOO ft NAM ANH | LONG NÓN LÁ ft KAYDEE",
        time: "03:55",
        path: "./asset/songs/epduyen.mp3",
        image:"./asset/img/slideShow/slide1.jpg"
          
      },
    
    
    
    
    
  
  
  ]
  const SONG_STORAGE_KEY = "PHV_SONGS"
  localStorage.setItem(SONG_STORAGE_KEY, JSON.stringify(listSong));