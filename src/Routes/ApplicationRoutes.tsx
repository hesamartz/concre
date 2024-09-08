import { Route, Routes } from "react-router-dom";
import { Inicio } from "../Views/Inicio/Inicio";
import { Usuarios } from "../Views/Usuarios/Usuarios";

import { RouterLayout } from "../components/RouterLayout/RouterLayout";

function ApplicationRoutes() {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<Inicio />} />
                <Route path="/usuarios" element={<Usuarios />} />
            </Route>
            <Route path="/nose" element={<div>Estas perdido</div>} />
        </Routes>
    );
}

export { ApplicationRoutes };