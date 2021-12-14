function addElements(){
    
    for (let index = 1; index < 9; index++) {
        console.log(index)

       var div = document.createElement('div');
       div.innerHTML = `${index}`;
       document.getElementsByClassName('app-container')[0].appendChild(div);
        
    }

}