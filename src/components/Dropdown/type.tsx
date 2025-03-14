import { BaseSelectProps } from "@mui/material";

export type PropsDropdown = {
    sizes?: "small" | "medium" | "large";
    value: any;
    placeholder?: string;
    errorMessage?: string;
    options: ValueOption[];
    onChange?: (e: any) => void;
    labelNew?: string;
} & BaseSelectProps;

export type DropdownSize = {
    fontSize: string;
    lineHeight: string;
    padding: string;
};

export type ValueOption = {
    labelTh?: string;
    labelEn?: string;
    value: any;
    disabled?: boolean;
};
