import React from 'react'
import style from '../Style/ImputsApp.module.css';

export default function InputsApp(val: any) {

  return (
    <>
      <p > {val.mssg} </p>
      <input type={val.type} className={style.gato}/>
    </>
  )
}
