function Tabela() {
    const coisas = [
        { id: 1, nome: 'Ana', idade: 28 },
        { id: 2, nome: 'Carlos', idade: 35 },
        { id: 3, nome: 'Beatriz', idade: 22 },
        { id: 4, nome: 'Pedro', idade: 41 },
    ]
    return (
        <>
            <table>
                <colgroup span="4"></colgroup>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
                {coisas.map((coisa) => (
                    <tr>
                        <td>{coisa.id}</td>
                        <td>{coisa.nome}</td>
                        <td>{coisa.idade}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}
export default Tabela