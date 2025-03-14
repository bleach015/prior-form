import { Checkbox, FormControlLabel, styled } from "@mui/material";
import colors from "../../constant/colors";
import { PropsCheckboxStyled } from "./type";

export const FormControlLabelStyled = styled(FormControlLabel)(() => ({
    margin: "unset",

    "& .MuiTypography-root": {
        lineHeight: "32px",
    },

    "&& .Mui-disabled": {
        color: colors.GRAY_500,
    },
}));

export const CheckboxStyled = styled(Checkbox)<PropsCheckboxStyled>(
    (props: PropsCheckboxStyled) => ({
        padding: props.label ? "0px 8px 0px 0px" : "0px",
    })
);

export const BpIcon = styled("span")(() => ({
    border: `2px solid ${colors.GRAY_100}`,
    borderRadius: 4,
    width: 20,
    height: 20,
    background: colors.WHITE,

    "input:disabled ~ &": {
        borderColor: colors.GRAY_200,
        background: colors.GRAY_200,
    },

    "input:hover:not(:checked, :disabled) ~ &": {
        borderColor: colors.PRIOR_PRIMARY_GREEN,
        background: colors.PRIOR_PRIMARY_GREEN_50,
    },
}));

export const BpCheckedIcon = styled(BpIcon)({
    border: "unset",
    width: 24,
    height: 24,
    background: colors.PRIOR_PRIMARY_GREEN,

    "&:before": {
        display: "block",
        width: 24,
        height: 24,
        backgroundImage: `url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_466_7657" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="%23D9D9D9"/></mask><g mask="url(%23mask0_466_7657)"><path d="M3 9.66704L7.667 14.334L17 5" stroke="%23433938" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/></g></svg>')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        content: '""',
    },
});
