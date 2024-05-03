import React from 'react';

const TruncateText = ({ texto, comprimentoMaximo }) => {
    if (texto.length <= comprimentoMaximo) {
        return <span>{texto}</span>;
    } else {
    const textoTruncado = texto.substring(0, comprimentoMaximo) + '...';
        return <span>{textoTruncado}</span>;
    }
}
   
export default TruncateText;