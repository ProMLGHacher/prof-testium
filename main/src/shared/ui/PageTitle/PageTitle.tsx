
const PageTitle = ({text} : {text: string}) => {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
    }}>
        <h3 className='tit' style={{
            whiteSpace: 'nowrap'
        }}>{text}</h3>
        <div style={{
            height: '2px',
            backgroundColor: '#193D9B',
            width: '100%',
        }} />
    </div>
  )
}

export default PageTitle