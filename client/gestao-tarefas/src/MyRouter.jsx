import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import CadastroUser from "./pages/CadastroUser.jsx";
import Tarefas from "./pages/Tarefas.jsx";
import CadastroTarefa from "./pages/CadastroTarefa.jsx";
import ErroPage from "./pages/ErroPage.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<ErroPage/>,
        children:[
            {
                path:"/",
                element: <CadastroUser/>
            },
            {
                path:"/cadastro-usuario",
                element: <CadastroUser/>
            },
            {
                path:"/cadastro-tarefa",
                element: <CadastroTarefa/>
            },
            {
                path:"/tarefas",
                element: <Tarefas/>
            }
        ]
    }
]);

export default router;