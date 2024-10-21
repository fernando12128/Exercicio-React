function Idade(props){


    if(props.numero >= 18){
        return(
            <p>Você é maior</p>
        )
    }else{
        return(
            <p>Você é menor de Idade</p>
        )
    }
}

export default Idade