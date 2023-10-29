import './Mobile.css'

import qr from '../../assets/qr.svg'
import PageTitle from '../../shared/ui/PageTitle/PageTitle'

const Mobile = () => {
    return (
        <div>
            <PageTitle text='Приложение ПРОФТЕСТИУМ' />
            <div style={{
                display: 'flex',
                gap: '20px',
                marginTop: '20px'
            }}>
                <img src={qr} alt="" />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <h5 style={{
                        fontSize: '18px'
                    }}>
                        Скачайте приложение и проходите <br /> тренинги в смартфоне.
                    </h5>
                    <p style={{
                        marginTop: '10px'
                    }}>1. Откройте приложение "Камера" на iPhone или Android</p>
                    <p>2. Наведите камеру на QR-код</p>
                    <div style={{
                        marginTop: '10px'
                    }} className="buttons">
                        <button>ok</button>
                        <button>okok</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile