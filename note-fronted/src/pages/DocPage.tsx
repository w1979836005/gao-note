/**
 * 文档编辑器页面
 * @constructor
 */
import styles from './DocPage.module.css'
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {Milkdown, MilkdownProvider, useEditor} from "@milkdown/react";
import {nord} from "@milkdown/theme-nord";
import { Editor, rootCtx ,defaultValueCtx } from "@milkdown/kit/core";
import {commonmark} from "@milkdown/preset-commonmark";
import {block} from "@milkdown/plugin-block";

/**
 * 新建一个独立的编辑器组件
 * @constructor
 */
const MilkdownEditor: React.FC = () => {
    // 2. 使用 useEditor 钩子来创建和配置编辑器实例
    const { get } = useEditor((root) =>
        Editor.make()
            .config(nord) // 使用 Nord 主题
            .config((ctx) => {
                ctx.set(rootCtx, root);
                // 2. 设置默认内容，确保编辑器有初始高度
                ctx.set(defaultValueCtx, '开始你的创作吧...');
            })
            .use(commonmark) // 使用 CommonMark 预设
            .use(block)
    );

    // 3. 渲染 Milkdown 组件，它会被 useEditor 自动配置
    return <Milkdown />;
};

export default function DocPage() {
    const navigate = useNavigate();

    return (
        <div id={styles.docPage}>
                {/*头部区域*/}
                <div className={styles.header}>
                    <ArrowLeftOutlined className={styles.leftarr} onClick={() => navigate(-1)} />
                    <div className={styles.title}>无标题笔记</div>
                </div>

                <div className={styles.editorContainer}>
                    <MilkdownProvider>
                        <MilkdownEditor/>
                    </MilkdownProvider>
                </div>
        </div>
    )
}