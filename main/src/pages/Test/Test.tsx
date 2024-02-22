import { useParams } from 'react-router-dom'
import './Test.css'
import { useEffect, useState } from 'react'
import { $api } from '../../shared/api/api'
import TestComponent from './TestUser'
import { Test as TestType } from './TestTypes'

const Test = () => {

    const params = useParams()

    const [test, setTest] = useState<TestType>()

    useEffect(() => {
        $api.get<TestType>(`/test/${params.id}`)
            .then(e => {
                setTest(e.data)
            })
    }, [])

    return (
        <div>
            {test && <TestComponent test={test} />}
        </div>
    )
}

export default Test