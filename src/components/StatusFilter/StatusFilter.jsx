import { Button } from "Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { statusFilters } from "redux/constants"
import { setStatusFilter } from "redux/filterStatusSlice"
import { getFilterStatus } from "redux/selectors"

export const StatusFilter = () =>{
const dispatch = useDispatch()
const filter = useSelector(getFilterStatus)
const handleFilterChange = () => dispatch(setStatusFilter(filter))

    return(
        <div>
<Button selected={filter === statusFilters.all} onClick={()=>handleFilterChange(statusFilters.all)}>All</Button>
<Button selected={filter === statusFilters.all} onClick={()=>handleFilterChange(statusFilters.all)}>Active</Button>
<Button selected={filter === statusFilters.all} onClick={()=>handleFilterChange(statusFilters.all)}>Completed</Button>
        </div>
    )
}