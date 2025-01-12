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

// const arrayImage = [chile , uruguai , paris , tailandia , montanha , china , bora]

const array = ["chile" , "uruguai" , "paris" , "tailandia" , "montanha" , "china" , "4"]
    


    return(

        <section className={estiloFoto.boxPai}>

            <section className={estiloFoto.boxFilho}>

                {

                    array.map((image , index)=>{

                        return(

                            <div key={index}  style={{ backgroundImage: `url(/${image}.jpg)` }} className={estiloFoto.boxImagem}>

                            </div>

                        )

                    })
                }


            </section>


        </section>


    )

}