export const redirectionAction = (flag,to) => ({
    type: 'REDIRECTION',
    payload: {
        flag,
        to
    }
})