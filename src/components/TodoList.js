import React from "react";
import './todolist.css'

const TodoList = (allTOdo) => {
  console.log("allTOdo in list ", allTOdo.allTodo[0].newTodoName);
  return (
//     <div style={{display:'flex', justifyContent:'center'}}>
//       <div>
//         {allTOdo?.allTodo?.map((item, index) => (
//           <div>
//             <table>
//               <tr>
//                 <th>Sr.No.</th>
//                 <th>Todo Name </th>
//                 <th>Description </th>
//               </tr>
//               <tr>
//     <td>{index + 1 }</td>
//     <td>{item?.newTodoName}</td>
//     <td>{item?.newTodoDescription}</td>
//   </tr>
//             </table>
//           </div>
//         ))}
//       </div>
//     </div>

<div style={{ display: "flex", justifyContent: "center" , background:'grey', padding:'10px' }}>
<div>
  <table>
    <thead>
      <tr>
        <th>Sr.No.</th>
        <th>Todo Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {allTOdo?.allTodo?.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item?.newTodoName}</td>
          <td>{item?.newTodoDescription}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
  );
};

export default TodoList;
