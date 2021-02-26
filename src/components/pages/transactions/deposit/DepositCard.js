import { InputLabel, Select } from "@material-ui/core";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React from "react";
import '../../../../styles/SignUpForm.css';



const DepositCard = ({
    onSubmit,
    onChange,
    errors,
    user
}) => {
    return (
        <div className="loginBox">
            <h1>Deposit or Withdraw</h1>
            <br />
            <h5>Please select all of the information for your transaction.</h5>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
            <br />

            <form onSubmit={onSubmit}>
                <InputLabel id="accountType">Please select an account:</InputLabel>
                <Select native
                    name="accountType"
                    value={user.accountType}
                    onChange={onChange}
                    errorText={errors.accountType} >
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
                <br />

                <InputLabel id="transType">Transaction Type:</InputLabel>
                <Select native
                    name="transType"
                    value={user.transType}
                    onChange={onChange}
                    errorText={errors.transType} >
                    <option aria-label="None" value="" />
                    <option value="Deposit">Deposit</option>
                    <option value="Withdraw">Withdraw</option>
                </Select>
                <br />
                <br />

                {user.transType !== "" ?
                    <>
                        {user.transType === "Deposit" ?
                            <>
                                <InputLabel id="transStyle">Deposit Type:</InputLabel>
                            </>
                            :
                            <>
                                <InputLabel id="transStyle">Withdrawal Type:</InputLabel>
                            </>
                        }
                        <Select native
                            name="transStyle"
                            value={user.transStyle}
                            onChange={onChange}
                            errorText={errors.transStyle} >
                            <option aria-label="None" value="" />
                            <option value="Cash">Cash</option>
                            <option value="Check">Check</option>
                            <option value="ATM">ATM</option>
                        </Select>
                        <br />
                        <br />

                        {user.transStyle === "Check" && user.transType === "Deposit" ?
                            <>
                                <TextField
                                    name="checkNumber"
                                    floatingLabelText="Check Number"
                                    value={user.checkNumber}
                                    onChange={onChange}
                                    errorText={errors.checkNumber}
                                />
                                <br />
                            </>
                            :
                            <></>
                        }

                    </>

                    :
                    <></>
                }

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
                    type="Submit"
                    label="Submit"
                />
            </form>
        </div >
    )
}

export default DepositCard;