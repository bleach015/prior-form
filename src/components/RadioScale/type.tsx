import { ValueOption } from "../Dropdown/type";
import { RadioProps } from "@mui/material";

export type RadioScaleProps = {
    options: ValueOption[];
    defaultValue?: any;
    value?: any;
    onChange?: (event: any) => void;
    leadingText?: string;
    trailingText?: string;
} & RadioProps;
