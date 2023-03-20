import { User } from "../../enitites";

export interface UserState {
    readonly data: User | null;
}

export const userInitialState: UserState = {
    data: null,
};

