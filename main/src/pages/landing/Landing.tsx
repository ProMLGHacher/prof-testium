import Header from '../../shared/ui/header/Header'
import welcome from '../../assets/welcome.svg'
import './Landing.css'
import logo from '../../assets/logo-blue.svg'
import logoBlue from '../../assets/logo.svg'
import about from '../../assets/aboutImg.png'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { selectToken } from '../../slices/authSlice'
import ScrollableAnchor from 'react-scrollable-anchor'

const Landing = () => {
    const navigate = useNavigate()

    return (
        <>
            <section className='main'>
                <Header />
                <div style={{
                    gap: '10%'
                }} className='container main-wrapper'>
                    <div className='left-side'>
                        <h1 style={{
                            marginBottom: '0px'
                        }} className='title'>Современная платформа для обучения сотрудников предприятий с использованием VR-технологий</h1>
                        <p style={{
                            marginBottom: '10px'
                        }} className='subtitle'>Создайте инновационную систему обучения и оценки знаний сотрудников на предприятии, используя VR-технологии. Мы предлагаем интерактивные обучающие модули для эффективного повышения профессиональных навыков сотрудников.</p>
                        <div className='buttons'>
                            <button onClick={() => {
                                navigate('/registration')
                            }} className='white-button btn'>Получить бесплатно</button>
                            <div className='btn'></div>
                        </div>
                    </div>
                    <img className='welcome-img' src={welcome} alt="" />
                </div>
            </section>
            <section id='1' className='container advantages'>
                <div className='advantage'>
                    <div className='top'>
                        <p className='number'>01</p>
                    </div>
                    <p className="advantage-subtitle">Проводите анализ текущих процессов для выявления узких мест, излишних шагов и потенциальных улучшений.</p>
                </div>
                <div className='advantage'>
                    <div className='top'>
                        <p className='number'>02</p>
                    </div>
                    <p className="advantage-subtitle">Рейтинги для оценки производительности и определения областей, требующих дальнейшего развития.</p>
                </div>
                <div className='advantage'>
                    <div className='top'>
                        <p className='number'>03</p>
                    </div>
                    <p className="advantage-subtitle">Определяйте основные функциональные области и департаменты, необходимые для работы вашей организации.</p>
                </div>
                <div className='advantage'>
                    <div className='top'>
                        <p className='number'>04</p>
                    </div>
                    <p className="advantage-subtitle">Быстро и эффективно получайте общее представление о содержании и сути материалов.</p>
                </div>
                <div className='advantage'>
                    <div className='top'>
                        <p className='number'>05</p>
                    </div>
                    <p className="advantage-subtitle">Создавайте и настраивайте корпоративные тесты для сотрудников через наш программный инструмент.</p>
                </div>
                <div className='advantage'>
                    <div className='top'>
                        <p className='number'>06</p>
                    </div>
                    <p className="advantage-subtitle">Повышайте эффективность обучения сотрудников практическим навыкам за счет VR-симуляций.</p>
                </div>
            </section>
            <ScrollableAnchor id='2'>
                <section className='container about'>
                    <div className='about-item'>
                        <img className='about-logo' src={logo} alt="" />
                        <p style={{
                            width: '70%',
                            marginTop: '20px'
                        }}>
                            Мы предлагаем интерактивные обучающие модули для эффективного повышения профессиональных навыков сотрудников.
                            <br />
                            <br />
                            Наша платформа предоставляет возможность создания собственных порталов для обучения и тестирования сотрудников. Это упрощает организацию обучения, контроль уровня знаний и повышение качества работы сотрудников.
                        </p>
                    </div>
                    <img className='about-item' src={'/img.jpg'} style={{
                        aspectRatio: '0.99:1',
                        width: '200px'
                    }} alt="" />
                </section>
            </ScrollableAnchor>
            <ScrollableAnchor id='3'>
                <section style={{
                    marginTop: '150px'
                }} className='tarifi container'>
                    <div className='tarif'>
                        <h1>
                            Тариф «Начальный»
                        </h1>
                        <p>Подключение к платформе</p>
                        <h5>8 990 руб/мес</h5>
                    </div>
                    <div className='tarif'>
                        <h1>
                            Тариф «Стандартный»
                        </h1>
                        <p>Расширенная аналитика,<br />корпоративный чат</p>
                        <h5>15 990 руб/мес</h5>
                    </div>
                    <div className='tarif'>
                        <h1>
                            Тариф «Профессиональный»
                        </h1>
                        <p>Возможность подключать<br />VR инструменты.</p>
                        <h5>30 990 руб/мес</h5>
                    </div>
                </section>
            </ScrollableAnchor>
            <footer className='footer'>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} className='container footer-nav-wrapper'>
                    <img style={{
                        width: '200px'
                    }} src={logoBlue} alt="" />
                </div>
            </footer>
        </>
    )
}

export default Landing