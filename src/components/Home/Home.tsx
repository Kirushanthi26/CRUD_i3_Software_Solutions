import React, { Fragment, useState } from "react";
// import style from "./Home.module.css";
import DetailsForm from "./DetailsForm";
import UserTable from "./UserTable";
import { Curd } from "../../data_models/Crud.model";

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

  return (
    <Fragment>
      <DetailsForm onAddUserDetailsList={addUserDetailsListHandler}/>
      <UserTable curdList={userDetailsList}  onRemoveCurdItem={onRemoveCurdItemHandler}/>
    </Fragment>
  );
};

export default Home;
