import './Auth.css'
import Header from '../../shared/ui/header/Header'
import welcome from '../../assets/welcome.svg'
import EditText from '../../shared/ui/EditText/EditText'
import email from '../../assets/mail.svg'
import lock from '../../assets/lock.svg'
import { Link } from 'react-router-dom'

function Auth() {

  return (
    <div className='main'>
      <Header />
      <div className='container main-wrapper'>
        <div className='left-side'>
          <h1 className='title'>Зарегистрироваться</h1>
          <EditText className='field' img={email} placeholder={'Телефон'} />
          <EditText className='field' img={lock} placeholder={'Пароль'} />
          <div className='buttons'>
            <button className='white-button btn'>Войти!</button>
            <div className='links'>
              <Link className='link' to={'/'} >У меня нет аккаунта</Link>
              <Link className='link' to={'/'} >Я не помню пароль</Link>
            </div>
          </div>
        </div>
        <img className='welcome-img' src={welcome} alt="" />
      </div>
    </div>
  )
}

export default Auth
