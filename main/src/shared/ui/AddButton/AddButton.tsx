import React, { Children, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

type AddButtonProps = {
    children: ReactNode,
    to?: string | undefined,
    onClick?: () => void | undefined
}

const AddButton = ({children, to, onClick} : AddButtonProps) => {

    const navigate = useNavigate()

  return (
    <div style={{
        position: 'relative'
    }}>
        {children}
        <button onClick={() => {
            if (to) {
                navigate(to)
            }
            if (onClick) {
                onClick()
            }
        }} style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#193D9B',
            color: 'white',
            fontSize: '24px',
            fontWeight: '200',
            transform: 'translateY(50%) translateX(-50%)',
            cursor: 'pointer'
        }}>
            +
        </button>
    </div>
  )
}

export default AddButton