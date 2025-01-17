

import estiloCot from './cotacao.module.css';
import Formulario from '../formulario/formulario';


export default function Cotacao() {

    return (

        <section className={estiloCot.boxPai}>

            <h1 >Cotação <span id='idcotacao'>...</span> </h1>
            <section  className={estiloCot.boxCotacao}>


                <Formulario />

            </section>
        </section>

    )
}