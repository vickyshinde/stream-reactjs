import React from 'react'
import LifecycleMethodsChild from "./LifecycleMethodsChild";
// import LifecycleMethodsUnmount from "./LifecycleMethodsUnmount";

class LifecycleMethods extends React.Component {
  constructor() {
    super();
    this.state = {
      childTitle: "Child Component",
      unmountTitle: "UnMount Component",
      showComponent: true,
    };
    console.log("Parent - constructor");
  }

  componentDidMount() {
    console.log("Parent - componentDidMount");

    // getDerivedState
    setTimeout(() => {
      this.setState({
        childTitle: "Updated Child Component",
      });
    }, 7000);

    // unmount component
    setTimeout(() => {
      this.setState({
        showComponent: false,
      });
    }, 5000);
  }

  // // deprecated method
  // componentWillMount() {
  //   console.log("Parent - componentWillMount");
  // }

  // componentDidUpdate() {
  //   console.log("Parent - componentDidUpdate");
  // }

  render() {
    console.log("Parent - render");
    return (
      <>
        <h1>Component Lifecycle Methods</h1>
        <LifecycleMethodsChild childTitle={this.state.childTitle} />
        {/* {
          this.state.showComponent &&
          <LifecycleMethodsUnmount unmountTitle={this.state.unmountTitle} />
        } */}
      </>
    );
  }
}

export default LifecycleMethods;
