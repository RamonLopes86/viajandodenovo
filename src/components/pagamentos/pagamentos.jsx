import estiloPag from './pagamentos.module.css';
import { LuBaggageClaim } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import logo from '../../../public/logo.png'
import { FaRegCreditCard } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { FaBarcode } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import cad from '../../../public/cadastur.webp'
import clod from '../../../public/clod.webp'
import segure from '../../../public/segure.webp'
import Image from 'next/image';
import Link from 'next/link';



export default function Pagamentos(){


    function goMsg(param){

        if(param === 'mail'){

            const email = 'tiago_espanha@hotmail.com'
            const assunto = 'Cotação'
    
            const msg = 'Ola , gostaria de uma cotação...'
    
            const mailLink = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(msg)}`
    
            window.open(mailLink)

            return;
        }


        if(param === 'wpp'){

            const numero = '5571981538307'
            
    
            const msg = 'ola , como podemos te ajudar'
    
            const msgWpp = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`
    
            window.open(msgWpp)

            return;  

        }
        

    }
   


    return(

        <section className={estiloPag.boxPagamentos}>

                <div className={estiloPag.boxQuem}>

                    <nav className={estiloPag.navQuem}>

                    <h2>Viajando de novo</h2>

                        <ul>
                            <Link href={'#idquem'}>
                                <li>Quem Somos <LuBaggageClaim className={estiloPag.icon}/></li>
                            </Link>
                            <Link href={'#idprodutos'}>
                                <li>Produtos <BiSolidPlaneAlt className={estiloPag.icon}/></li>
                            </Link>
                            <li onClick={()=>goMsg('mail')} >E-mail <IoIosMail className={estiloPag.icon}/></li>
                            <li onClick={()=>goMsg('wpp')}>Whatsapp <FaWhatsapp className={estiloPag.icon}/> </li>
                        </ul>
                    </nav>

                </div>

                <div className={estiloPag.boxPag}>

                   

                    <nav className={estiloPag.navPagamentos}>

                        <h2>Formas de pagamento</h2>
                       

                        <ul>
                            <li>Cartão de crédito <FaRegCreditCard className={estiloPag.icon}/></li>
                            <li>Cartão de débito <FaRegCreditCard className={estiloPag.icon}/></li>
                            <li>Pix <FaPix className={estiloPag.icon}/></li>
                            <li>Boleto <FaBarcode className={estiloPag.icon}/></li>
                        </ul>

                    </nav>

                </div>


                <div className={estiloPag.boxRedes}>

                    <nav className={estiloPag.navRedes}>

                        <h2>Minhas redes</h2>

                        <ul>
                            <li onClick={()=>  window.open('https://www.instagram.com/viajando_de_novo/')}>Instagram <FaInstagram className={estiloPag.icon}/> </li>
                        </ul>
                    </nav>

                </div>


                <div className={estiloPag.boxImagem}>

                    <Image alt='icones' className={estiloPag.image} src={cad}/>
                    <Image alt='icones' className={estiloPag.image} src={clod}/>
                    <Image alt='icones' className={estiloPag.image} src={segure}/>

                </div>

    

        </section>


    )

}