import React, { Fragment, useEffect, useMemo, useState } from "react";
import { FormCheckboxProps } from "./type";
import {
    Container,
    ErrorTextStyled,
    FormContainer,
    FormControlStyled,
    LabelContainer,
    LabelStyled,
} from "../styled";
import { Typography } from "@mui/material";
import { Controller, useFormState } from "react-hook-form";
import { CheckboxContainer } from "./styled";
import colors from "../../../constant/colors";
import { AppCheckbox } from "../../Checkbox";
import { ValueOption } from "../../Dropdown/type";

export const FormCheckbox = React.forwardRef(
    (props: FormCheckboxProps, ref) => {
        const {
            name,
            control,
            question,
            direction = "vertical",
            options,
            row = true,
            disabled = false,
            setValue,
            errorMessage,
            required,
            onChange: onChangeCallBack,
        } = props;

        const [selectedItems, setSelectedItems] = useState<string[]>([]);

        const { isSubmitted, defaultValues, isDirty } = useFormState({
            control,
        });

        const handleSelect = (value: any) => {
            const isPresent = selectedItems.indexOf(value);
            if (isPresent !== -1) {
                const remaining = selectedItems.filter(
                    (item: any) => item !== value
                );
                setSelectedItems(remaining);
            } else {
                setSelectedItems((prevItems: any) => [...prevItems, value]);
            }
        };

        const isError = useMemo(() => {
            return isSubmitted && selectedItems.length === 0;
        }, [isSubmitted, selectedItems]);

        useEffect(() => {
            if (!isDirty) {
                const defaultValue = defaultValues?.[name];
                if (defaultValue) {
                    setSelectedItems(defaultValue);
                    setValue(name, defaultValue, { shouldDirty: true });
                }
            }
        }, [setValue, name, isDirty, defaultValues]);

        useEffect(() => {
            onChangeCallBack?.(selectedItems);
            setValue(name, selectedItems, { shouldDirty: true });
        }, [selectedItems, setValue, name, onChangeCallBack]);

        return (
            <Container error={!!isError ? 1 : 0}>
                <FormContainer direction={direction}>
                    {question && (
                        <LabelContainer>
                            <LabelStyled>{question}</LabelStyled>
                            <Fragment>
                                {required && (
                                    <Typography color={colors.RED_PRIMARY}>
                                        *
                                    </Typography>
                                )}
                            </Fragment>
                        </LabelContainer>
                    )}
                    <FormControlStyled>
                        <CheckboxContainer row={row ? 1 : 0}>
                            {options.map((option: ValueOption) => {
                                return (
                                    <Controller
                                        key={option.value}
                                        name={name}
                                        control={control}
                                        render={() => {
                                            return (
                                                <AppCheckbox
                                                    label={option.labelTh}
                                                    disabled={
                                                        option.disabled ||
                                                        disabled
                                                    }
                                                    checked={selectedItems.includes(
                                                        option.value
                                                    )}
                                                    onChange={() =>
                                                        handleSelect(
                                                            option.value
                                                        )
                                                    }
                                                />
                                            );
                                        }}
                                    />
                                );
                            })}
                        </CheckboxContainer>
                        {isError && !disabled && (
                            <ErrorTextStyled className="Mui-error">
                                {errorMessage}
                            </ErrorTextStyled>
                        )}
                    </FormControlStyled>
                </FormContainer>
            </Container>
        );
    }
);
