import { useParams } from 'react-router-dom'
import './Test.css'
import { useEffect, useState } from 'react'
import { $api } from '../../shared/api/api'

const Test = () => {

    const params = useParams()

    const [test, setTest] = useState<{
        questions: any[]
    }>()

    useEffect(() => {
        $api.get(`/test/${params.id}`)
            .then(e => {
                console.log(e.data);
                
                setTest(e.data)
            })
    }, [])

    return (
        <div>
            {
                test?.questions.map(e => {
                    return <div>
                        {e.name}
                    </div>
                })
            }
        </div>
    )
}

export default Test