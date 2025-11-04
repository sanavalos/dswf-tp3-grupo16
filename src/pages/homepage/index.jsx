import styles from "./Homepage.module.css";
import Title from "../../components/title";
import avalosImg from "../../assets/avalos.png";
import paguagaImg from "../../assets/paguaga.png";
import { useNavigate } from "react-router";

function Homepage() {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };
  const members = [
    { id: "1", name: "Avalos", image: avalosImg, url: "/avalos" },
    { id: "3", name: "Paguaga", image: paguagaImg, url: "/paguaga" },
  ];
  return (
    <>
      <Title title="REACTIVOS" />

      <div id="main-content">
        <section id="nosotros">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Somos dos desarrolladores web apasionados por la tecnología y en
            constante formación. Actualmente nos encontramos cursando la carrera
            de Desarrollo de Software, lo que nos permite combinar la práctica
            profesional con una base académica sólida. Nos une el interés por
            crear soluciones digitales que sean funcionales, escalables y
            centradas en el usuario. Trabajamos en equipo, compartiendo
            conocimientos y fortaleciendo nuestras habilidades en el area del
            desarrollo front-end. El enfoque de este proyecto es darnos a
            conocer con nuestros compañeros y crecer como profesionales mientras
            participamos durante el proyecto, fomentando la colaboración, la
            innovación y la mejora continua.
          </p>
        </section>

        <section id="integrantes">
          <h2>INTEGRANTES</h2>
          <h3>Grupo 16</h3>

          <div className={styles.cards}>
            {members.map((m) => (
              <div className={styles.card}>
                <img src={m.image} alt={`Integrante ${m.name}`} key={m.id} />
                <h3>{m.name}</h3>
                <button onClick={() => routeChange(m.url)}>Ver Perfil</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;
