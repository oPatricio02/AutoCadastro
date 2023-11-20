import React, { useEffect, useState } from 'react';
import styles from '../../../styles/Etapa1.module.css'

export default function etapa1({onAvancar}){

    const [cpf,setCpf] = useState("");
    const [validaCpf,setValidaCpf] = useState(false);

    const alteraCpf = (event) =>{
        setCpf(event.target.value);
        if(cpf.length == 10)
            setValidaCpf(true);
        if(cpf.length != 10)
            setValidaCpf(false);
    }   

    const click = () =>{
        onAvancar();
    }
    
    
    const renderForm = () => {
        let form = 
        <div className={styles.renderizacao}>
            <div className={styles.form}>
                <input type="text" className={styles.input}
                    value={cpf}
                    name="CPF"
                    onChange={value => alteraCpf(value)}
                />
            </div>

            <div>
                <button className={styles.botao} style={{
                        cursor: validaCpf ? 'pointer' : 'default',
                    }}
                    type="button" onClick={click}
                     disabled={!validaCpf}>
                    Continuar
                </button>
            </div>
        </div>
            
        return form;
    }

    
    return (
        <div className={styles.etp}>
            <br/>
            <div>
                <h5>Informe o seu CPF*</h5>
                <div >
                    {renderForm()}
                </div>
            </div>
            
        </div>
    );
}