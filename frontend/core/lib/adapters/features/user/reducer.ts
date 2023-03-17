import { Action } from "redux";
import { User } from "../../../enitites";
import { userInitialState, UserState } from "./state";

//constraints
const SIGN_IN = "user/signIn";
const SIGN_UP = "user/signUp";
const SIGN_OUT = "user/signOut";

// action type
type SignInActionType = Action<typeof SIGN_IN> & {
  type: string,
  user: User | null,
}

type SignUpActionType = Action<typeof SIGN_UP> & {
  type: string,
  user: User | null,
}

type SignOutActionType = Action<typeof SIGN_OUT> & {
  type: string,
}

export type UserAction =
  | SignOutActionType
  | SignInActionType
  | SignUpActionType
  ;

// action dispatch
export const signInDispatch = (user: User | null): SignInActionType => ({
  type: SIGN_IN,
  user
});

export const signUpDispatch = (user: User): SignUpActionType => ({
  type: SIGN_UP,
  user
});

export const signOutDispatch = (): SignOutActionType => ({
  type: SIGN_OUT,
});


//reducer
export const userReducer = (
  state: UserState = userInitialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case SIGN_IN:
      return {
        data: action.user
      };
    case SIGN_UP:
      return {
        data: action.user
      };
    case SIGN_OUT:
      return {
        data: null
      };
    default:
      return state;
  }
};

//selector
export const userSelector = (state: UserState) => state;