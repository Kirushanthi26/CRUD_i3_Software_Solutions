import React from "react";

const UserItems: React.FC<{
  nameProp: string;
  telProp: number;
  emailProp: string;
  onRemoveCurdItem: () => void;
  onEditRow:()=>void
}> = (props) => {



  return (
    <tr>
      <td>{props.nameProp}</td>
      <td>{props.telProp}</td>
      <td>{props.emailProp}</td>
      <td>
        <button onClick={props.onEditRow}>Edit</button>
        <button onClick={props.onRemoveCurdItem}>Delete</button>
      </td>
    </tr>
  );
};

export default UserItems;
