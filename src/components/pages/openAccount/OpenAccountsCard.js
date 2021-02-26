import { InputLabel, Select } from "@material-ui/core";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React from "react";
import '../../../styles/SignUpForm.css';



const OpenAccountsCard = ({
    onSubmit,
    onChange,
    errors,
    user
}) => {
    return (
        <div className="loginBox">
            <h1>Open Accounts</h1>
            <br />
            <h5> Here you may open new accounts, with some restrictions:
                <ul>
                    <li>You may only have one Savings account.</li>
                    <li>You may only have one Personal Checking account.</li>
                    <li>You can have up to three DBA Checking accounts.</li>
                    <li>You can have many Certificate of Deposit accounts.</li>
                    <li>You may have one IRA account of each type:
                        <ul>
                            <li>Regular IRA</li>
                            <li>Rollover IRA</li>
                            <li>Roth IRA</li>
                        </ul>
                    </li>
                </ul>
            </h5>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
            <br />

            <form onSubmit={onSubmit}>
                <InputLabel id="accountType">Type of Account</InputLabel>
                <Select native
                    name="accountType"
                    value={user.accountType}
                    onChange={onChange} >
                    <option aria-label="None" value="" />
                    <option value="CheckingAccount">Checking Account</option>
                    <option value="SavingsAccounts">Savings Account</option>
                    <option value="DBACheckingAccount">DBA Checking Account</option>
                    <option value="CDAccounts">CD Account</option>
                    <option value="IRA">IRA</option>
                    <option value="RothIRA">Roth IRA</option>
                    <option value="RolloverIRA">Rollover IRA</option>
                </Select>
                <br />

                <TextField
                    name="balance"
                    floatingLabelText="Initial Deposit"
                    value={user.balance}
                    onChange={onChange}
                    errorText={errors.balance}
                />
                <br />

                <RaisedButton
                    className="signUpSubmit"
                    primary={true}
                    type="Open Account"
                    label="Open Account"
                />
            </form>
        </div >
    )
}

export default OpenAccountsCard;