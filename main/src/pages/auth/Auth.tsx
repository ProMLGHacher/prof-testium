import './Auth.css'
import Header from '../../shared/ui/header/Header'
import welcome from '../../assets/welcome.svg'
import EditText from '../../shared/ui/EditText/EditText'
import email from '../../assets/mail.svg'
import lock from '../../assets/lock.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { loginThunk } from '../../slices/authSlice'

function Auth() {

  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()

  return (
    <div className='main'>
      <Header />
      <div className='container main-wrapper'>
        <div className='left-side'>
          <h1 className='title'>Войти</h1>
          <EditText value={phone} onChange={(e) => {
            setPhone(e)
          }} className='field' img={email} placeholder={'Телефон'} />
          <EditText value={password} onChange={(e) => {
            setPassword(e)
          }} className='field' img={lock} placeholder={'Пароль'} />
          <div style={{
            flexDirection: 'column',
            gap: '6px'
          }} className='buttons'>
            <button style={{
              width: '50%'
            }} onClick={() => {
              dispatch(loginThunk({
                phone: phone,
                password: password
              }))
            }} className='white-button btn'>Войти!</button>
            <div className='links'>
              <Link className='link' to={'/registration'} >У меня нет аккаунта</Link>
              {/* <Link className='link' to={'/'} >Я не помню пароль</Link> */}
            </div>
          </div>
        </div>
        <img className='welcome-img' src={welcome} alt="" />
      </div>
    </div>
  )
}

export default Auth
