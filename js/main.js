(() => {

    //click to sing
    let trackHolder = document.querySelectorAll('.trackholder');
    let audioLeft = document.getElementById('audio_left'); 

    let toggleAudio = (audio) => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    let switchAudioTrack = (audio, source) => {
        if (!audio.src.includes(source)) {
            audio.src = `audio/${source}`;
            audio.load(audio);
        }

        toggleAudio(audio);
    }

    trackHolder.forEach(icon => {
        icon.addEventListener('click', function() {
            let currentTrack = this.dataset.currenttrack;

            switchAudioTrack(audioLeft, currentTrack);
        }, false);
    });


    //  Create the drag & drop event 
    //  Make the icon can be drag to the chorus area
    trackHolder.forEach(icon => {
        icon.addEventListener('dragstart', function(e) {
            console.log('you drag me');
            e.dataTransfer.setData('text/plain', this.id);
        });
    });

    let seatBox = document.querySelectorAll('.seatBox');

    seatBox.forEach(box => {
        // dragover
        box.addEventListener('dragover', function(e) {
            e.preventDefault();
            console.log('dragged over me');
        }, false);

        // drop
        box.addEventListener('drop', function(e) {
            e.preventDefault();
            console.log('you can drop!');

            // show the icon in the right
            let icon = e.dataTransfer.getData('text/plain');
            e.currentTarget.children[1].appendChild(document.querySelector(`#${icon}`));

            // play the audio immediately
            let audioPlayer = e.currentTarget.firstElementChild;
            let audioSrc = document.getElementById(icon).dataset.currenttrack;

            switchAudioTrack(audioPlayer, audioSrc); 

        }, false);
    });

    // click center btn to start chorus
    let chorusBtn = document.getElementById('chorusBtn');

    let toggleAll = () => {
        let audiosRight = document.querySelectorAll('.audioRight');

        audiosRight.forEach(audio => {
            toggleAudio(audio);
        })
    }
    chorusBtn.addEventListener('click', toggleAll);


    // drag it back
    let iconBoard = document.querySelectorAll('.iconImg');

    seatBox.forEach(box => {
        box.addEventListener('dragstart', function(e) {
            // delete audio src
            let audio = e.currentTarget.firstElementChild;
            audio.removeAttribute('src');
            audio.pause();
        })
    });

    iconBoard.forEach(board => {
        board.addEventListener('dragover', function (e) {
            e.preventDefault();
            console.log('where to go?');
        });

        board.addEventListener('drop', function (e) {
            e.preventDefault();
            console.log('you can take me back!');

            let icon = e.dataTransfer.getData('text/plain');
            // move icon
            e.target.appendChild(document.querySelector(`#${icon}`));

            console.log('Thanks');
        });
    });
})();