import estiloBotao from './botao.module.css';
import Image from 'next/image';
import wpp from '../../../public/wpp.png'
import ModalWpp from '../modalWhatsApp/modalWpp';


export default function BotaoWpp(){

    return(

        <div className={estiloBotao.boxBtn}>

            <ModalWpp/>

            <p>1</p>
            <Image alt='logo do whatsApp' className={estiloBotao.imgWpp} src={wpp}/>
        </div>

    )
}