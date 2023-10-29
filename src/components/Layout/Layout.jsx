import css from "./Layout.module.scss"

export const Layout = ({children})=>{
    return(
<div className={css.container}>
<header className={css.header}> 
        <h1 className={css.title}>
            Todo
        </h1>
        <input type="checkbox" />
        </header>
        <main >

            {children}</main>
</div>
    )
}