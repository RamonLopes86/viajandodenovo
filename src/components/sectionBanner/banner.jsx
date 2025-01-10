'use client'
import estiloBanner from './banner.module.css';
import Image from 'next/image';
import thumb from '../../../public/thumb.jpg'
import React, {useState, useEffect , useRef} from 'react';

export default function Banner(){

    const iframeRef = useRef(null);  // Referência para o div onde o player será renderizado
    const playerRef = useRef(null);  // Referência para o player do YouTube
    const [playerReady, setPlayerReady] = useState(false); // Estado para verificar se o player está pronto
    const [animaThumb , setAnimaThumb] = useState(false)

    useEffect(() => {
        
        // Carregar a API do YouTube
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.body.appendChild(script);

        // Função chamada pela API do YouTube quando ela estiver carregada
        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player(iframeRef.current, {
                height: '390',
                width: '640',
                videoId: 'j1vAPFAPGjE',  // ID do vídeo no YouTube
                events: {
                    onReady: () => {
                        setPlayerReady(true); // Marca o player como pronto
                        
                    },
                    onStateChange: (event) => {
                        
                    }
                }
            });
        };

        
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const togglePlayPause = () => {
        if (playerRef.current && playerReady) {
            const currentState = playerRef.current.getPlayerState();
            if (currentState === window.YT.PlayerState.PLAYING) { // Se o vídeo está tocando
                playerRef.current.pauseVideo();
                setAnimaThumb(estiloBanner.imgFrenteOff) // Pausa o vídeo
            } else {
                playerRef.current.playVideo()
                setAnimaThumb(estiloBanner.imgFrenteOn); // Reproduz o vídeo
            }
        }
    };




    return(

            <section className={estiloBanner.boxBanner}>


                    <div className={estiloBanner.boxFilho}>

                        <h1>Viajar nunca foi tão fácil, seguro e divertido</h1>

                        <p>
                        Já explorei mais de 50 países em cinco continentes, e cada viagem me ensinou que o mundo não é apenas um lugar para conhecer, mas para viver intensamente. Com a Viajando de Novo , minha missão é simples: fazer você viajar mais, gastar menos e transformar sonhos em memórias inesquecíveis. Falei um pouco sobre isso nesse Podcast...
                        </p>



                       

                       <div className={estiloBanner.boxVideo}>

                       {/* <iframe  ref={iframeRef } className={estiloBanner.iframe} width="100%" height="100%" src="https://www.youtube.com/embed/j1vAPFAPGjE?rel=0&fs=0&controls=1&modestbranding=1&showinfo=0" title='viajando de novo'  >
                        
                        </iframe> */}

                        <div ref={iframeRef} className={estiloBanner.iframe}>

                        </div>


                        <Image onClick={togglePlayPause} alt='imagem de fundo' className={`${estiloBanner.imgFrente} ${animaThumb}`} src={thumb}/>

                       </div>

                        


                        <div className={estiloBanner.boxForm}>

                            <h2>Preencha seus dados e ganhe uma cotação personalizada com um desconto especial!</h2>

                            <form action="#">

                                <div>
                                    <label htmlFor="idnome">Nome :</label>
                                    <input autoComplete='off' type="text" name="nome" id="idnome" />
                                </div>
                                
                                <div>
                                    <label htmlFor="idmail">E-mail :</label>
                                    <input autoComplete='off' type="text" name="mail" id="idmail" />
                                </div>
                                <div>
                                    <label htmlFor="idgasto">Gasto com cartão de crédito :</label>
                                    <input autoComplete='off' type="text" name="mail" id="idmail" />
                                </div>

                                <div>
                                    
                                    <button type="button">Falar com especialista</button>
                                </div>

                            </form>

                        </div>


                    </div>



            </section>
    )
}