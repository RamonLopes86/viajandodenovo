'use client'
import estiloForm from './formulario.module.css';
import React , {useEffect , useState} from 'react';
import Link from 'next/link';


export default function Formulario(){

    const [inputNome , setInputNome] = useState('')
    const [inputMail , setInputMail] = useState('')
    const [inputGasto , setInputGasto] = useState('')





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
                
                <Link  href={`https://wa.me/5571981538307?text=Meu%20Nome%20:%20${encodeURIComponent(inputNome)}%20&Meu%20E-mail%20:${encodeURIComponent(inputMail)}%20&Meu%20Gasto%20:${encodeURIComponent(inputGasto)}%20,%20gostaria%20de%20uma%20cotação%20personalizada`} target='_blank' >
                
                    <button type="button">Falar com especialista</button>
                
                </Link>

            </div>

        </form>

    </div>

    )
}