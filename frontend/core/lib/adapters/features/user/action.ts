import { Auth } from '../../../enitites';
import { signInAction } from './reducer';
import { AppDispatch, AppThunk } from '../../config/store';
import { UserService } from '../../../services';

export const signIn = (
    auth: Auth
): AppThunk => async (
    dispatch: AppDispatch,
) => {
        try {
            const service = new UserService();
            const user = await service.signIn(auth);
            dispatch(signInAction(user));
        } catch (error) {
            console.error(error);
        }
    };