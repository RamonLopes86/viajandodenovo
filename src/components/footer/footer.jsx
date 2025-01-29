import estiloFooter from './footer.module.css'



export default function Footer(){

    const data = new Date

    const ano = data.getFullYear()


    return(


        <section className={estiloFooter.footer}>
                <p>Santos - São Paulo - Brasil</p>
                <p>CNPJ - 57.767.163/0001-11</p>
                <p><span> {ano}</span> - Viajando de Novo &reg; | Todos os direitos reservados <span>&copy;</span> </p>
                <p>Desenvolvido por Ramon Lopes</p>
        </section>
    )
}