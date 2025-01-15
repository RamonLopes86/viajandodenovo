import estiloBotao from './botao.module.css';
import Image from 'next/image';
import wpp from '../../../public/wpp.png'


export default function BotaoWpp(){

    return(

        <div className={estiloBotao.boxBtn}>

            <p>1</p>
            <Image className={estiloBotao.imgWpp} src={wpp}/>
        </div>

    )
}