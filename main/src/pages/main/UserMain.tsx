import { Link, NavLink, Outlet } from 'react-router-dom'
import './UserMain.css'

import activity from '../../assets/Activity.svg'
import calling from '../../assets/Calling.svg'
import chart from '../../assets/Chart.svg'
import profile from '../../assets/Profile.svg'
import chat from '../../assets/Chat.svg'
import Header from '../../shared/ui/header/Header'
import { useAppDispatch } from '../../store/hooks'
import { logOut } from '../../slices/authSlice'

const UserMain = () => {

    const dispatch = useAppDispatch()

    return (
        <>
            <Header background='#193D9B' />
            <div className='container wrapper'>
                <div>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "nav-button active"
                            : "nav-button"
                    } to={'/main/profile'}>
                        <h4>Профиль</h4>
                        <img src={profile} alt="" />
                        <div style={{
                            zIndex: '1'
                        }} className='nav-button-dropped'>
                            <NavLink to={'/main/profile/'} className={({ isActive }) =>
                                isActive
                                    ? "nav-drop active"
                                    : "nav-drop"
                            }>
                                <h4>Профиль</h4>
                            </NavLink>
                            <NavLink to={'/main/profile/changePassword'} className={({ isActive }) =>
                                isActive
                                    ? "nav-drop active"
                                    : "nav-drop"
                            }>
                                <h4>Сменить пароль</h4>
                            </NavLink>
                            <div onClick={() => {
                                dispatch(logOut())
                            }} className='nav-drop'>
                                <h4>Выйти</h4>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "nav-button active"
                            : "nav-button"
                    } to={'/main/rating'}>
                        <h4>Рейтинг</h4>
                        <img src={chart} alt="" />
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "nav-button active"
                            : "nav-button"
                    } to={'/main/lessons'}>
                        <h4>Обучение</h4>
                        <img src={activity} alt="" />
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "nav-button active"
                            : "nav-button"
                    } to={'/main/mobile'}>
                        <h4>Мобильная версия</h4>
                        <img src={calling} alt="" />
                    </NavLink>
                </div >
                <div style={{
                    flex: '1'
                }}>
                    <Outlet />
                </div>
            </div >
        </>
    )
}

export default UserMain