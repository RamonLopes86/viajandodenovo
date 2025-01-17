'use client'
import estiloAlert from './alert.module.css';
import hookContext from '@/hookContext';
import { FaExclamationTriangle } from "react-icons/fa";
import { AiOutlineAlert } from "react-icons/ai";




export default function Alert(){

    const {msgAlert , animaAlert} = hookContext()

    const pc = 'preencha os campos'
    

    return(

        <section className={`${estiloAlert.boxAlert} ${animaAlert ? estiloAlert.animaOn : estiloAlert.animaOff }`}>
            <p>{msgAlert === pc ? <FaExclamationTriangle className={estiloAlert.iconEx}/> : <AiOutlineAlert  className={estiloAlert.iconGiroflex}/>}{msgAlert}</p>


            <div style={{backgroundColor:msgAlert === pc ? '#FFA500' : 'red'}} className={`${estiloAlert.line} ${animaAlert ? estiloAlert.animaLineOn : estiloAlert.animaLineOff}`}></div>
        </section>
    )
}

