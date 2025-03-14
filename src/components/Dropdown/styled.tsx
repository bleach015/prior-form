import {
    Box,
    MenuItem,
    Select,
    TextField,
    Typography,
    styled,
} from "@mui/material";
import colors from "../../constant/colors";
import { DropdownSize } from "./type";

export const SelectStyled = styled(Select)<{ dropdownsize: DropdownSize }>(
    ({ dropdownsize }) => ({
        color: colors.GRAY_800,
        fontSize: dropdownsize.fontSize,
        fontFamily: "Roboto",
        fontWeight: "bold",
        lineHeight: dropdownsize.lineHeight,
        background: colors.WHITE,
        minHeight: "48px",

        "& .MuiSelect-select": {
            padding: dropdownsize.padding,
            paddingRight: "40px !important",
        },

        "& .MuiInput-notchedOutline, &:hover .MuiInput-notchedOutline": {
            border: `1px ${colors.GRAY_200} solid`,
        },

        "&.Mui-focused .MuiInput-notchedOutline": {
            border: `1px ${colors.GRAY_300} solid`,
        },

        "&.Mui-error .MuiInput-notchedOutline": {
            border: `1px ${colors.RED_PRIMARY} solid`,
        },

        "&.Mui-disabled": {
            background: colors.GRAY_100,
            ".MuiSvgIcon-root": {
                color: colors.GRAY_500,
            },
            "& .MuiSelect-select": {
                opacity: 1,
                color: colors.GRAY_800,
                WebkitTextFillColor: "currentColor",
            },
        },

        "&.Mui-disabled .MuiInput-notchedOutline": {
            border: `1px ${colors.GRAY_200} solid`,
        },
    })
);

export const MenuItemStyled = styled(MenuItem)<{ dropdownsize: DropdownSize }>(
    ({ dropdownsize }) => ({
        "&.MuiMenuItem-root": {
            color: colors.GRAY_PRIMARY,
            fontSize: dropdownsize.fontSize,
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: dropdownsize.lineHeight,
            padding: "3px 16px",

            "&.Mui-selected": {
                backgroundColor: colors.GRAY_400,
            },
        },

        "&.MuiMenuItem-root.Mui-disabled": {
            backgroundColor: colors.WHITE,
        },
    })
);

export const TextPlaceholderStyled = styled(Typography)(() => ({
    color: colors.GRAY_300,
    fontSize: "16px",
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: "32px",
}));

export const DropdownContainer = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
}));

export const TextFieldSearchStyled = styled(TextField)(() => ({
    "& .MuiInput-root, & .MuiInput-root:hover": {
        color: colors.GRAY_800,
        fontSize: "16px",
        fontFamily: "Roboto",
        fontWeight: "bold",
        lineHeight: "34px",
        wordBreak: "break-word",

        ".MuiInput-notchedOutline": {
            border: `1px ${colors.GRAY_200} solid`,
        },
    },

    "& .MuiInputBase-adornedStart": {
        paddingLeft: "12px",
    },

    "& .MuiInput-root.Mui-focused, & .MuiInput-root.Mui-focused:hover": {
        ".MuiInput-notchedOutline": {
            border: `1px ${colors.GRAY_300} solid`,
        },
    },

    "& .MuiInputBase-input.MuiInput-input": {
        height: "auto",
        padding: "1px 12px",
        paddingLeft: "0px",

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
    },

    "& .MuiInputBase-root.MuiInput-root.Mui-disabled": {
        background: colors.GRAY_100,
    },

    ".MuiInputBase-root.MuiInput-root.Mui-disabled .MuiInput-notchedOutline": {
        border: `1px ${colors.GRAY_200} solid`,
    },
}));
