import { Box, styled } from "@mui/material";
import colors from "../../constant/colors";

export const Container = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "22px 24px 16px",
    border: `1px solid ${colors.GRAY_200}`,
    borderRadius: "8px",
    backgroundColor: colors.WHITE,
    width: "100%",
    maxWidth: "590px",
    position: "relative",
}));

export const ContainerTip = styled(Box)(() => ({
    // display: "flex",
    height: "10px",
    width: "100%",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    backgroundColor: colors.PINK_PRIMARY,
    position: "absolute",
    top: "-1px",
}));
