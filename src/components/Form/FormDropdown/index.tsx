import { FormDropdownProps } from "./type";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";
import {
    Container,
    FormContainer,
    LabelContainer,
    LabelStyled,
} from "../styled";
import { AppDropdown } from "../../Dropdown";
import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import colors from "../../../constant/colors";
import { Box } from "@mui/material";

export const FormDropdown = React.forwardRef(
    (props: FormDropdownProps, ref) => {
        const {
            name,
            control,
            question,
            placeholder,
            options,
            direction = "vertical",
            required,
            disabled,
            onChange: onChangeCallBack,
            width = "100%",
            ...restProps
        } = props;

        return (
            <FormControl fullWidth>
                <FormContainer direction={direction}>
                    <Controller
                        control={control}
                        name={name}
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                        }) => (
                            <Container error={!!error ? 1 : 0}>
                                {question && (
                                    <LabelContainer>
                                        <LabelStyled>{question}</LabelStyled>
                                        <Fragment>
                                            {required && (
                                                <Typography
                                                    color={colors.RED_PRIMARY}
                                                >
                                                    *
                                                </Typography>
                                            )}
                                        </Fragment>
                                    </LabelContainer>
                                )}
                                <Box
                                    display="flex"
                                    width="100%"
                                    maxWidth={width}
                                >
                                    <AppDropdown
                                        {...restProps}
                                        fullWidth
                                        value={value}
                                        options={options}
                                        placeholder={
                                            disabled && question
                                                ? question
                                                : placeholder
                                        }
                                        disabled={disabled}
                                        error={!!error && !disabled}
                                        errorMessage={error?.message}
                                        onChange={(event: any) => {
                                            onChange(event);
                                            onChangeCallBack?.(event);
                                        }}
                                    />
                                </Box>
                            </Container>
                        )}
                    />
                </FormContainer>
            </FormControl>
        );
    }
);
