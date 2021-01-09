
import {
  WithStyles,

} from "@material-ui/core/styles";
export interface DialogTitleProps extends WithStyles {
  id: string;
  children: React.ReactNode;

  onClose: () => void;
}

export interface openProps {
  open: boolean;
  setOpen: (someting: boolean) => void;
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
export interface openEditProps {
  open: boolean;
  setOpen: (someting: boolean) => void;
  data: any;
}