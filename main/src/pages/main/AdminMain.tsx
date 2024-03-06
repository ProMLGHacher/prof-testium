import { NavLink, Outlet } from 'react-router-dom'
import './AdminMain.css'

import activity from '../../assets/Activity.svg'
import chart from '../../assets/Chart.svg'
import profile from '../../assets/Profile.svg'
import Header from '../../shared/ui/header/Header'
import { useAppDispatch } from '../../store/hooks'
import { logOut } from '../../slices/authSlice'

const AdminMain = () => {

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
                    } to={'/main/mylessons'}>
                        <h4>Мое обучение</h4>
                        <img src={activity} alt="" />
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "nav-button active"
                            : "nav-button"
                    } to={'/main/emp'}>
                        <h4>Сотрудники</h4>
                        <img src={profile} alt="" />
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "nav-button active"
                            : "nav-button"
                    } to={'/main/departments'}>
                        <h4>Отделы</h4>
                        <img src={profile} alt="" />
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

export default AdminMain