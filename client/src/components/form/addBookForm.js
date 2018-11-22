import React from 'react';

export default function AddBookForm(props) {
  const data = props;
  return (
    <form className={data.bookInfo} onSubmit={data.closeModalAndSaveBook}>
      <span>Name</span>
      <input type="text" value={data.parentState.name} name="name" placeholder="Name of the book" onChange={data.handleChange} />
      <span>Genre</span>
      <input type="genre" value={data.parentState.genre} name="genre" placeholder="Genre of the book" onChange={data.handleChange} />
      <span>Price</span>
      <input type="number" value={data.parentState.price} name="price" min="0" placeholder="Price in euros" onChange={data.handleChange} />
      <button type="submit" disabled={!data.parentState.valid} className={data.closeBtn}>Save</button>
    </form>
  );
}
