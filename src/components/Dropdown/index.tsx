import { useMemo } from "react";
import {
    DropdownContainer,
    MenuItemStyled,
    SelectStyled,
    TextPlaceholderStyled,
} from "./styled";
import { DropdownSize, ValueOption, PropsDropdown } from "./type";
import { ErrorTextStyled } from "../Form/styled";
import { Typography, useMediaQuery } from "@mui/material";

export const AppDropdown = (props: PropsDropdown) => {
    const {
        sizes = "large",
        placeholder,
        value,
        error,
        errorMessage,
        options,
        onChange,
        labelNew,
        ...restProps
    } = props;

    const dropdownSize: DropdownSize = useMemo(() => {
        switch (sizes) {
            case "medium":
                return {
                    fontSize: "14px",
                    lineHeight: "22px",
                    padding: "7px 10px",
                };
            case "small":
                return {
                    fontSize: "12px",
                    lineHeight: "18px",
                    padding: "5px 8px",
                };

            default:
                return {
                    fontSize: "16px",
                    lineHeight: "32px",
                    padding: "8px 16px",
                };
        }
    }, [sizes]);

    const generateSingleOptions = () => {
        if (options.length > 0) {
            return options.map((option: ValueOption, index: number) => {
                return (
                    <MenuItemStyled
                        key={index}
                        value={option.value}
                        dropdownsize={dropdownSize}
                        disabled={option.disabled}
                    >
                        {option.labelTh}
                    </MenuItemStyled>
                );
            });
        } else {
            return (
                <MenuItemStyled dropdownsize={dropdownSize} disabled>
                    ไม่พบข้อมูล
                </MenuItemStyled>
            );
        }
    };

    const matches = useMediaQuery("(min-height:500px)");

    return (
        <DropdownContainer>
            {labelNew && (
                <Typography
                    sx={{
                        fontFamily: "Product Sans",
                        fontSize: "14px",
                    }}
                >
                    {labelNew}
                </Typography>
            )}
            <SelectStyled
                {...restProps}
                value={value}
                error={error}
                dropdownsize={dropdownSize}
                displayEmpty
                renderValue={(selected: any) => {
                    if (selected === "") {
                        return (
                            <TextPlaceholderStyled>
                                {placeholder}
                            </TextPlaceholderStyled>
                        );
                    }

                    const option = options.find(
                        (option) => option.value === selected
                    );
                    return option?.labelTh;
                }}
                MenuProps={{
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                    },
                    transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                    },
                    PaperProps: {
                        sx: {
                            maxHeight: matches
                                ? "calc(500px - 96px)"
                                : "calc(100% - 96px)",
                        },
                    },
                }}
                onChange={onChange}
            >
                {generateSingleOptions()}
            </SelectStyled>
            {!!error && (
                <ErrorTextStyled className="Mui-error">
                    {errorMessage}
                </ErrorTextStyled>
            )}
        </DropdownContainer>
    );
};
