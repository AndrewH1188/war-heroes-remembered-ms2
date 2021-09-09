let map;

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
       // This is for the Mitcham War Memorial - This is one of the memorials where Frederick is remembered.
        center: {lat: 51.40219, lng: -0.16890},
        zoom: 10,
    });
}

//Coordinates for the various memorials listed for the corrosponding Hero that will be marked on the map.
var labels = "Memorials";

var locations = [
    //Mitcham War Memorial
    {lat: 51.40219, lng: -0.16890},
    //Helles Memorial - Turkey
    {lat: 40.04597, lng: 26.17921},
    //Plymouth Naval Memorial
    {lat: 50.36571, lng: 4.14228},
    //Menin Gate Memorial
    {lat: 50.85217, lng: 2.89107},
   //Canadian National Vimy Memorial
   {lat: 50.397976, lng: 2.77402},
   //Thiepval Memorial Pier
   {lat: 50.05069, lng: 2.68577},
]

//Coordinates for the various cemetries listed for the corrosponding Hero that will be marked on the map.
var labels = "Cemetries";

var locations = [
    //St Souplet British Cemetery France
    {lat: 50.05484, lng: 3.52440},
    //Rue-Petillon Military Cemetery
    {lat: 50.63123, lng: 2.83609},
    //St. Sever Cemetery, Rouen France
    {lat: 49.40933, lng: 1.06558},
    //Tyne Cot Memorial
    {lat: 50.88725, lng: 2.99852},
    //Loos British Cemetery
    {lat: 50.45156, lng: 2.79803},
    //Tezze British Cemetery, Italy
    {lat: 45.81382, lng: 12.34771},
    //Hollybrook Memorial, Southampton
    {lat: 50.93371, lng: -1.43099},
]



