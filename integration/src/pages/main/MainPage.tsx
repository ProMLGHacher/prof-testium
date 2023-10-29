import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/redux-hooks";
import { logOut } from "../../slices/auth/auth";
import { getModulesThunk, selectModule } from "../../slices/moduleSlice/moduleSlice";
import './MainPage.css'
import { Link, useNavigate } from "react-router-dom";
import { $apiUrl } from "../../shared/api/api";

const MainPage = () => {

  const modules = useAppSelector(selectModule)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getModulesThunk())
  }, [])

  return (
    <div>
      {
        modules.isLoading && <p>Loading...</p>
      }
      {
        modules.error && <p>{modules.error}</p>
      }
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0px 40px',
        paddingTop: '20px'
      }}>
      <button className="button" onClick={() => {
        dispatch(logOut())
      }}>Выйти из аккаунта</button>
      </div>
      <div className="list_wrapper" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '40px'
      }}>
        {
          modules.data?.map((elem) => {
            return <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px',
              border: '2px solid rgb(80, 80, 80)',
              borderRadius: '20px',
              alignItems: 'center'
            }}>
              <div>
                <h1>Модуль: <Link to={'/module/' + elem.name}>{elem.name}</Link></h1>
                {
                  elem.urlFile != null && <p>Файл: <a href={elem.urlFile}>{elem.urlFile.split('/')[elem.urlFile.split('/').length - 1]}</a></p>
                }
              </div>
              <button className="button" onClick={() => {
                navigate('/analytics/' + elem.name)
              }}>Аналитика</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default MainPage;