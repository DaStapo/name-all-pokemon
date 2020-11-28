let box = document.getElementById("pokemon-box");

let spriteDictionary = {};
let silhouetteDictionary = {};

function showSprite(name){
	spriteDictionary[name].style.display = "inline";
	silhouetteDictionary[name].style.display = "none";
}

function showSilhouette(name){
	spriteDictionary[name].style.display = "none";
	silhouetteDictionary[name].style.display = "inline";
}


function fileToName(filename){
	//remove extension
	filename = filename.substr(0, filename.lastIndexOf('.'))
	
	//remove whitespaces
	filename = filename.replace(/\s/g,'');
	
	//remove dashes
	filename = filename.replace('-', '');
	
	//put to lowercase, just in case
	filename = filename.toLowerCase();
	return filename;
}



function onload (fileNames) {
	for (let i = 0; i < fileNames.length; i++){
		let fileName = fileNames[i];
		let spritePath = '/sprites/' + fileNames[i]
		let silhouettePath = '/silhouettes/' + fileNames[i]
		
		let sprite = document.createElement("img");
		sprite.classList.add('sprite');
		sprite.src = spritePath;
		box.appendChild(sprite);
		spriteDictionary[fileName] = sprite;
		
		let silhouette = document.createElement("img");
		silhouette.classList.add('sprite');
		silhouette.src = silhouettePath;
		box.appendChild(silhouette);
		silhouetteDictionary[fileName] = silhouette;
		
		//showSilhouette(fileName);
		showSprite(fileName);
	}
}






function loadNames (onSuccess){
	let xhttp = new XMLHttpRequest();
    xhttp.open("GET", '/names', true);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status === 200) {
				onSuccess(JSON.parse(this.response));
            }else {
				 console.log('error loading image list, retrying...');
				 setTimeout(function (){
					 loadNames(onSuccess);
				 }, 2);
			}
				 
         }
     };
	 xhttp.send();
}
loadNames(onload);

