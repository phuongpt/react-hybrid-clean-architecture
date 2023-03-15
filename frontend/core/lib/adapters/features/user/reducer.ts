import { Action } from "redux";
import { User } from "../../../enitites";
import { userInitialState, UserState } from "./state";

//constraints
const SIGN_IN = "user/signIn";
const SIGN_OUT = "user/signOut";

// action type
type SignInActionType = Action<typeof SIGN_IN> & {
  type: string,
  user: User | null,
}

type SignOutActionType = Action<typeof SIGN_OUT> & {
  type: string,
}

export type UserAction =
  | SignOutActionType
  | SignInActionType
  ;

// action dispatch
export const signInAction = (user: User | null): SignInActionType => ({
  type: SIGN_IN,
  user
});

export const signOutAction = (): SignOutActionType => ({
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