import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React from "react";
import '../styles/SignUpForm.css';





const LoginCard = ({
    onSubmit,
    onChange,
    errors,
    user,
    type,
    pwMask,
    score,
    onPwChange
}) => {
    return (
        <div className="loginBox">
            <h1>Log In</h1>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

            <form onSubmit={onSubmit}>
                <TextField
                    name="userName"
                    floatingLabelText="user name"
                    value={user.userName}
                    onChange={onChange}
                    errorText={errors.userName}
                />
                <br />

                <TextField
                    type={type}
                    name="password"
                    floatingLabelText="password"
                    value={user.password}
                    onChange={onPwChange}
                    errorText={errors.password}
                />

                <div className="pwStrRow">
                    {score >= 1 && (
                        <div>
                            <FlatButton
                                className="pwShowHideBtn"
                                label="show password" onClick={pwMask}
                                style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
                            />
                        </div>
                    )}
                </div>

                <br />
                <RaisedButton
                    className="signUpSubmit"
                    primary={true}
                    type="submit"
                    label="submit"
                />
            </form>
            <p>
                Don't have an account? <br />
                <a href="/login">Sign up here!</a>
            </p>
        </div>
    )
}

export default LoginCard;