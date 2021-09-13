function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: {lat: 51.40219, lng: -0.16890}
    });
  }

  //Coordinates for the various Memorials and Cemetries listed for the corrosponding Hero that will be marked on the map.
// I used https://codepen.io/ahmadawais/pen/NQdWQx?editors=1010 to see how to do the below with the locations as this way it will show with the names of the memorials or cemetries
var locations = [
  ['Private Frederick Spearink - Mitcham War Memorial', 51.40219, -0.16890, 1],
  ['Second Lieutenant Sidney Vandyke Hasluck and Private Frederick Spearink - Helles Memorial', 40.04597, 26.17921, 2],
  ['Leading Seaman John Sexton - Plymouth Naval Memorial', 50.36571, 4.14228, 3],
  ['Lance Corporal Arthur Norman (Barney) Allen and Private Thomas Phillips - Menin Gate Memorial', 50.85217, 2.89107, 4],
  ['Private John “Jack” Henry Thomas - Canadian National Vimy Memorial', 50.397976, 2.77402, 5],
  ['Private Bertram Alec Reader and Lance Corporal Norman Frank Ewart Cole - Thiepval Memorial Pier', 50.05069, 2.68577, 6],
  ['Private Thomas Phillips - Huthwaite Cenotaph', 53.12764, -1.29581, 7],
  ['Private Richard Spearink - St Souplet British Cemetery', 50.05484, 3.52440, 8],
  ['Lance Sergeant Thomas Banister - Rue-Petillon Military Cemetery', 50.63123, 2.83609, 9],
  ['Nurse Elizabeth McMath (Daisy) Warnock - St. Sever Cemetery', 49.40933, 1.06558, 10],
  ['Major and acting Lieutenant-Colonel Harry Moorhouse, Captain Ronald Moorhouse and Rifleman Henry William Longman - Tyne Cot Memorial', 50.88725, 2.99852, 11],
  ['Private John “Jack” Henry Thomas - Loos British Cemetery', 50.45156, 2.79803, 12],
  ['Trooper George Ernest Dawkes - Tezze British Cemetery', 45.81382, 12.34771, 13],
  ['Private Adolphus Jack - Hollybrook Memorial', 50.93371, -1.43099, 14]
];

// for the marker image (hopefully) assets/images/poppy-cross.png