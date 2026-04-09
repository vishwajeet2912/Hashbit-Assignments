const { useState } = React;

const movies = [
  { id: 1, name: "Movie 1", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Movie 2", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Movie 3", img: "https://via.placeholder.com/150" },
  { id: 4, name: "Movie 4", img: "https://via.placeholder.com/150" },
  { id: 5, name: "Movie 5", img: "https://via.placeholder.com/150" },
  { id: 6, name: "Movie 6", img: "https://via.placeholder.com/150" },
  { id: 7, name: "Movie 7", img: "https://via.placeholder.com/150" },
  { id: 8, name: "Movie 8", img: "https://via.placeholder.com/150" },
  { id: 9, name: "Movie 9", img: "https://via.placeholder.com/150" },
  { id: 10, name: "Movie 10", img: "https://via.placeholder.com/150" },
  { id: 11, name: "Movie 11", img: "https://via.placeholder.com/150" },
  { id: 12, name: "Movie 12", img: "https://via.placeholder.com/150" },
  { id: 13, name: "Movie 13", img: "https://via.placeholder.com/150" },
  { id: 14, name: "Movie 14", img: "https://via.placeholder.com/150" },
  { id: 15, name: "Movie 15", img: "https://via.placeholder.com/150" },
  { id: 16, name: "Movie 16", img: "https://via.placeholder.com/150" }
];

function App() {
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const [bookingId, setBookingId] = useState("");

  // Page 1: Movie List
  if (page === 1) {
    return (
      <div>
        <h2>Movies</h2>
        <div className="grid">
          {movies.map((m) => (
            <div
              key={m.id}
              className="movie"
              onClick={() => {
                setSelectedMovie(m);
                setPage(2);
              }}
            >
              <img src={m.img} />
              <p>{m.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Page 2: Movie Details
  if (page === 2) {
    return (
      <div>
        <h2>{selectedMovie.name}</h2>
        <img src={selectedMovie.img} />
        <br />
        <button onClick={() => setPage(3)}>Book Seat</button>
      </div>
    );
  }

  // Page 3: Form
  if (page === 3) {
    return (
      <div>
        <h2>Booking Form</h2>

        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br />

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br />

        <input
          placeholder="Mobile"
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />
        <br />

        <button
          onClick={() => {
            setBookingId(Math.floor(Math.random() * 100000));
            setPage(4);
          }}
        >
          Submit
        </button>
      </div>
    );
  }

  // Page 4: Confirmation
  if (page === 4) {
    return (
      <div>
        <h2>Seat Booked ✅</h2>
        <p>Booking ID: {bookingId}</p>
        <p>Name: {form.name}</p>
        <p>Email: {form.email}</p>
        <p>Mobile: {form.mobile}</p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);