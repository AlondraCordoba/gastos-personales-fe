import { types } from "../types";

export const login = (id) => {
    return {
        type: types.login,
        payload: {
            id: id,
        }
    }
}