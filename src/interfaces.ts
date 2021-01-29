export interface ActionInterface {
    type: string;
    button?: string;
}

export interface Button {
    text: string;
    background?: 'orange' | 'silver';
}

export interface AppInterface {
    state: any,
    dispatch: any,
    store: any
}