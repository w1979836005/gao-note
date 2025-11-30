/**
 * 首页
 * @constructor
 */
import styles from './HomePage.module.css'
import iconUrl from '../assets/icon.png';
import {Button} from "antd";
import MySearchInput from "../components/MySearchInput.tsx";

export default function HomePage() {
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
                        <Button type={"primary"}>新建笔记</Button>
                    </div>
                </div>

                {/*笔记列表*/}
                <div className={styles.main}>
                    暂无笔记内容....
                </div>
        </div>
    )
}