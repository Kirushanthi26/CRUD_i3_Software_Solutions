import React from "react";
import style from './DetailsForm.module.css'

const DetailsForm = () => {


  return (
    <form className={style.curd}>
      <div className={style.control}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className={style.control}>
        <label htmlFor="telNumber">Telephone</label>
        <input type="tel" name="telNumber" id="telNumber" />
      </div>
      <div className={style.control}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className={style.actions}>
        <button type="submit">ADD</button>
      </div>
    </form>
  );
};

export default DetailsForm;
