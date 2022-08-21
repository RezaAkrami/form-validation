import React , {useState} from 'react';

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

    //destructuring data
    const {name,email,password,confirmPassword,isAccepted} = data;

    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={changeHandler} />
                </div>
                
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={email} onChange={changeHandler}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={changeHandler}/>
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/>
                </div>

                <div>
                    <label>Accept our policies</label>
                    <input type="checkbox" name="isAccepted" value={isAccepted} onChange={changeHandler}/>
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