'use client'
import estiloManuHam from './menuham.module.css';
import { IoMdClose } from "react-icons/io";
import hookContext from '@/hookContext';
import { FaPlane } from "react-icons/fa";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { LuBaggageClaim } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { RiLandscapeAiLine } from "react-icons/ri";
import { MdPriceChange } from "react-icons/md";
import Link from 'next/link';




export default function MenuHam() {

    const { openNav, setOpenNav, refMenu } = hookContext()






    return (

        <section ref={refMenu} className={`${estiloManuHam.menuHam} ${openNav ? null : estiloManuHam.manuAnimaOff}`}>

            <div className={estiloManuHam.boxAnimaAviao}>
                <FaPlane className={estiloManuHam.iconAviao} />

            </div>


            <HiOutlineGlobeEuropeAfrica className={estiloManuHam.iconGlobe} />
            <IoMdClose onClick={() => setOpenNav(atuaal => !atuaal)} className={estiloManuHam.iconClose} />
        
            <nav className={estiloManuHam.navTelaMenor}>



                <ul>
                    <Link href={'#idquem'}>
                        <li>Quem somos <BiSolidPlaneAlt className={estiloManuHam.imgMenu} /> </li>
                    </Link>

                    <Link href={'#idproduto'}>
                        <li>Produtos <LuBaggageClaim className={estiloManuHam.imgMenu} />  </li>
                    </Link>


                    <Link  className={estiloManuHam.link} href={'#idfotos'}>

                        <li >Lugares  <RiLandscapeAiLine className={estiloManuHam.imgMenu} /> </li>
                    </Link>
                    <Link className={estiloManuHam.link} href={'#idlocaliza'}>
                        <li>Localização <FaLocationDot className={estiloManuHam.imgMenu} /></li>
                    </Link>

                    <Link href={'#'}>
                        <li>Cotação <MdPriceChange className={estiloManuHam.imgMenu}/> </li>
                    </Link>

                </ul>


            </nav>



            <button className={estiloManuHam.btnNavLateral} type='button'>Fale com o especialista</button>



        </section>
    )
}