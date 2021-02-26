import { InputLabel, Select } from "@material-ui/core";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React from "react";
import '../../../../styles/SignUpForm.css';

const TransferCard = ({
    onSubmit,
    onChange,
    errors,
    user,
    accounts
}) => {
    return (
        <div className="loginBox">
            <h1>Transfer Between Your Accounts</h1>
            <br />
            <h5>Please select the accounts you would like to transfer between and enter the amount you would like to transfer.</h5>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
            <br />

            <form onSubmit={onSubmit}>
                <InputLabel id="transFrom">Transfer from:</InputLabel>
                <Select native
                    name="transFrom"
                    value={user.transFrom}
                    onChange={onChange}
                    errorText={errors.transFrom} >
                    <option aria-label="None" value="" />
                    {accounts.checking === "1" ? <option value="CheckingAccount">Checking Account</option> : <></>}
                    {accounts.savings === "1" ? <option value="SavingsAccounts">Savings Account</option> : <></>}
                    {accounts.dbaChecking === "1" ? <option value="DBACheckingAccount">DBA Checking Account</option> : <></>}
                    {accounts.cdAccounts === "1" ? <option value="CDAccounts">CD Account</option> : <></>}
                    {accounts.ira === "1" ? <option value="IRA">IRA</option> : <></>}
                    {accounts.rothIRA === "1" ? <option value="RothIRA">Roth IRA</option> : <></>}
                    {accounts.rolloverIRA === "1" ? <option value="RolloverIRA">Rollover IRA</option> : <></>}
                </Select>
                <br />
                <br />

                <InputLabel id="transTo">Transfer to:</InputLabel>
                <Select native
                    name="transTo"
                    value={user.transTo}
                    onChange={onChange}
                    errorText={errors.transTo} >
                    <option aria-label="None" value="" />
                    {accounts.checking === "1" && user.transFrom !== "CheckingAccount" ? <option value="CheckingAccount">Checking Account</option> : <></>}
                    {accounts.savings === "1" && user.transFrom !== "SavingsAccounts" ? <option value="SavingsAccounts">Savings Account</option> : <></>}
                    {accounts.dbaChecking === "1" && user.transFrom !== "DBACheckingAccount" ? <option value="DBACheckingAccount">DBA Checking Account</option> : <></>}
                    {accounts.cdAccounts === "1" && user.transFrom !== "CDAccounts" ? <option value="CDAccounts">CD Account</option> : <></>}
                    {accounts.ira === "1" && user.transFrom !== "IRA" ? <option value="IRA">IRA</option> : <></>}
                    {accounts.rothIRA === "1" && user.transFrom !== "RothIRA" ? <option value="RothIRA">Roth IRA</option> : <></>}
                    {accounts.rolloverIRA === "1" && user.transFrom !== "RolloverIRA" ? <option value="RolloverIRA">Rollover IRA</option> : <></>}
                </Select>
                <br />
                <br />

                <TextField
                    name="amount"
                    floatingLabelText="Amount"
                    value={user.amount}
                    onChange={onChange}
                    errorText={errors.amount}
                />
                <br />

                <RaisedButton
                    className="signUpSubmit"
                    primary={true}
                    type="Transfer"
                    label="Transfer"
                />
            </form>
        </div >
    )
}

export default TransferCard;