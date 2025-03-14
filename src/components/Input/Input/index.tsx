import { forwardRef } from "react";
import { Box, InputAdornment } from "@mui/material";
import { InputProps } from "./type";
import { ErrorTextStyled, SuccessTextStyled } from "../../Form/styled";
import { InputStyled } from "./styled";

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props: InputProps, ref) => {
        const {
            fullWidth,
            error,
            errorMessage,
            disabled,
            actionButton,
            showButton,
            successMessage,
            startIcon,
            endIcon,
            ...restProps
        } = props;

        return (
            <Box
                width={fullWidth ? "100%" : "auto"}
                display={"flex"}
                flexDirection={"column"}
                style={{ position: "relative" }}
            >
                <InputStyled
                    inputRef={ref}
                    startAdornment={
                        startIcon && (
                            <InputAdornment position="start">
                                {startIcon}
                            </InputAdornment>
                        )
                    }
                    endAdornment={
                        endIcon && (
                            <InputAdornment position="end">
                                {endIcon}
                            </InputAdornment>
                        )
                    }
                    $error={error ? 1 : 0}
                    inputProps={{
                        ...restProps,
                        disabled: disabled,
                    }}
                    fullWidth={fullWidth}
                />
                {errorMessage && !disabled && (
                    <ErrorTextStyled className="Mui-error">
                        {errorMessage}
                    </ErrorTextStyled>
                )}
                {successMessage && (
                    <SuccessTextStyled>{successMessage}</SuccessTextStyled>
                )}
                {showButton && <>{actionButton}</>}
            </Box>
        );
    }
);