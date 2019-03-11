(() => {
    let aud    = document.querySelector('audio'),
        play   = document.querySelector("#playAudio"),
        pause  = document.querySelector("#stopAudio"),
        rewind = document.querySelector("#rewindAudio"),
        tracks =document.querySelectorAll(".trackholder");

    function playAudio() {
        aud.play();
    }

    function pauseAudio() {
        aud.pause(true);
    }

    function rewindAudio(){
        aud.currentTime = 0;

        playAudio();
    }

    function switchAudioTrack(){
        currentTrack = this.dataset.currenttrack;

        aud.src = `audio/${currentTrack}`;
        aud.load();
        aud.play();
    }

    play.addEventListener("click", playAudio);
    pause.addEventListener("click", pauseAudio);
    rewind.addEventListener("click", rewindAudio);

    tracks.forEach(track => {
        track.addEventListener("click", switchAudioTrack);
    });

})();


// (() => {
//     console.log('fired!');

//     const theVoice = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
 
//     let voicesBoard =  document.querySelector('.icons');
//     let chorusBoard = document.querySelector('chorus');

//     let mahjongSelctors = document.querySelectorAll('#mahjongHolder img');

//     let dropZones = document.querySelectorAll('.chorus-zone');

//     function createVoicesChorus(pictureIndex){

//         theVoices.forEach((voice, index) => {
//             let newVoiceChorus = `<img id="piece${index}" class="chorus-image"
//             src="images/${voice + pictureIndex}.jpg" alt="chorus voice" draggable> `;    

//             voicesBoard.innerHTML += newChorusVoice;
//     });

//     initDrag();
// }
      
//     function initDrag(){
//         voicesBoard.querySelectorAll('img').forEach(img => {
//             img.addEventListener("dragstart", function(e){
//                 console.log('draggin...');
//                 e.dataTransfer.setData("text/plain", this.id);
//             });
//         });
//     }

//     chorusZones.forEach(zone =>{
//         zone.addEventListener("dragover", function(e){
//             e.preventDefault();
//             console.log('dragged over me!');
//         });

//         zone.addEventListener("drop",function(e) {
//             e.preventDefault();
//             console.log('you dropped something on me!');

//             let voice = e.dataTransfer.getDate("text/plain");
//             e.target.appendChild(document.querySelector(`#${voice}`));

//         })
        
//     })

//     function resetVoicesChorus(){
//         voicesBoard.innerHTML = "";
//         createVoicesChorus(this.dataset.chorusref);
//     }

//     chorusSelectors.forEach(botton => botton.addEventListener("click", resetVoicesChorus));
//     createVoicesChorus(0);

// })();