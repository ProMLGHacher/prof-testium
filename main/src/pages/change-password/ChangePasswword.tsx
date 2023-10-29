import CustomInput from "../../shared/ui/CustomInput/CustomInput"
import PageTitle from "../../shared/ui/PageTitle/PageTitle"

const ChangePasswword = () => {
  return (
    <div>
        <PageTitle text="Сменить пароль" />
        <div style={{
                display: 'grid',
                gridGap: '20px',
                gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))'
            }}>
                <div>
                    <p style={{
                        fontSize: '16px',
                        opacity: '0.6',
                        textTransform: 'uppercase'
                    }}>новый пароль</p>
                    <CustomInput />
                </div>
                <div>
                    <p style={{
                        fontSize: '16px',
                        opacity: '0.6',
                        textTransform: 'uppercase'
                    }}>Подтвердите новый пароль</p>
                    <CustomInput />
                </div>
                <button style={{
                    width: '50%'
                }} className="blue-button">Сменить пароль</button>
            </div>
    </div>
  )
}

export default ChangePasswword