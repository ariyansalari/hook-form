import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Ires } from './Type';
import React from "react";

export const Useregister = () => {
    const resSchema=yup.object({
        email:yup.string().required().email(),
        password:yup.string().required()
      })
    
      const {register,formState:{errors},handleSubmit}=useForm<Ires>({
    resolver: yupResolver(resSchema),
    mode:"onSubmit"
      })
    
      const hanlderes=(data:Ires)=>{
    console.log(data)
      }
    const [passwordType,SetpasswordType]=React.useState<"password"|"text">("password")

    return {
        passwordType,
        SetpasswordType,
        hanlderes,
        register,
        errors,
        handleSubmit
    }
    }