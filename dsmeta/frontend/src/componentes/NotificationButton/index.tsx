//notficaion
import icon from '../../assets/img/notification-icon.svg'
import './styles.css'
import axios from 'axios';
import { BASE_URL } from './../../utils/request';
import { toast } from 'react-toastify';
//Props são parametros que os componentes react podem receber
type Props = {
    saleId : number;
}

function chamarBackEnd(id : number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(resposta => {
        console.log("Sucesso ");
        toast.info("SMS enviado com sucesso")
        
    })
}
function NotificationButton({saleId}: Props) {
    return (
        <>
        <div className="dsmeta-red-btn" onClick={() => chamarBackEnd(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
        </>
    )
}

export default NotificationButton