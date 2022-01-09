import styles from "./Input.module.css";
import AddIcon from "./AddIcon";
import TaskItemUnCheckIcon from '../components/TaskItems/TaskItemUnCheckIcon'
const Input = (props) => {
  return (
    <>
      {props.activeForm?<TaskItemUnCheckIcon />:<AddIcon    />}
      <input className={styles.input} {...props.input} onChange={props.onChange} onBlur={props.onBlur} onClick={props.onClick} />
    </>
  );
};
export default Input;
