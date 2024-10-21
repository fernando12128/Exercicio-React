function Nivel(props){
    return props.nivel === "iniciante" ? <h1>Bem-vindo, iniciante!</h1> : props.nivel === "intermediário" ? <h1>Você está progredindo!</h1> : props.nivel === "avançado" ? <h1>Parabéns, especialista!</h1> : null
}
export default Nivel