const UserInput = ({
  label,
  id,
  type,
  clsName,
  placeholder,
  errorMsg,
  onChange,
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
        onChange={(event) => {
          onChange(event);
        }}
      />
      {errorMsg && <small className="form-text text-error">{errorMsg}</small>}
    </div>
  );
};

export default UserInput;
