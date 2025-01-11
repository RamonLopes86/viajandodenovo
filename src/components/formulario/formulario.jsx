import estiloForm from './formulario.module.css';


export default function Formulario(){

    return(

        <div className={estiloForm.boxForm}>

        <h2>Preencha seus dados e ganhe uma cotação personalizada com um desconto especial!</h2>

        <form action="#">

            <div>
                <label htmlFor="idnome">Nome :</label>
                <input autoComplete='off' type="text" name="nome" id="idnome" />
            </div>
            
            <div>
                <label htmlFor="idmail">E-mail :</label>
                <input autoComplete='off' type="text" name="mail" id="idmail" />
            </div>
            <div>
                <label htmlFor="idgasto">Gasto com cartão de crédito :</label>
                <input autoComplete='off' type="text" name="mail" id="idmail" />
            </div>

            <div>
                
                <button type="button">Falar com especialista</button>
            </div>

        </form>

    </div>

    )
}