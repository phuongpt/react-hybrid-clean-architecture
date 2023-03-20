import { Auth, UserAuth } from '../../enitites';
import { signInDispatch, signOutDispatch, signUpDispatch } from './reducer';
import { UserService } from '../../services';
import { AppDispatch, AppThunk } from '../../adapters';

export const signInAction = (
    auth: Auth
): AppThunk => async (
    dispatch: AppDispatch,
) => {
        try {
            const service = new UserService();
            const user = await service.signIn(auth);
            dispatch(signInDispatch(user));
        } catch (error) {
            console.error(error);
        }
    };
export const signUpAction = (
    auth: UserAuth
): AppThunk => async (
    dispatch: AppDispatch,
) => {
        try {
            const service = new UserService();
            const user = await service.signUp(auth);
            dispatch(signUpDispatch(user));
        } catch (error) {
            console.error(error);
        }
    };
export const signOutAction = (): AppThunk => async (
    dispatch: AppDispatch,
) => {
    try {
        const service = new UserService();
        await service.signOut();
        dispatch(signOutDispatch());
    } catch (error) {
        console.error(error);
    }
};