import React from 'react'
import Data from './Data'
function College(props) {
    return (
        <div  className='d4' onClick={props.set}>
            <table>
                <caption>College Data</caption>
                <tr>
                    <td>
                        College Name:- 
                    </td>
                    <td>
                       {Data[0].College.Name}
                    </td>
                </tr>
                <tr>
                    <td>
                    Branch:-
                    </td>
                     <td>
                         {Data[0].College.branch}
                     </td>
                </tr>
                <tr>
                    <td>
                    Current sem:-
                    </td>
                     <td>
                         5th semester
                     </td>
                </tr>
                <tr>
                    <td>
                    Passing year:-
                    </td>
                     <td>
                     2023
                     </td>
                </tr>
            </table>
        </div>
    )
}

export default College
