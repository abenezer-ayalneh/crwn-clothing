import UserActionTypes from "./user.action-types";

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
})

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
})

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = (errorMessage) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: errorMessage
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
})

export const signOutFailure = (errorMessage) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: errorMessage
})

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
})

export const userSignUpStart = (signUpInfo) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: signUpInfo
})

export const userSignUpSuccess = ({user, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: {user, additionalData}
})

export const userSignUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})

