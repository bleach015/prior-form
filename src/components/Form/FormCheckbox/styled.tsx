import { Box, styled } from "@mui/material";

export const CheckboxContainer = styled(Box)<{ row: 0 | 1 }>(({ row }) => ({
    width: "100%",
    display: "flex",
    flexDirection: row === 1 ? "row" : "column",
    flexWrap: "wrap",
    columnGap: "24px",
    rowGap: "4px",
}));
