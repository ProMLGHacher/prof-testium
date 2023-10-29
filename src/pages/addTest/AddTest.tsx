import { useState } from 'react'
import AddButton from '../../shared/ui/AddButton/AddButton'
import CustomInput from '../../shared/ui/CustomInput/CustomInput'
import PageTitle from '../../shared/ui/PageTitle/PageTitle'

type Answer = {
    answer: string,
}

type Question = {
    question: string
    rightAnswer: number
    answers: Answer[]
}

const initQuestion = (): Question => {
    return {
        question: '',
        rightAnswer: 0,
        answers: [
            {
                answer: ''
            }
        ]
    }
}

const initAnswer = (): Answer => {
    return {
        answer: ''
    }
}

const AddTest = () => {

    const [questions, setQuestions] = useState<Question[]>([
        initQuestion()
    ])

    return (
        <div>
            <PageTitle text='Добавление Теста' />
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridGap: '40px',
                marginTop: '20px'
            }}>
                <div>
                    <p style={{
                        opacity: '0.5'
                    }}>Название теста</p>
                    <CustomInput />
                </div>
                <div>
                    <p style={{
                        opacity: '0.5'
                    }}>Для кого?</p>
                    <CustomInput />
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginBlock: '40px'
            }}>
                {
                    questions.map((ques, quesIndex) => {
                        return <div style={{
                            boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
                        }}>
                            <p style={{
                                color: '#193D9B',
                                fontSize: '16px',
                                padding: '20px'
                            }}>{quesIndex + 1} ВОПРОС</p>
                            <div style={{
                                height: '1px',
                                backgroundColor: '#D9D9D9'
                            }} />
                            <div style={{
                                display: 'grid',
                                gridGap: '40px',
                                gridTemplateColumns: '1fr 1fr',
                                padding: '20px'
                            }}>
                                <div>
                                    <p style={{
                                        opacity: '0.5'
                                    }}>Вопрос</p>
                                    <CustomInput />
                                </div>
                                <div>
                                    <p style={{
                                        opacity: '0.5'
                                    }}>Варианты ответа</p>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '20px'
                                    }}>
                                        {
                                            ques.answers.map((elem, index) => {
                                                return <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    gap: '20px'
                                                }} key={`${index} ${elem.answer}`}>
                                                    {
                                                        index === questions[quesIndex].answers.length - 1
                                                            ? <div style={{
                                                                flex: '1'
                                                            }}>
                                                                <AddButton onClick={() => {
                                                                    setQuestions(prev => {
                                                                        prev[quesIndex].answers = prev[quesIndex].answers.concat(initAnswer())
                                                                        return JSON.parse(JSON.stringify(prev))
                                                                    })
                                                                }}>
                                                                    <CustomInput />
                                                                </AddButton>
                                                            </div>
                                                            : <CustomInput />
                                                    }
                                                    <input style={{
                                                        width: '20px',
                                                        height: '20px'
                                                    }} onClick={() => {
                                                        setQuestions(prev => {
                                                            const arr = JSON.parse(JSON.stringify(prev))
                                                            arr[quesIndex].rightAnswer = index
                                                            return arr
                                                        })
                                                    }} checked={index === ques.rightAnswer} type="checkbox" />
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                padding: '20px'
                            }}>
                                <button className='blue-button'>Сохранить</button>
                            </div>
                        </div>
                    })
                }
                <button onClick={() => {
                    setQuestions(prev => prev.concat(initQuestion()))
                }} className='transparent-button-black'>+ Добавить</button>
            </div>
        </div>
    )
}

export default AddTest