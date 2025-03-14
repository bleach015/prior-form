import { MainContainer } from "./styled";
import * as yup from "yup";
import { FormValues } from "./type";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "../../helper";
import { FormInputText } from "../../components/Form/FormInputText";
import paths from "../../constant/paths";
import { FormDesc } from "../../components/FormDesc";
import { FormDropdown } from "../../components/Form/FormDropdown";
import { ValueOption } from "../../components/Dropdown/type";
import { FormRadioTable } from "../../components/Form/FormRadioTable";
import { AppButton } from "../../components/Button";
import { FormRadioScale } from "../../components/Form/FormRadioScale";
import { FormCheckbox } from "../../components/Form/FormCheckbox";
import { FormRadio } from "../../components/Form/FormRadio";
import { FormFileUpload } from "../../components/Form/FormFileUpload";
import { Box, Link, Typography } from "@mui/material";
import colors from "../../constant/colors";

const genderOptons: ValueOption[] = [
    {
        value: "1",
        labelTh: "ชาย",
    },
    {
        value: "2",
        labelTh: "หญิง",
    },
    {
        value: "3",
        labelTh: "ไม่ระบุ",
    },
];

const optionsScale: ValueOption[] = [
    {
        value: "1",
        labelTh: "Option 1",
    },
    {
        value: "2",
        labelTh: "Option 2",
    },
    {
        value: "3",
        labelTh: "Option 3",
    },
    {
        value: "4",
        labelTh: "Option 4",
    },
    {
        value: "5",
        labelTh: "Option 5",
    },
];

const options: ValueOption[] = [
    {
        value: "1",
        labelTh: "Option1",
    },
    {
        value: "2",
        labelTh: "Option 2",
    },
];

const questionTexts = [
    "คำถามอะไรสักอย่าง",
    "คำถามอะไรสักอย่าง2",
    "คำถามอะไรสักอย่าง3ยาวยาวยาวยาวยาวยาวยาวยาวยาวยาวยาวยาวยาวยาว",
];

export const PriorForm = () => {
    const { navigate } = useRouter();
    const defaultValues: FormValues = {
        age: "",
        gender: "",
        radioTable: [],
        radioScale: "",
        fileUpload: "",
        checkbox: [],
        radio: "",
        inputNoReq: "",
    };

    const schema = yup.object().shape({
        age: yup.string().required("จำเป็นต้องตอบคำถามนี้"),
        gender: yup.string().required("จำเป็นต้องตอบคำถามนี้"),
        radioTable: yup
            .array()
            .of(yup.string().required("จำเป็นต้องตอบคำถามนี้"))
            .required("จำเป็นต้องตอบคำถามนี้"),
        radioScale: yup.string().required("จำเป็นต้องตอบคำถามนี้"),
        fileUpload: yup.string().required("จำเป็นต้องตอบคำถามนี้"),
        checkbox: yup.array().of(yup.string().required()).min(1).required(),
        radio: yup.string().required("จำเป็นต้องตอบคำถามนี้"),
    });

    const methods = useForm<FormValues>({
        defaultValues: defaultValues,
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const { handleSubmit, control, setValue, reset } = methods;

    const onSubmit = (data: FormValues) => {
        console.log(data);
        navigate(paths.submit());
    };

    return (
        <FormProvider {...methods}>
            <form>
                <MainContainer>
                    <FormDesc title="TITLE" description="DESCRIPTION" />
                    <FormInputText
                        name="age"
                        control={control}
                        question="อายุ"
                        placeholder="คำตอบของคุณ"
                        required
                    />
                    <FormDropdown
                        name="gender"
                        control={control}
                        question="เพศ"
                        placeholder="เลือก"
                        options={genderOptons}
                        required
                        width="176px"
                    />
                    <FormRadioTable
                        name="radioTable"
                        control={control}
                        options={optionsScale}
                        question="คำถาม"
                        questionTexts={questionTexts}
                        errorMessage={"จำเป็นต้องตอบคำถามนี้"}
                        required
                    />
                    <FormRadioScale
                        name="radioScale"
                        control={control}
                        options={optionsScale}
                        question="คำถาม"
                        required
                    />
                    <FormCheckbox
                        name="checkbox"
                        control={control}
                        options={options}
                        setValue={setValue}
                        question="คำถาม"
                        row={false}
                        errorMessage={"จำเป็นต้องตอบคำถามนี้"}
                        required
                    />
                    <FormRadio
                        name="radio"
                        control={control}
                        options={options}
                        question="คำถาม"
                        row={false}
                        required
                    />
                    <FormFileUpload
                        name="fileUpload"
                        control={control}
                        question="คำถาม"
                        required
                    />
                    <FormInputText
                        name="inputNoReq"
                        control={control}
                        question="คำถาม"
                        placeholder="คำตอบของคุณ"
                    />
                    <Box
                        display="flex"
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        width={"100%"}
                    >
                        <AppButton
                            styledType="secondary"
                            onClick={handleSubmit(onSubmit)}
                            width={"65px"}
                        >
                            ส่ง
                        </AppButton>
                        <Link
                            underline="none"
                            onClick={() => reset()}
                            sx={{ cursor: "pointer" }}
                            color={colors.PINK_PRIMARY}
                        >
                            <Typography fontSize={"14px"}>
                                ล้างแบบฟอร์ม
                            </Typography>
                        </Link>
                    </Box>
                </MainContainer>
            </form>
        </FormProvider>
    );
};
