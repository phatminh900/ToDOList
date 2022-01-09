import { useSelector } from "react-redux";
const useCurrentList = () => {
  const { currentList } = useSelector((state) => state.taskList);


  const allLists = useSelector((state) => state.taskList.items);
  const list = allLists.find((taskList) => taskList.id === currentList.id);
  if (!Object.values(currentList).length) return ;
  return list;
};
export default useCurrentList;
