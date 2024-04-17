// Making a function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Making a variables and Calling a function with Saving a values in function's parameter
var album1 = make_album("Artist no. 1", "Album title 1");
var album2 = make_album("Artist no. 2", "Album title 2");
var album3 = make_album("Artist no. 3", "Album title 3", 10);
// Printing a function values saved in variables
console.log(album1);
console.log(album2);
console.log(album3);
