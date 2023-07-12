import React from "react";

const UserItems:React.FC<{nameProp:string, telProp:number, emailProp:string}> = (props) => {
  return (
    <tr>
      <td>{props.nameProp}</td>
      <td>{props.telProp}</td>
      <td>{props.emailProp}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default UserItems;
