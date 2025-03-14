import { CheckboxProps } from "@mui/material/Checkbox";

export type PropsCheckbox = {
    label?: string;
    error?: boolean;
    errorMessage?: string;
} & CheckboxProps;

export type PropsCheckboxStyled = {
    label?: string;
} & CheckboxProps;