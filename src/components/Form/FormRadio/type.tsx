import { ValueOption } from "../../Dropdown/type";

export type FormRadioProps = {
    name: string;
    control: any;
    question: any;
    isLabel?: boolean;
    direction?: "vertical" | "horizontal";
    required?: boolean;
    options: ValueOption[];
    row?: boolean;
    disabled?: boolean;
    setValue?: any;
    onChange?: (e: any) => void;
};
