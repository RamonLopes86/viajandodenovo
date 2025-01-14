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



export default function Pagamentos(){

    return(

        <section className={estiloPag.boxPagamentos}>

                <div className={estiloPag.boxQuem}>

                    <nav className={estiloPag.navQuem}>

                    <h2>Viajando de novo</h2>

                        <ul>
                            <li>Quem Somos <LuBaggageClaim className={estiloPag.icon}/></li>
                            <li>Produtos <BiSolidPlaneAlt className={estiloPag.icon}/></li>
                            <li>E-mail <IoIosMail className={estiloPag.icon}/></li>
                            <li>Whatsapp <FaWhatsapp className={estiloPag.icon}/> </li>
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
                            <li>Instagram <FaInstagram className={estiloPag.icon}/> </li>
                        </ul>
                    </nav>

                </div>


                <div className={estiloPag.boxImagem}>

                    <Image className={estiloPag.image} src={cad}/>
                    <Image className={estiloPag.image} src={clod}/>
                    <Image className={estiloPag.image} src={segure}/>

                </div>

    

        </section>


    )

}