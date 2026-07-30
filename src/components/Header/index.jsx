import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>

        <h2 className={styles.logo}>
          Lesly Oliveira
        </h2>

        <div className={styles.links}>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Skills</a>
          <a href="#">Projetos</a>
          <a href="#">Contato</a>
        </div>

      </nav>
    </header>
  );
}