import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/redux-hooks";
import { logOut } from "../../slices/auth/auth";
import { createModuleThunk, getModulesThunk, selectModule } from "../../slices/moduleSlice/moduleSlice";
import { Link, useNavigate } from "react-router-dom";

const Org = () => {

    const modules = useAppSelector(selectModule)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [moduleName, setModuleName] = useState("")

    const addModule = async () => {
        await dispatch(createModuleThunk(moduleName))
        dispatch(getModulesThunk())
        setModuleName('')
    }

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
            <div className="list_wrapper">
                {
                    modules.data?.map((elem) => {
                        return <div style={{
                            display: 'flex'
                        }}>
                            <div>
                                <p><Link to={'/module/' + elem.name}>{elem.name}</Link></p>
                                {
                                    elem.urlFile != null && <a href={elem.urlFile}>{elem.urlFile.split('/')[elem.urlFile.split('/').length - 1]}</a>
                                }
                            </div>
                            <button onClick={() => {
                                navigate('/analytics/' + elem.name)
                            }}>Аналитика</button>
                        </div>
                    })
                }
            </div>
            <input type="text" value={moduleName} onChange={(e) => {
                setModuleName(e.target.value)
            }} />
            <button onClick={() => {
                addModule()
            }}>add module</button>
            <button onClick={() => {
                dispatch(logOut())
            }}>log out</button>
        </div>
    )
}

export default Org;