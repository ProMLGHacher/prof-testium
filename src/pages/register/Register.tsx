import './Register.css'
import Header from '../../shared/ui/header/Header'
import welcome from '../../assets/welcome.svg'
import EditText from '../../shared/ui/EditText/EditText'
import email from '../../assets/mail.svg'
import lock from '../../assets/lock.svg'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { regThunk, selectRole, selectToken } from '../../slices/authSlice'
import { useState } from 'react'

function Register() {

  const dispatch = useAppDispatch()

  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')



  return (
    <div className='main'>
      <Header />
      <div className='container main-wrapper'>
        <div className='left-side'>
          <h1 className='title'>Зарегистрироваться</h1>
          <EditText value={phone} onChange={(e) => {
            setPhone(e)
          }} className='field' img={email} placeholder={'Телефон'} />
          <EditText value={name} onChange={(e) => {
            setName(e)
          }} className='field' img={lock} placeholder={'ФИО'} />
          <EditText value={password} onChange={(e) => {
            setPassword(e)
          }} className='field' img={lock} placeholder={'Пароль'} />
          <div className='buttons'>
            <button onClick={() => {
              dispatch(regThunk({
                name: name,
                phoneAdmin: phone,
                passwordAdmin: password
              }))
            }} className='white-button btn'>Зарегистрироваться!</button>
            <div className='links'>
              <Link className='link' to={'/auth'} >У меня есть аккаунт</Link>
              <Link className='link' to={'/'} >Я не помню пароль</Link>
            </div>
          </div>
        </div>
        <img className='welcome-img' src={welcome} alt="" />
      </div>
    </div>
  )
}

export default Register
