import React from "react";

class LifecycleMethodsUnmount extends React.Component {
  constructor(props) {
    super();
    this.state = {
      childTitle: "unmount Component",
    };
    console.log("unmount - constructor");
  }

  clickMe() {
    alert('hi');
  }

  componentDidMount() {
    document.addEventListener('click', this.clickMe);
    console.log("unmount - componentDidMount");
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickMe);
    console.log("unmount - componentWillUnmount");
  }

  render() {
    console.log("unmount - render");
    return (
      <>
        <h3>{this.props.unmountTitle}</h3>
      </>
    );
  }
}

export default LifecycleMethodsUnmount;
