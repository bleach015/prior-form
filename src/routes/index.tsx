import React from "react";
import paths from "../constant/paths";
import { Navigate, Route, Routes } from "react-router-dom";
import { FormLayout } from "../core/layout/FormLayout";
import { PriorForm } from "../page/PriorForm";
import { Wiki } from "../page/Wiki";
import { Submitted } from "../page/Submitted";

export const RoutesManagement = () => {
    return (
        <React.StrictMode>
            <Routes>
                <Route index element={<Navigate to={paths.priorForm()} />} />
                <Route element={<FormLayout />}>
                    <Route path={paths.priorForm()} element={<PriorForm />} />
                    <Route path={paths.submit()} element={<Submitted />} />
                    <Route path={paths.wiki()} element={<Wiki />} />
                </Route>
            </Routes>
        </React.StrictMode>
    );
};
