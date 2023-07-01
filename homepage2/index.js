let img = document.createElement('img');

img.src = 'img/icons/logo_n3.png';

img.style.width = '25%';
img.style.height = 'auto';
img.style.position = 'fixed';
img.style.top = '50%';
img.style.left = '50%';
img.style.transform = 'translate(-50%, -50%)';
img.style.zIndex = '9999'; 


let backgroundDiv = document.createElement('div');
backgroundDiv.style.position = 'fixed';
backgroundDiv.style.top = '0';
backgroundDiv.style.left = '0';
backgroundDiv.style.width = '100%';
backgroundDiv.style.height = '100%';
backgroundDiv.style.backgroundColor = '#ffffff'; 
backgroundDiv.style.zIndex = '9998'; 

let container = document.getElementById('loading-img');

container.appendChild(backgroundDiv);

container.appendChild(img);

backgroundDiv.style.display = 'block';
img.style.display = 'block';

window.addEventListener('load', () => {
    backgroundDiv.style.display = 'none';
    img.style.display = 'none';
});

onload=()=>{
    let btn=document.getElementById("dark_mode")
    btn.onclick = () =>{
        document.body.classList.toggle("dark")
    }
}

