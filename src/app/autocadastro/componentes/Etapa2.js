import { useEffect, useState } from 'react';
import styles from '../../../styles/Etapa2.module.css';



export default function etapa2({onAvancar,dados}) {

    const [nome,setNome] = useState(dados.nome || "");
    const [data,setData] = useState(dados.data || ""); 
    const [celular,setCelular] = useState(dados.celular || "");
    const [msg,setMsg] = useState(false);


    const alteraNome = (event) =>{
        setNome(event.target.value);
    };
    const alteraData = (event) =>{
        setData(event.target.value);
    };
    const alteraCelular = (event) =>{
        setCelular(event.target.value);
    };

    const clickProx = ()=>{
        if(nome.length=="" || data.length=="" || celular.length=="")
            setMsg(true);
        else
            onAvancar({nome,data,celular});
    }

    const formulario = () => 
    {
        const form =
            <div className={styles.form}>
                <div className={styles.nome}>
                    <label className={styles.label}>Nome Completo*</label>
                    <input className={styles.inputNome} type='text' value={nome} onChange={value => alteraNome(value)} placeholder=' Seu nome completo'/>
                </div>
                <div className={styles.infos}>
                    <div className={styles.infoLabel}>
                        <label className={styles.label}>Data de Nascimento*</label>
                        <input className={styles.inputs} type='date' value={data} onChange={value => alteraData(value)}/>
                    </div>
                    
                    <div className={styles.infoLabel}>
                        <label className={styles.label}>Celular*</label>
                        <input className={styles.inputs} type='tel' value={celular} onChange={value => alteraCelular(value)} placeholder=" (99) 01234-5678" />
                    </div>
                </div>
                <div className={styles.msgAlert}>
                    {msg && <p>Campos marcados com * são obrigatórios.</p>}
                </div>
                <div className={styles.btns}>
                    <button onClick={clickProx} className={styles.botao} type="button">Próximo &#8594;
                    </button>
                </div>
            </div>
        return form;
    }

    return( 
        <div>
            {formulario()}
        </div>
    );

}