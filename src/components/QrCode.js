import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { useParams } from 'react-router-dom';

const QrCode = () => {
    const [src, setSrc] = useState('')
    const { qrCode } = useParams()

    useEffect(() => {
        generateQrCodeImg()
    }, [])

    const generateQrCodeImg = async () => {
        QRCode.toDataURL(qrCode, {
            errorCorrectionLevel: 'H',
            type: 'image/jpeg',
            quality: 0.3,
            margin: 1,
            color: {
                dark: "#010599FF",
                light: "#FFBF60FF"
            }
        }, (err, url) => {
            if (err) throw Error() // qrcode generation error
            setSrc(url)
        })
    }

    return (
        <div>
            <h1>QrCode</h1>
            <img src={src}></img>
        </div>
    )
}

export default QrCode