import { Field, Formik,Form} from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginTC } from '../../store/reduser/authReduser'
import './Login.css'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  
    const dispatch = useDispatch()

    const authHendler = ({email,password}) => {
       dispatch(LoginTC(email,password))
    }  
   


  return (
    <div className='login'>
        <h1>Login</h1>
        <Formik
            initialValues={{
                email : "",
                password : ""
            }}
            onSubmit={(values) => authHendler(values)
            }
            >
                
            <Form>
                <Field name='email' placeholder='email'/>
                <Field name='password' placeholder='password' type='password'/>
                <button type='submit'>Login</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Login