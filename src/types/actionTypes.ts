
export interface Action<T> {
    type: IActionType;
    payload: T;
}

export interface FormFieldPayload<T> {
    index?: number | string;
    key: T;
    value: string | any;
}

enum BasicType {
    INIT_STORE = 'ON_INIT',
    SET_NAVIGATION = 'SET_NAVIGATION',
    SET_LOADING = 'SET_LOADING',
}
enum AccountType {
    LOAD_ACCOUNT = 'LOAD_ACCOUNT',
    SET_ACCOUNT = 'SET_ACCOUNT',
}
enum TokenType {
    TOKEN_SET_TOTAL_SUPPLY = 'TOKEN_SET_TOTAL_SUPPLY',
    TOKEN_LOAD_TOTAL_SUPPLY = 'TOKEN_LOAD_TOTAL_SUPPLY',
    TOKEN_REBASE = 'TOKEN_REBASE',
}

export type IActionType = 
    | BasicType
    | AccountType
    | TokenType;

export const ActionType = {
    ...BasicType,
    ...AccountType,
    ...TokenType,
};
