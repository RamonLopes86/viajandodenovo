'use client'
import estiloManuHam from './menuham.module.css';
import { IoMdClose } from "react-icons/io";
import hookContext from '@/hookContext';
import { FaPlane } from "react-icons/fa";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { LuBaggageClaim } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { BiSolidPlaneAlt } from "react-icons/bi";



export default function MenuHam(){

    const {openNav , setOpenNav , refMenu} = hookContext()






    return(

        <section  ref={refMenu} className={`${estiloManuHam.menuHam} ${openNav ? null : estiloManuHam.manuAnimaOff}`}>

            <div className={estiloManuHam.boxAnimaAviao}>
               <FaPlane className={estiloManuHam.iconAviao}/>
               
            </div>
               

            <HiOutlineGlobeEuropeAfrica className={estiloManuHam.iconGlobe}/>
            <IoMdClose onClick={()=> setOpenNav(atuaal => !atuaal)}  className={estiloManuHam.iconClose}/>

            <nav className={estiloManuHam.navTelaMenor}>
                <ul>
                    <li>Quem somos <BiSolidPlaneAlt className={estiloManuHam.imgMenu}/> </li>
                    <li>Produtos <LuBaggageClaim className={estiloManuHam.imgMenu}/>  </li>
                    <li>E-mail <IoIosMail className={estiloManuHam.imgMenu}/></li>

                </ul>

               
            </nav>

           
                
            <button className={estiloManuHam.btnNavLateral} type='button'>Fale com o especialista</button>
            
           

        </section>
    )
}