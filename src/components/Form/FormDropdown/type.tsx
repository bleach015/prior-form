import { ValueOption } from "../../Dropdown/type";
import { BaseSelectProps } from "@mui/material";

export type FormDropdownProps = {
    name: string;
    control: any;
    question?: any;
    placeholder?: string;
    direction?: "vertical" | "horizontal";
    options: ValueOption[];
    setValue?: any;
    onChange?: (e: any) => void;
    width?: string;
} & BaseSelectProps;
