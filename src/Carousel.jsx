import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
  };
  handleIndexClick = () => {
    this.setState({
      active: Number(event.target.dataset.index),
    });
  };
  render() {
    const { active } = this.state; // state is mutable (set state)
    const { images } = this.props; // props are immutable

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => {
            return (
              <img
                data-index={index}
                key={photo}
                src={photo}
                alt="animal thumbnail"
                onClick={this.handleIndexClick}
                // onClick={this.handleIndexClick.bind(this)}
                // you can also bind this here but i used an arrow func which will use this of its container
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
