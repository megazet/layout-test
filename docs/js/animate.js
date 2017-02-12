window.addEventListener("load", start);

function start() {
	for (i = 0; i <= 15; i++) {
		setTimeout(createIcon, i*500);
	}
}

function createIcon() {
	var figureIcons = document.getElementById('figure-icons');
	var figureIcon = document.createElement('div');
	figureIcon.classList.add('figure-icons-icon');
	figureIcon.style.left = Math.floor(Math.random()*200) + 'px';
	figureIcon.style.top = Math.floor(Math.random()*80) + 'px';
	var scale = [5, 6, 7, 8, 9];
	figureIcon.style.transform = "scale(0." + scale[Math.floor(Math.random() * scale.length)] + ")";
	var bg = [0 , 34, 66, 100];
	figureIcon.style.backgroundPosition = bg[Math.floor(Math.random() * bg.length)] + "% 0%";
	figureIcons.appendChild(figureIcon);
	setTimeout(function() {
		figureIcons.removeChild(figureIcon);
		createIcon();
	}, 4000);

}



