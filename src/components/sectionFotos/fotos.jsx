import estiloFoto from './fotos.module.css';
import Image from 'next/image';
import chile from '../../../public/chile.jpg'
import uruguai from '../../../public/uruguai.jpg'
import paris from '../../../public/paris.jpg'
import tailandia from '../../../public/tailandia.jpg'
import montanha from '../../../public/montanha.jpg'
import china from '../../../public/china.jpg'
import bora from '../../../public/4.jpg'



export default function Fotos(){

const arrayImage = [chile , uruguai , paris , tailandia , montanha , china , bora]


    


    return(

        <section className={estiloFoto.boxPai}>

            <section className={estiloFoto.boxFilho}>

                {

                    arrayImage.map((image , index)=>{

                        return(

                            <Image key={index} className={estiloFoto.image} alt='imagens de paisagens' quality={100} src={image}/>

                        )

                    })
                }


            </section>


        </section>


    )

}