import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {

  return (
    <>
        {/* 导航栏 */}
        <nav style={{ padding: '1rem' }}>
            <Link to="/doc">文档</Link> | <Link to="/canvas">画板</Link>
        </nav>
        <hr />

        {/* 子路由渲染的“坑位” */}
        <Outlet />
    </>
  )
}

export default App
