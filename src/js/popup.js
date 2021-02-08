export function popup() {
   let buttonsCall = document.querySelectorAll('.button-call');
   let buttonsChat = document.querySelectorAll('.button-chat');

   let popupCall = document.querySelector('.popup-call');
   let popupChat = document.querySelector('.popup-chat');

   let popupClose = document.querySelectorAll('.popup__close');
   let blur = document.querySelectorAll('.popup__blur');

    let call = function(button) {
        button.addEventListener('click', function (evt) {
        evt.preventDefault;
        popupCall.classList.add('chat-active');
        document.querySelector('body').classList.add('body--hidden');
    });
    }

    let chat = function(button) {
        button.addEventListener('click', function (evt) {
        evt.preventDefault;
        popupChat.classList.add('chat-active');
        document.querySelector('body').classList.add('body--hidden');
    });
    }

    let close = function(button) {
        button.addEventListener('click', function (evt) {
        evt.preventDefault;
        popupChat.classList.remove('chat-active');
        popupCall.classList.remove('chat-active');
        document.querySelector('body').classList.remove('body--hidden');
    });
    }


    for (let i = 0; i < buttonsCall.length; i++) {

        call(buttonsCall[i]);

    }

    for (let i = 0; i < buttonsChat.length; i++) {

        chat(buttonsChat[i]);

    }

    for (let i = 0; i < popupClose.length; i++) {
        
        close(popupClose[i]);
        

    }

    for (let i = 0; i < blur.length; i++) {
        
        close(blur[i]);

    }
}

