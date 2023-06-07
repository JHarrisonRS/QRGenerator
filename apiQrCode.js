const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
BtnGerar = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

BtnGerar.addEventListener('click', () =>{
    let qrValue = qrInput.value;
    if (!qrValue){
        alert ('Insira um texto ou link e click em GERAR')
        return;
    }
    BtnGerar.innerHTML = "Gerando...";
    // qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data${qrValue}`;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrValue}&amp;size=100x100`;
    qrImg.addEventListener('load', () =>{
            BtnGerar.innerHTML = "Gerar"
            container.classList.add('active');
    })
})


qrInput.addEventListener('keyup', () =>{
    if(!qrInput.value){
        container.classList.remove('active');
    }
} );