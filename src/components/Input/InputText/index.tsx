import { TextFieldStyled } from "./styled";
import { InputTextProps } from "./type";

export const AppInputText = (props: InputTextProps) => {
    const { value, patternOnPress, onChange, maxLength, type, ...restProps } =
        props;

    const handleKeyDown = (event: any) => {
        if (event.target.value.length === 0 && event.key === " ") {
            event.preventDefault();
        }
        if (patternOnPress) {
            if (
                !patternOnPress.test(event.key) &&
                event.key !== "Backspace" &&
                event.key !== "ArrowLeft" &&
                event.key !== "ArrowRight"
            ) {
                event.preventDefault();
            }
        }
    };

    return (
        <TextFieldStyled
            {...restProps}
            inputProps={{
                maxLength: maxLength,
            }}
            value={value}
            onKeyDown={handleKeyDown}
            onChange={onChange}
            type={type}
            variant={"standard"}
        />
    );
};
