import React, { useEffect } from 'react'
import {useForm, useFieldArray, FieldErrors} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import { type } from 'os';
import { getValue } from '@testing-library/user-event/dist/utils';

const YoutubeForm = () => {

  type FormValues = {
    username: string;
    email: string;
    channel: string;
    socials: {
      facebook: string;
      twitter: string;
    },
    phoneNumbers: string[];
    phNumbers: {
      number: string;
    }[];
    age: number;
    dob: Date;
  }

  let renderCount = 0; 
  renderCount++

  const onSubmit = (data: FormValues) =>{
    console.log('FOrm Submiited', data)
  }

  const onError = (errors: FieldErrors<FormValues>) =>{
    console.log("Form error", errors);
  };

  const form = useForm<FormValues>({
    defaultValues: {
      username: "Batman",
      email: "",
      channel: "",
      socials: {
        facebook: "",
        twitter: "",
      },
      phoneNumbers: ["", ""],
      phNumbers: [{number: ''}],
      age: 0,
      dob: new Date(),
    }
  });
  const {register, control, handleSubmit, formState, watch, getValues, setValue, reset, trigger } = form;
  const { errors, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount } = formState;
  console.log({isSubmitting, isSubmitted, isSubmitSuccessful, submitCount});
  // console.log(isDirty, isValid)

  const {fields, append, remove} =  useFieldArray({
    name: 'phNumbers',
    control
  })

  const watchUsername = watch("username");

  const handleGetValues = () =>{
    console.log("Get Values", getValues(["username","channel"]))
  }
  const handleSetValues = () =>{
      setValue("username", "");
  }
  
  useEffect(() =>{
    if(isSubmitSuccessful){
      reset();
    }
  },[isSubmitSuccessful, reset])
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>

        <h1>Youtube Form ({renderCount / 2})</h1>
        <h2>Watch Value: {watchUsername}</h2>

        <div className='form-control'>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" 
        {...register("username", {required: {
          value: true,
          message: 'Username is Required'
        }})} />
        <p className='error'>{errors.username?.message}</p>
        </div>


        <div className='form-control'>
        <label htmlFor="email">Email</label>
        <input type="text" id="email"
         {...register("email", {
          pattern: {
          value: /^[a-zA-Z0-9_'-]{1}[a-zA-Z0-9._'-]*([^.]@[^._])([a-zA-Z0-9_.'-])+[.]{1}[a-zA-Z0-9_'-]{2,}$/,
          message: 'Invalide Email Format',
         },
         validate: {
          notAdmin: (fieldValue) => {
            return(
              fieldValue !== "admin@example.com" || "Enter a different email address"
            );
          },
          notBlackListed: (fieldValue) =>{
            return !fieldValue.endsWith("baddomain" || "This domain is not supported");
          },
          emailAvailable: async (fieldValue) =>{
            const response = await fetch (`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`);
            const data = await response.json();
            return data.length == 0 || "Email already exist";
          },
         }
         })} 
         />
         <p className='error'>{errors.email?.message}</p>
         </div>

         <div className='form-control'>
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel"
         {...register("channel", {required: { value: true, message: 'Chanel name is required'
         }})}/>
         <p className='error'>{errors.channel?.message}</p>
         </div>

         
         <div className='form-control'>
        <label htmlFor="facebook">Facebook</label>
        <input type="text" id="facebook"
         {...register("socials.facebook", {required: { value: true,    message: 'facebook name is required'
         }})}/>
         </div>

         
         <div className='form-control'>
        <label htmlFor="twitter">Twiiter</label>
        <input type="text" id="twitter" {...register("socials.twitter", {required: { value: true, message: 'Twitter name is required'
         }})}/>
         </div>

         <div className='form-control'>
        <label htmlFor="primary-phone">Primary Phone Number</label>
        <input type="text" id="primary-phone" {...register("phoneNumbers.0", {required: { value: true, message: 'Enter a valid number'
         }})}/>
         </div>

         <div className='form-control'>
        <label htmlFor="secondary-phone">Secondary Phone Number</label>
        <input type="text" id="secondary-phone" {...register("phoneNumbers.1", {required: {value: true, message: 'Enter a valid number'}})}/>
        {/* <p className='error'>{errors.phone?.message}</p> */}
         </div>  

         <div className='form-control'> 
         <label>List of Phone Numbers</label>
         <div>
          {
            fields.map((field, index) =>{
              return(
               <div className='form-control' key={field.id}>
               <input type='text' {...register(`phNumbers.${index}.number` as const)} />
               {
                index > 0 && (
                  <button type='button' onClick={() => remove(index)}>Remove</button> 
                )
               }
               </div>
              )
             })
          }
        <button type='button' onClick={() => append({number: ""})}> Add Phone Number</button>
         </div>
         </div>

         <div className='form-control'>
        <label htmlFor="age">Age</label>
        <input type="number" id="age"
         {...register("age", { valueAsNumber: true, required: { value: true, message: 'Age is required'}})}/>
         <p className='error'>{errors.age?.message}</p>
         </div>

         <div className='form-control'>
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob"
         {...register("dob", { valueAsDate: true, required: { value: true, message: 'Date of Birth is required'
         }})}/>
         <p className='error'>{errors.dob?.message}</p>
         </div>

         <button type="button" onClick={handleGetValues}>Get Values</button>
         <button type="button" onClick={handleSetValues}>Set Values</button>
         <button type="button" onClick={() => reset()}>Reset</button>
         <button type="button" onClick={() => trigger()}>Validate</button>


        <button disabled={!isDirty || !isValid}>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default YoutubeForm
