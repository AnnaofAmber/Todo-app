import scss from "./StatusFilter.module.scss"
import clsx from "clsx"
import { Button } from "components/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { statusFilters } from "redux/constants"
import { setStatusFilter } from "redux/filterStatusSlice"
import { getFilterStatus, getTheme } from "redux/selectors"

export const StatusFilter = () =>{
const dispatch = useDispatch()
const filter = useSelector(getFilterStatus)
const handleFilterChange = filter => dispatch(setStatusFilter(filter))
const theme = useSelector(getTheme)

    return(
        <div className={clsx(scss.wrapper, {
            [scss.dark]:theme
        })}>
<Button  selected={filter === statusFilters.all} onClick={()=>handleFilterChange(statusFilters.all)}>All</Button>
<Button selected={filter === statusFilters.active} onClick={()=>handleFilterChange(statusFilters.active)}>Active</Button>
<Button selected={filter === statusFilters.completed} onClick={()=>handleFilterChange(statusFilters.completed)}>Completed</Button>
        </div>
    )
}