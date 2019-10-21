import React from 'react'

const ListTable = props => {

    return (
    <table className="striped-table">
        <thead>
            <tr>
             <th>List</th>
            </tr>
        </thead>
        <tbody>
            {props.list.length > 0 ? (
               props.list.map(item => (      
                <tr key={item.id}>
                <td><input
                        type="checkbox"
                        name={item.id}
                        onChange={ev => {

                            // Isso é um atalho para fazer as 2 linhas comentadas de baixo ao mesmo tempo
                            const { checked, name } = ev.currentTarget;
                            //const checked = ev.currentTarget.checked;
                            //const name = ev.currentTarget.name;
                            console.log('name', name); // vc pode usar o console.log
                            console.log('checked', checked); // vc pode usar o console.log
                            item.checked = checked; // aqui não precisa do {}, ele entende q foram criadas 2 variaveis: checked e name. Se vc usar o { checked } ele vai criar um objeto com {checked: valorDaVariavelChecked}

                            console.log('item alterado', item); // vc pode usar o console.log
                        }}
                        value={item.checked}
                    />
                    {item.listitem}
                </td>
                    <td>
                        <button 
                            className="button muted-button"
                            onClick={() => props.deleteItem(item.id)}                          
                        >
                            Delete
                        </button>
                    </td>
                </tr>
               ))
            ) : (
                <tr>
                    <td>No items yet.</td>
                </tr>
            )}
        </tbody>
    </table>
    )
}

export default ListTable