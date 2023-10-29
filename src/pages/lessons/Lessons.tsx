import PageTitle from "../../shared/ui/PageTitle/PageTitle"
import paper from '../../assets/paper.svg'
import warn from '../../assets/warn.svg'
import suc from '../../assets/suc.svg'
import download from '../../assets/Download.svg'
import AddButton from "../../shared/ui/AddButton/AddButton"

const Lessons = () => {
    return (
        <div>
            <PageTitle text="Лекции" />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginBlock: '20px'
            }}>
                <AddButton to="/main/lessons/add">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px',
                        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.5)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <img src={paper} alt="" />
                            <p>Основные меры безопасности</p>
                        </div>
                        <img src={download} alt="" />
                    </div>
                </AddButton>
            </div>
            <PageTitle text="Тесты" />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginTop: '20px'
            }}>
                <div style={{
                    padding: '14px',
                    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.5)'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <img src={warn} alt="" />
                        <p>Основные меры безопасности</p>
                    </div>
                </div>
                <AddButton to="/main/lessons/addTest">
                <div style={{
                    padding: '14px',
                    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.5)'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <img src={suc} alt="" />
                        <p>Основные меры безопасности</p>
                    </div>
                </div>
                </AddButton>
            </div>
        </div>
    )
}

export default Lessons