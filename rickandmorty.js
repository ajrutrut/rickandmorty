window.onload = function() {
function createSlider(container) {
	const images = container.querySelectorAll('.slider-images > img');
	const displayImage = container.querySelector('[data-display]');
	let imageIndex;

	// Sets image from slider to data-display 
	function setImage(index) {
		imageIndex = index;
		displayImage.src = images[index].src;
	}

	//sets first image
	setImage(0);

	container.addEventListener("click", event => {
		
		if(event.target.hasAttribute("data-prev")){
			setImage(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
		} else if(event.target.hasAttribute("data-next")){
			setImage(imageIndex ===  images.length -1 ? 0 : imageIndex + 1);
		}
		
	});

	
	}
document.querySelectorAll(".slider-top").forEach(createSlider);
document.querySelectorAll(".slider-middle").forEach(createSlider);
}