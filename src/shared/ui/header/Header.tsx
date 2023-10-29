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
                <img src={logo} alt="kjnjx" />
                {
                    token ? <button onClick={() => {
                        navigate('/main')
                    }} className='transparent-button'>Личный кабинет</button> : <button onClick={() => {
                        navigate('/registration')
                    }} className='transparent-button'>Войти в систему</button> 
                }
            </div>
            <div className="divider" />
            <div className="header-wrapper container">
                <nav className='nav'>
                    <a href={'/#1'}>Почему мы?</a>
                    <a href={'/#2'}>О нас</a>
                    <a href={'/#3'}>Партнеры и организации</a>
                </nav>
                <div style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center'
                }}>
                    <a className='phone' href="tel:+70000000000">+ 7 (000) 000 00 00</a>
                    <LangSwitcher />
                </div>
            </div>
            <div className="divider" />
        </div>
    )
}

export default Header