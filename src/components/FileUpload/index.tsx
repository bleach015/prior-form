import { Fragment, useRef, useState } from "react";
import { AppButton } from "../Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Box, IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import colors from "../../constant/colors";
import { FileUploadProps } from "./type";
import React from "react";

export const FileUpload = React.forwardRef((props: FileUploadProps, ref) => {
    const { onChange } = props;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileInfo, setFileInfo] = useState<File | null>(null);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileInfo(file);
        }
    };

    const handleClear = () => {
        setFileInfo(null);
    };

    return (
        <Fragment>
            {!fileInfo ? (
                <Box display={"flex"} maxWidth={"160px"}>
                    <AppButton onClick={handleButtonClick}>
                        <FileUploadIcon />
                        เพิ่มไฟล์
                    </AppButton>
                    <input
                        type="file"
                        ref={fileInputRef}
                        hidden
                        onChange={(event) => {
                            onChange?.(event);
                            handleFileChange(event);
                        }}
                    />
                </Box>
            ) : (
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={`1px solid ${colors.GRAY_200}`}
                    borderRadius={"4px"}
                    maxHeight={"28px"}
                    padding={"7px 16px"}
                    gap={1}
                    height={"100%"}
                    bgcolor={colors.WHITE}
                >
                    <Typography>{fileInfo.type}</Typography>
                    <Typography>{fileInfo.name}</Typography>
                    <IconButton onClick={handleClear} disableRipple>
                        <ClearIcon />
                    </IconButton>
                </Box>
            )}
        </Fragment>
    );
});
