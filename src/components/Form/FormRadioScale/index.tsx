import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { FormRadioScaleProps } from "./type";
import {
    Container,
    ErrorTextStyled,
    FormContainer,
    LabelContainer,
    LabelStyled,
} from "../styled";
import { Controller } from "react-hook-form";
import colors from "../../../constant/colors";
import { AppRadioScale } from "../../RadioScale";

export const FormRadioScale = React.forwardRef(
    (props: FormRadioScaleProps, ref) => {
        const {
            name,
            control,
            question,
            options,
            disabled,
            required,
            onChange: onChangeCallBack,
        } = props;

        return (
            <FormContainer direction="horizontal">
                <Controller
                    name={name}
                    control={control}
                    render={({
                        field: { onChange, value, ...field },
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
                            <Fragment>
                                <AppRadioScale
                                    {...field}
                                    value={value}
                                    onChange={(event: any) => {
                                        onChange(event);
                                        onChangeCallBack?.(event);
                                    }}
                                    options={options}
                                    disabled={disabled}
                                />
                            </Fragment>
                            {!!error && (
                                <ErrorTextStyled className="Mui-error">
                                    {error.message}
                                </ErrorTextStyled>
                            )}
                        </Container>
                    )}
                />
            </FormContainer>
        );
    }
);
