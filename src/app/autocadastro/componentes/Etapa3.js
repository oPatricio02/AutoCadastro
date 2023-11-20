import {useState } from 'react';
import styles from '../../../styles/Etapa3.module.css';

export default function Etapa3({onVoltar,onFinalizar,dadosET3}){

    const [cep,setCep] = useState(dadosET3.cep || "");
    const [logradouro,setLogradouro] = useState(dadosET3.logradouro || "");
    const [numero,setNumero] = useState(dadosET3.numero || "");
    const [bairro,setBairro] = useState(dadosET3.bairro || "");
    const [uf,setUf] = useState(dadosET3.uf || "");
    const [cidade,setCidade] = useState(dadosET3.cidade || "");
    const [validaCep,setValidaCep] = useState(false);
    const ufs = [
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
        'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
      ];


    const alteraCep =(event)=>{
        setCep(event.target.value);
    }

    const alteraLogradouro = (event) =>{
        setLogradouro(event.target.value);   
    }

    
    const alteraNumero = (event) =>{
        setNumero(event.target.value);   
    }

    
    const alteraBairro = (event) =>{
        setBairro(event.target.value);   
    }
    
    const alteraUf = (event) =>{
        setUf(event.target.value);   
    }

    const alteraCidade = (event) =>{
        setCidade(event.target.value);   
    }

    const clickFinalizar = () =>{
        if(cep =="" || cep.length != 8)
            setValidaCep(true)
        else
        {
            setValidaCep(false)
            onFinalizar();
        }
        
    }
    const clickVoltar = () =>{
        onVoltar({cep,logradouro,numero,bairro,uf,cidade});
    }


    const formulario = () =>{
        const form = 
        <div>
                <div className={styles.nvl1}>
                    <div className={styles.infoLabel}>
                        <label className={styles.label}>CEP*</label>
                        <input className={styles.inputs} type='text' value={cep} onChange={value => alteraCep(value)} placeholder=' 00000-000'/>
                    </div>
                    
                    <div className={styles.infoLabel}> 
                        <label className={styles.label}>Logradouro</label>
                        <input className={styles.inputs} type='text' value={logradouro} onChange={value => alteraLogradouro(value)}/>
                    </div>
                    
                    <div className={styles.infoLabel}>
                        <label className={styles.label}>Número</label>
                        <input className={styles.inputs} type='text' value={numero} onChange={value => alteraNumero(value)} />
                    </div>
                </div>
                <div className={styles.infoLabel}>
                        <label className={styles.label}>Bairro</label>
                        <input className={styles.inputs} type='text' value={bairro} onChange={value => alteraBairro(value)} />
                </div>
                <div className={styles.nvl2}>
                    <div className={styles.infoLabel}>
                        <label className={styles.label}>UF</label>
                        <select className={styles.inputs} value={uf} onChange={value => alteraUf(value)}>
                            <option></option>
                            {
                                ufs.map((unf,index) =>(
                                <option key={index} value={unf}>
                                    {unf}
                            </option>))
                            }
                        </select>
                    </div>
                    <div className={styles.infoLabel}>
                        <label className={styles.label}>Cidade</label>
                        <input className={styles.inputs} type='text' value={cidade} onChange={value => alteraCidade(value)}/>
                    </div>
                </div>
                
                <div className={styles.msgAlert}>
                    {validaCep && <p>Campos marcados com * são obrigatórios.</p>}
                </div>
            </div>
            

        return form;
    }

    const botoes = () =>{
        const btns =
            <div className={styles.botoes}>
                <div className={styles.divProx}>
                    <button className={styles.voltar} type="button" onClick={clickVoltar}>&#8592; Voltar</button>
                </div>
                <div >
                    <button className={styles.prox} type="button" onClick={clickFinalizar}>Finalizar
                    </button>
                </div>
            </div>

        return btns;
    }


    return(
        <div>
            {formulario()}
            {botoes()}
        </div>
    );
}