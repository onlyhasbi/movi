# Movie

A public TMDb movie website

## How to Run the Project:

1. First, run `npm install`
2. Then, run `npm run dev`

## Features on the Web

### User Authentication

- [x] Users can log in and log out.
- [x] Adding favorites and watchlist items requires login.
- [x] When a non-authenticated user clicks on navigation menu or toggle icons for favorites/watchlist, a login popup will appear.
- [x] Users can log out to delete their session.
- [x] Display a loading text during login.
- [x] Redirect users to the homepage upon logout if they are not on the watchlist or favorites page.

### Home Page

- [x] Displays "Now Playing" movies.
- [x] Showcases "Top Rated" movies.
- [x] Users can add or remove movies from the watchlist.
- [x] "Add to favorite" and "watchlist" buttons are visible on card hover.
- [x] Login is required to modify the watchlist and favorite movies.
- [x] Clicking on a card redirects to the movie details.
- [x] Users can add or remove movies from their watchlist or favorites on the detail page.

### Movie Details

- [ ] Users can rate a movie.
- [x] Displays movie title, release date, overview, and relevant information.
- [x] Users can add or remove movies from the watchlist and mark them as favorites.

### Search Functionality

- [x] Implements a search bar for dynamic title-based movie searches.

### Watchlist

- [x] Users can remove movies from the watchlist.
- [x] Users can navigate to movie details.
- [x] Watchlist data is cached in local storage and updated when modified.

### Favorites

- [x] Users can remove movies from favorites.
- [x] Users can navigate to movie details.
- [x] Favorite data is cached in local storage and updated when modified.

### Responsive Design

- [x] The application is properly viewable on mobile devices.
