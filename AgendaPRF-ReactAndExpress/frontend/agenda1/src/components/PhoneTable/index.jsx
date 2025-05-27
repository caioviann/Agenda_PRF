import './PhoneTable.css'
function PhoneTable({ data }){
    return (
        <table>
            <thead>
                <tr>
                    <th>Setor</th>
                    <th>Nome</th>
                    <th>VOIP</th>
                    <th>Telefone externo</th>
                    <th>Celular</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, idx) => {
                    const voip = item.PhoneModels.find(p => p.type === 'voip')?.number || '';
                    const telefoneExterno = item.PhoneModels.find(p => p.type === 'telefone externo')?.number || '';
                    const celular = item.PhoneModels.find(p => p.type === 'celular')?.number || '';
                

                    return (
                    <tr key={idx} className={item.emphasis ? 'main-sectors' : ''}>
                        <td>{item.name}</td>
                        <td>{item.sector}</td>
                        <td>{voip}</td>
                        <td>{telefoneExterno}</td>
                        <td>{celular}</td>
                    </tr>
                    
                    )
                    
                })}
            </tbody>
        </table>
    )
}

export default PhoneTable