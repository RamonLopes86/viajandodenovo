'use client'
import estiloModalWpp from './modalwpp.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.png'
import { IoIosClose } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import React, { useState, useEffect, useRef } from 'react';
import hookContext from '@/hookContext';
import Link from 'next/link';




export default function ModalWpp() {

    const [hora, setHora] = useState(new Date().getHours())
    const [min, setMin] = useState(new Date().getMinutes())

    const { openModalWpp , clickModalWpp ,  msgWpp , refWpp  } = hookContext()

    const [inputTx , setInputTx] = useState('')
    

    function sendWpp(){

        const url = `https://wa.me/5571981538307?text=${inputTx}`

        window.open(url , '_blank')

    }


    



    function attRelogio() {

        const novoHorario = new Date()
        setHora(novoHorario.getHours())
        setMin(novoHorario.getMinutes())

    }




    useEffect(() => {

        attRelogio()

        const intervalo = setInterval(() => {

            attRelogio()

        }, 1000)



        return () => {

            clearInterval(intervalo)
        }


     

    },[])

    const horaFormatada = hora < 10 ? `0${hora}` : hora;
    const minFormatado = min < 10 ? `0${min}` : min;





   


    return (

        <section className={estiloModalWpp.boxModalPai}>


            <section ref={refWpp} className={`${estiloModalWpp.boxImagemFundo} ${openModalWpp ? estiloModalWpp.animaOn : estiloModalWpp.animaOff}`}>

                <div className={estiloModalWpp.info}>

                    <div className={estiloModalWpp.boxImagem}>

                        <Image alt='logo da viajando e novo' className={estiloModalWpp.imgLogo} src={logo} />

                        <div className={estiloModalWpp.onLine}></div>
                    </div>

                    <div className={estiloModalWpp.boxNome}>

                        <p>Viajando de novo</p>
                        <p>Tempo de resposta : 1 hora</p>

                    </div>


                    <IoIosClose onClick={(ev) => clickModalWpp('fechar' , ev)} className={estiloModalWpp.iconClose} />


                </div>


                <section className={estiloModalWpp.boxInput}>

                    <input autoComplete='off' value={inputTx} onChange={({target})=> setInputTx(target.value)} placeholder='Digite sua mensagem...' type="text" name="msg" id="idmsg" />

                
                    <IoMdSend style={inputTx.length === 0 ? {opacity:'0.6' , cursor:'auto'} : {opacity:'1'}} onClick={inputTx.length === 0 ? null : sendWpp} className={estiloModalWpp.iconSend} />
                   
                </section>

                {

                    msgWpp ? (

                        <section className={estiloModalWpp.boxMsg}>

                        <p>Viajando de novo</p>
    
                        <p>Olá! ✈️</p>
                        <p>Como podemos te ajudar ?</p>
    
                        <div className={estiloModalWpp.check}>
                            <p className={estiloModalWpp.numeros}>{horaFormatada} : {minFormatado}</p>
                            <IoCheckmarkDone className={estiloModalWpp.iconCheck} />
                        </div>
    
    
                    </section>

                    ):(

                        
                    <section className={estiloModalWpp.boxAnima}>

                    <div className={estiloModalWpp.ball}></div>
                    <div className={estiloModalWpp.ball}></div>
                    <div className={estiloModalWpp.ball}></div>

                </section>


                    )


                }

              



            </section>







        </section>


    )


}