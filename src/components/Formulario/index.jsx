import { useState } from 'react'
import styles from './Formulario.module.css'

const Formulario = () => {

    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setIMC] = useState(0)
    const [imcVisivel, setIMCVisivel] = useState(false)

    const calculaIMC = (event) => {
        setIMCVisivel(false)
        event.preventDefault();
        let alturaEmMetros = altura / 100
        const IMC = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(1)
        setIMC(IMC)
        setIMCVisivel(true)
    }

    return (
        <div className="container">
            <form className={styles.form_control} onSubmit={calculaIMC}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <label htmlFor="altura">Insira a sua altura (em CM)</label>
                        <input type="number" placeholder='175' required min='0' max='300' id='altura' onChange={({ target }) => setAltura(parseInt(target.value))} />
                    </li>
                    <li className={styles.listItem}>
                        <label htmlFor="peso">Insira o seu peso</label>
                        <input placeholder='75' type="number" required min='0' id='peso' onChange={({ target }) => setPeso(parseInt(target.value))}/>
                    </li>
                </ul>
                <button type="submit" className={styles.buttonForm}>Calcular IMC</button>
            </form>
            {imcVisivel && (
                <div className={styles.resultado__imc}>
                    <span className={styles.resultado__imc__text}>O resultado do IMC foi {imc}</span>
                </div>
            )}
        </div>
    )



}

export default Formulario