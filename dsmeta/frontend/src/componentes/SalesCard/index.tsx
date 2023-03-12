
import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BASE_URL } from "../../utils/request";
import NotificationButton from '../NotificationButton'
import './styles.css'
import { Sale } from '../../models/sale';

function SalesCard() {
    //nome da variavel, funcao que muda ela = recebe um tipo useState  do react hook que tem valor inicial de new date
    const [minDate, batata] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());
    //useState tipado como lista de sales e valor inicial é lista vazia
    const [sales, setarVendas] = useState<Sale[]>([]);
    //função'() => ' e lista de dependencias '[]'
    // Em DES O useEffect é executado 2 vezes por padrão na primeira vez
    useEffect(() => {
        console.log("Quando acontece uma mudança o useEffect é executado")
        //Para usar o axios foi só importar com o yarn e usar 
        // axios.get("http://localhost:8081/sales")
        axios.get(`${BASE_URL}/sales`)
            .then(resposta => {
                // console.log(resposta.data)
                setarVendas(resposta.data.content);

            })
    }, [])

    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={minDate}
                            //Na mudança ele pega a data que foi setada e manda para o método do useState
                            onChange={(date: Date) => batata(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.map(s => {
                                return (
                                    //Quando usa map o react pede um parametro unico para cada redenrização chamado key
                                    // mas testei sem e funcionou, ver o motivo da exigencia
                                    <tr key = {s.id}>
                                        <td className="show992">{s.id}</td>
                                        <td className="show576">{new Date(s.date).toLocaleDateString()}</td>
                                        <td>{s.sellerName}</td>
                                        <td className="show992">{s.visited}</td>
                                        <td className="show992">{s.deals}</td>
                                        <td>R$ {s.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="dsmeta-red-btn-container">
                                                <NotificationButton />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                            }

                        </tbody>

                    </table>
                </div>

            </div>
        </>
    )
}

export default SalesCard