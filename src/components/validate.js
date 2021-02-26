const validator = require("validator");

const validateSignUpCard = payload => {
    const errors = {};
    let message = "";
    let isFormValid = true;

    if (
        !payload ||
        typeof payload.firstName !== "string" ||
        payload.firstName.trim().length === 0
    ) {
        isFormValid = false;
        errors.firstName = "Please provide a first name.";
    }

    if (
        !payload ||
        typeof payload.lastName !== "string" ||
        payload.lastName.trim().length === 0
    ) {
        isFormValid = false;
        errors.lastName = "Please provide a last name.";
    }

    if (
        !payload ||
        typeof payload.birthDate !== "string" ||
        payload.birthDate.trim().length === 0
    ) {
        isFormValid = false;
        errors.birthDate = "Please provide a date of birth.";
    }

    if (
        !payload ||
        typeof payload.ssn !== "string" ||
        payload.ssn.trim().length === 0
    ) {
        isFormValid = false;
        errors.ssn = "Please provide an SSN.";
    }

    if (
        !payload ||
        typeof payload.userName !== "string" ||
        payload.userName.trim().length === 0
    ) {
        isFormValid = false;
        errors.userName = "Please provide a user name.";
    }

    if (
        !payload ||
        typeof payload.email !== "string" ||
        !validator.isEmail(payload.email)
    ) {
        isFormValid = false;
        errors.email = "Please provide a correct email address.";
    }

    if (
        !payload ||
        typeof payload.password !== "string" ||
        payload.password.trim().length < 8
    ) {
        isFormValid = false;
        errors.password = "Password must have at least 8 characters.";
    }

    if (!payload || payload.pwconfirm !== payload.password) {
        isFormValid = false;
        errors.pwconfirm = "Password confirmation doesn't match.";
    }

    if (!isFormValid) {
        message = "Check the form for errors.";
    }

    return {
        success: isFormValid,
        message,
        errors
    };
};

const validateLoginCard = payload => {
    const errors = {};
    let message = "";
    let isFormValid = true;

    if (
        !payload ||
        typeof payload.userName !== "string" ||
        payload.userName.trim().length === 0
    ) {
        isFormValid = false;
        errors.userName = "Please provide your user name.";
    }

    if (
        !payload ||
        typeof payload.password !== "string" ||
        payload.password.trim().length === 0
    ) {
        isFormValid = false;
        errors.password = "Please provide your password.";
    }

    if (!isFormValid) {
        message = "Check the form for errors.";
    }

    return {
        success: isFormValid,
        message,
        errors
    };
};

const validateDepositCard = payload => {
    const errors = {};
    let message = "";
    let isFormValid = true;

    if (
        !payload ||
        typeof payload.amount !== "string" ||
        payload.amount.trim().length === 0
    ) {
        isFormValid = false;
        errors.amount = "Please select an amount.";
    }



    if (!isFormValid) {
        message = "Check the form for errors.";
    }

    return {
        success: isFormValid,
        message,
        errors
    };
};

const validateOpenAccountsCard = payload => {
    const errors = {};
    let message = "";
    let isFormValid = true;

    if (
        !payload ||
        typeof payload.balance !== "string" ||
        payload.balance.trim().length === 0
    ) {
        isFormValid = false;
        errors.balance = "Please provide an initial deposit.";
    }

    if (!isFormValid) {
        message = "Check the form for errors.";
    }

    return {
        success: isFormValid,
        message,
        errors
    };
};

const validateTransferCard = payload => {
    const errors = {};
    let message = "";
    let isFormValid = true;

    if (
        !payload ||
        typeof payload.amount !== "string" ||
        payload.amount.trim().length === 0
    ) {
        isFormValid = false;
        errors.amount = "Please provide an initial deposit.";
    }

    if (!isFormValid) {
        message = "Check the form for errors.";
    }

    return {
        success: isFormValid,
        message,
        errors
    };
};

module.exports = {
    validateLoginCard: validateLoginCard,
    validateSignUpCard: validateSignUpCard,
    validateOpenAccountsCard: validateOpenAccountsCard,
    validateDepositCard: validateDepositCard,
    validateTransferCard: validateTransferCard
};
