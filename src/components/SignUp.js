import React , {useState , useEffect } from 'react';
import { validate } from './validate';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from './notify';

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
            notify("success")
        }else{
            setFocus({
                name : true ,
                email : true ,
                password : true ,
                confirmPassword : true ,
                isAccepted : true ,
            });
            notify("error")
        }
    }

    //destructuring data
    const {name,email,password,confirmPassword,isAccepted} = data;

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.name && focus.name && <span>{errors.name}</span>}
                </div>
                
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={email} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.email && focus.email && <span>{errors.email}</span>}
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.password && focus.password && <span>{errors.password}</span>}
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.confirmPassword && focus.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                <div>
                    <label>Accept our policies</label>
                    <input type="checkbox" name="isAccepted" value={isAccepted} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.isAccepted && focus.isAccepted && <span>{errors.isAccepted}</span>}
                </div>

                <div>
                    <button type='submit'>Log in</button>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;