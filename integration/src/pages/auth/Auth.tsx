import { useState } from "react"
import { useAppDispatch } from "../../app/hooks/redux-hooks"
import { loginThunk, regThunk } from "../../slices/auth/auth"
import { Link } from "react-router-dom"

const Auth = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useAppDispatch()

    const auth = () => {
        dispatch(loginThunk({
            email: login,
            password: password
        }))
    }

    return (
        <div className="auth-wrapper">
            <h2>Авторизация</h2>
            <input className="input" value={login} onChange={(e) => {
                setLogin(e.target.value)
            }} type="text" />
            <input className="input" value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} type="text" />
            <button className="button" onClick={auth}>Войти</button>
            <Link className="link" to={'/reg'}>У меня нет аккаунта</Link>
        </div>
    )
}

export default Auth