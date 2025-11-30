/**
 * 首页
 * @constructor
 */
import styles from './HomePage.module.css'
import iconUrl from '../assets/icon.png';
import {Button} from "antd";
import MySearchInput from "../components/MySearchInput.tsx";
import {useNavigate} from "react-router-dom";

export default function HomePage() {
    /**
     * 跳转到新建笔记页面
     */
    const navigate = useNavigate()

    const navigateAddNote = () => {
        navigate('/addnote')
    }

    return (
        <div id={styles.homePage} >
                {/*顶部头部栏*/}
                <div className={styles.header}>
                    <div className={styles.left}>
                        <img src={iconUrl} alt="icon" width={32} className={styles.icon} />
                        <div className={styles.title}>我的笔记</div>
                    </div>

                    <div className={styles.right}>
                        {/*搜索组件*/}
                        <MySearchInput/>
                        <Button type={"primary"} onClick={navigateAddNote}>新建笔记</Button>
                    </div>
                </div>

                {/*笔记列表*/}
                <div className={styles.main}>
                    暂无笔记内容....
                </div>
        </div>
    )
}