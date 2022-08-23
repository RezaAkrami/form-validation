import React , {useState , useEffect } from 'react';
import { validate } from './validate';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from './notify';
import styles from './SignUp.module.css';
import {Link} from 'react-router-dom';

const Login = () => {

    // state
    const [data, setData] = useState({
        email : "" ,
        password : "" ,
    });

    //set state
    function changeHandler(event) {
        let target = event.target;

        if( target.name === "isAccepted" ){
            setData({ ...data , [target.name] : target.checked });
        }else{
            setData({ ...data , [target.name] : target.value });
        }
    }
    
    //focus input
    const [focus, setFocus] = useState({});
    function focusHandler(e) {
        setFocus({...focus , [e.target.name] : true });
    }

    // validate input value
    const [errors, setErrors] = useState({});
    useEffect(()=>{
        setErrors(validate(data, "Login"))
    } , [data , focus]);

    //submit form
    function submitHandler(e) {
        e.preventDefault();
        if(!Object.keys(errors).length){
            console.log(data);
            notify('you Login successfully',"success")
        }else{
            setFocus({
                name : true ,
                email : true ,
                password : true ,
                confirmPassword : true ,
                isAccepted : true ,
            });
            notify('invalid data',"error")
        }
    }

    //destructuring data
    const {email,password} = data;

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>

                <h2 className={styles.header}>Login</h2>
                
                <div className={styles.formField}>

                    <label>Email</label>

                    <input 
                        className={errors.name && focus.name ? styles.uncompleted : styles.formInput}
                        type="text" 
                        name="email" 
                        value={email} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}
                    />

                    {errors.email && focus.email && <span>{errors.email}</span>}

                </div>

                <div className={styles.formField}>

                    <label>Password</label>

                    <input 
                        className={errors.name && focus.name ? styles.uncompleted : styles.formInput}
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}
                    />

                    {errors.password && focus.password && <span>{errors.password}</span>}

                </div>

                <div className={styles.formButtons}>
                    <Link to='/signup'>Sign up</Link>
                    <button type='submit'>Log in</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;