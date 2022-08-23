import React , {useState , useEffect } from 'react';
import { validate } from './validate';

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

    // validate input value
    const [errors, setErrors] = useState({});
    useEffect(()=>{
        setErrors(validate(data, "signup"))
    } , [data]);

    //destructuring data
    const {name,email,password,confirmPassword,isAccepted} = data;

    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={changeHandler} />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={email} onChange={changeHandler}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={changeHandler}/>
                    {errors.password && <span>{errors.password}</span>}
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/>
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                <div>
                    <label>Accept our policies</label>
                    <input type="checkbox" name="isAccepted" value={isAccepted} onChange={changeHandler}/>
                    {errors.isAccepted && <span>{errors.isAccepted}</span>}
                </div>

                <div>
                    <button type='submit'>Log in</button>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;