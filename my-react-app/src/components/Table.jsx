import React from "react";


const Table = ({firstVersion}) =>{

    return(

        <div>
            <table className="contentTable">
                <tbody>
                    <tr>
                        <th>First version</th>
                        <th>Second version</th>
                        <th>Operation</th>
                    </tr>
                    <tr>
                        <td>{firstVersion}</td>{}
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}



export default Table;