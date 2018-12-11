# liri-node-app
Liri-app
Linke to Trivia Game: https://wufasa.github.io/liri-node-app/

Required packages:

npm install --save node-spotify-api
npm install axios


About:
Liri, or language interpretation and recognition interface app. Run this app in the terminal using node, pass in two arguments. Below are the arguments that it accepts and the expected output.

Input: concert-this <artist/band name here>
Output: 
Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")

Input: spotify-this-song <artist/band name here>
Output:
Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from

Input: movie-this <movie name here>
    Output: 
    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

Input: do-what-it-says (Does whatever random.txt says, needs only one argument)
Output: Current spotify-this-song "I want it That Way"; refer to the output of spotify-this-song


Built with:

*Javascript

Authors:

Michael Wu

