const SubmitButton = ({ clsName, onClick, title, type, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={clsName}
    >
      {title}
    </button>
  );
};

export default SubmitButton;
