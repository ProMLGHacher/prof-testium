import Header from '../../shared/ui/header/Header'
import welcome from '../../assets/welcome.svg'
import './Landing.css'
import logo from '../../assets/logo-blue.svg'
import logoBlue from '../../assets/logo.svg'
import about from '../../assets/aboutImg.png'
import n1 from '../../assets/1.png'
import n2 from '../../assets/2.png'
import n3 from '../../assets/3.png'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

    const navigate = useNavigate()

    return (
        <>
            <section className='main'>
                <Header />
                <div className='container main-wrapper'>
                    <div className='left-side'>
                        <h1 className='title'>ПРОФТЕСТИУМ - ВАШ УНИВЕРСАЛЬНЫЙ ПОМОщНИК для вашего производства</h1>
                        <p className='subtitle'>Создайте любую структуру компании и определите роли и Убедитесь, что каждый член команды понимает свою роль правильно и знает о ответственности.</p>
                        <div className='buttons'>
                            <button onClick={() => {
                                navigate('/registration')
                            }} className='white-button btn'>Войти в систему</button>
                            <button className='transparent-button btn'>Видео о платформе</button>
                        </div>
                    </div>
                    <img className='welcome-img' src={welcome} alt="" />
                </div>
            </section>
            <section className='container advantages'>
                <div className='advantage'>
                    <div className='top'>
                        <h2 className='advantage-title'>Быстрый старт к оптимизации</h2>
                        <p className='number'>01</p>
                    </div>
                    <p className="advantage-subtitle">Анализ текущих процессов: Проведите анализ текущих процессов для выявления узких мест, излишних шагов и потенциальных улучшений.</p>
                </div>
                <div className='advantage'>
                    <div className='top'>
                        <h2 className='advantage-title'>Удобный рейтинг сотрудников</h2>
                        <p className='number'>02</p>
                    </div>
                    <p className="advantage-subtitle">Рейтинги не только могут быть использованы для оценки производительности, но и для определения областей, требующих дальнейшего развития. </p>
                </div>
                <div className='advantage'>
                    <div className='top'>
                        <h2 className='advantage-title'>Разделение по отделам</h2>
                        <p className='number'>03</p>
                    </div>
                    <p className="advantage-subtitle">Определите основные функциональные области или департаменты, необходимые для работы вашей организации и опредилите полезные лекции</p>
                </div>
                <div className='advantage'>
                    <div className='top'>
                        <h2 className='advantage-title'>Быстрый просмотр материалов</h2>
                        <p className='number'>04</p>
                    </div>
                    <p className="advantage-subtitle">Эффективный способ быстро получить общее представление о содержании или суть материалов, не тратя много времени на полное чтение или изучение</p>
                </div>
                <div className='advantage'>
                    <div className='top'>
                        <h2 className='advantage-title'>Онлайн конструктор тестов</h2>
                        <p className='number'>05</p>
                    </div>
                    <p className="advantage-subtitle">Программный инструмент, который позволяет пользователям создавать и настраивать тесты</p>
                </div>
                <div className='advantage-last'>
                    <p className='start'>Начать</p>
                </div>
            </section>
            <section className='container about'>
                <div className='about-item'>
                    <img className='about-logo' src={logo} alt="" />
                    <p style={{
                        width: '70%',
                        marginTop: '20px'
                    }}>Школа для повышения квалификации работников промышленных предприятий c внедрением VR-технологий. <br /> <br /> Дать сотрудникам возможность обучаться безопасно и повышать эффективность сотрудника с помощью соревнований сотрудников и отделов.</p>
                </div>
                <img className='about-item' src={about} alt="" />
            </section>
            <section className='container news'>
                <h1 style={{
                    textAlign: 'center'
                }}>Новости компании</h1>
                <div className='news-wrapper'>
                    <div className='new'>
                        <img src={n1} alt="" />
                        <h3>Пивоваренная компания «Балтика»</h3>
                        <p>Один из крупнейших в России производителей товаров народного потребления. Широкий портфель брендов, включающий около 40 пивных национальных и региональных брендов и 2 непивных бренда</p>
                    </div>
                    <div className='new'>
                        <img src={n2} alt="" />
                        <h3>«Газпром» — энергетическая компания.</h3>
                        <p>Основные направления деятельности — геологоразведка, добыча, транспортировка, хранение, переработка и реализация газа, газового конденсата и нефти, реализация газа в качестве моторного топлива, а также производство и сбыт тепло- и электроэнергии.</p>
                    </div>
                    <div className='new'>
                        <img src={n3} alt="" />
                        <h3>Медицинский центр Medical On Group</h3>
                        <p>Компания смогла самостоятельно создать свою нишу на рынке предлагаемых медицинских услуг и предложила уникальные методы терапии с гарантированным результатом.</p>
                    </div>
                </div>
            </section>
            <footer className='footer'>
                <div className='container footer-nav-wrapper'>
                    <img src={logoBlue} alt="" />
                    <ul>
                        <li>О компании</li>
                        <li>Деятельность</li>
                        <li>Персонал</li>
                        <li>Клиенту</li>
                    </ul>
                    <ul>
                        <li>Акционеру и инвестору</li>
                        <li>Пресс-центр</li>
                        <li>Торги</li>
                        <li>Контакты</li>
                    </ul>
                    <div>
                        <h5>Местонахождение</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe laudantium repudiandae, itaque nihil delectus?</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Landing