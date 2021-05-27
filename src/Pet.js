import React from "react";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.props.breed),
//   ]);
// };

const Pet = ({ props }) => {
  const { name, breed, city, description, images, state, id, animal } = props;
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  hero = images[0] || hero;
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
