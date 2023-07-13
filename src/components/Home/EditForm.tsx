import React,{useState, useEffect} from "react";
import style from './EditForm.module.css'
import { Curd } from "../../data_models/Crud.model";

const EditForm:React.FC<{currentUser:Curd, updateUser:(userDetails:Curd)=>void, setIsEdtting:(edit:boolean)=>void}> = (props) => {

    const [user, setUser] = useState<Curd>(props.currentUser)

   useEffect(()=>{
    setUser(props.currentUser)
   },[props])

    const userDetailsHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setUser((prev)=>{
            return {
                ...prev,
                // id:Math.random(),
                [name]:value,
            }
        })
    }

    const submitHandler = (e:React.FormEvent) => {
        e.preventDefault()
        props.updateUser(user)
    }

  return (
    <form className={style.curd} onSubmit={submitHandler}>
      <div className={style.control}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={userDetailsHandler }
          value={user.name}
        />
      </div>
      <div className={style.control}>
        <label htmlFor="tel">Telephone</label>
        <input
          type="number"
          name="tel"
          id="tel"
          onChange={userDetailsHandler }
          value={user.tel}
        />
      </div>
      <div className={style.control}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={userDetailsHandler }
          value={user.email}
        />
      </div>
      <div className={style.actions}>
        <button type="submit">Update</button>
        <button onClick={()=>{
            props.setIsEdtting(false)
        }}>Cancel</button>
      </div>
    </form>
  );
};

export default EditForm;
