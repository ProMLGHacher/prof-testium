import CustomInput from "../../shared/ui/CustomInput/CustomInput"
import PageTitle from "../../shared/ui/PageTitle/PageTitle"

import upload from '../../assets/upload.svg'

import './AddLesson.css'
import { ChangeEvent, useState } from "react"

const AddLesson = () => {

    const [filename, setFilename] = useState('')

    const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) setFilename(e.target.files[0].name)
    }

    return (
        <div style={{
            width: '100%'
        }}>
            <PageTitle text="Добавление Лекции" />
            <div style={{
                display: 'flex',
                gap: '40px'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    flex: '1'
                }}>
                    <div>
                        <p style={{
                            opacity: '0.6'
                        }}>Название лекции</p>
                        <CustomInput />
                    </div>
                </div>
                <div style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '20px',
                    position: 'relative'
                }}>

                    <input onChange={fileHandler}  style={{
                        opacity: '0',
                        position: 'absolute',
                        width: '100%',
                        aspectRatio: '1/0.5',
                        zIndex: '1'
                    }} id="file" className="inputfile" type="file" />
                    <label style={{
                        flexDirection: 'column'
                    }} htmlFor="file">
                        <img src={upload} alt="" />
                        <p style={{
                            color: 'black'
                        }}>{filename}</p>
                    </label>
                    <button style={{
                        width: '60%'
                    }} className="blue-button">Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default AddLesson