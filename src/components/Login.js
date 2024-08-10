
import { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

function Login() {

    const [isSubmitted , setIsSubmitted] = useState(false)

    const [errorMsg, setErrorMsg] = useState({});


    let navigate = useNavigate();

    const loginCreds = [
        {
            username: "admin",
            password: "admin"
        },
        {
            username: "user1",
            password: "pass1"
        }
    ];

    function handleSubmit(event) {
        event.preventDefault();

        let {uname, pass} = document.forms[0];

        let userData = loginCreds.find((user) => user.username === uname.value)

        if(userData) {
            if(userData.password === pass.value) {
                setIsSubmitted(true);
            }else {
                setErrorMsg({name: "pass", message: "invalid password"})
                    //show error message password incorrect
            }
        }else {
            setErrorMsg({name: "uname", message: "invalid username"})
                //show error message username incorrect
        }
    }
    function showErrorMsg(field) {
        return field === errorMsg.name && (
            <div className='error'>{errorMsg.message}</div>
        )

    }

    const renderForm = (
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <label>Username :</label>
                        <input type='text' name='uname' required></input>
                        {showErrorMsg("uname")}
                    </div>
                    <div className='input-container'>
                        <label>Password :</label>
                        <input type='password' name='pass' required></input>
                        {showErrorMsg("pass")}
                    </div>
                    <div className='button-container'>
                        <input type='submit'/>
                    </div>
                </form>
            </div>
    );



    return(
        <div className="app">
            <div className='login-form'>
            <div className='title'>Login</div>
            {isSubmitted ? navigate("/home") : renderForm}
            </div>
        
        </div>
    )
}

export default Login;