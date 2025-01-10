'use client'

import Image from "next/image";
import styles from "./page.module.css";
import SectionHeader from "@/components/SecrionHeader/Header";
import hookContext from "@/hookContext";
import Banner from "@/components/sectionBanner/banner";
import Produtos from "@/components/sectionProdutos/produtos";

export default function Home() {

  const {clickHiddenMenu} = hookContext()

  return (
    <div onClick={clickHiddenMenu} className={styles.main}>

        <SectionHeader/>
        <Banner/>
        <Produtos/>
          
    </div>
  );
}
