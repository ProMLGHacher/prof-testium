import React, { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../shared/ui/PageTitle/PageTitle';
import CustomInput from '../../shared/ui/CustomInput/CustomInput';
import AddButton from '../../shared/ui/AddButton/AddButton';
import { $api } from '../../shared/api/api';

type Answer = {
    answer: string;
    isCorrect: boolean;
};

type Question = {
    question: string;
    answers: Answer[];
};

const TestConstructor: React.FC = () => {

    const { id } = useParams()

    const [testTitle, setTestTitle] = useState<string>('');
    const [questions, setQuestions] = useState<Question[]>([{ question: '', answers: [{ answer: '', isCorrect: true }] }]);

    const addQuestion = () => {
        setQuestions((prevQuestions) => [...prevQuestions, { question: '', answers: [{ answer: '', isCorrect: true }] }]);
    };

    const addAnswer = (questionIndex: number) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[questionIndex].answers.push({ answer: '', isCorrect: false });
            return updatedQuestions;
        });
    };

    const handleQuestionChange = (questionIndex: number, event: string) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[questionIndex] = { ...updatedQuestions[questionIndex], question: event };
            return updatedQuestions;
        });
    };

    const handleAnswerChange = (questionIndex: number, answerIndex: number, event: string) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[questionIndex].answers[answerIndex] = { ...updatedQuestions[questionIndex].answers[answerIndex], answer: event };
            return updatedQuestions;
        });
    };

    const toggleCorrectAnswer = (questionIndex: number, answerIndex: number) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];

            // Сначала сбрасываем флажок для всех вариантов ответа
            updatedQuestions[questionIndex].answers = updatedQuestions[questionIndex].answers.map((answer, index) => ({
                ...answer,
                isCorrect: index === answerIndex,
            }));

            return updatedQuestions;
        });
    };


    const submit = async () => {
        if (testTitle.trim().length == 0) {
            alert('не все поля заполнены')
            return
        }
        for (let index = 0; index < questions.length; index++) {
            const el = questions[index];
            if (el.question.trim().length == 0) {
                alert('не все поля заполнены')
                return
            }

            for (let index2 = 0; index2 < el.answers.length; index2++) {
                const ans = el.answers[index2];
                if (ans.answer.trim().length == 0) {
                    alert('не все поля заполнены')
                    return
                }
            }
        }
        await $api.post('/test', {
            departmentId: id,
            name: testTitle,
            questions: questions.map((elem) => {
                return {
                    name: elem.question,
                    rightAnswerIndex: elem.answers.findIndex(e => e.isCorrect),
                    answers: elem.answers.map((el) => {
                        return el.answer
                    })
                }
            })
        }).then(e => {
            if (e.status == 200) {
                setTestTitle('')
                setQuestions([{ question: '', answers: [{ answer: '', isCorrect: true }] }])
                alert('Успешно')
            }
        })
    }

    return (
        <div>
            <PageTitle text='Добавление Теста' />
            <div>
                <p style={{
                    opacity: '0.5',
                    marginBottom: '6px',
                    marginTop: '20px'
                }}>Название теста</p>
                <CustomInput value={testTitle} onChange={(e) => setTestTitle(e)} />
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginTop: '40px'
            }}>
                {questions.map((question, questionIndex) => (
                    <div style={{
                        boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
                    }} key={questionIndex}>
                        <div>
                            <h2 style={{
                                color: '#193D9B',
                                fontSize: '16px',
                                padding: '20px'
                            }}>{`Вопрос ${questionIndex + 1}`}</h2>
                        </div>
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
                                    marginBottom: '6px'
                                }}>Вопрос:</p>
                                <CustomInput value={question.question} onChange={(e) => handleQuestionChange(questionIndex, e)} />
                            </div>

                            <div>
                                <p style={{
                                    marginBottom: '6px'
                                }}>Варианты ответа</p>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px'
                                }}>

                                    {question.answers.map((answer, answerIndex) => (
                                        answerIndex == question.answers.length - 1 ? <AddButton onClick={() => addAnswer(questionIndex)} key={answerIndex}>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '20px'
                                            }}>
                                                <CustomInput
                                                    value={answer.answer}
                                                    onChange={(e) => handleAnswerChange(questionIndex, answerIndex, e)}
                                                />
                                                <input
                                                    style={{
                                                        width: '20px',
                                                        height: '20px'
                                                    }}
                                                    type="checkbox"
                                                    checked={answer.isCorrect}
                                                    onChange={() => toggleCorrectAnswer(questionIndex, answerIndex)}
                                                />
                                            </div>
                                        </AddButton> : <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '20px'
                                        }}>
                                            <CustomInput
                                                value={answer.answer}
                                                onChange={(e) => handleAnswerChange(questionIndex, answerIndex, e)}
                                            />
                                            <input
                                                style={{
                                                    width: '20px',
                                                    height: '20px'
                                                }}
                                                type="checkbox"
                                                checked={answer.isCorrect}
                                                onChange={() => toggleCorrectAnswer(questionIndex, answerIndex)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginTop: '20px',
                marginBottom: '20px'
            }}>
                <button className='transparent-button-black' onClick={addQuestion}>Добавить вопрос</button>
                <button className='blue-button' onClick={submit}>Отправить!</button>
            </div>
        </div>
    );
};

export default TestConstructor;
