import estiloBanner from './banner.module.css';
import Image from 'next/image';
import thumb from '../../../public/thumb.jpg'

export default function Banner(){

    return(

            <section className={estiloBanner.boxBanner}>


                    <div className={estiloBanner.boxFilho}>

                        <h1>Viajar nunca foi tão fácil, seguro e divertido</h1>

                        <p>
                        Já explorei mais de 50 países em cinco continentes, e cada viagem me ensinou que o mundo não é apenas um lugar para conhecer, mas para viver intensamente. Com a Viajando de Novo , minha missão é simples: fazer você viajar mais, gastar menos e transformar sonhos em memórias inesquecíveis. Falei um pouco sobre isso nesse Podcast...
                        </p>



                       

                       <div className={estiloBanner.boxVideo}>

                       <iframe rel='0' className={estiloBanner.iframe} width="100%" height="100%" src="https://www.youtube.com/embed/j1vAPFAPGjE?rel=0?fs=0?controls=0?modestbranding=1?showinfo=0" title='viajando de novo'  >
                        
                        </iframe>


                        <Image className={estiloBanner.imgFrente} src={thumb}/>

                       </div>

                        


                        <div className={estiloBanner.boxForm}>

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


                    </div>



            </section>
    )
}