const emailValidation = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email value'
};

const minPassword = {
    value: 8,
    message: 'Min password is 8 characters'
};

const maxPassword = {
    value: 24,
    message: 'Max password is 24 characters'
};

export {emailValidation, minPassword, maxPassword};