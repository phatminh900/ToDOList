import { useSelector } from "react-redux"

const useMyDay=()=>{
    const myDayList= useSelector(state=>state.myDayList)
    return myDayList
}
export default useMyDay