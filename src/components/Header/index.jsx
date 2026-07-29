import styles from './Header.module.css';

export default function Header() {
    return(
    <header className={styles.header}>
        <span>Lesly Oliveira</span>
        <nav className={styles.header} >
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Habilidades</a>
            <a href="#">Projetos</a>
            <a href="#">Expêriencia</a>
            <a href="#">Contatos</a>
        </nav>

        <section className='styles.hero'>
            <div className='styles.texto'>
                <p>Olá</p>



            </div>

        </section>

    </header>
    );
}