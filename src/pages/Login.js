import React from 'react';
import CustomInput from '../components/CustomInput';


const Login = () => {
    return (
        <div className="py-5" style={{background:"#ffd333"}}>
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
                <CustomInput type="text" placeholder ="Email Adress" id="email" /> 
                <CustomInput type="text" placeholder ="Password" id="pass" /> 

            </div>

        </div>

    )
};



export default Login;
