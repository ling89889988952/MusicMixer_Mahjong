// (() => {
//     let aud    = document.querySelector('audio'),
//         play   = document.querySelector("#playAudio"),
//         pause  = document.querySelector("#stopAudio"),
//         rewind = document.querySelector("#rewindAudio"),
//         tracks =document.querySelectorAll(".trackholder");

//     function playAudio() {
//         aud.play();
//     }

//     function pauseAudio() {
//         aud.pause(true);
//     }

//     function rewindAudio(){
//         aud.currentTime = 0;

//         playAudio();
//     }

//     function switchAudioTrack(){
//         currentTrack = this.dataset.currenttrack;

//         aud.src = `audio/${currentTrack}`;
//         aud.load();
//         aud.play();
//     }

//     play.addEventListener("click", playAudio);
//     pause.addEventListener("click", pauseAudio);
//     rewind.addEventListener("click", rewindAudio);

//     tracks.forEach(track => {
//         track.addEventListener("click", switchAudioTrack);
//     });

// })();


(() => {
    console.log('fired!');
 
    let voicesBoard =  document.querySelector('.icons');
    let chorusBoard = document.querySelector('.chorus');

    // let mahjongSelctors = document.querySelectorAll('#mahjongHolder img');

    let chorusZones = document.querySelectorAll('.seat');
    let audioPlayer = document.querySelector('audio');

      
    function initDrag(){
        voicesBoard.querySelectorAll('img').forEach(img => {
            img.addEventListener("dragstart", function(e){
                console.log('draggin...');
                e.dataTransfer.setData("text/plain", this.id);
            });
        });
    }

    chorusZones.forEach(zone =>{
        zone.addEventListener("dragover", function(e){
            e.preventDefault();
            console.log('dragged over me!');
        });

        zone.addEventListener("drop",function(e) {
            e.preventDefault();
            console.log('you dropped something on me!');

            let voice = document.querySelector(`#${e.dataTransfer.getData("text/plain")}`);
            e.target.appendChild(voice);

            // to layer in the audio tracks, you'd create a new audio element here the way we did it with the shooter game example

            let newAudioSource = `audio/${voice.dataset.currenttrack}`;
            audioPlayer.src = newAudioSource;
            audioPlayer.load();
            audioPlayer.play();

        });
        
    });

    function resetVoicesChorus(){
        voicesBoard.innerHTML = "";
        createVoicesChorus(this.dataset.chorusref);
    }

    initDrag();

})();