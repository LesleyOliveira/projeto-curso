import styles from "./hero.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

export default function Hero() {

    return (

        <section className={styles.hero}>
            <div className={styles.texto}>


                <h1>
                    Olá, eu sou Lesly
                    <br />

                    <span>Oliveira</span>
                </h1>

                <h2>
                    Estágiaria de Insfraestrutura em nuvem  <br />
                </h2>
                <h4>
                    <br />
                    AWS | Docker | Python | Terraform | MYSQL <br />

                </h4>

                <p>
                    <br />
                    Sou estudante de Análise e Desenvolvimento de Sistemas e atualmente atuo como estagiária em Cloud Infrastructure. Tenho interesse em infraestrutura em nuvem, automação e DevOps, buscando desenvolver soluções escaláveis, seguras e eficientes utilizando tecnologias como AWS, Docker, Terraform e Python.

                </p>

                <div className={styles.buttons}>

                    <a
                        href="https://github.com/LesleyOliveira"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.github}
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/lesly-oliveira-55b199265/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.linkedin}
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>


                </div>

            </div>

            <div className={styles.card}>
                

                    <img
                        src="/image/fotoPerfil.jpg"
                        alt="Foto de Lesly"
                        className={styles.photo}
                    />

                    <h3>Lesly Oliveira</h3>

                    <p className={styles.role}>
                        Cloud Infrastructure Intern
                    </p>

                    <div className={styles.line}></div>

                    <div className={styles.stack}>

                        <span>☁ AWS</span>
                        <span>🐳 Docker</span>
                        <span>🐍 Python</span>
                        <span>🌍 Terraform</span>
                        <span>🛢 MySQL</span>

                    </div>

                    <div className={styles.status}>

                        <span className={styles.dot}></span>

                        Buscando sempre me desafiar

                    </div>
                    

                </div>


        </section>

    );

}