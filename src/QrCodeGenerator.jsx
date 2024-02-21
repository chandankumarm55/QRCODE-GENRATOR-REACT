import React, { useState } from 'react';
import QRCode from 'qrcode';
import './Qrcode.css'; // Import the CSS file

function QRCodeGenerator() {
    const [url, setUrl] = useState('');
    const [qr, setQr] = useState('');

    const generateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 250,
            margin: 2,
            color: {
                dark: '#335383FF',
                light: '#EEEEEEFF',
            },
        }, (err, generatedQr) => {
            if (err) return console.error(err);

            console.log(generatedQr);
            setQr(generatedQr);
        });
    };

    const downloadQRCode = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = qr;
        downloadLink.download = 'qrcode.png';
        downloadLink.click();
    };

    return (
        <div className="app qr-code-generator">
            <h1>QR-Code Generator</h1>
            <input
                type="text"
                placeholder="e.g. https://google.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={generateQRCode}>Generate QR Code</button>
            {qr && (
                <div>
                    <img src={qr} alt="qr-code" />
                    <div>
                        <button onClick={downloadQRCode}>Download QR Code</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QRCodeGenerator;
