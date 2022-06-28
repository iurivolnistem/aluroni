import stylesTema from 'styles/tema.module.scss';
import styles from './Cardapio.module.scss';
import { ReactComponent as Logo} from 'assets/logo.svg';
import Buscador from './Buscador';
import {useState} from 'react';
import Filtros from './Filtros';
import Ordernador from './Ordenador';
import Itens from './Itens';

export default function Cardapio(){
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState('');

    return(
        <section className={styles.cardapio}>
            <h3 className={stylesTema.titulo}>Cardápio</h3>
            <Buscador
                busca={busca}
                setBusca={setBusca}
            />
            <div className={styles.cardapio__filtros}>
                <Filtros
                    filtro={filtro}
                    setFiltro={setFiltro}
                />
                <Ordernador
                    ordenador={ordenador}
                    setOrdenador={setOrdenador}
                />
            </div>
            <Itens
                busca={busca}
                filtro={filtro}
                ordenador={ordenador}
            />
        </section>
    );
}