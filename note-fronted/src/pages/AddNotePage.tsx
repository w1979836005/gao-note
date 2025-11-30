/**
 * 新建笔记页面
 * @constructor
 */
import styles from './AddNotePage.module.css'
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
export default function AddNotePage() {

    const navigete = useNavigate()

    const navigateBack = ()=>{
        navigete(-1)
    }

    return (
        <div id={styles.addNotePage}>
            {/*头部区域*/}
            <div className={styles.header}>
                <ArrowLeftOutlined className={styles.leftarr} onClick={()=>navigateBack()} />
            </div>

            {/*主要区域*/}
            <div className={styles.main}>
                <div className={styles.title}>新建笔记</div>

                <div className={styles.selectBox}>
                    <div className={styles.selectItem}>
                        <div className={styles.itemTitle}>新文档</div>
                        <div className={styles.itemSubTitle}>创建文本笔记</div>
                    </div>
                    <div className={styles.selectItem}>
                        <div className={styles.itemTitle}>新画布</div>
                        <div className={styles.itemSubTitle}>创建绘图笔记</div>
                    </div>
                </div>
            </div>
        </div>
    )
}