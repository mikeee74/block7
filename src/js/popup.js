export function popup() {
   let buttonsCall = document.querySelectorAll('.button-call');
   let buttonsChat = document.querySelectorAll('.button-chat');

   let popupCall = document.querySelector('.popup-call');
   let popupChat = document.querySelector('.popup-chat');

   let popupClose = document.querySelectorAll('.popup__close');

    let buttonFun = function(button) {
        button.addEventListener('click', function (evt) {
        evt.preventDefault;
        popupCall.classList.add('chat-active');
    });
    }

    let buttonFun2 = function(button) {
        button.addEventListener('click', function (evt) {
        evt.preventDefault;
        popupChat.classList.add('chat-active');
    });
    }

    let close = function(button) {
        button.addEventListener('click', function (evt) {
        evt.preventDefault;
        popupChat.classList.remove('chat-active');
        popupCall.classList.remove('chat-active');
    });
    }


    for (let i = 0; i < buttonsCall.length; i++) {

        buttonFun(buttonsCall[i]);

    }

    for (let i = 0; i < buttonsChat.length; i++) {

        buttonFun2(buttonsChat[i]);

    }

    for (let i = 0; i < popupClose.length; i++) {
        
        close(popupClose[i]);

    }
}

