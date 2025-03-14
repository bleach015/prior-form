import { FormDesc } from "../../components/FormDesc";
import { MainContainer } from "./styled";

export const Submitted = () => {
    return (
        <MainContainer>
            <FormDesc
                title="TITLE"
                description="เราได้บันทึกคำตอบของคุณไว้แล้ว"
                required={false}
            />
        </MainContainer>
    );
};
