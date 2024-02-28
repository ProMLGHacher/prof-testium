import PageTitle from "../../shared/ui/PageTitle/PageTitle"
import paper from '../../assets/paper.svg'
import warn from '../../assets/warn.svg'
import suc from '../../assets/suc.svg'
import download from '../../assets/Download.svg'
import { useEffect, useState } from "react"
import { $api } from "../../shared/api/api"
import { Otdel } from "../rating/Rating"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../store/hooks"
import { UserRole } from "../../slices/authSlice"

type Lesson = {
    id: string,
    name: string,
    urlFile: string
}

type Test = {
    "id": string,
    "testName": string,
    "averageCountPoints": number,
    "maxCountPointsByTest": number,
    "isCompleted": boolean,
    "lastCountPoints": number
}

const LessonsUser = () => {

    const role = useAppSelector(state => state.auth.role)

    const [lessons, setLessons] = useState<Lesson[]>([])
    const [tests, setTests] = useState<Test[]>([])

    const [otdels, setOtdels] = useState<Otdel[]>([])


    const [selected, setSetselected] = useState(0)

    const getOtdels = async () => {
        const data = await $api.get<Otdel[]>('/departments')
        setOtdels(data.data)
    }

    const getlessons = async () => {
        const data = await $api.get<Lesson[]>('/lecterns')
        setLessons(data.data)
    }
    const getTests = async () => {
        const data = await $api.get<Test[]>(`/tests/analytics`)
        
        console.log(data.data);
        
        setTests(data.data)
    }

    useEffect(() => {
        getlessons()
        getOtdels()
    }, [])



    useEffect(() => {
        if (otdels.length == 0) return
        getTests()
    }, [otdels, selected])

    return (
        <div>
            <PageTitle text="Лекции" />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginBlock: '20px'
            }}>
                {
                    Boolean(!lessons.length) && <h3>Пока нет лекций</h3>
                }
                {
                    lessons.map((elem, index) => {
                        console.log(elem);

                        return index === lessons.length - 1 ? <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '14px',
                            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.5)'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <img src={paper} alt="" />
                                <p>{elem.name}</p>
                            </div>
                            <a style={{
                                cursor: 'pointer'
                            }} href={elem.urlFile}><img src={download} alt="" /></a>
                        </div> : <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '14px',
                            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.5)'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <img src={paper} alt="" />
                                <p>{elem.name}</p>
                            </div>
                            <a href={elem.urlFile}><img src={download} alt="" /></a>
                        </div>
                    })
                }
            </div>
            <PageTitle text="Тесты" />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginBlock: '20px'
            }}>
                {
                    Boolean(!tests.length) && <h3>Пока нет тестов</h3>
                }
                {
                    tests.map((elem, index) => {
                        return <div style={{
                            padding: '14px',
                            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.5)'
                        }}>
                            <Link to={[UserRole.Admin, UserRole.Manager].includes(role!) ? '/main/lessons/' + elem.id : elem.isCompleted ? '' : '/main/lessons/' + elem.id} style={{
                                textDecoration: 'none',
                                color: 'black',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <img src={elem.isCompleted ? '/completed.png' : warn} width={40} height={40} alt="" />
                                <p>{elem.testName}</p>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default LessonsUser