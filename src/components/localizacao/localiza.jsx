import estiloLocaliza from './localiza.module.css';
import Image from 'next/image';
import local from '../../../public/iconLocaliza.png'



export default function Localiza() {

    return (

        <section  className={estiloLocaliza.boxIframe}>

            

            <h1>Onde estamos localizados <span id='idlocaliza'>...</span></h1>

            <section className={estiloLocaliza.boxFilho}>

            <Image  alt='image de uma localização' className={estiloLocaliza.imgLocal} src={local}/>

            <iframe className={estiloLocaliza.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233212.54290767954!2d-46.59328789687276!3d-24.03296992840168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03b97cc7856f%3A0x3ff3e507b04bbc46!2sSantos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1736798600268!5m2!1spt-BR!2sbr" width="600" height="450"  ></iframe>


            </section>

        </section>

    )
}