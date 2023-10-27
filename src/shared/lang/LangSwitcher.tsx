import './LangSwitcher.css'

const LangSwitcher = () => {
    return (
        <div className='switcher'>
            <div className='switch-lang'>
                <p>Ru</p>
                <div className='selected-divider' />
            </div>
            <div className='switch-lang'>
                <p>En</p>
                <div className='selected-divider' />
            </div>
        </div>
    )
}

export default LangSwitcher