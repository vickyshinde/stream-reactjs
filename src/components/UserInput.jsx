const UserInput = ({
  label,
  id,
  type,
  clsName,
  placeholder,
  errorMsg,
  isValid,
  onChange,
  val,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className={clsName}
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        value={val}
        onChange={(event) => {
          onChange(event);
        }}
      />
      {isValid && (
        <small className="form-text text-danger">{errorMsg}</small>
      )}
    </div>
  );
};

UserInput.defaultProps = {
  label: "Input",
  onChange: () => {}
}

// UserInput.propTypes = {
  // label: PropTypes.string
// }

export default UserInput;
