import { InputHTMLAttributes } from "react";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "css"> & {
    fullWidth?: boolean;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string | null;
    value?: any;
    disabled?: boolean;
    maxlength?: number;
    showButton?: boolean;
    actionButton?: JSX.Element;
    successMessage?: string | undefined;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
};
