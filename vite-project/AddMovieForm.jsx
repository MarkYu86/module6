import { useState } from "react";

export function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  // ++ add support for the synopsis field as well, here and below
  const handleSubmit = (e) => {
    e.preventDefault();
    // Creates key-value pair object with form input names/values
    const data = new FormData(e.target);
    console.log('FORM DATA:',data)
    onAddMovie(Object.fromEntries(data));
    }
  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input
            name="title"
            // defaultValue={}
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Year Released:
          <input
            name="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}
