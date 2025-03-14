import { Box, Typography } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import { AppRadio } from "../Radio";
import { RadioScaleProps } from "./type";

export const AppRadioScale = React.forwardRef((props: RadioScaleProps, ref) => {
    const {
        options,
        defaultValue,
        value,
        onChange,
        leadingText = "ไม่เห็นด้วยอย่างยิ่ง",
        trailingText = "เห็นด้วยอย่างยิ่ง",
    } = props;

    return (
        <Fragment>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                // alignItems={"flex-end"}
                alignItems={"center"}
                gap={2}
                width="100%"
            >
                <Box display={"flex"} maxWidth={"10%"}>
                    <Typography>{leadingText}</Typography>
                </Box>
                <Box display={"flex"} maxWidth={"80%"}>
                    <AppRadio
                        options={options}
                        defaultValue={defaultValue}
                        value={value}
                        onChange={onChange}
                        labelPlacement={"top"}
                    />
                </Box>
                <Box display={"flex"} maxWidth={"10%"}>
                    <Typography>{trailingText}</Typography>
                </Box>
            </Box>
        </Fragment>
    );
});
