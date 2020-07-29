$(() => {
    const socket = io.connect('http://localhost:3000');

    const form_1 = document.getElementById('form_1');
    const Username = document.getElementById('username');
    const Password = document.getElementById('password');

    form_1.addEventListener('submit', e => {
        e.preventDefault()

        const username = Username.value;
        const password = Password.value;

        if(Username.value === ''){
            $('.Error').show();
            $('.Error-1').hide();
        }else{
            if(Password.value === ''){
                $('.Error-1').show();
                $('.Error').hide();
            }else{
                socket.emit('FIND', { username, password });
                Username.value = '';
                Password.value = '';
                $('.Error-1').hide();
                $('.Error').hide();
            }
        }

        socket.on('FIND', veri => {
            if(veri){
                console.log(veri);
            }else{
                console.log('böyle bir kayıt yok!');
            }
        });
    });
});