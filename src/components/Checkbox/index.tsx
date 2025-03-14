import { Fragment } from "react";
import { ErrorTextStyled, FormControlStyled } from "../Form/styled";
import { BpCheckedIcon, BpIcon, CheckboxStyled, FormControlLabelStyled } from "./styled";
import { PropsCheckbox } from "./type";

export const AppCheckbox = (props: PropsCheckbox) => {
    const {
        label,
        name,
        value,
        error = false,
        errorMessage = "",
        checked,
        disabled,
        onChange,
        ...restProps
    } = props;

    return (
        <Fragment>
            {!!error ? (
                <FormControlStyled>
                    <FormControlLabelStyled
                        label={label}
                        disabled={disabled}
                        control={
                            <CheckboxStyled
                                {...restProps}
                                disableRipple
                                checkedIcon={<BpCheckedIcon />}
                                icon={<BpIcon />}
                                inputProps={{ "aria-label": "App Checkbox" }}
                                label={label}
                                name={name}
                                value={value}
                                checked={checked}
                                disabled={disabled}
                                onChange={onChange}
                            />
                        }
                    />
                    <ErrorTextStyled
                        className="Mui-error"
                    >
                        {errorMessage}
                    </ErrorTextStyled>
                </FormControlStyled>
            ) : (
                <FormControlLabelStyled
                    label={label}
                    disabled={disabled}
                    control={
                        <CheckboxStyled
                            {...restProps}
                            disableRipple
                            checkedIcon={<BpCheckedIcon />}
                            icon={<BpIcon />}
                            inputProps={{ "aria-label": "App Checkbox" }}
                            label={label}
                            name={name}
                            value={value}
                            checked={checked}
                            disabled={disabled}
                            onChange={onChange}
                        />
                    }
                />
            )}
        </Fragment>
    );
};