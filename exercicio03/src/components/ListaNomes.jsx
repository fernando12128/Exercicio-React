function ListaNomes(){
  const nomes = ['Ana', 'Carlos', 'Beatriz', 'Pedro'];

  return (
    <ul>{nomes.map((nome)=>(<li>{nome}</li>))}</ul>
  )
}
export default ListaNomes