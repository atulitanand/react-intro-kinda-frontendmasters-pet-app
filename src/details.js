import { Component } from "react";

class Details extends Component {
  constructor() {
    super(); // need to be called because react wants constructor of Component class
    this.state = {
      loading: false,
    };
  }

  async componentDidMount() {
    // this will be called just the first time
    // - ideal for the case when you want to put the [JUST SMILE] component on load
  }

  render() {
    return <h2>hi</h2>;
  }
}

export default Details;
