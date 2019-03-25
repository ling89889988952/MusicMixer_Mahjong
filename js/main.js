(() => {
    console.log("fire");

    // var mahjong_arry = [ "01", "02", "03", "04", "05", "06", "07", "08", "09"];

    // var audio_arry = [ "01", "02", "03", "04", "05", "06", "07", "08", "09"];

    // for (var i = 0; i<9; i++) {
    //     console.log("mahjong"+ mahjong_arry[i]);
    //     console.log("audio"+ audio_arry[i]);
    // }


    let icon = document.querySelectorAll(".trackholder");
    let seatBoard = document.querySelector(".chorus");
    let dropZones =document.querySelectorAll(".seat");


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
            
                
                if(e.currentTarget.firstElementChild){
                    let currentImage = e.currentTarget.firstElementChild;
                    piecesBoard.appendChild(currentImage);

                   
                }

                e.currentTarget.appendChild(document.querySelector(`#${icon}`)); 
            })
    })




})();