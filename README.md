# Movie Database App

A responsive movie database application built in React that fetches movie information from a public API. The app is styled with Material UI, features a dark theme, and is optimized for mobile devices.

## Features

-  **API Integration**: Retrieves movie data from [https://dummyapi.online/api/movies](https://dummyapi.online/api/movies).
-  **Responsive Design**: Optimized for both desktop and mobile devices.
-  **Dark Theme**: Uses Material UI’s dark mode for a sleek, modern look.
-  **Movie Cards**: Displays key movie details such as title, year, genre, rating, plot summary, poster, and links to trailers and the movie website.

## Technologies Used

-  **React**: JavaScript library for building user interfaces.
-  **Material UI**: UI component library for React.
-  **Axios**: Promise-based HTTP client for API requests.
-  **CSS/JSX**: Styling and component structure.

## Getting Started

### Prerequisites

-  Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SauravChaudhary26/radiantly-assignment.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd radiantly-assignment
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

   The app will run on [http://localhost:3000](http://localhost:3000).

## Project Structure

```plaintext
radiantly-assignment/
├── src/
│   ├── components/
│   │   └── MovieCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── theme.jsx
├── package.json
└── README.md
```

## API Details

The application fetches movie data from the following endpoint:

-  **Endpoint**: `https://www.freetestapi.com/api/v1/movies`

### Example Movie Object

```json
{
   "id": 1,
   "title": "The Shawshank Redemption",
   "year": 1994,
   "genre": ["Drama"],
   "rating": 9.3,
   "director": "Frank Darabont",
   "actors": ["Tim Robbins", "Morgan Freeman"],
   "plot": "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
   "poster": "https://fakeimg.pl/220x310/ff0000",
   "trailer": "https://example.com/shawshank_redemption_trailer.mp4",
   "runtime": 142,
   "awards": "Nominated for 7 Oscars",
   "country": "USA",
   "language": "English",
   "boxOffice": "$28.3 million",
   "production": "Columbia Pictures",
   "website": "http://www.warnerbros.com/movies/shawshank-redemption"
}
```

## Customization

Feel free to modify the design or add additional features. The app is built with modular components, making it easy to extend functionality.

## Contact

For any questions or inquiries, please reach out at [sauravchaudhary2609@gmail.com](sauravchaudhary2609@gmail.com).

```

```
