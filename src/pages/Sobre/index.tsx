import styles from './sobre.module.scss';
import stylesTema from 'styles/tema.module.scss';
import casa from 'assets/casa.png';
import Textos from 'data/sobre.json';

export default function Sobre(){
    return(
        <section>
            <h3 className={stylesTema.titulo}>Sobre</h3>
            <div className={styles.sobreNos}>
                <img src={casa} alt="Imagem do restaurante Aluroni" />
                <div className={styles.sobreNos__texto}>
                    <p>{Textos.Sobre.texto1}</p>
                    <p>{Textos.Sobre.texto2}</p>
                    <p>{Textos.Sobre.texto3}</p>
                </div>
            </div>
        </section>
    );
}