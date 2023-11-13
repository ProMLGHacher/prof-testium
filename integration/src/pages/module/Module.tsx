import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks/redux-hooks"
import { getDetailedModuleThunk, selectDetailedModule } from "../../slices/detailedModule/detailedModuleSlice"
import { useEffect } from "react"

const Module = () => {

    const { moduleName } = useParams()

    const sessions = useAppSelector(selectDetailedModule)
    console.log(sessions);

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (moduleName) {
            dispatch(getDetailedModuleThunk(moduleName))
        }
    }, [])

    if (sessions.isLoading) return <p>Loading...</p>
    if (sessions.error) return <p>{sessions.error}</p>


    return (
        <div>
            {
                sessions.data?.length === 0 && <p>Пока нет данных</p>
            }
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '20px'
            }}>
                {
                    sessions.data?.map((elem) => {
                        return <div style={{
                            padding: '20px',
                            border: '2px solid rgb(80, 80, 80)',
                            borderRadius: '20px'
                        }}>
                            <p>дата {new Date(elem.date).getMonth() < 10 && 0}{new Date(elem.date).getMonth()}.{new Date(elem.date).getDay() < 10 && 0}{new Date(elem.date).getDay()}.{new Date(elem.date).getFullYear()} {new Date(elem.date).getHours()}:{new Date(elem.date).getMinutes()}</p>
                            <p>{elem.descriptionEvaluationReason}</p>
                            <p>время прохождения {elem.duration}</p>
                            <p>{`${elem.isSuccessful ? 'выполнено' : 'не выполнено'}`}</p>
                            <p>оценка {elem.mark}</p>
                            <p>баллы {elem.score}</p>
                            <p>максимальное количество баллов {elem.maxScore}</p>
                            <a href={elem.urlRecordingFile}>{elem.urlRecordingFile}</a>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Module
