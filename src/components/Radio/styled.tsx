import { FormControlLabel, Radio, RadioGroup, styled } from "@mui/material";
import colors from "../../constant/colors";
import { PropsRadioStyled } from "./type";

export const FormControlLabelStyled = styled(FormControlLabel)<{
    table: 0 | 1;
}>(({ table }) => ({
    margin: "unset",
    maxWidth: table === 1 ? "61.19px" : "unset",
    width: "100%",

    "& .MuiTypography-root": {
        lineHeight: "32px",
    },

    "&& .Mui-disabled": {
        color: colors.GRAY_500,
    },
}));

export const RadioStyled = styled(Radio)<PropsRadioStyled>(
    (props: PropsRadioStyled) => ({
        padding: props.label ? "0px 8px 0px 0px" : "0px",
        height: props.label ? "auto" : "64px",
    })
);

export const BpIcon = styled("span")(() => ({
    border: `2px solid ${colors.GRAY_100}`,
    borderRadius: "50%",
    width: 20,
    height: 20,
    backgroundColor: colors.WHITE,

    "input:disabled ~ &": {
        borderColor: colors.GRAY_200,
    },

    "input:disabled:not(:checked) ~ &": {
        background: colors.GRAY_200,
    },

    "input:checked:not(:disabled)": {
        borderColor: colors.PRIOR_PRIMARY_GREEN,
    },

    "input:hover:not(:checked, :disabled) ~ &": {
        backgroundColor: colors.PRIOR_PRIMARY_GREEN_50,
        borderColor: colors.PRIOR_PRIMARY_GREEN,
    },
}));

export const BpIconBlack = styled("span")(() => ({
    border: `2px solid ${colors.GRAY_100}`,
    borderRadius: "50%",
    width: 20,
    height: 20,
    backgroundColor: colors.WHITE,

    "input:disabled ~ &": {
        borderColor: colors.GRAY_200,
    },

    "input:disabled:not(:checked) ~ &": {
        background: colors.GRAY_200,
        borderColor: colors.GRAY_500,
    },

    "input:checked:not(:disabled)": {
        borderColor: colors.GRAY_500,
    },

    "input:hover:not(:checked, :disabled) ~ &": {
        backgroundColor: colors.PRIOR_PRIMARY_GREEN_50,
        borderColor: colors.GRAY_500,
    },
}));

export const BpCheckedIcon = styled(BpIcon)<PropsRadioStyled>(
    (props: PropsRadioStyled) => ({
        "&:before": {
            display: "block",
            width: 20,
            height: 20,
            backgroundImage: `url('data:image/svg+xml,<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="7" fill="%23${props.iconcolor}"/></svg>')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            content: '""',
        },
    })
);

export const RadioGroupStyled = styled(RadioGroup)<{
    islabel: 0 | 1;
    columngap?: string;
}>(({ islabel, columngap = "24px" }) => ({
    columnGap: columngap,
    rowGap: "4px",
    minHeight: islabel === 1 ? "unset" : "48px",
    minWidth: "433.94px",
}));
