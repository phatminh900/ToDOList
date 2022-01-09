import styles from './Layout.module.css'
const Layout=(props)=>{
    return <section className={styles.layout}>
        {props.children}
    </section>
}
export default Layout