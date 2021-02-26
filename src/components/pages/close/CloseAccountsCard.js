import { InputLabel, Select } from "@material-ui/core";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
import '../../../styles/SignUpForm.css';



const CloseAccountsCard = ({
    onSubmit,
    onChange,
    errors,
    user
}) => {
    return (
        <div className="loginBox">
            <h1>Close Accounts</h1>
            <br />
            <h5> Here you may close your accounts, with some restrictions:
                <ul>
                    <li>Closing checking accounts can be done without restrictions.
                         When closing your checking account, the balance will be transfered to your savings account.</li>
                    <li>When closing your IRA account, 80% of the balance will be transfered to checking or savings.
                    The other 20% will be taken to the IRS.
                    </li>
                    <li>When closing CD Accounts, the balances are transferred to either checking or savings.</li>
                    <li>You may only close a savings account if you no longer wish to have an account with Merit Banking. <b>All account records will be deleted.</b></li>
                </ul>
            </h5>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
            <br />

            <form onSubmit={onSubmit}>
                <InputLabel id="accountType">Choose an Account to Close</InputLabel>
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



                <RaisedButton
                    className="signUpSubmit"
                    primary={true}
                    type="Close Account"
                    label="Close Account"
                />
            </form>
        </div >
    )
}

export default CloseAccountsCard;