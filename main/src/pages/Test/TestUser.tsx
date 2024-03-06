import React, { useState } from 'react';
import { Test } from './TestTypes';
import PageTitle from '../../shared/ui/PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';
import { $api } from '../../shared/api/api';

type TestResult = {
  correctAnswers: number;
  totalQuestions: number;
};

const TestComponent: React.FC<{ test: Test }> = ({ test }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const navigate = useNavigate()

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = answerIndex;
      return updatedAnswers;
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      calculateTestResult();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const calculateTestResult = () => {
    const correctAnswers = selectedAnswers.reduce(
      (count, answerIndex, questionIndex) =>
        answerIndex === test.questions[questionIndex].rightAnswerIndex ? count + 1 : count,
      0
    );

    setTestResult({
      correctAnswers,
      totalQuestions: test.questions.length,
    });

    $api.post('/test/result', {
      "testId": test.id,
      "rightCountAnswer": correctAnswers
    })
  };

  if (testResult) {
    return (
      <>
        <PageTitle text={'Тест ' + test.name} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '60px'
        }}>
          <img src="/star.svg" alt="" />
          <h3 style={{
            color: '#193D9B',
            fontSize: '32px'
          }}>ТЕСТ {test.name} - пройден</h3>
          <p style={{
            color: '#193D9B'
          }}>{`Количество верных ответов: ${testResult.correctAnswers} / ${testResult.totalQuestions}`}</p>
          <button style={{
            minWidth: '240px',
          }} className='transparent-button-black' onClick={() => {
            navigate('/main/mylessons')
          }}>
            На главную
          </button>
        </div>
      </>
    );
  }

  const currentQuestion = test.questions[currentQuestionIndex];



  return (
    <div>
      <PageTitle text={'Тест ' + test.name} />
      <h2 style={{
        marginTop: '20px'
      }}>{currentQuestion.name}</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px'
      }}>
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            style={{
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.35)',
              textAlign: 'center',
              padding: '14px',
              color: selectedAnswers[currentQuestionIndex] === index ? 'white' : 'black',
              backgroundColor: selectedAnswers[currentQuestionIndex] === index ? '#193D9B' : 'transparent'
            }}
          >
            {answer}
          </button>
        ))}
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px'
      }}>
        <button style={{
          minWidth: '240px',
          opacity: currentQuestionIndex === 0 ? '0.5' : '1'
        }} className='transparent-button-black' onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
          Назад
        </button>
        <button style={{
          minWidth: '240px'
        }} className='blue-button' onClick={handleNextQuestion}>
          {currentQuestionIndex === test.questions.length - 1 ? 'Завершить' : 'Дальше'}
        </button>
      </div>
    </div>
  );
};

export default TestComponent;
