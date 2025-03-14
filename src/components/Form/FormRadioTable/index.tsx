import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { FormRadioTableProps } from "./type";
import {
    Container,
    ErrorTextStyled,
    FormContainer,
    LabelContainer,
    LabelStyled,
} from "../styled";
import { Controller } from "react-hook-form";
import colors from "../../../constant/colors";
import { AppRadioTable } from "../../RadioTable";

export const FormRadioTable = React.forwardRef(
    (props: FormRadioTableProps, ref) => {
        const {
            name,
            control,
            question,
            options,
            disabled,
            required,
            onChange: onChangeCallBack,
            questionTexts,
            errorMessage,
        } = props;

        return (
            <FormContainer direction="horizontal">
                <Controller
                    name={name}
                    control={control}
                    rules={{
                        validate: (value: string[]) =>
                            value.every((v) => v !== "") ||
                            "ต้องตอบให้ครบทุกแถว",
                    }}
                    render={({
                        field: { onChange, value = [], ...field },
                        fieldState: { error },
                    }) => {
                        const normalizedValue = [
                            ...Array(questionTexts.length),
                        ].map((_, index) => value[index] || "");

                        return (
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
                                    <AppRadioTable
                                        {...field}
                                        value={normalizedValue}
                                        onChange={(event: any) => {
                                            onChange(event);
                                            onChangeCallBack?.(event);
                                        }}
                                        options={options}
                                        disabled={disabled}
                                        questionTexts={questionTexts}
                                    />
                                </Fragment>
                                {!!error && (
                                    <ErrorTextStyled className="Mui-error">
                                        {error?.message || errorMessage}
                                    </ErrorTextStyled>
                                )}
                            </Container>
                        );
                    }}
                />
            </FormContainer>
        );
    }
);
