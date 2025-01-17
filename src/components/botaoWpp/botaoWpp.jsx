'use client'
import estiloBotao from './botao.module.css';
import Image from 'next/image';
import wpp from '../../../public/wpp.png'
import ModalWpp from '../modalWhatsApp/modalWpp';
import hookContext from '@/hookContext';


export default function BotaoWpp(){

    const {clickModalWpp} = hookContext()

    return(

        <div  className={estiloBotao.boxBtn}>

            <ModalWpp/>

            <p>1</p>
            <Image onClick={(ev)=>clickModalWpp('abrir' , ev)} alt='logo do whatsApp' className={estiloBotao.imgWpp} src={wpp}/>
        </div>

    )
}