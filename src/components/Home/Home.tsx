import React, { Fragment, useState } from "react";
// import style from "./Home.module.css";
import DetailsForm from "./DetailsForm";
import UserTable from "./UserTable";
import { Curd } from "../../data_models/Crud.model";
import EditForm from "./EditForm";

const Home: React.FC = (props) => {
  const curdDetails: Curd[] = [
    {
      id: Math.random(),
      name: "kiru",
      tel: +9411758496,
      email: "kiru@gmail.com",
    },
    {
      id: Math.random(),
      name: "lisha",
      tel: +9411758455,
      email: "lisha@gmail.com",
    },
  ];

  const [userDetailsList, setuserDetailsList] = useState<Curd[]>(curdDetails)

  const addUserDetailsListHandler = (userDetail:Curd) => {
    setuserDetailsList((prev)=>{
      return [...prev, userDetail]
    })
  }

  const onRemoveCurdItemHandler = (curdUserId: number) => {
    setuserDetailsList((prevs)=>{
      return prevs.filter(curdUser => curdUser.id !== curdUserId)
    })
  }

  //editing 
  const [isEditting, setIsEdtting] = useState<boolean>(false)

  const [currentUser, setCurrentUser] = useState<Curd>({
    id:+'',
    name:'',
    tel: parseInt(''),
    email:''
})

  const editRow = (editUserDetails:Curd) => {
    setIsEdtting(true)

    // console.log(editUserDetails.id)

    setCurrentUser({
      id:editUserDetails.id,
      name:editUserDetails.name,
      tel:editUserDetails.tel,
      email:editUserDetails.email
    })

    // console.log(currentUser)
  }

  const updateUser = (updateUser:Curd) => {
    setIsEdtting(false)
    setuserDetailsList(userDetailsList.map((user)=>(user.id === updateUser.id ? updateUser:user)))
  }

  return (
    <Fragment>
      {!isEditting &&<DetailsForm onAddUserDetailsList={addUserDetailsListHandler}/>}
      {isEditting && <EditForm currentUser={currentUser} updateUser={updateUser} setIsEdtting={setIsEdtting}/>}
      <UserTable curdList={userDetailsList}  onRemoveCurdItem={onRemoveCurdItemHandler} onEditRow={editRow}/>
    </Fragment>
  );
};

export default Home;
