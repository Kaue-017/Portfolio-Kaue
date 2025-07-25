import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WhoIAm } from "../components/who-i-am";
import { Projects } from "../components/projects";
import { Skills } from "../components/skills";
import { Contact } from "../components/contact";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<WhoIAm />} />
            <Route exact path="/projetos" element={<Projects />} />
            <Route exact path="/habilidades" element={<Skills />} />
            <Route exact path="/contato" element={<Contact />} />
        </Routes>
    </BrowserRouter>
)