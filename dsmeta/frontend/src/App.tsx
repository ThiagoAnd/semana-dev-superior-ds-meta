//Import do toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./componentes/Header"
import NotificationButton from "./componentes/NotificationButton"
import SalesCard from "./componentes/SalesCard"
    //Com isso <ToastContainer /> aqui, em qualquer componente eu posso chamar o toast

function App() {
  return (
    <>
    <ToastContainer/>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
