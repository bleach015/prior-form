import { RadioProps } from "@mui/material";
import { ValueOption } from "../Dropdown/type";

export type PropsRadio = {
    row?: boolean;
    defaultValue?: any;
    value?: any;
    error?: boolean;
    errorMessage?: string;
    options: ValueOption[];
    isLabel?: boolean;
    onChange?: (event: any) => void;
    labelPlacement?: "top" | "bottom" | "start" | "end";
    isRadioTable?: boolean;
} & RadioProps;

export type PropsRadioStyled = {
    label?: string;
    iconcolor?: string;
} & RadioProps;
