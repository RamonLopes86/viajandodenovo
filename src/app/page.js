'use client'


import styles from "./page.module.css";
import SectionHeader from "@/components/SecrionHeader/Header";
import hookContext from "@/hookContext";
import Banner from "@/components/sectionBanner/banner";
import Produtos from "@/components/sectionProdutos/produtos";
import QuemSou from "@/components/quemSou/quemSou";
import Fotos from "@/components/sectionFotos/fotos";
import Localiza from "@/components/localizacao/localiza";
import Pagamentos from "@/components/pagamentos/pagamentos";
import Footer from "@/components/footer/footer";
import BotaoWpp from "@/components/botaoWpp/botaoWpp";
import Cotacao from "@/components/SectionCotacao/cotacao";
import Alert from "@/components/alert/alert";


export default function Home() {

  const {clickHiddenMenu} = hookContext()

  return (
    <div onClick={clickHiddenMenu} className={styles.main}>

        <SectionHeader/>

        <Banner/>

        <QuemSou/>

        <Produtos/>

        <Fotos/>

        <Localiza/>

        <Cotacao/>

        <Pagamentos/>

        <Footer/>

        <BotaoWpp/>

        <Alert/>
        


      
    </div>
        
          
  );
}
