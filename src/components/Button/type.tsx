import { ButtonProps } from "@mui/material/Button";
import { ReactNode } from "react";

export type PropsButton = {
    children?: ReactNode;
    styledType?: "primary" | "secondary" | "back";
    styledSize?: "large" | "small";
    width?: string;
    minWidth?: string;
    height?: string;
} & ButtonProps;

export type PropsButtonStyled = {
    width?: string;
    minwidth?: string;
    height?: string;
    buttoncolors: ButtonColors;
    buttonsize: string;
} & ButtonProps;

export type ButtonColors = {
    bg: string;
    border: string;
    text: string;
    bgHover: string;
    borderHover: string;
    textHover: string;
    bgDisable: string;
    borderDisable: string;
    textDisable: string;
};
