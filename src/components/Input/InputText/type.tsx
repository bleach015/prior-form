import { TextFieldProps } from "@mui/material/TextField";

export type InputTextProps = {
    patternOnPress?: RegExp;
    maxLength?: number;
} & TextFieldProps;

export type PropsInputTextStyled = {
    iconstart?: string;
    iconend?: string;
    type?: string;
};
