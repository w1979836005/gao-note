/**
 * 搜索框组件
 * @constructor
 */
import serachIcon from  '../assets/search.png'
import styles from './MySearchInput.module.css'

export default function MySearchInput() {
    return (
        <div className={styles.myInput}>
            <input style={{width:'320px', height:'32px', padding:'8px', paddingLeft:'32px', borderRadius:'4px'}} placeholder={'请输入搜索笔记名称...'}/>
            <img src={serachIcon} alt={'search'} style={{width:'22px', height:'22px'}} className={styles.searchIcon} />
        </div>
    )
}