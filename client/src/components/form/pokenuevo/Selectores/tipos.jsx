import React, { useEffect } from 'react';
import styles from "./seletipos.modules.css";
import { useDispatch, useSelector } from "react-redux";
import {PKMTIPOS} from "../../../../redux/actions"

export default function SeleTipos ({tipo, onChange, isDefault}){
   const selecTipos = useSelector((state)=> state.PoKeTipos)
   const dispatch = useDispatch()

  useEffect(() => {
    dispatch(PKMTIPOS())
  },[dispatch])

    return (
        <select className={styles.select} value={tipo} onChange={(e)=> onChange(e.target.value, e.target.selectedOptions[0].label)}>
        <option value="" disabled selected={isDefault}> Tipo </option>
        {selecTipos.map((tipo)=><option key={tipo.id} value={tipo.id} label={tipo.name}>{tipo.name}</option>)}
        </select> 
    )
}