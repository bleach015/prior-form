import { ValueOption } from "../Dropdown/type";
import { RadioProps } from "@mui/material";

export type RadioTableProps = {
    options: ValueOption[];
    defaultValue?: any;
    value?: any;
    onChange?: (event: any) => void;
    questionTexts: string[];
} & RadioProps;
