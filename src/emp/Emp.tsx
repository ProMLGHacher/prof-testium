import React, { useEffect, useState } from 'react'
import PageTitle from '../shared/ui/PageTitle/PageTitle'
import { $api } from '../shared/api/api'
import { Otdel } from '../pages/rating/Rating'
import AddButton from '../shared/ui/AddButton/AddButton'

const Emp = () => {

    const [otdels, setOtdels] = useState<Otdel[]>([])
    const [emp, setEmp] = useState<string[]>([])
    const [selected, setSetselected] = useState(0)

    const getOtdels = async () => {
        const data = await $api.get<Otdel[]>('/departments')
        setOtdels(data.data)
    }

    useEffect(() => {
        getOtdels()
    }, [])

    const get = async () => {
        const data = await $api.get<string[]>(`/employers/${otdels[selected].id}`)
        setEmp(data.data)
    }

    useEffect(() => {
        if (otdels.length == 0) return
        get()
    }, [otdels, selected])


    return (
        <div>
            <PageTitle text='Сотрудники' />
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
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginBlock: '40px'
            }}>
                {
                    emp.map((el, index) => {
                        return index !== emp.length - 1 ? <div style={{
                            padding: '20px',
                            border: '1px solid #34343450'
                        }}>
                            {el}
                        </div> : <AddButton to={'/main/emp/add/' + otdels[selected].id} >
                            <div style={{
                                padding: '20px',
                                border: '1px solid #34343450'
                            }}>
                                {el}
                            </div>
                        </AddButton>
                    })
                }
            </div>
        </div>
    )
}

export default Emp