export declare const tabsStyles: () => {
    indicator: {
        display: string;
    };
};
export declare const tabItemStyles: () => {
    root: {
        border: string;
        '&:not(:first-of-type)': {
            marginLeft: number;
        };
        background: string;
        opacity: number;
    };
    selected: {
        borderBottomWidth: number;
        background: string;
        '& $wrapper': {
            opacity: number;
        };
    };
    wrapper: {
        opacity: number;
    };
};
