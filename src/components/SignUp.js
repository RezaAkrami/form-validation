import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>
                
                <div>
                    <label>Email</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" />
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input type="password" />
                </div>

                <div>
                    <label>Accept our policies</label>
                    <input type="text" />
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