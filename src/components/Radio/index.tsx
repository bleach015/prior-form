import React from "react";
import { PropsRadio } from "./type";
import {
    BpCheckedIcon,
    BpIcon,
    FormControlLabelStyled,
    RadioGroupStyled,
    RadioStyled,
} from "./styled";
import { ErrorTextStyled, FormControlStyled } from "../Form/styled";

export const AppRadio = React.forwardRef<HTMLInputElement, PropsRadio>(
    (props: PropsRadio, ref) => {
        const {
            row = true,
            defaultValue,
            value,
            error = false,
            errorMessage = "",
            options,
            disabled,
            isLabel = false,
            onChange,
            labelPlacement,
            isRadioTable,
            ...restProps
        } = props;

        const generateRadioOptions = () => {
            return options.map((option, index) => (
                <FormControlLabelStyled
                    key={index}
                    table={row ? 1 : 0}
                    value={option.value}
                    label={!isRadioTable ? option.labelTh : ""}
                    control={
                        <RadioStyled
                            {...restProps}
                            label={!isRadioTable ? option.labelTh : ""}
                            disabled={disabled}
                            icon={<BpIcon />}
                            checkedIcon={
                                <BpCheckedIcon
                                    iconcolor={
                                        option.disabled || disabled
                                            ? "433938"
                                            : "6abb13"
                                    }
                                />
                            }
                            disableRipple
                        />
                    }
                    labelPlacement={labelPlacement}
                />
            ));
        };

        return (
            <FormControlStyled
                width={labelPlacement === "top" ? "unset" : "100%"}
            >
                <RadioGroupStyled
                    row={row}
                    defaultValue={defaultValue}
                    value={value}
                    islabel={isLabel ? 1 : 0}
                    onChange={(event: any) => onChange?.(event)}
                    columngap={labelPlacement === "top" ? "32px" : "24px"}
                >
                    {generateRadioOptions()}
                </RadioGroupStyled>
                {!!error && (
                    <ErrorTextStyled className="Mui-error">
                        {errorMessage}
                    </ErrorTextStyled>
                )}
            </FormControlStyled>
        );
    }
);
