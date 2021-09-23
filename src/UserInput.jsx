const UserInput = ({
  label,
  id,
  type,
  clsName,
  placeholder,
  errorMsg,
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
      {errorMsg && <small className="form-text text-danger">{errorMsg}</small>}
    </div>
  );
};

export default UserInput;
