'use client'

import Image from "next/image";
import styles from "./page.module.css";
import SectionHeader from "@/components/SecrionHeader/Header";
import hookContext from "@/hookContext";
import Banner from "@/components/sectionBanner/banner";
import Produtos from "@/components/sectionProdutos/produtos";
import QuemSou from "@/components/quemSou/quemSou";
import Fotos from "@/components/sectionFotos/fotos";
import Teste2 from "@/components/teste2/teste2";


export default function Home() {

  const {clickHiddenMenu} = hookContext()

  return (
    <div onClick={clickHiddenMenu} className={styles.main}>

        <SectionHeader/>

        <Banner/>

        <QuemSou/>

        <Produtos/>

        <Fotos/>

       <Teste2/>
        
          
    </div>
  );
}
