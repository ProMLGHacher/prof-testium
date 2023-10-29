import CustomInput from '../../shared/ui/CustomInput/CustomInput'
import PageTitle from '../../shared/ui/PageTitle/PageTitle'
import './Profile.css'

const Profile = () => {
    return (
        <div>
            <PageTitle text='Общая информация' />
            <div style={{
                display: 'grid',
                gridGap: '20px',
                gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))'
            }}>
                <div>
                    <p style={{
                        fontSize: '16px',
                        opacity: '0.6'
                    }}>ФИО</p>
                    <CustomInput />
                </div>
                <div>
                    <p style={{
                        fontSize: '16px',
                        opacity: '0.6'
                    }}>Email</p>
                    <CustomInput />
                </div>
                <div>
                    <p style={{
                        fontSize: '16px',
                        opacity: '0.6'
                    }}>Tелефон</p>
                    <CustomInput />
                </div>
            </div>
        </div>
    )
}

export default Profile