import cardapio from 'data/cardapio.json';
import filtros from 'data/filtros.json';

export type Cardapio = typeof cardapio;
export type Prato = typeof cardapio[0];
export type IFiltros = typeof filtros[0];