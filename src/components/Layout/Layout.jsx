import { useDispatch, useSelector } from "react-redux"
import scss from "./Layout.module.scss"
import { themeChange } from "redux/operations"
import { getTasks, getTheme } from "redux/selectors"
import { setTheme } from "redux/filterStatusSlice"
import clsx from "clsx"

export const Layout = ({children})=>{
    const theme = useSelector(getTheme)
    console.log(theme);
    const dispatch = useDispatch()
    const handleThemeChange = theme => dispatch(setTheme(theme))
    return(
<div className={clsx(scss.container, {
    [scss.dark]:theme
})}>
<header className={scss.header}> 
        <h1 className={scss.title}>
            Todo
        </h1>
        <input className={scss.theme} type="checkbox" onChange={ () =>handleThemeChange(!theme)}/>
        </header>
        <main >

            {children}</main>
</div>
    )
}

