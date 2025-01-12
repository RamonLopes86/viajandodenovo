'use client'
import estiloModalVideo from './modalVideo.module.css';
import React , {useState , useEffect , useRef} from 'react';
import thumb from '../../../public/thumb.jpg'
import Image from 'next/image';
import hookContext from '@/hookContext';
import { MdOutlineClose } from "react-icons/md";




export default function ModalVideo(){

    const {openModalVideo , setOpenModalVideo , playerRef} = hookContext()


    
    const iframeRef = useRef(null);  // Referência para o div onde o player será renderizado
   
    const [playerReady, setPlayerReady] = useState(false); // Estado para verificar se o player está pronto
   
    const [animaThumb , setAnimaThumb] = useState(estiloModalVideo.imgFrenteOn)


    function clodeModalVideo(){

        setOpenModalVideo(

         
            atual=>{

                if(atual){

                    false
                    playerRef.current.pauseVideo()
                    return
                    
                }else{
                   return true
                }

            }

        )

    }


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
                playerRef.current.pauseVideo()
                setAnimaThumb(estiloModalVideo.imgFrenteOff) // Pausa o vídeo
            } else {
                playerRef.current.playVideo()
                setAnimaThumb(estiloModalVideo.imgFrenteOn); // Reproduz o vídeo
            }
        }
    };

        return(

            <div  className={`${estiloModalVideo.boxVideo} ${openModalVideo ? null : estiloModalVideo.animaVideoOff}`}>

                      

                <div ref={iframeRef} className={estiloModalVideo.iframe}>

                </div>


                <Image onClick={togglePlayPause} alt='imagem de fundo' className={`${estiloModalVideo.imgFrente} ${animaThumb}`} src={thumb}/>


                <MdOutlineClose onClick={clodeModalVideo}  className={estiloModalVideo.iconClose}/>

           </div>

        )

}