//Jeg har tilføjet nogle ekstra informationer som opgaven bad om
function Album(artist, album, productionYear, favorites) {
  this.artist = artist;
  this.album = album;
  this.productionYear = productionYear;
  this.favorites = favorites;
}


function addDivWithAlbum(album, parentid) {
  let parentElement = document.getElementById(parentid);
  //Her har jeg lavet et table for at gøre opsillingen af albummet lidt flottere
  let elementToAdd =
    "<tr>" +
    "<td>" + album.artist + "</td>" +
    "<td>" + album.album + "</td>" +
    "<td>" + album.productionYear + "</td>" +
    "<td>" + album.favorites + "</td>" +
    "</tr>";
  parentElement.innerHTML = parentElement.innerHTML + elementToAdd;
}

fetchContent("Data/albums.json").then((albums) => {
  console.log("Original Data: ");
  console.log(albums);

  let albumObjects = [];

  console.log("To be populated: ");
  console.log(albumObjects);
//Tilføjet produktionYear og favorites
  for (let i = 0; i < albums.length; i++) {
    const album = new Album(
      albums[i].artistName,
      albums[i].albumName,
      albums[i].productionYear,
      albums[i].favorites
    );
    albumObjects.push(album);
  }

  console.log("Object Data: ");
  console.log(albumObjects);

  console.log("Test: ");
  console.log(albumObjects[7].totalTracks);

  albumObjects.forEach(function (a) {
    addDivWithAlbum(a, "content");
  });
});

//A magic spell - memorise it and use it EXACTLY like this :)
async function fetchContent(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
