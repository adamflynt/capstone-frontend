import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React from "react";
import '../styles/SignUpForm.css';
import PasswordStr from "./PasswordStr";



const SignUpCard = ({
    onSubmit,
    onChange,
    errors,
    user,
    score,
    btnTxt,
    type,
    pwMask,
    onPwChange
}) => {
    return (
        <div className="loginBox">
            <h1>Sign Up</h1>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

            <form onSubmit={onSubmit}>
                <TextField
                    name="firstName"
                    floatingLabelText="first name"
                    value={user.firstName}
                    onChange={onChange}
                    errorText={errors.firstName}
                />
                <br />

                <TextField
                    name="lastName"
                    floatingLabelText="last name"
                    value={user.lastName}
                    onChange={onChange}
                    errorText={errors.lastName}
                />
                <br />

                <TextField
                    name="birthDate"
                    floatingLabelText="date of birth"
                    value={user.birthDate}
                    onChange={onChange}
                    errorText={errors.birthDate}
                />
                <br />

                <TextField
                    name="ssn"
                    floatingLabelText="ssn"
                    value={user.ssn}
                    onChange={onChange}
                    errorText={errors.ssn}
                />
                <br />

                <TextField
                    name="userName"
                    floatingLabelText="user name"
                    value={user.userName}
                    onChange={onChange}
                    errorText={errors.userName}
                />
                <br />
                <TextField
                    name="email"
                    floatingLabelText="email"
                    value={user.email}
                    onChange={onChange}
                    errorText={errors.email}
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
                            <PasswordStr score={score} />
                            <FlatButton
                                className="pwShowHideBtn"
                                label={btnTxt} onClick={pwMask}
                                style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
                            />
                        </div>
                    )}
                </div>
                <br />

                <TextField
                    type={type}
                    name="pwconfirm"
                    floatingLabelText="confirm password"
                    value={user.pwconfirm}
                    onChange={onChange}
                    errorText={errors.pwconfirm}
                />
                <br />
                <RaisedButton
                    className="signUpSubmit"
                    primary={true}
                    type="submit"
                    label="submit"
                />
            </form>
            <p>
                Aleady have an account? <br />
                <a href="/login">Log in here</a>
            </p>
        </div>
    )
}

export default SignUpCard;