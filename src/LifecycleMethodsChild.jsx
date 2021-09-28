import React from 'react'

class LifecycleMethodsChild extends React.Component {
  constructor(props) {
    super();
    this.state = {
      childTitle: "Child Component",
      value: null,
      dummyState: true,
    };
    console.log("Child - constructor");
  }

  componentDidMount() {
    console.log("Child - componentDidMount");
    setTimeout(() => {
      this.setState({
        dummyState: true,
      });
    }, 8000);
    this.forceUpdate();
  }

  static getDerivedStateFromProps(nextProps) {
    console.log("Child - getDerivedStateFromProps", nextProps);
    return {
      value: nextProps.childTitle === "Updated Child Component" ? 100 : null,
    };
  }

  shouldComponentUpdate(nextProps) {
    // debugger;
    console.log("Child - shouldComponentUpdate", nextProps);
    return nextProps.childTitle === "Updated Child Component";
  }

  // rarely used method
  getSnapshotBeforeUpdate(prevProps, prevStates) {
    console.log("Child - getSnapshotBeforeUpdate", prevProps, prevStates);
    return null;
  }

  componentDidUpdate() {
    console.log("Child - componentDidUpdate");
  }

  render() {
    console.log("Child - render");
    return (
      <>
        <h3>{this.props.childTitle}</h3>
        {this.state.value}
      </>
    );
  }
}

export default LifecycleMethodsChild;
