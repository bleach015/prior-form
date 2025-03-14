import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { FormFileUploadProps } from "./type";
import {
    Container,
    ErrorTextStyled,
    FormContainer,
    LabelContainer,
    LabelStyled,
} from "../styled";
import { Controller } from "react-hook-form";
import { FileUpload } from "../../FileUpload";
import colors from "../../../constant/colors";

export const FormFileUpload = React.forwardRef(
    (props: FormFileUploadProps, ref) => {
        const {
            name,
            control,
            required,
            question,
            onChange: onChangeCallBack,
        } = props;

        return (
            <FormContainer direction="vertical">
                <Controller
                    name={name}
                    control={control}
                    render={({
                        field: { onChange, value, ...field },
                        fieldState: { error },
                    }) => (
                        <Container error={!!error ? 1 : 0}>
                            {question && (
                                <Box display={"flex"} flexDirection={"column"}>
                                    <LabelContainer>
                                        <LabelStyled>{question}</LabelStyled>
                                        <Fragment>
                                            {required && (
                                                <Typography
                                                    color={colors.RED_PRIMARY}
                                                >
                                                    *
                                                </Typography>
                                            )}
                                        </Fragment>
                                    </LabelContainer>
                                    <Fragment>
                                        <Typography fontSize={"12px"}>
                                            อัปโหลดไฟล์ที่รองรับ 1 รายการ
                                            ขนาดสูงสุด 10 MB
                                        </Typography>
                                    </Fragment>
                                </Box>
                            )}
                            <FileUpload
                                {...field}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    onChange(event);
                                    onChangeCallBack?.(event);
                                }}
                            />
                            {!!error && (
                                <ErrorTextStyled className="Mui-error">
                                    {error.message}
                                </ErrorTextStyled>
                            )}
                        </Container>
                    )}
                />
            </FormContainer>
        );
    }
);
