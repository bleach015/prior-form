import { AppButton } from "../../components/Button";
import { ValueOption } from "../../components/Dropdown/type";
import { FileUpload } from "../../components/FileUpload";
import { FormDesc } from "../../components/FormDesc";
import { AppRadio } from "../../components/Radio";
import { AppRadioScale } from "../../components/RadioScale";
import { AppRadioTable } from "../../components/RadioTable";
import { MainContainer } from "./styled";

export const Wiki = () => {
    const options: ValueOption[] = [
        {
            value: "1",
            labelTh: "Option 1",
        },
        {
            value: "2",
            labelTh: "Option 2",
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
    const questionTexts = [
        "คำถามอะไรสักอย่าง",
        "คำถามอะไรสักอย่าง2",
        "คำถามอะไรสักอย่าง3ยาวยาวยาวยาวยาวยาวยาวยาวยาวยาวยาวยาวยาวยาว",
    ];
    return (
        <MainContainer>
            <FormDesc title="TITLE" description="DESCRIPTION"></FormDesc>
            <AppButton>ย้อนกลับ</AppButton>
            <AppButton styledType="secondary">ส่งคำตอบ</AppButton>
            <AppRadio options={options} row={false} />
            <AppRadioScale options={optionsScale} />
            <AppRadioTable
                options={optionsScale}
                questionTexts={questionTexts}
            />
            <FileUpload />
        </MainContainer>
    );
};
