const chargement = document.querySelector('.chargement');


function heure() {  
    document.querySelector('.heureActuelle').innerText= new Date().toLocaleTimeString();
      } 
    heure();
    const heureActuelle = setInterval(heure, 1000);


function HTMLinXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=PcVQebW8dytUuElmEiS9zubacfcZ2ouI6BWUnCzz');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            chargement.style.display = 'display';
            const data = JSON.parse(xhr.response);
            const img = document.createElement('img');
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h2');
            const h3 = document.createElement('h3');
            img.src = data.url;
            h1.textContent = data.title;
            h2.textContent = data.date;
            h3.textContent = data.explanation;
            document.body.appendChild(h1);
            document.body.appendChild(h2);
            document.body.appendChild(h3);
            document.body.appendChild(img);
            chargement.style.display = 'none';
        }
    };
    xhr.onerror = function () {
        console.log("Request failed");
    };
}

window.addEventListener('load', HTMLinXHR);
console.dir(HTMLinXHR)
