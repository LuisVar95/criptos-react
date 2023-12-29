import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: start;
    gap: 3rem;
`
const Imagen = styled.img`
    display: block;
    width: 120px;
    margin-top: 5rem;
`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`


const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE}=
    resultado

 
    return (
    
    <Contenedor>
        <Imagen
            src={`https://cryptocompare.com/${IMAGEURL}`}
        />
      <div>
        <Precio>El Precio es de: <span>{PRICE}</span></Precio>
        <Texto>El Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
        <Texto>El Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
        <Texto>Variaciones: últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualizacion: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>

  )
}

export default Resultado