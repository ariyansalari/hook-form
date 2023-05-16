import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField,Box,Container, InputAdornment, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Useregister } from './Useregister';

export const App=()=>{

 const{    
  passwordType,
  SetpasswordType,
  hanlderes,
  register,
  errors,
  handleSubmit
}= Useregister()
    return (

        <Container>

   <Box component="form" onSubmit={handleSubmit(hanlderes)} sx={
    {
      display:"flex",
      flexDirection:"column",
    }
   } >
   <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          error={Boolean(errors.email?.message)}
helperText={errors.email?.message}
          sx={{ m: 1 }}
          InputProps={{
            startAdornment: (<InputAdornment position="start"><AccessAlarmIcon/></InputAdornment>),
            ...register("email")
          }
        }
        />
              <TextField type={passwordType}
          label="With normal TextField"
          id="outlined-start-adornment"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password")}
          sx={{ m: 1 }}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton onClick={()=>{
                SetpasswordType((prev)=>{
                  if(prev==="password") return "text";
                  return "password"
                })
              }}>

              {passwordType==="text"?<VisibilityIcon/>:<VisibilityOffIcon/>}

              </IconButton>
              </InputAdornment>,
          }}
        />
 
<Button type='submit'>sad</Button>
       </Box>

        </Container>
    

     );
}

