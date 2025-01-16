'use client'
import estiloModalWpp from './modalwpp.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.png'
import { IoIosClose } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import React , {useState , useEffect} from 'react';




export default function ModalWpp() {

    const [hora , setHora] = useState(new Date().getHours())
    const [min , setMin] = useState(new Date().getMinutes())


    function attRelogio(){

        const novoHorario = new Date()

        setHora(novoHorario.getHours())
        setMin(novoHorario.getMinutes())

    }



    
    useEffect(()=>{

        
        if(hora >=0 && hora <=9){

            setHora(`0${hora}`)
      
          }
      
          if(min >=0 && min <=9){
      
            setMin(`0 ${min}`)
      
          }
        
       const intervalo =  setInterval(()=>{

            attRelogio()
    
        },1000)



        return () => {

            clearInterval(intervalo)
        }
       
    })
      





    return (

        <section className={estiloModalWpp.boxModalPai}>


            <section className={estiloModalWpp.boxImagemFundo}>

                <div className={estiloModalWpp.info}>

                    <div className={estiloModalWpp.boxImagem}>

                        <Image className={estiloModalWpp.imgLogo} src={logo} />

                        <div className={estiloModalWpp.onLine}></div>
                    </div>

                    <div className={estiloModalWpp.boxNome}>

                        <p>Viajando de novo</p>
                        <p>Tempo de resposta : 1 hora</p>

                    </div>


                    <IoIosClose className={estiloModalWpp.iconClose} />


                </div>


                <section className={estiloModalWpp.boxInput}>

                    <input placeholder='Digite sua mensagem...' type="text" name="msg" id="idmsg" />
                    
                    <IoMdSend className={estiloModalWpp.iconSend}/>
                </section>

            </section>



            <section className={estiloModalWpp.boxMsg}>

                   <p>Viajando de novo</p>

                   <p>Ola!</p>
                   <p>Como podemos te ajudar ?</p>

                    <div className={estiloModalWpp.check}>
                            <p className={estiloModalWpp.numeros}>{hora} : {min}</p>
                            <IoCheckmarkDone className={estiloModalWpp.iconCheck}/>
                    </div>


            </section>


            <section className={estiloModalWpp.boxAnima}>

                    <div className={estiloModalWpp.ball}></div>
                    <div className={estiloModalWpp.ball}></div>
                    <div className={estiloModalWpp.ball}></div>

            </section>




        </section>


    )


}