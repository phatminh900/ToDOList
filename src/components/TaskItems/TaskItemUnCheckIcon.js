import styles from "./TaskIconStyle.module.css";
const TaskItemUnCheckIcon = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <p className={`${styles.notification} hidden`}>{props.type}</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon icon"
        viewBox="0 0 512 512"
      >
        {/* <title>Ellipse</title> */}
        <circle
          cx="256"
          cy="256"
          r="192"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </button>
  );
};
export default TaskItemUnCheckIcon;
