export type FormFileUploadProps = {
    name: string;
    control: any;
    required?: boolean;
    question: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
