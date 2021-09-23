const SubmitButton = ({ clsName, onClick, title, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsName}
    >
      {title}
    </button>
  );
};

export default SubmitButton;
