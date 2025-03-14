import styled from "styled-components";
import { InputBase } from "@mui/material";
import colors from "../../../constant/colors";

export const InputStyled = styled(InputBase)<{ $error: 0 | 1 }>`
    color: ${colors.GRAY_800};
    font-size: 16px;
    font-family: Roboto;
    font-weight: bold;
    line-height: 32px;
    word-break: break-word;
    padding: 7px 16px;
    border: 1px
        ${(props) =>
            props.$error === 0 ? colors.GRAY_200 : colors.RED_PRIMARY}
        solid;
    border-radius: 4px;
    background: ${colors.WHITE};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:focus {
        border: 1px
            ${(props) =>
                props.$error === 0 ? colors.GRAY_300 : colors.RED_PRIMARY}
            solid;
    }

    &:focus-visible {
        outline: unset;
    }

    &::placeholder {
        color: ${colors.GRAY_300};
        opacity: 1;
        font-size: 16px;
        font-family: Roboto;
        font-weight: 400;
        line-height: 32px;
        word-break: break-word;
    }

    &:disabled {
        background: ${colors.GRAY_100};
        border: 1px ${colors.GRAY_200} solid;
    }
`;
