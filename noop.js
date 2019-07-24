function sizeCanvas() {
	appWidth = window.innerWidth;
	appHeight = window.innerHeight;
	canvas = document.getElementById('canvas');
	ctx = NOOPBOT_SETUP_CANVAS( { canvas: canvas, bgColor:'#000000' });
}