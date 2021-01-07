export declare type GmailListItemStyleProps = {
    color: string;
    collapsed?: boolean;
};
declare const _default: () => {
    root: ({ collapsed }: GmailListItemStyleProps) => {
        borderTopRightRadius: number;
        borderBottomRightRadius: number;
        minHeight: number;
        '-webkit-font-smoothing': string;
        padding: string;
        width: string | number;
        borderRadius: number;
        overflow: string;
        marginLeft: string | number;
        fontSize: number;
        '& > svg:first-child': {
            marginRight: number;
            fontSize: number;
            opacity: number;
        };
        '& .MuiLabel-amount': {
            fontSize: string;
            letterSpacing: number;
            marginLeft: string;
            paddingLeft: number;
        };
    };
    selected: ({ color }: GmailListItemStyleProps) => {
        fontWeight: "bold";
        color: string;
        backgroundColor: string;
        '& > svg:first-child': {
            opacity: number;
        };
    };
};
export default _default;
