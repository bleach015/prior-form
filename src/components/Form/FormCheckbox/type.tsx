import { ValueOption } from "../../Dropdown/type";

export type FormCheckboxProps = {
    name: string;
    control: any;
    question?: any;
    direction?: "vertical" | "horizontal";
    required?: boolean;
    options: ValueOption[];
    row?: boolean;
    disabled?: boolean;
    setValue?: any;
    errorMessage?: string;
    onChange?: (e: any) => void;
};
