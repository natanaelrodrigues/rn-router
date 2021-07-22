import React from 'react';
import { useParams} from 'react-router-dom';

function Categoria(){

    let { cat, id } = useParams();

    return(
        <>
            <h4>Pagina Categoria</h4>
            <p>Pagina Categoria de {cat}</p>
            <h6>ID: {id}</h6>
        </>
    );
}

export default Categoria;