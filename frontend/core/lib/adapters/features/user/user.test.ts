//https://egghead.io/lessons/jest-unit-testing-redux-thunks-using-redux-mock-store
import { Auth, User, UserAuth } from "../../../enitites";
import { getStoreWithState, RootState } from "../../config";
import { signInAction, signUpAction } from "./action";

describe("Test user features", () => {

    it("should login properly", async () => {
        const state = {
            user: { data: { email: "test@example.com", name: "Unknown" } as User }
        }
        const store = getStoreWithState(state);
        await store.dispatch(signInAction({ email: "test@example.com", password: "12345678" } as Auth));
        expect(store.getState().user.data).toEqual(state.user.data);

    });

    it("should register properly", async () => {
        const data: User = {
            email: "test@example.com", name: "Tester"
        }
        const state = {
            user: { data: data }
        }
        const store = getStoreWithState(state);

        await store.dispatch(signUpAction({ ...data, password: "12345678" }));
        expect(store.getState().user.data).toEqual(state.user.data);
    });

})