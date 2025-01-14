import estiloFooter from './footer.module.css'


export default function Footer(){

    const data = new Date

    const ano = data.getFullYear()


    return(


        <section className={estiloFooter.footer}>

                <p><span> {ano}</span> Desenvolvido por Ramon Lopes <span>&copy;</span> </p>
        </section>
    )
}