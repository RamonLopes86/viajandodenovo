'use client'
import estiloManuHam from './menuham.module.css';
import { IoMdClose } from "react-icons/io";
import hookContext from '@/hookContext';

export default function MenuHam(){

    const {openNav , setOpenNav} = hookContext()





    return(

        <section className={`${estiloManuHam.menuHam} ${openNav ? null : estiloManuHam.manuAnimaOff}`}>

            <IoMdClose onClick={()=> setOpenNav(atuaal => !atuaal)}  className={estiloManuHam.iconClose}/>

            <nav className={estiloManuHam.navTelaMenor}>
                <ul>
                    <li>Quem somos</li>
                    <li>Produtos</li>
                    <li>E-mail</li>
                </ul>

               
            </nav>

           
                
            <button className={estiloManuHam.btnNavLateral} type='button'>Fale com o especialista</button>
            
           

        </section>
    )
}