import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Pickatchu',
    artwork: {
      title: 'Pika pika',
      city: 'Clermont-Ferrand',
      image: 'https://static.pkmcards.fr/characters/image-cartes-a-collectionner-pokemon-card-game-tcg-pkmcards-pikachu.webp',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }



  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h2 className="mb-3">Artwork Form</h2>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input className="form-control" value={person.name} onChange={handleNameChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input className="form-control" value={person.artwork.title} onChange={handleTitleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">City:</label>
          <input className="form-control" value={person.artwork.city} onChange={handleCityChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL:</label>
          <input className="form-control" value={person.artwork.image} onChange={handleImageChange} />
        </div>
        <div className="text-center">
          <p className="fw-bold">
            <i>{person.artwork.title}</i> by {person.name}
            <br />(located in {person.artwork.city})
          </p>
          <img src={person.artwork.image} alt={person.artwork.title} className="img-fluid rounded shadow" />
        </div>
      </div>
    </div>
  );


}

