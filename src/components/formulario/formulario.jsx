'use client'
import estiloForm from './formulario.module.css';
import React , { useState} from 'react';



export default function Formulario(){

    const [inputNome , setInputNome] = useState('')
    const [inputMail , setInputMail] = useState('')
    const [inputGasto , setInputGasto] = useState('')
    const[inputNum , setInputNum] = useState('')


    const handleWhatsAppClick = () => {

        if(!inputNome || !inputMail || !inputNum){

           return  alert('preencha os campos')
        }

        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputMail)){

           return  alert('email incorreto')

        }

        if(!/^(\(\d{2}\)\d{5}-\d{4}|\(\d{2}\)\d{4}-\d{4}|\d{11}|\d{8}-\d{4})$/.test(inputNum)){

           return  alert ('telefone invalido')
        }

        if(!/^[A-Za-zÀ-ÿÁáÉéÍíÓóÚúÃãÕõÇç' -]+$/.test(inputNome)){

           return  alert('nome invalido')
        }


        
        const message = `Meu Nome: ${encodeURIComponent(inputNome)}%0AMeu E-mail: ${encodeURIComponent(inputMail)}%0AMeu número: ${encodeURIComponent(inputNum)}%0AMeu Gasto: ${encodeURIComponent(inputGasto)}%0Agostaria de uma cotação personalizada!!!`;
        const url = `https://wa.me/5571981538307?text=${message}`;
        window.open(url, '_blank');
        setInputMail('')
        setInputNome('')
        setInputGasto('não opinar')
        setInputNum('')

      
    };



    return(

        <div className={estiloForm.boxForm}>

        <h2>Preencha seus dados e ganhe uma cotação personalizada com um desconto especial!</h2>

        <form action="#">

            <div>
                <label htmlFor="idnome">Nome :</label>
                <input value={inputNome} onChange={({target})=> setInputNome(target.value)} placeholder='seu nome ...' autoComplete='off' type="text" name="nome" id="idnome" />
            </div>
            
            <div>
                <label htmlFor="idmail">E-mail :</label>
                <input value={inputMail} onChange={({target})=> setInputMail(target.value)} placeholder='digite seu email' autoComplete='off' type="text" name="mail" id="idmail" />
            </div>
            <div>
                <label htmlFor="numero">Whatsapp</label>
                <input value={inputNum} onChange={({target})=> setInputNum(target.value)} placeholder='(xx)9xxxx-xxxx' autoComplete='off' type="text" name="mail" id="idmail" />
            </div>
            <div>
                <label htmlFor="idgasto">Gasto com cartão de crédito :</label>

                <select value={inputGasto} onChange={({target})=> setInputGasto(target.value)} name="info" id="idgasto">

                    <option value={''}>não opinar</option>
                    <option value={'de 2000 a 5000'}>de 2000 a 5000</option>
                    <option value={'de 5001 a 15000'}>de 5001 a 15000</option>
                    <option value={'de 15001 a 30000'}>de 15001 a 30000</option>
                    <option value={'mais de 30000'}>mais de 30000</option>

                </select>

            </div>

            <div>
                
              
                
                    <button onClick={handleWhatsAppClick} type="button">Falar com especialista</button>
                
                

            </div>

        </form>

    </div>

    )
}