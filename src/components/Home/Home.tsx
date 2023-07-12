import React, { Fragment } from "react";
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

  return (
    <Fragment>
      <DetailsForm />
      <UserTable curdList={curdDetails}/>
    </Fragment>
  );
};

export default Home;
