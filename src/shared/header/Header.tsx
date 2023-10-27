import './Header.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import LangSwitcher from '../lang/LangSwitcher'

type HeaderProps = {
    background?: string | undefined
}

const Header = (props: HeaderProps) => {
    return (
        <div
            style={{
                background: props.background
            }}
            className='header'
        >
            <div className="header-wrapper container">
                <img src={logo} alt="kjnjx" />
                <button className='transparent-button'>Войти в систему</button>
            </div>
            <div className="divider" />
            <div className="header-wrapper container">
                <nav className='nav'>
                    <Link to={'/'}>Почему мы?</Link>
                    <Link to={'/'}>О нас</Link>
                    <Link to={'/'}>Партнеры и организации</Link>
                    <Link to={'/'}>Помощь</Link>
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