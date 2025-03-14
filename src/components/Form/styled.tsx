import { Box, Typography, styled } from "@mui/material";
import colors from "../../constant/colors";

export const FormContainer = styled(Box)<{
    direction?: "vertical" | "horizontal";
}>(({ direction }) => ({
    display: "flex",
    flexDirection: direction === "vertical" ? "column" : "row",
    alignItems: "center",
    gap: "4px",
    height: "100%",
    width: "100%",
}));

export const Container = styled(Box)<{
    error?: 0 | 1;
}>(({ error }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
    height: "100%",
    padding: "24px",
    border:
        error === 0
            ? `1px solid ${colors.GRAY_200}`
            : `1px solid ${colors.RED_PRIMARY}`,
    borderRadius: "8px",
    backgroundColor: colors.WHITE,
    width: "590px",
}));

export const LabelContainer = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    alignItems: "center",
}));

export const LabelStyled = styled(Typography)(() => ({
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "32px",
    color: colors.BLACK,
}));

export const ErrorTextStyled = styled(Typography)(() => ({
    width: "100%",
    color: colors.RED_PRIMARY,
    fontSize: "14px",
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: "30px",
    wordBreak: "break-word",
    marginTop: "4px",
}));

export const FormControlStyled = styled(Box)<{ width?: string }>(
    ({ width = "100%" }) => ({
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
        width: width,
        height: "100%",
    })
);

export const SuccessTextStyled = styled(Typography)(() => ({
    width: "100%",
    color: colors.PRIOR_PRIMARY_GREEN,
    fontSize: "14px",
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: "30px",
    wordBreak: "break-word",
    marginTop: "4px",
}));
