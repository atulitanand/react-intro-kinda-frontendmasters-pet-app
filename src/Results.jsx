import Pet from "./Pet";

function Results({ pets }) {
  console.log("pets", pets);
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => <Pet props={pet} key={pet.id} />)
      )}
    </div>
  );
}

export default Results;
// {pets.map((pet) => (
//   <Pet props={pet} key={pet.id} />
// ))}
