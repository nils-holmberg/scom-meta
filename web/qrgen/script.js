document.getElementById('qrForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const textInput = document.getElementById('textInput').value;
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = '';
    QRCode.toDataURL(textInput, { width: 256, height: 256 }, function (err, url) {
        if (err) {
            console.error(err);
            return;
        }
        const img = document.createElement('img');
        img.src = url;
        qrCodeContainer.appendChild(img);
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
