(() => {
    console.log("fire");


    let icon = document.querySelectorAll(".trackholder");
    let dropZones = document.querySelectorAll(".seat");
    let audio = document.querySelector('audio');
    let seat = document.querySelectorAll(".seat");
    let iconBoard = document.querySelectorAll(".iconImg");
  

//  Create the drag & drop event 
//  Make the icon can be drag to the chorus area

     icon.forEach(icon => {
        icon.addEventListener("dragstart", function(e){
            console.log("you drag me");
            e.dataTransfer.setData("text/plain", this.id);
        });
     });



    dropZones.forEach(zone => {
        zone.addEventListener("dragover", function(e){
            e.preventDefault();
            console.log("dragged over me");
        });
        zone.addEventListener("drop",function(e) {
                e.preventDefault();
                console.log('you can drop!'); 

                let icon = e.dataTransfer.getData("text/plain");
            
                
                // if(e.currentTarget.firstElementChild){
                //     let currentImage = e.currentTarget.firstElementChild;
                //     dropZones.appendChild(currentImage);

                   
                // }

                e.currentTarget.appendChild(document.querySelector(`#${icon}`)); 
            })
    })


//  Make the icon can be drag  back to the voice area


    iconBoard.forEach(board => {
        board.addEventListener("dragover", function(e){
            e.preventDefault();
            console.log("where to go?");
        });

        board.addEventListener("drop", function(e){
            e.preventDefault();
            console.log('you can take me back!');

            let icon = e.dataTransfer.getData("text/plain");

            e.target.appendChild(document.querySelector(`#${icon}`));

            console.log('Thanks');
            
        })
    })



    function playAudio(){
        console.log('audio play');
        audio.play();
    }

    function pauseAudio(){
        console.log('audio pause');
        audio.pause(true);
    }

    function toggleAudio(){
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
    }



    function switchAudioTrack(){
        currentTrack = this.dataset.currenttrack;

        if(!audio.src.includes(currentTrack)){
            audio.src = `audio/${currentTrack}`;
            audio.load();
        }
        
        toggleAudio();
       
    }


  

    icon.forEach(icon => {
        icon.addEventListener("click", switchAudioTrack);
    });




})();