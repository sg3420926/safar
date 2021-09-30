import React from 'react'
import da from './Data'
function School(props) {
    return (
        <div className='d4' onClick={props.set}>
          <table>
              <caption>Schooling Data</caption>
               <tr>
                   <td>
                       My First School(1st to 5th):-
                   </td>
                   <td>
                       {da[0].School.Name1}
                   </td>
               </tr>
               <tr>
                   <td>
                   My Second School(6th to 12th):-
                   </td>
                   <td>
                       {da[0].School.Name2}
                   </td>
               </tr>
               <tr>
                   <td>
                       10th marks:-
                   </td>
                   <td>
                       {da[0].School.tenth.Marks}({da[0].School.tenth.Board})({da[0].School.tenth.year})
                   </td>
               </tr>
               <tr>
                   <td>
                       12th marks:-
                   </td>
                   <td>
                       {da[0].School.tweth.Marks}({da[0].School.tweth.Board})({da[0].School.tweth.year})
                   </td>
               </tr>
               <tr>
                   <td>
                       Stream:-
                   </td>
                   <td>
                       PCM
                   </td>
               </tr>
          </table>
        </div>
    )
}

export default School
