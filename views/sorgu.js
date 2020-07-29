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
            $('.error').hide();
            $('.container').hide();
        }else{
            if(Password.value === ''){
                $('.Error-1').show();
                $('.Error').hide();
                $('.error').hide();
                $('.container').hide();
            }else{
                $('.Error-1').hide();
                $('.Error').hide();
                $('.name').html('');
                $('.surname').html('');
                $('.year').html('');
                $('.pay').html('');
                $('.overtime').html('');
                $('.TCno').html('');
                $('.error').hide();
                $('.container').hide();
                Username.value = '';
                Password.value = '';
                socket.emit('FIND', { username, password });
            }
        }

        socket.on('FIND', veri => {
            if(veri){
                console.log(veri);
                $('.name').html(veri.name);
                $('.surname').html(veri.surname);
                $('.year').html(veri.year);
                $('.pay').html(veri.pay);
                $('.overtime').html(veri.overtime);
                $('.TCno').html(veri.TCno);
                $('.container').show();
                $('.error').hide();
            }else{
                $('.error').show();
            }
        });
    });
});