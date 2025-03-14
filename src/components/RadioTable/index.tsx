import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import colors from "../../constant/colors";
import { AppRadio } from "../Radio";
import { RadioTableProps } from "./type";

export const AppRadioTable = React.forwardRef((props: RadioTableProps, ref) => {
    const {
        options,
        defaultValue,
        value,
        onChange,
        questionTexts = ["คำถามอะไรสักอย่าง"],
    } = props;

    const handleRowChange = (index: number) => (event: any) => {
        const newValues = [...value];
        newValues[index] = event.target.value;
        onChange?.(newValues);
    };

    return (
        <Fragment>
            <Box
                display={"flex"}
                justifyContent={"flex-end"}
                alignItems={"center"}
                width="100%"
                maxWidth={"624px"}
                padding={1}
                columnGap={4}
            >
                {options.map((option, index) => (
                    <Fragment key={index}>
                        <Box display={"flex"}>
                            <Typography>{option.labelTh}</Typography>
                        </Box>
                    </Fragment>
                ))}
            </Box>
            {questionTexts.map((text, index) => (
                <Box
                    key={index}
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    gap={2}
                    width="100%"
                    maxWidth={"624px"}
                    bgcolor={colors.GRAY_100}
                    padding={1}
                >
                    <Box display={"flex"} maxWidth={"20%"}>
                        <Typography>{text}</Typography>
                    </Box>
                    <Box display={"flex"} maxWidth={"80%"}>
                        <AppRadio
                            options={options}
                            defaultValue={defaultValue}
                            value={value[index] || ""}
                            onChange={handleRowChange(index)}
                            labelPlacement={"top"}
                            isRadioTable
                        />
                    </Box>
                </Box>
            ))}
        </Fragment>
    );
});
