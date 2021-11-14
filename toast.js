function toast({
    title = '', 
    message = '', 
    type = 'info', 
    duration = 3000 

}){
    const main = document.getElementById('toast')
    if(main){
        const toast = document.createElement('div')
        // auto remove toast
       const autoRemoveId = setTimeout(function() {
            main.removeChild(toast)
        }, duration + 1000);
        // remove toast when click
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
                
            }
        }
        const delay = (duration / 1000).toFixed(2)
        toast.classList.add('toast', `toast--${type}`)
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `            
                <div class="toast__icon">
                    <i class="bi bi-bell-fill"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="bi bi-x-lg"></i>        
                </div>                     
             `
             main.appendChild(toast)
            
    }
}

 function showNotification() {
    toast({
        title: 'Thông báo',
        message: 'Tính năng chưa được cập nhật bạn vui lòng thông cảm!',
        type: 'success',
        duration: 1000
    })
 }