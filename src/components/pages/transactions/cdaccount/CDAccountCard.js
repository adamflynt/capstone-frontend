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
import '../../../../styles/SignUpForm.css';
import { Button } from '../../../Button';




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
    },
});

const CDAccountCard = ({
    cdAccoountTransactions
}) => {
    console.log("CD Account:" + cdAccoountTransactions);
    const classes = useStyles();
    const isEmpty = cdAccoountTransactions.length;
    return (
        <div className="accountsBox">
            {isEmpty === 0 ?
                <h4>You have not made any transactions!</h4>
                :
                <TableContainer component={Paper} variant="outlined" elevation={20}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Transaction Type</StyledTableCell>
                                <StyledTableCell align="center">Amount</StyledTableCell>
                                <StyledTableCell align="right">Transaction Date</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cdAccoountTransactions.map((transactions) => (
                                <StyledTableRow key={transactions.type}>
                                    <StyledTableCell component="th" scope="row">
                                        {transactions.type = "Deposit"}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">${transactions.balance}</StyledTableCell>
                                    <StyledTableCell align="right">{moment(transactions.transactionDate).format('MM/DD/YYYY')}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
            {isEmpty === 0 ?
                <div className='accounts-btns'>
                    <Button link='/deposits' className='btns' buttonStyle='btn--accounts--outline'
                        buttonSize='btn--accounts--large'>Make a Deposit</Button>
                </div>
                :
                <div className='accounts-btns'>
                    <Button link='/deposits' className='btns' buttonStyle='btn--accounts--outline'
                        buttonSize='btn--accounts--large'>Deposit/Withdrawal</Button>
                    <br />
                    <Button link='/transfers' className='btns' buttonStyle='btn--accounts--outline'
                        buttonSize='btn--accounts--large'>Make a Transfer</Button>
                </div>
            }
        </div>
    )
}

export default CDAccountCard;