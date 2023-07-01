
import './App.css';
import {useForm} from 'react-hook-form';
import { useRef } from 'react';

function App() {

  const {register, watch,  formState: { errors }, handleSubmit} = useForm();

    console.log(watch('email'));
  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) =>{
    console.log(data)
    alert(data.name+"님 로그인 되었습니다");

  }

  return (
    <div className="App">
  <form 
    onSubmit={handleSubmit(onSubmit)}
  >
      {/* register your input into the hook by invoking the "register" function */}
      <label>Email</label>
      <input name="email" {...register("email", {required:true, 
      pattern: /^\S+@\S+$/i
    })}/>
    {errors.email && <p>This email field is required</p>}


      <label>Name</label>
      <input name="name" {...register("name", {required:true, maxLength: 10})}
       />
  {errors.name && errors.name.type === "required" && <p>This name field is required</p>}
  {errors.name && errors.name.type === "maxLength" && <p>Your input exceed maximum length</p>}
     
      <label>password</label>
      <input name="password"
      type='password'
       {...register("password", {required:true, minLength: 6})}
       />
  {errors.password && errors.password.type === "required" && (<p>This password field is required</p>)}
  {errors.password && errors.password.type === "minLength" && (<p>Password must have at least 6 characters</p>)}
      
      <label>Password Confirm</label>
      {/* include validation with required or other standard HTML validation rules */}
      <input name='password_confirm'
       type='password'
      {...register("password_confirm", { required: true, validate:(value)=>
      value === password.current })}
       />
        {errors.password_confirm && errors.password_confirm.type === "required" && (<p>This password confirm field is required</p>)}
  {errors.password_confirm && errors.password_confirm.type === "validate" && <p>The password do not match</p>}


      <input type="submit" />
    </form>
    </div>
  );
}

export default App;
