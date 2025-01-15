import estiloCot from './cotacao.module.css';
import Formulario from '../formulario/formulario';


export default function Cotacao(){

    return(

        <section className={estiloCot.boxCotacao}>

                <h1>Cotação</h1>


              

                <Formulario/>

             

        </section>

    )
}