"use client"

import {useState } from "react"
import Etapa1 from "./componentes/Etapa1";
import Etapa2 from "./componentes/Etapa2";
import Etapa3 from "./componentes/Etapa3";

export default function Autocadastro(){

    const [render1,setRender1] = useState(true);
    const [render2,setRender2] = useState(false);
    const [render3,setRender3] = useState(false);
    const [dadosEtp2,setDadosEtp2] = useState({});
    const [dadosEtp3,setDadosEtp3] = useState({});
    
    const avancarParaEtapa2 = () => {
        setRender1(false);
        setRender2(true);
      }
    
      const avancarParaEtapa3 = (dadosRec) => {

        setDadosEtp2(dadosRec);
        setRender2(false);
        setRender3(true);
      }

      const retornaEtapa2 = (dadosE3) =>{
        setDadosEtp3(dadosE3);
        setRender2(true);
        setRender3(false);
      }

      const reiniciar = () =>{
        setRender1(true);
        setRender3(false);
        setDadosEtp2({});
        setDadosEtp3({});
      }
      

    return(
    
        <div>
            <h1>Cadastre-se</h1>
            <hr></hr>
            {render1 && <Etapa1 onAvancar={avancarParaEtapa2} />}
            {render2 && <Etapa2 onAvancar={avancarParaEtapa3} dados={dadosEtp2}/>}
            {render3 && <Etapa3 onVoltar={retornaEtapa2} onFinalizar={reiniciar} dadosET3={dadosEtp3}/>}
        </div>
        
    
    );
}