const qrForm = document.getElementById('qrForm');
const qrContainer = document.getElementById("qrContainer");
const qrImage = document.getElementById('qrImage');
const Box = document.getElementById("Box");
const input = document.getElementById("input");

const renderQRCode = (url) => {

    const btn = document.querySelector("button");
    btn.innerHTML = "Generating..."
    qrImage.src = url;

    const onImageLoad = () => {

        const interval = setInterval(() => {
            Box.classList.add("boxHeight");
            qrContainer.classList.add("show");
            clearInterval(interval)
            btn.innerHTML = "Generate"
        }, 800)

    }

    qrImage.addEventListener("load", onImageLoad);
}

qrForm.addEventListener('submit', (event) => {

    event.preventDefault();
    const formData = new FormData(qrForm);
    const text = formData.get("qrData")
    if (!text) return;


    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`

    renderQRCode(qrCodeUrl);

})

input.addEventListener("keydown", () => {

    if (input.value.trim()) {
        qrContainer.classList.remove("show");
        qrContainer.classList.add("qrCode");
        Box.classList.remove("boxHeight");

    }

})