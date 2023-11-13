import React, { useEffect, useState } from 'react'
import PageTitle from '../shared/ui/PageTitle/PageTitle'
import { Otdel } from '../pages/rating/Rating'
import { $api } from '../shared/api/api'
import CustomInput from '../shared/ui/CustomInput/CustomInput'
import { useAppSelector } from '../store/hooks'
import { UserRole, selectRole } from '../slices/authSlice'

const Ot = () => {

    const [otdels, setOtdels] = useState<Otdel[]>([])

    const { namee } = { namee: '67890' }

    const [name, setName] = useState('')

    const role = useAppSelector(selectRole)

    const getOtdels = async () => {
        const data = await $api.get<Otdel[]>('/departments')
        setOtdels(data.data)
    }

    useEffect(() => {
        getOtdels()
    }, [])

    const ok = async () => {
        await $api.post('/department', {
            name: name
        })
        getOtdels()
        setName('')
    }



    return (
        <div>
            <PageTitle text='Отделы' />
            {
                role !== UserRole.Manager && <div>
                    <CustomInput placeholder='Название отдела' value={name} onChange={(e) => {
                        setName(e)
                    }} />
                    <button onClick={() => {
                        ok()
                    }} style={{
                        width: '100%',
                        marginTop: '20px',
                        marginBottom: '40px'
                    }} className='blue-button'>Добавить</button>
                </div>
            }
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                {
                    otdels.map((el) => {
                        return <div style={{
                            padding: '20px',
                            border: '1px solid #34343450'
                        }}>
                            {el.name}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Ot