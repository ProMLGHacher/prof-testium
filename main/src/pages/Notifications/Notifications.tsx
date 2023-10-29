import PageTitle from "../../shared/ui/PageTitle/PageTitle"

const Notifications = () => {
  return (
    <div>
        <PageTitle text="Уведомления" />
        <p style={{
            padding: '20px',
            textAlign:'center',
            border: '2px solid #C6C6C6',
            opacity: '0.6'
        }}>У вас новая должность</p>
    </div>
  )
}

export default Notifications