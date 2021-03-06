import styles from "./TaskIconStyle.module.css";
const TaskItemCheckIcon = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <p className={`${styles.notification} hidden`}>{props.type}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon icon"
        viewBox="0 0 512 512"
      >
        {/* <title>Checkmark Circle</title> */}
        <path
          d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M352 176L217.6 336 160 272"
        />
      </svg>
    </button>
  );
};

export default TaskItemCheckIcon;
