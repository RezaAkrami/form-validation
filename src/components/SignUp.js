import React , {useState , useEffect } from 'react';
import { validate } from './validate';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from './notify';
import styles from './SignUp.module.css'

const SignUp = () => {

    // state
    const [data, setData] = useState({
        name : "" ,
        email : "" ,
        password : "" ,
        confirmPassword : "" ,
        isAccepted : false ,
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
        setErrors(validate(data, "signup"))
    } , [data , focus]);

    //submit form
    function submitHandler(e) {
        e.preventDefault();
        if(!Object.keys(errors).length){
            console.log(data);
            notify('you sgin up successfully',"success")
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
    const {name,email,password,confirmPassword,isAccepted} = data;

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>

                <h2 className={styles.header}>SignUp</h2>

                <div className={styles.formField}>

                    <label>Name</label>

                    <input 
                        className={errors.name && focus.name ? styles.uncompleted : styles.formInput} 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}
                    />

                    {errors.name && focus.name && <span>{errors.name}</span>}

                </div>
                
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

                <div className={styles.formField}>

                    <label>Confirm Password</label>

                    <input 
                        className={errors.name && focus.name ? styles.uncompleted : styles.formInput}
                        type="password" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}
                    />

                    {errors.confirmPassword && focus.confirmPassword && <span>{errors.confirmPassword}</span>}

                </div>

                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer} >
                        <label>Accept our policies</label>

                        <input 
                            type="checkbox" 
                            name="isAccepted" 
                            value={isAccepted} 
                            onChange={changeHandler} 
                            onFocus={focusHandler}
                        />
                    </div>

                    {errors.isAccepted && focus.isAccepted && <span>{errors.isAccepted}</span>}

                </div>

                <div className={styles.formButtons}>
                    <a href='#'>Log in</a>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;