import { useMemo } from "react";
import colors from "../../constant/colors";
import { ButtonStyled, ChidrenContainer } from "./styled";
import { PropsButton } from "./type";

export const AppButton = (props: PropsButton) => {
    const {
        width = "100%",
        minWidth,
        styledType = "primary",
        styledSize = "large",
        children,
        ...restProps
    } = props;

    const buttonColors = useMemo(() => {
        switch (styledType) {
            case "primary":
                return {
                    bg: colors.WHITE,
                    border: colors.GRAY_200,
                    text: colors.PRIOR_DARK_GREEN,
                    bgHover: colors.GRAY_100,
                    borderHover: colors.GRAY_100,
                    textHover: colors.PRIOR_DARK_GREEN,
                    bgDisable: colors.GRAY_200,
                    borderDisable: colors.GRAY_200,
                    textDisable: colors.GRAY_300,
                };

            case "secondary":
                return {
                    bg: colors.PRIOR_DARK_GREEN,
                    border: colors.PRIOR_DARK_GREEN,
                    text: colors.WHITE,
                    bgHover: colors.PRIOR_PRIMARY_GREEN_50,
                    borderHover: colors.PRIOR_PRIMARY_GREEN_50,
                    textHover: colors.WHITE,
                    bgDisable: colors.GRAY_200,
                    borderDisable: colors.GRAY_200,
                    textDisable: colors.GRAY_300,
                };

            // case "back":
            //     return {
            //         bg: colors.WHITE,
            //         border: "unset",
            //         text: colors.DARK_PUCE_PRIMARY,
            //         bgHover: colors.YELLOW_100,
            //         borderHover: "unset",
            //         textHover: colors.DARK_PUCE_PRIMARY,
            //         bgDisable: colors.WHITE,
            //         borderDisable: "unset",
            //         textDisable: colors.GRAY_400,
            //     };

            default:
                return {
                    bg: colors.WHITE,
                    border: colors.WHITE,
                    text: colors.PRIOR_PRIMARY_GREEN,
                    bgHover: colors.GRAY_100,
                    borderHover: colors.GRAY_100,
                    textHover: colors.PRIOR_PRIMARY_GREEN,
                    bgDisable: colors.GRAY_200,
                    borderDisable: colors.GRAY_200,
                    textDisable: colors.GRAY_300,
                };
        }
    }, [styledType]);

    const buttonSize = useMemo(() => {
        if (styledSize === "small") {
            if (styledType === "primary") {
                return "3px 12px";
            } else if (styledType === "back") {
                return "2px 8px 2px 0";
            } else {
                return "1px 12px";
            }
        } else {
            if (styledType === "back") {
                return "0 16px";
            } else {
                return "7px 16px";
            }
        }
    }, [styledSize, styledType]);

    return (
        <ButtonStyled
            width={width}
            minwidth={minWidth}
            {...restProps}
            buttoncolors={buttonColors}
            buttonsize={buttonSize}
        >
            <ChidrenContainer buttonsize={styledSize}>
                {children}
            </ChidrenContainer>
        </ButtonStyled>
    );
};
