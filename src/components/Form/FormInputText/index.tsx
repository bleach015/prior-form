import { Controller } from "react-hook-form";
import { FormInputTextProps } from "./type";
import {
    Container,
    FormContainer,
    LabelContainer,
    LabelStyled,
} from "../styled";
import { AppInputText } from "../../Input/InputText";
import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import colors from "../../../constant/colors";

export const FormInputText = React.forwardRef(
    (props: FormInputTextProps, ref) => {
        const {
            name,
            control,
            question,
            placeholder,
            direction = "vertical",
            autoComplete,
            required,
            disabled,
            onChange: onChangeCallBack,
            infoMaxWidth,
            ...restProps
        } = props;

        return (
            <FormContainer direction={direction}>
                <Controller
                    name={name}
                    control={control}
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
                            <AppInputText
                                {...restProps}
                                disabled={disabled}
                                helperText={error ? error?.message : null}
                                error={!!error && !disabled}
                                fullWidth
                                onChange={(event: any) => {
                                    onChange(event);
                                    onChangeCallBack?.(event);
                                }}
                                value={value}
                                placeholder={
                                    disabled && question
                                        ? question
                                        : placeholder
                                }
                                autoComplete={autoComplete ? name : "off"}
                            />
                        </Container>
                    )}
                />
            </FormContainer>
        );
    }
);
