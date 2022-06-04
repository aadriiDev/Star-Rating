function illuminateStars(span){
    sessionStorage.setItem('value',span.id)
    changeColorSpan()
    for (let i = 0; i < sessionStorage.getItem('value'); i++){
        document.getElementById("container").getElementsByTagName("span")[i].style.color = "yellow";    
    }
}

function changeColorSpan(){
    let spans = document.getElementById("container").getElementsByTagName("span")
    for (let i = 0; i < spans.length; i++){
        spans[i].style.color = "black"
    }
}

function showResult(){
    var result = document.getElementById("result");
    result.innerHTML = "You have selected " + sessionStorage.getItem('value') + " stars!";
}

/** Session Storage: Almacena el dato mientras la pestaña esta abierta, una vez se cierre dicho dato se elimina.
 * Local Storage: Almacena el dato y este se mantiene de forma indefinida o bien hasta que se decida limpiar los datos del navegador. 
 */