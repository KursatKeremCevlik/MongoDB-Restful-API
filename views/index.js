$(() => {
    const socket = io.connect('http://localhost:3000');

    const KayıtForm = document.getElementById('KayıtForm');
    const İsim = document.getElementById('İsim');
    const Soyisim = document.getElementById('Soyisim');
    const Yaş = document.getElementById('Yaş');
    const Maaş = document.getElementById('Maaş');
    const Mesai = document.getElementById('Mesai');
    const SicilNo = document.getElementById('SicilNo');
    //
    const Username = document.getElementById('Username');
    const Password = document.getElementById('Password');

    const invisible = () => {
        $('#one').hide();
        $('#two').hide();
        $('#tree').hide();
        $('#four').hide();
        $('#five').hide();
        $('#six').hide();
        $('#seven').hide();
        $('#eight').hide();
        $('.Surprise').hide();
    }

    KayıtForm.addEventListener('submit', e => {
        e.preventDefault()
        const isim = İsim.value;
        const soyisim = Soyisim.value;
        const yaş = Yaş.value;
        const maaş = Maaş.value;
        const mesai = Mesai.value;
        const sicilNo = SicilNo.value;
        //
        const username = Username.value;
        const password = Password.value;

        if(!İsim.value){
            invisible();
            $('#one').show();
            return false;
        }else if(!Soyisim.value){
            invisible();
            $('#two').show();
            return false;
        }else if(!Yaş.value){
            invisible();
            $('#tree').show();
            return false;
        }else if(!Maaş.value){
            invisible();
            $('#four').show();
            return false;
        }else if(!Mesai.value){
            invisible();
            $('#five').show();
            return false;
        }else if(!SicilNo.value){
            invisible();
            $('#six').show();
            return false;
        }else if(!Username.value){
            invisible();
            $('#seven').show();
            return false;
        }else if(!Password.value){
            invisible();
            $('#eight').show();
            return false;
        }else{
            socket.emit('variables', {
                isim,
                soyisim,
                yaş,
                maaş,
                mesai,
                sicilNo,
                username,
                password
            });

            İsim.value = '';
            Soyisim.value = '';
            Yaş.value = '';
            Maaş.value = '';
            Mesai.value = '';
            SicilNo.value = '';
            Username.value = '';
            Password.value = '';
            $('.Surprise').show();
        }
    });
});