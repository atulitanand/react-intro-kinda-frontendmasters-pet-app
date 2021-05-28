import { Component } from "react";
import { withRouter } from "react-router";
import Carousel from "./Carousel";
class Details extends Component {
  // constructor() {
  //   super(); // need to be called because react wants constructor of Component class
  //   this.state = {
  //     loading: false,
  //   };
  // }
  state = {
    loading: true,
  };

  async componentDidMount() {
    // this will be called just the first time
    // - ideal for the case when you want to put the [JUST SMILE] component on load
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
// this with router will pass all that values in the details
export default withRouter(Details);
