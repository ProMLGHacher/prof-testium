import PageTitle from "../../shared/ui/PageTitle/PageTitle"
import paper from '../../assets/paper.svg'
import warn from '../../assets/warn.svg'
import suc from '../../assets/suc.svg'
import download from '../../assets/Download.svg'
import AddButton from "../../shared/ui/AddButton/AddButton"
import { useEffect, useState } from "react"
import { $api } from "../../shared/api/api"
import { Otdel } from "../rating/Rating"
import { Link } from "react-router-dom"

type Lesson = {
    id: string,
    name: string,
    urlFile: string
}

type Test = {
    id: string,
    name: string
}

const Lessons = () => {

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
        const data = await $api.get<Test[]>(`/tests/${otdels[selected].id}`)
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
            <PageTitle text="Обучение" />
            <div style={{
                display: 'flex',
                overflowX: 'scroll',
                gap: '20px',
                marginBottom: '30px'
            }}>
                {
                    otdels.map((el, index) => {
                        return <div onClick={() => {
                            setSetselected(index)
                        }} style={{
                            padding: '20px',
                            minWidth: '180px',
                            border: '1px solid #34343450',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                            backgroundColor: index === selected ? '#193D9B' : 'transparent',
                            color: index === selected ? 'white' : 'black'
                        }}>
                            <p style={{
                                textTransform: 'uppercase'
                            }}>{el.name}</p>
                        </div>
                    })
                }
            </div>
            <PageTitle text="Лекции" />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginBlock: '20px'
            }}>
                {
                    lessons.length == 0 && <AddButton to="/main/lessons/add">  </AddButton>
                }
                {
                    lessons.map((elem, index) => {
                        return index === lessons.length - 1 ? <AddButton to="/main/lessons/add">
                            <div style={{
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
                            </div>
                        </AddButton> : <div style={{
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
                    tests.length == 0 && otdels[selected] && <AddButton to={`/main/lessons/addTest/${otdels[selected].id}`}>  </AddButton>
                }
                {
                    tests.map((elem, index) => {
                        return index === tests.length - 1 ? <AddButton to={`/main/lessons/addTest/${otdels[selected].id}`}>
                            <div style={{
                                padding: '14px',
                                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <img src={paper} width={40} height={40} alt="" />
                                <p>{elem.name}</p>
                            </div>
                        </AddButton> : <div style={{
                            padding: '14px',
                            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <img src={paper} width={40} height={40} alt="" />
                            <p>{elem.name}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Lessons