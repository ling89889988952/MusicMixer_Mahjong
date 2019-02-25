(() => {
    console.log('fired!');

    const theVoice = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
 
    let voicesBoard =  document.querySelector('.icons');
    let chorusBoard = document.querySelector('chorus');

    let mahjongSelctors = document.querySelectorAll('#mahjongHolder img');

    let dropZones = document.querySelectorAll('.chorus-zone');

    function createVoicesChorus(pictureIndex){

        theVoices.forEach((voice, index) => {
            let newVoiceChorus = `<img id="piece${index}" class="chorus-image"
            src="images/${voice + pictureIndex}.jpg" alt="chorus voice" draggable> `;	

            voicesBoard.innerHTML += newChorusVoice;
    });

    initDrag();
}
      
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

            let voice = e.dataTransfer.getDate("text/plain");
            e.target.appendChild(document.querySelector(`#${voice}`));

        })
        
    })

    function resetVoicesChorus(){
        voicesBoard.innerHTML = "";
        createVoicesChorus(this.dataset.chorusref);
    }

    chorusSelectors.forEach(botton => botton.addEventListener("click", resetVoicesChorus));
    createVoicesChorus(0);

})();