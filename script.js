const paymentContainer = document.getElementById('payment-container');
const metodePembayaran = document.getElementById('metode-pembayaran');
const bayarButton = document.getElementById('bayar');

bayarButton.addEventListener('click', (e) => {
    e.preventDefault();
    const metode = metodePembayaran.value;
    if (metode === 'dana') {
        // Kode untuk pembayaran Dana
        paymentContainer.innerHTML = `
            <h2>Pembayaran melalui Dana</h2>
            <p>Silakan melakukan pembayaran ke nomor ${                }</p>
        `/* 089649986355 */}</p>
        `;
    } else if (metode === 'gopay') {
        // Kode untuk pembayaran Gopay
        paymentContainer.innerHTML = `
            <h2>Pembayaran melalui Gopay</h2>
            <p>Silakan melakukan pembayaran ke nomor ${                 }</p>
        `/* 089649986355 */}</p>
        `;
    } else if (metode === 'qris') {
        // Kode untuk pembayaran QRIS
        paymentContainer.innerHTML = `
            <h2>Pembayaran melalui QRIS</h2>
            <img src="${https://files.catbox.moe/daqljh.jpg}" alt="QR Code">
        `/* https://files.catbox.moe/daqljh.jpg */}" alt="QR Code">
        `;
    }
});
