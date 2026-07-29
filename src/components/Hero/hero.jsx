import styles from "./hero.module.css";

export default function Hero() {

    return(

        <section className={styles.hero}>
            <div className={styles.texto}>


                <h1>
                    <strong>
                    Olá, eu sou Lesly <br /> 
                     Oliveira <br />
                     </strong>
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
                    Atualmente sou estagiária em Infraestrutura de Nuvem e estudante de Análise e Desenvolvimento de Sistemas. Apaixonada por arquitetura de ambientes, automação e alta disponibilidade e
                    construção de sistemas backend. Atualmente, aplico meus estudos e rotina prática no gerenciamento de serviços em nuvem (AWS e GCP), focando em construir soluções escaláveis, seguras e eficientes.

                </p>

            </div>

            <div className={styles.card}>

            </div>

        </section>

    );

}