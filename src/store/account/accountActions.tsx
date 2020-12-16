import { ActionType, Account } from 'types';

export const loadAccount = () => {
    return {
        type: ActionType.LOAD_ACCOUNT
    };
};

export const setAccount = (
    payload: Account | undefined
) => {
    return {
        type: ActionType.SET_ACCOUNT,
        payload,
    };
};

export const getFaucet = (payload: number) => {
    return {
        type: ActionType.GET_FAUCET,
        payload,
    };
};
