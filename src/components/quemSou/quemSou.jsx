import estiloQuem from './quemsou.module.css';
import Image from 'next/image';
import tiago from '../../../public/tiago.jpg'
import tiago2 from '../../../public/tiago2.jpg'
import tiago3 from '../../../public/tiago3.jpg'
import tiago4 from '../../../public/tiago4.jpg'
import logo from '../../../public/logo.png'
import { GiClick } from "react-icons/gi";

export default function QuemSou(){

    return(

        <section className={estiloQuem.boxPai}>


                    <section className={estiloQuem.boxLeft}>

                        <Image quality={100} className={estiloQuem.image} src={tiago}/>

                        <Image quality={100} className={estiloQuem.image} src={tiago2}/>

                        <Image quality={100} className={estiloQuem.image} src={tiago3}/>


                    </section>

                    <section className={estiloQuem.boxRight}>

                 
                        <Image quality={100} className={estiloQuem.image} src={tiago4}/>
                 

                    <div className={estiloQuem.boxTx}>

                        <h1>Olá , sou Tiago Lopes</h1>

                        <p>Já explorei mais de 50 países em cinco continentes, e cada viagem me ensinou que o mundo não é apenas um lugar para conhecer, mas para viver intensamente. Com a Viajando de Novo , minha missão é simples: fazer você viajar mais, gastar menos e transformar sonhos em memórias inesquecíveis. Falei um pouco <br /> <span>sobre isso nesse Podcast <GiClick className={estiloQuem.iconMao}/> </span></p>
                    </div>

                    </section>


        </section>


    )
}