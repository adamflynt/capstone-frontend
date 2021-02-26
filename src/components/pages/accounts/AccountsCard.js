import Paper from '@material-ui/core/Paper';
import { createMuiTheme, makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import React from "react";
import '../../../styles/SignUpForm.css';
import { Button } from '../../Button';




const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#192e42',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});
const StyledTableCell = withStyles(() => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        maxWidth: 700,
        boxShadow: '0 0px 20px 2px rgba(0, 0, 0, 0.4)',
    },
});

const AccountsCard = ({
    allAccounts
}) => {
    const classes = useStyles();
    const isEmpty = allAccounts.length;
    return (
        // <div className="table-container">
        <div className="accountsBox">
            {isEmpty === 0 ?
                <h4>You do not have any open accounts! Please click below to open an account.</h4>
                :

                <TableContainer component={Paper} variant="outlined">
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Account</StyledTableCell>
                                <StyledTableCell align="right">Balance</StyledTableCell>
                                <StyledTableCell align="right">Date Opened</StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allAccounts.map((accounts) => (
                                <StyledTableRow key={accounts.typeOfAccount}>
                                    {accounts.typeOfAccount === "CheckingAccount" ?
                                        <StyledTableCell component="th" scope="row">
                                            Checking
                                    </StyledTableCell>
                                        :
                                        accounts.typeOfAccount === "SavingsAccount" ?
                                            <StyledTableCell component="th" scope="row">
                                                Savings
                                    </StyledTableCell>
                                            :
                                            accounts.typeOfAccount === "DBAChecking" ?
                                                <StyledTableCell component="th" scope="row">
                                                    DBA Checking
                                    </StyledTableCell>
                                                :
                                                accounts.typeOfAccount === null ?
                                                    <StyledTableCell component="th" scope="row">
                                                        CD Account
                                    </StyledTableCell>
                                                    :
                                                    accounts.typeOfAccount === "RolloverIRA" ?
                                                        <StyledTableCell component="th" scope="row">
                                                            Rollover IRA
                                    </StyledTableCell>
                                                        :
                                                        accounts.typeOfAccount === "RothIRA" ?
                                                            <StyledTableCell component="th" scope="row">
                                                                Roth IRA
                                    </StyledTableCell>
                                                            :
                                                            accounts.typeOfAccount === "IRA" ?
                                                                <StyledTableCell component="th" scope="row">
                                                                    IRA
                                    </StyledTableCell>
                                                                :
                                                                <StyledTableCell component="th" scope="row">
                                                                    ERROR: type not found or null
                                    </StyledTableCell>
                                    }
                                    <StyledTableCell align="right">${accounts.balance}</StyledTableCell>
                                    <StyledTableCell align="right">{moment(accounts.openedOn).format('MM/DD/YYYY')}</StyledTableCell>
                                    <StyledTableCell align="right">{accounts.typeOfAccount === "CheckingAccount" ?
                                        <Button link='/accounts/checking' className='btns' buttonStyle='btn--primary'
                                            buttonSize='btn--small'>Details</Button>
                                        :
                                        accounts.typeOfAccount === "SavingsAccount" ?
                                            <Button link='/accounts/savings' className='btns' buttonStyle='btn--primary'
                                                buttonSize='btn--small'>Details</Button>
                                            :
                                            accounts.typeOfAccount === "DBAChecking" ?
                                                <Button link='/accounts/dbachecking' className='btns' buttonStyle='btn--primary'
                                                    buttonSize='btn--small'>Details</Button>
                                                :
                                                accounts.typeOfAccount === "" ?
                                                    <Button link='/accounts/cdaccount' className='btns' buttonStyle='btn--primary'
                                                        buttonSize='btn--small'>Details</Button>
                                                    :
                                                    accounts.typeOfAccount === "RolloverIRA" ?
                                                        <Button link='/accounts/rolloverira' className='btns' buttonStyle='btn--primary'
                                                            buttonSize='btn--small'>Details</Button>
                                                        :
                                                        accounts.typeOfAccount === "RothIRA" ?
                                                            <Button link='/accounts/rothira' className='btns' buttonStyle='btn--primary'
                                                                buttonSize='btn--small'>Details</Button>
                                                            :
                                                            accounts.typeOfAccount === "IRA" ?
                                                                <Button link='/accounts/ira' className='btns' buttonStyle='btn--primary'
                                                                    buttonSize='btn--small'>Details</Button>
                                                                :
                                                                <Button link='/accounts/cdaccount' className='btns' buttonStyle='btn--primary'
                                                                    buttonSize='btn--small'>Details</Button>
                                    }
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
            {isEmpty === 0 ?
                <div className='accounts-btns'>
                    <Button link='/openaccounts' className='btns' buttonStyle='btn--accounts--outline'
                        buttonSize='btn--accounts--large'>Open An Account</Button>
                </div>
                :
                <div className='accounts-btns'>
                    <Button link='/openaccounts' className='btns' buttonStyle='btn--accounts--outline'
                        buttonSize='btn--accounts--large'>Open An Account</Button>
                    <br />
                    <Button link='/closeaccounts' className='btns' buttonStyle='btn--accounts--close'
                        buttonSize='btn--accounts--large'>Close An Account</Button>
                </div>
            }
        </div >
        // </div >
    )
}

export default AccountsCard;