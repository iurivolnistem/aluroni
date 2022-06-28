import Item from './Item';
import cardapio from '../../../data/cardapio.json';
import styles from './Itens.module.scss';
import {useEffect, useState} from 'react';
import { Cardapio } from 'types/types';

interface Props{
    busca: string,
    filtro: number | null,
    ordenador: string
}

export default function Itens(props: Props){
    const [lista, setLista] = useState(cardapio);
    const {busca, filtro, ordenador} = props;

    function Buscar(titulo : string){
        const regex = new RegExp(busca, 'i');
        return regex.test(titulo);
    }

    function Filtrar(id: number){
        if(filtro !== null){
            return filtro === id;
        }

        return true;
    }

    function Ordenar(novaLista: Cardapio){
        switch (ordenador){
        case 'porcao':
            return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
        case 'qtd_pessoas':
            return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
        case 'preco':
            return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
        default:
            return novaLista;
        }
    }

    useEffect(() => {
        const novaLista = cardapio.filter(item => Buscar(item.title) && Filtrar(item.category.id));
        setLista(Ordenar(novaLista));
    },[busca, filtro, ordenador]);

    return(
        <div className={styles.itens}>
            {lista.map((item) => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    );
}