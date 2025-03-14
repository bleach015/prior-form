import { Box, Link, Typography } from "@mui/material";
import colors from "../../constant/colors";
import paths from "../../constant/paths";
import { useRouter } from "../../helper";
import { Container, ContainerTip } from "./styled";
import { FormDescProps } from "./type";

export const FormDesc = (props: FormDescProps) => {
    const { title, description, required = true } = props;
    const { navigate } = useRouter();
    return (
        <Container>
            <ContainerTip></ContainerTip>
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                gap={"24px"}
                width={"100%"}
            >
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    gap={"12px"}
                    width={"100%"}
                >
                    <Typography fontSize={"32px"}>{title}</Typography>
                    <Typography fontSize={"15px"}>{description}</Typography>
                </Box>
                {required ? (
                    <Typography fontSize={"14px"} color={colors.RED_PRIMARY}>
                        {"* ระบุว่าเป็นคําถามที่จําเป็น"}
                    </Typography>
                ) : (
                    <Link
                        onClick={() => navigate(paths.priorForm())}
                        sx={{ cursor: "pointer" }}
                        color={colors.PINK_PRIMARY}
                    >
                        <Typography fontSize={"14px"}>
                            ส่งคำตอบเพิ่มอีก
                        </Typography>
                    </Link>
                )}
            </Box>
        </Container>
    );
};
