import './App.css'
import { Outlet} from "react-router-dom";

function App() {

  return (
    <>
        {/* 子路由渲染的“坑位” */}
        <Outlet />
    </>
  )
}

export default App
