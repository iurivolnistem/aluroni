import styles from './Filtro.module.scss';
import filtros from 'data/filtros.json';
import classNames from 'classnames';
import { IFiltros } from 'types/types';

type IOpcao = IFiltros;

interface Props {
  filtro: number | null,
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}


export default function Filtros({filtro, setFiltro}: Props){
    function selecionarFiltro(opcao: IOpcao){
        if(filtro === opcao.id){
            return setFiltro(null);
        }

        return setFiltro(opcao.id);
    }

    return(
        <div className={styles.filtros}>
            {filtros.map(opcao => (
                <button
                    key={opcao.id}
                    onClick={() => selecionarFiltro(opcao)}
                    className={classNames({
                        [styles.filtros__filtro]: true,
                        [styles['filtros__filtro--ativo']]: filtro === opcao.id
                    })}>
                    {opcao.label}
                </button>
            ))}
        </div>
    );
}

