import {
    WithStyles,

} from "@material-ui/core/styles";

export interface openProps {
    open: boolean;
    setOpen: (someting: boolean) => void;
}
export interface DialogTitleProps extends WithStyles {
    id: string;
    children: React.ReactNode;

    onClose: () => void;
}
export interface DialogsProps {
    open: boolean;
    setOpen: (someting: boolean) => void;
}
export interface CourseDetailProps {
    code: string
    name: string
    learningTopic: string
    learningObjective: string
    assessment: string
    targetGroup: string
    thumbnail: string
    link: string
    courseCategoryId: string | number
    platformId: number | string | any
    id: number
}
export interface DialogEditProps {
    open: boolean
    setOpen: (someting: boolean) => void
    data?: CourseDetailProps[] | any
}
export interface couresProps {
    code: string;
    name: string;
    learningTopic: string;
    learningObjective: string;
    assessment: string;
    targetGroup: string;
    thumbnail: string;
    courseCategoryId: string;
    link: string;
    isShown: string;

};
export interface categoryProps {
    id: number;
    name: string;
}

