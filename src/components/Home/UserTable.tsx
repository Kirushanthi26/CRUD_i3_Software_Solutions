import React from "react";
import style from "./UserTable.module.css";
import { Curd } from "../../data_models/Crud.model";
import UserItems from "./UserItems";

const UserTable: React.FC<{ curdList: Curd[], onRemoveCurdItem: (id:number) => void }> = (props) => {
  return (
    <table className={style.tablestyle}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Telephone</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.curdList.length>0 ?(props.curdList.map((item) => (
          <UserItems
            key={item.id}
            nameProp={item.name}
            telProp={item.tel}
            emailProp={item.email}
            onRemoveCurdItem={props.onRemoveCurdItem.bind(null, item.id)}
          />
        ))):(
            <tr>
                <td colSpan={4}><h3>No Users</h3></td>
            </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
