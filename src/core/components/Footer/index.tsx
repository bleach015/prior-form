import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import colors from "../../../constant/colors";
import paths from "../../../constant/paths";

export const Footer = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    useEffect(() => {
        const currentPage = window.location.pathname;

        if (currentPage === paths.submit()) {
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }
    }, []);

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            maxWidth="640px"
            marginTop={"18px"}
        >
            {!isSubmitted && (
                <Typography fontSize={"12px"} color={colors.GRAY_500}>
                    ห้ามส่งรหัสผ่านใน Prior ฟอร์ม
                </Typography>
            )}
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                padding={"24px 0"}
                flexDirection={"column"}
            >
                <Typography
                    sx={{
                        fontFamily: "Product Sans",
                        fontSize: "22.1px",
                        opacity: 0.55,
                    }}
                >
                    Prior ฟอร์ม
                </Typography>
            </Box>
        </Box>
    );
};
