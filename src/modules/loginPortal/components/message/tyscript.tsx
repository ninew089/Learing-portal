export interface SnackbarMessage {
    message: string;
    key: number;
}

export interface State {
    open: boolean;
    snackPack: SnackbarMessage[];
    messageInfo?: SnackbarMessage;
}
