import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss';
import stylesTema from 'styles/tema.module.scss';
import React from 'react';

export default function PaginaPadrao({children}: {children?: React.ReactNode}){
    return(
        <>
            <header className={styles.cabecalho}>
                <div className={styles.cabecalho__texto}>
                    A casa do código e da massa
                </div>
            </header>
            <div className={stylesTema.container}>
                <Outlet />
                {children}
            </div>
        </>
        
    );
}