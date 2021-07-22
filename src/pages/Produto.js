import React from 'react';
import { useLocation } from 'react-router-dom';

// usando querys
function useQuery(){
    return new URLSearchParams(useLocation().search);
}


function Produto(){

    
    let query = useQuery();

    let idProduto = query.get('p');

    return(
        <>
            <h4>Pagina Produto</h4>
            <p>Pagina Produto de {idProduto}</p>
            <h6>ID: {idProduto}</h6>
        </>
    );
}

export default Produto;