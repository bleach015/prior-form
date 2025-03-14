import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { PropsButtonStyled } from "./type";
import Box from "@mui/material/Box";

export const ButtonStyled = styled(Button)<PropsButtonStyled>(
    (props: PropsButtonStyled) => ({
        fontSize: "16px",
        fontFamily: "Google Sans",
        fontWeight: "bold",
        lineHeight: "28px",
        wordWrap: "break-word",
        textTransform: "none",
        padding: props.buttonsize,
        width: props.width,
        minWidth: props.minwidth,
        height: props.height ? props.height : "auto",
        color: props.buttoncolors.text,
        background: props.buttoncolors.bg,
        border: `1px ${props.buttoncolors.border} solid`,
        borderRadius: "4px",

        "&:hover": {
            background: props.buttoncolors.bgHover,
            border: `1px ${props.buttoncolors.borderHover} solid`,
            color: props.buttoncolors.textHover,
        },

        "&.Mui-disabled": {
            background: props.buttoncolors.bgDisable,
            color: props.buttoncolors.textDisable,
            border: `1px ${props.buttoncolors.borderDisable} solid`,
        },
    })
);

export const ChidrenContainer = styled(Box)<{ buttonsize: string }>(
    ({ buttonsize }) => ({
        display: "flex",
        alignItems: "center",
        gap: "8px",

        svg: {
            width: "20px",
            height: "20px",
        },
    })
);
