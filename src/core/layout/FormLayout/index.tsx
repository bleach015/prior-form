import { Fragment } from "react";
import { FormLayoutContainer } from "./styled";
// import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";

export const FormLayout = () => {
    return (
        <Fragment>
            <FormLayoutContainer>
                <Outlet />
                <Footer />
            </FormLayoutContainer>
        </Fragment>
    );
};
