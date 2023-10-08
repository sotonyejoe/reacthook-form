import React from 'react'
import {FieldErrors, useForm} from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const YupYoutube = () => {

    type FormValues = {
        username: string;
        email: string;
        channel: string;
    }

    const schema = yup.object({
        username: yup.string().required('username is required'),
        email: yup
        .string()
        .email('email format is not valid')
        .required('email is required'),
        channel: yup.string().required('channel is required'),
    })

    const form = useForm<FormValues>({
        defaultValues:{
            username: "",
            email: "",
            channel: "",
        },
        resolver: yupResolver(schema)
    });

    const {register, control, formState, handleSubmit} = form;
    const {errors} = formState

    const onSubmit = (data: FormValues) =>{ 
        console.log('form is submitted', data)
    }
    const onError = (errors: FieldErrors<FormValues>) =>{
        console.log('Form error', errors);
    }

  return (
    <div>
      <h1>Yup Youtube Form</h1>

      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div className='form-control'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' {...register('username')} />
            <p className='error'>{errors.username?.message}</p>
        </div>

        <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' {...register('email', {
                  pattern: {
                    value: /^[a-zA-Z0-9_'-]{1}[a-zA-Z0-9._'-]*([^.]@[^._])([a-zA-Z0-9_.'-])+[.]{1}[a-zA-Z0-9_'-]{2,}$/,
                    message: 'Invalide Email Format',
                   },
            })} />
            <p className='error'>{errors.username?.message}</p>
        </div>

        <div className='form-control'>
            <label htmlFor='channel'>Channel</label>
            <input type='text' id='channel' {...register('channel')} />
            <p className='error'>{errors.channel?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default YupYoutube
