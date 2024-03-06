import { useEffect, useState } from 'react'
import PageTitle from '../../shared/ui/PageTitle/PageTitle'
import { $api } from '../../shared/api/api'
import { useNavigate } from 'react-router-dom'

export type Otdel = {
    id: string,
    name: string
}

export type Lectern = {
    id: string,
    name: string,
    urlFile: string
}

export type OtdelAnalytic = {
    fullname: string,
    countPoints: number,
    userId: string
}

const Rating = () => {

    const navigate = useNavigate()

    const [otdels, setOtdels] = useState<Otdel[]>([])
    const [analytics, setAnalytics] = useState<OtdelAnalytic[]>([])

    const [selected, setSetselected] = useState(0)

    const getOtdels = async () => {
        const data = await $api.get<Otdel[]>('/departments')
        setOtdels(data.data)
    }

    const getAnalytics = async () => {
        const data = await $api.get<OtdelAnalytic[]>(`/tests/analytic/${otdels[selected].id}`)
        setAnalytics(data.data)
    }

    // const getAnalytics = async () => {
    //     const data = await $api.get<OtdelAnalytic[]>(`/tests/analytic`)
    //     setAnalytics(data.data)
    // }

    // useEffect(() => {
    //     getAnalytics()
    // }, [])

    useEffect(() => {
        getOtdels()
    }, [])

    useEffect(() => {
        if (otdels.length == 0) return

        getAnalytics()
    }, [otdels, selected])

    return (
        <div>
            <PageTitle text="Рейтинг" />
            <div style={{
                display: 'flex',
                overflowX: 'scroll',
                gap: '20px',
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
            <div>
                {
                    analytics.map((elem) => {
                        return <div onClick={() => {
                            navigate('/main/rating/' + elem.userId)
                        }} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '40px',
                                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
                                marginBlock: '20px',
                                cursor: 'pointer'
                            }}>
                                <p>{elem.fullname}</p>
                                <p>Общее количество очков: {elem.countPoints}</p>
                            </div>
                    })
                }
            </div>
        </div>
    )
}

export default Rating