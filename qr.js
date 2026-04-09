let imgBox = document.getElementById("imgbox");
let imgQR = document.getElementById("imgqr");
let qrinput = document.getElementById("qrinput");

function QRgenerate() {
    if (qrinput.value.length > 0) {
        imgQR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrinput.value;
        imgBox.classList.add("show-img");
    }else{
        qrinput.classList.add("error");
        setTimeout(()=>{
        qrinput.classList.remove("error");
        },1000)
    }

}
