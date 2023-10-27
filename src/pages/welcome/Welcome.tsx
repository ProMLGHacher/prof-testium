import './Welcome.css'
import Header from '../../shared/header/Header'
import welcome from '../../assets/welcome.svg'

function Welcome() {

  return (
    <div className='main'>
      <Header />
      <div className='container main-wrapper'>
        <div className='left-side'>
          <h1 className='welcome'>Добро пожаловать!</h1>
          <p className='subtitle'>Создайте любую структуру компании и определите роли и Убедитесь, что каждый член команды понимает свою роль правильно и знает о ответственности.</p>
          <button className='white-button ready-button' >Я готов!</button>
        </div>
        <img className='welcome-img' src={welcome} alt="" />
      </div>
    </div>
  )
}

export default Welcome
