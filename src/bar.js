export default function bar() {
    const text = document.createElement('h1');
    text.innerHTML = 'Hi Fellas!!';
    document.body.appendChild(text);
    text.style.color = 'darkred';
    
    //document.body.style.background = 'black;

    text.style.textAlign = "center";

    const texte2 = document.createElement('h2');
    texte2.innerHTML = 'Bienvenidos mis colegas';
    document.body.appendChild(texte2);
    texte2.style.textAlign = "center";


}
    




export function defaultParameters(height, color = '#FF000',) {
    console.log('Default parameters', height, color);
}

export function arrow(){
    return [1, 2, 3].map((n) => n + 1);
}

