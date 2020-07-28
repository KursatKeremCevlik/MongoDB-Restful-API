$(() => {
    const socket = io.connect('http://localhost:3000');

    const KayıtForm = document.getElementById('KayıtForm');
    const İsim = document.getElementById('İsim');
    const Soyisim = document.getElementById('Soyisim');
    const Yaş = document.getElementById('Yaş');
    const Maaş = document.getElementById('Maaş');
    const Mesai = document.getElementById('Mesai');
    const SicilNo = document.getElementById('SicilNo');

    KayıtForm.addEventListener('submit', e => {
        e.preventDefault()
        const isim = İsim.value;
        const soyisim = Soyisim.value;
        const yaş = Yaş.value;
        const maaş = Maaş.value;
        const mesai = Mesai.value;
        const sicilNo = SicilNo.value;

        if(!İsim.value){
            return false;
        }else if(!Soyisim.value){
            return false;
        }else if(!Yaş.value){
            return false;
        }else if(!Maaş.value){
            return false;
        }else if(!Mesai.value){
            return false;
        }else if(!SicilNo.value){
            return false;
        }else{
            socket.emit('variables', { isim, soyisim, yaş, maaş, mesai, sicilNo });
        }

    });
});