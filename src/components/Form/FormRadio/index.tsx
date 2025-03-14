import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { FormRadioProps } from "./type";
import {
    Container,
    FormContainer,
    LabelContainer,
    LabelStyled,
} from "../styled";
import { Controller } from "react-hook-form";
import colors from "../../../constant/colors";
import { AppRadio } from "../../Radio";

export const FormRadio = React.forwardRef((props: FormRadioProps, ref) => {
    const {
        name,
        control,
        question,
        direction = "vertical",
        options,
        row = true,
        disabled,
        required,
        isLabel,
        onChange: onChangeCallBack,
    } = props;

    return (
        <FormContainer direction={direction}>
            <Controller
                name={name}
                control={control}
                render={({
                    field: { onChange, value, ...field },
                    fieldState: { error },
                }) => (
                    <Fragment>
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
                            <AppRadio
                                {...field}
                                row={row}
                                value={value}
                                error={!!error && !disabled}
                                errorMessage={error?.message}
                                onChange={(event: any) => {
                                    onChange(event);
                                    onChangeCallBack?.(event);
                                }}
                                options={options}
                                disabled={disabled}
                                isLabel={isLabel}
                            />
                        </Container>
                    </Fragment>
                )}
            />
        </FormContainer>
    );
});
