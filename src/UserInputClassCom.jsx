import React from "react";
import PropTypes from "prop-types";

class UserInputClassCom extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          type={this.props.type}
          className={this.props.clsName}
          id={this.props.id}
          placeholder={this.props.placeholder}
          autoComplete="off"
          value={this.props.val}
          onChange={(event) => {
            this.props.onChange(event.target.value);
          }}
        />
        {this.props.errorMsg && (
          <small className="form-text text-danger">{this.props.errorMsg}</small>
        )}
      </div>
    );
  }
};

UserInputClassCom.defaultProps = {
  id: "",
  label: "Input",
  type: 'text',
  clsName: "inputClass",
  placeholder: "placeholder",
  value:"",
  onChange: () => {},
};

UserInputClassCom.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  clsName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default UserInputClassCom;
