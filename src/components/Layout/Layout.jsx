import { useDispatch, useSelector } from "react-redux"
import scss from "./Layout.module.scss"
import { getTheme } from "redux/selectors"
import { setTheme } from "redux/changeThemeSlice"
import clsx from "clsx"

export const Layout = ({children})=>{
    const theme = useSelector(getTheme)
    const dispatch = useDispatch()
    const handleThemeChange = theme => dispatch(setTheme(theme))
    return(
<div className={clsx(scss.wrapper, {
    [scss.dark]:theme
})}>
    <div className={scss.hero}></div>
    <div className={scss.container}>
<header className={scss.header}> 
        <h1 className={scss.title}>
            Todo
        </h1>
        <input className={scss.theme} type="checkbox" onChange={ () =>handleThemeChange(!theme)}/>
        </header>
        <main >
            {children}</main>
            <p className={scss.drag}>Drag and drop to reorder list</p>
</div>
</div>
    )
}

