// function getDuration(src) {
//     return new Promise(function(resolve) {
//         var audio = new Audio();
//         $(audio).on("loadedmetadata", function(){
//             resolve(audio.duration);
//         });
//         audio.src = src;
//     }); 
// }

// getDuration("C:\Users\dangi\OneDrive\Codes\Spotify Clone\songs\2.mp3")

// .then(function(length) {
//     console.log('I got length ' + length);
//     document.getElementById("duration").textContent = length;
// });