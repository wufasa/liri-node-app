require("dotenv").config();
var axios = require("axios")
var keys = require("keys.js");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

if (command === "concert-this"){
    var artist = userInput;
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(URL).then(function(response) {
        // Place the response.data into a variable, jsonData.
        var jsonData = response.data;

        // showData ends up being the string containing the show data we will print to the console
        var showData = [
            "Name of venue: " + jsonData.venue.name,
            "Venue Location: " + jsonData.venue.city,
            "Date of event: " + jsonData.datetime,
        ].join("\n\n");
        console.log(showData);
    });


    //Date of the Event (use moment to format this as "MM/DD/YYYY")
}
else if(command === "spotify-this-song"){
    var songName = userInput;
    spotify
        .search({ type: 'track', query: songName })
        .then(function(response) {
        var jsonData = response.data;
        var showData = [
            "Artist name: " + jsonData.artists.name,
            "Song name: " + jsonData.name,
            "Preview link: " + jsonData.preview_url,
            "Album title: " + jsonData.album.name,
        ].join("\n\n");

        console.log(showData);
    })
        .catch(function(err) {
        console.log(err);
    });

}
else if(command === "movie-this"){
    if(!userInput){
        var movieTitle = "Mr. Nobdy";
    }else{
        var movieTitle = userInput;
    }
    var URL = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy"

    axios.get(URL).then(function(response) {
        // Place the response.data into a variable, jsonData.
        var jsonData = response.data;

                var showData = [
                    "Title of the movie: " + jsonData.Title,
                    "Release year: " + jsonData.Year,
                    "IMDB rating: " + jsonData.imdbRating,
                    "Rotten Tomato rating: " + jsonData.Ratings[1].Value,
                    "Produced in: " + jsonData.Country,
                    "Language: " + jsonData.Language,
                    "Plot: " + jsonData.Plot,
                    "Actors: " + jsonData.Actors,
                ].join("\n\n");
        console.log(showData);
    });


}
else if(command === "do-what-it-says"){

}
else{
    console.log("Wrong command!");
}

