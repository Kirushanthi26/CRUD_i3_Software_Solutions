import React, { useState } from "react";
import style from './DetailsForm.module.css'
import { Curd } from "../../data_models/Crud.model";

const DetailsForm:React.FC<{onAddUserDetailsList:(userDetail:Curd)=>void}> = (props) => {
    const [userDetails, setUserDetails] = useState<Curd>({
        id:+'',
        name:'',
        tel: parseInt(''),
        email:''
    })

    const userDetailsHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setUserDetails((prev)=>{
            return {
                ...prev,
                id:Math.random(),
                [name]:value,
            }
        })

    }

    const submitHandler = (e:React.FormEvent) => {
        e.preventDefault()
        props.onAddUserDetailsList(userDetails)

       console.log(userDetails)

        setUserDetails({        
            id:+'',
            name:'',
            tel:parseInt(''),
            email:''})
    }

  return (
    <form className={style.curd} onSubmit={submitHandler}>
      <div className={style.control}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={userDetailsHandler} value={userDetails.name}/>
      </div>
      <div className={style.control}>
        <label htmlFor="tel">Telephone</label>
        <input type="number" name="tel" id="tel" onChange={userDetailsHandler} value={userDetails.tel}/>
      </div>
      <div className={style.control}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={userDetailsHandler} value={userDetails.email}/>
      </div>
      <div className={style.actions}>
        <button type="submit">ADD</button>
      </div>
    </form>
  );
};

export default DetailsForm;
