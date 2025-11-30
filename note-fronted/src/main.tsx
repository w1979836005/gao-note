import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import 'antd/dist/reset.css';
import {ConfigProvider} from "antd"; // antd 样式重置

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConfigProvider
            theme={{
                token:{
                    colorPrimary: '#050505',       // 主要按钮/链接
                    colorSuccess: '#76d773',       // 成功
                    colorWarning: '#d9c873',       // 警告
                    colorError: '#ce6c6c',         // 危险/错误
                    colorInfo: '#d9d9d9',          // 信息
                }
            }}>
            <RouterProvider router={router}/>
        </ConfigProvider>
    </StrictMode>,
)
