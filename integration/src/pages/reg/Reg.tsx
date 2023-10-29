import { useState } from "react"
import { useAppDispatch } from "../../app/hooks/redux-hooks"
import { loginThunk, regThunk } from "../../slices/auth/auth"
import { Link } from "react-router-dom"

const Reg = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useAppDispatch()

    const reg = () => {
        dispatch(regThunk({
            email: login,
            password: password
        }))
    }

    return (
        <div className="auth-wrapper">
            <h2>Регистрация</h2>
            <input className="input" value={login} onChange={(e) => {
                setLogin(e.target.value)
            }} type="text" />
            <input className="input" value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} type="text" />
            <button className="button" onClick={reg}>Войти</button>
            <Link className="link" to={'/auth'}>У меня есть аккаунт</Link>
        </div>
    )
}

export default Reg