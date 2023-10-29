import { useParams } from "react-router-dom"
import PageTitle from "../../shared/ui/PageTitle/PageTitle"
import { useEffect, useState } from "react"
import { $api } from "../../shared/api/api"

type Ok = {
    testName: string,
    countPoints: number,
    maxCountPoints: number
  }

const DetRating = () => {

    const { id } = useParams()

    const [ok, setOk] = useState<Ok[]>([])

    const getAn = async () => {
        const data = await $api.get<Ok[]>('/tests/analytics/' + id)
        setOk(data.data)
    }

    useEffect(() => {
        getAn()
    }, [])
    

    return (
        <div>
            <PageTitle text="Рейтинг" />
            <div>
                {
                    ok.map((elem) => {
                        return <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '40px',
                                boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
                                marginBlock: '20px',
                            }}>
                                <p>{elem.testName}</p>
                                <p>{elem.countPoints} из {elem.maxCountPoints}</p>
                            </div>
                    })
                }
            </div>
        </div>
    )
}

export default DetRating    