export interface I_initialState {
    phone: string,
    email: string,
};

export interface I_actionPayload {
    name: string,
    value: string | number,
};

export interface I_action {
    type: string,
    payload: I_actionPayload,
};

