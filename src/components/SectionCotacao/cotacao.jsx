import estiloCot from './cotacao.module.css';
import Formulario from '../formulario/formulario';


export default function Cotacao(){

    return(

        <section id='idcotacao' className={estiloCot.boxCotacao}>

                <h1>Cotação</h1>


              

                <Formulario/>

             

        </section>

    )
}