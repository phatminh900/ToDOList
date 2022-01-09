const CloseCompleTaskIcon = (props) => {
  return (
    <button onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon icon"
        viewBox="0 0 512 512"
      >
        <title>Chevron Forward</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M184 112l144 144-144 144"
        />
      </svg>
    </button>
  );
};

export default CloseCompleTaskIcon;