const contenedorQR = document.getElementById('contenedorQR')
const formulario = document.getElementById('formulario')


const QR = new QRCode(contenedorQR, )

formulario.addEventListener('submit', (e) =>{
    //Para no refrescar
    e.preventDefault();
    QR.makeCode('formulario.link.value')
})