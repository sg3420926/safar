import React from 'react'
import Data from './Data'
function Coading(props) {
    return (
        <div  className="d4" onClick={props.set}>
            <table>
                <caption>Coading Knowledge</caption>
                <tr>
                    <td>
                        Programming Lang:-
                    </td>
                    <td>{Data[0].Coading.proLang}</td>
                </tr>
                <tr>
                    <td>Scripting:-</td>
                    <td>{Data[0].Coading.Scripting}</td>
                </tr>
                <tr>
                    <td>Tools:-</td>
                    <td>{Data[0].Coading.tools}</td>
                </tr>
                <tr>
                    <td>Editor:-</td>
                    <td>{Data[0].Coading.Editor}</td>
                </tr>
            </table>
        </div>
    )
}

export default Coading
