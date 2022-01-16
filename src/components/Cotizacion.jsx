import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const RersultadoDiv = styled.div`
    color: #FFF;
    font-family:Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;
    span{
        font-weight: bold;
    }

`;


const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0 ) return null;
    console.log(resultado); 
    return (  

        <RersultadoDiv>
        <Precio>El Precio es : <span>{resultado.PRICE}</span></Precio>
        <Info>El precio mas alto del dia : <span>{resultado.HIGHDAY}</span></Info>
        <Info>El precio mas bajo del dia : <span>{resultado.LOWDAY}</span></Info>
        <Info>Variacion últimas 24 horas : <span>{resultado.CHANGEPCT24HOUR}</span></Info>
        <Info>Ultima actualización : <span>{resultado.LASTUPDATE}</span></Info>

        </RersultadoDiv>
    );
}

/*Cotizacion.propTypes = {
    resultado: PropTypes.obje.isRequired
}*/
 
export default Cotizacion;


