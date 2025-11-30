import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import DocPage from "../pages/DocPage.tsx";
import CanvasPage from "../pages/CanvasPage.tsx";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement: <div>页面出错了！！！</div>,
        children:[
            {
                path:'doc',
                element:<DocPage/>
            },
            {
                path:'canvas',
                element:<CanvasPage/>
            }
        ]
    }
])