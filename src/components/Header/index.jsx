import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={styles.header__content}>
                    <h1 className={styles.header__content__title}>Calculadora IMC</h1>
                    <h2 className={styles.header__content__subtitle}>Calcule seu IMC em segundos</h2>
                </div>
            </div>
        </header>
    )
}

export default Header