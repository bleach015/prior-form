import { TextField, styled } from "@mui/material";
import colors from "../../../constant/colors";
import { PropsInputTextStyled } from "./type";

export const TextFieldStyled = styled(TextField)<PropsInputTextStyled>(
    (props: PropsInputTextStyled) => ({
        "& .MuiInput-root, & .MuiInput-root:hover": {
            color: colors.GRAY_800,
            fontSize: "16px",
            fontFamily: "Roboto",
            fontWeight: "bold",
            lineHeight: "32px",
            wordBreak: "break-word",
            background: colors.WHITE,
            letterSpacing: "normal",

            ".MuiInput-notchedOutline": {
                borderBottom:
                    props.type === "hidden"
                        ? "unset"
                        : `1px ${colors.GRAY_200} solid`,
                width: props.type === "hidden" && "0px",
                height: props.type === "hidden" && "0px",
                padding: props.type === "hidden" && "unset",

                legend: {
                    lineHeight: props.type === "hidden" && "0px",
                },
            },
        },

        "& .MuiInputBase-adornedStart": {
            paddingLeft: "16px",
        },

        "& .MuiInputBase-adornedEnd": {
            paddingRight: "16px",
        },

        "& .MuiInput-root.Mui-focused, & .MuiInput-root.Mui-focused:hover": {
            ".MuiInput-notchedOutline": {
                borderBottom: `1px ${colors.GRAY_300} solid`,
            },
        },

        "& .MuiInputBase-root.MuiInput-root.Mui-error, & .MuiInputBase-root.MuiInput-root.Mui-error:hover":
            {
                ".MuiInput-notchedOutline": {
                    borderBottom: `1px ${colors.RED_PRIMARY} solid`,
                },
            },

        "& .MuiFormHelperText-root.Mui-error": {
            color: colors.RED_PRIMARY,
            fontSize: "14px",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: "30px",
            wordBreak: "break-word",
            margin: "4px 0px 0px 0px",
        },

        "& .MuiInputBase-input.MuiInput-input": {
            height: "auto",
            padding: "8px 16px",
            paddingLeft: props.iconstart,
            paddingRight: props.iconend,

            "&.Mui-disabled": {
                opacity: 1,
                color: colors.GRAY_800,
                WebkitTextFillColor: "currentColor",
            },
        },

        "& .MuiInputBase-multiline": {
            padding: "8px 16px",

            ".MuiInputBase-input.MuiInput-input": {
                padding: "unset",
            },
        },

        "& .MuiInputBase-input.MuiInput-input::placeholder": {
            fontFamily: "Roboto",
            fontWeight: 400,
            color: colors.GRAY_300,
            opacity: 1,
        },

        "& .MuiInputBase-root.MuiInput-root.Mui-disabled": {
            background: colors.GRAY_100,
        },

        ".MuiInputBase-root.MuiInput-root.Mui-disabled .MuiInput-notchedOutline":
            {
                borderBottom: `1px ${colors.GRAY_200} solid`,
            },
        "& .MuiInputBase-root.MuiInput-root:after": {
            borderBottom: `2px solid ${colors.PRIOR_DARK_GREEN}`,
        },
        "& .MuiInputBase-root.MuiInput-root.Mui-error:after": {
            borderBottom: `2px solid ${colors.RED_PRIMARY}`,
        },
    })
);
