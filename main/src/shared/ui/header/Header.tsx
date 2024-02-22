import './Header.css'
import logo from '../../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import LangSwitcher from '../lang/LangSwitcher'
import { useAppSelector } from '../../../store/hooks'
import { selectRole, selectToken } from '../../../slices/authSlice'

type HeaderProps = {
    background?: string | undefined
}

const Header = (props: HeaderProps) => {

    const navigate = useNavigate()

    const token = useAppSelector(selectToken)

    return (
        <div
            style={{
                background: props.background
            }}
            className='header'
        >
            <div className="header-wrapper container">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '80px'
                }}>
                    <img onClick={() => {
                        navigate('/')
                    }} src={logo}  alt="kjnjx" style={{
                        marginRight: '20px',
                        cursor: 'pointer'
                    }} />
                    <a className='link' href={'/#2'}>О нас</a>
                    <Link className='link' to={'/'}>Тарифы</Link>
                    <Link className='link' to={'/'}>Контакты</Link>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    {
                        Boolean(!token) && <button onClick={() => {
                            navigate('/registration')
                        }} className='white-button btn'>Получить бесплатно</button>
                    }
                    {
                        token ? <button onClick={() => {
                            navigate('/main/rating')
                        }} className='transparent-button'>Личный кабинет</button> : <button onClick={() => {
                            navigate('/auth')
                        }} className='transparent-button'>Войти в систему</button>
                    }
                </div>
            </div>
            <div className="divider" />
        </div>
    )
}

export default Header