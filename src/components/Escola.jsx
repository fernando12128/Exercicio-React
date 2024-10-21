function Escola(props){
    if(props.estudante === true){
        return <h1>Você é um estudante</h1>
    }else{
        return <h1>Você não é um estudante</h1>
    }
}

export default Escola