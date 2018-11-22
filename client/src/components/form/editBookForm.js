import React from 'react';

export default function EditBookForm(props) {
  const data = props;
  return (
    <form className={data.bookInfo} onSubmit={data.closeModalAndSaveBook}>
      <span>New Name</span>
      <input type="text" name="name" defaultValue={data.bookToEdit.name} onChange={data.handleChange} />
      <span>New Genre</span>
      <input type="genre" name="genre" defaultValue={data.bookToEdit.genre} onChange={data.handleChange} />
      <span>New Price</span>
      <input type="number" name="price" defaultValue={data.bookToEdit.price} min="0" onChange={data.handleChange} />
      <button type="submit" disabled={!data.parentState.valid} className={data.closeBtn}>Update</button>
    </form>
  );
}
