export declare type GmailSidebarClassKey = 'root' | 'selected' | 'focusVisible' | 'collapsed' | 'dot';
export declare type GmailSidebarItemStyleProps = {
    color: string;
};
declare const _default: () => {
    root: {
        display: string;
        width: string;
        justifyContent: string;
        borderTopRightRadius: number;
        borderBottomRightRadius: number;
        minHeight: number;
        transition: string;
        '-webkit-font-smoothing': string;
        padding: string;
        fontSize: number;
        '&:hover, &$focusVisible': {
            backgroundColor: string;
        };
        '& .GmailSidebarItem-startIcon': {
            display: string;
            opacity: number;
            marginRight: number;
            '& > *': {
                fontSize: number;
            };
        };
        '& .GmailSidebarItem-amount': {
            fontSize: string;
            letterSpacing: number;
            marginLeft: string;
            paddingLeft: number;
        };
    };
    selected: ({ color }: GmailSidebarItemStyleProps) => {
        fontWeight: "bold";
        color: string;
        backgroundColor: string;
        '& .GmailSidebarItem-startIcon': {
            opacity: number;
        };
    };
    collapsed: ({ color }: GmailSidebarItemStyleProps) => {
        padding: string;
        width: number;
        borderRadius: number;
        marginLeft: number;
        '& .GmailSidebarItem-label': {
            display: string;
        };
        '& .GmailSidebarItem-amount': {
            position: "absolute";
            top: number;
            right: number;
            backgroundColor: string;
            color: string;
            padding: string;
            borderRadius: number;
            fontWeight: string;
        };
    };
    dot: {
        '& .GmailSidebarItem-amount': {
            display: string;
        };
        '&:after': {
            display: string;
            content: string;
            position: string;
            width: number;
            height: number;
            backgroundColor: string;
            top: number;
            right: number;
            borderRadius: string;
        };
    };
    focusVisible: {};
};
export default _default;
