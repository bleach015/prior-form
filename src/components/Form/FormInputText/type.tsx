import { InputTextProps } from "../../Input/InputText/type";

export type FormInputTextProps = {
    name: string;
    control: any;
    question: any;
    placeholder?: string;
    direction?: "vertical" | "horizontal";
    setValue?: any;
    errorMessage?: string;
    infoMaxWidth?: string;
} & InputTextProps;
