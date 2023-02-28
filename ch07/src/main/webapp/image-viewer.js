var slide = 0;
var indexTemp = 0;

imageViewer = {

	init: function() {
		$(imageViewer._init);
	},

	_init: function() {
		$('.image-viewer .buttons #btn-change').click(imageViewer._change);
		$('.image-viewer .buttons #btn-slideshow').click(imageViewer._slide);
	},

	_slide: function() {
		slide++;
		var Interval = setInterval(function() {	
			if (slide%2 == 1) {
				console.log("start 슬라이드: " + slide);
				imageViewer._changeImage();
			} else {
				console.log("stop 슬라이드: " + slide);
				clearInterval(Interval);
			}
		}, 2000);
	},

	_change: function() {
		console.log("chageClick");
		imageViewer._changeImage();
	},

	_changeImage: function() {
		var index = Math.floor(Math.random() * this._images.length);
		console.log("이미지 바꾸기");
		
		if(index == indexTemp) {
			imageViewer._changeImage();
			return;
		}
		console.log(imageViewer._images[index].file);

		$('div img').attr({
			src: "images/" + imageViewer._images[index].file,
			title: imageViewer._images[index].name,
		});
		return index;
	},

	_images: [{
		name: '국화',
		file: 'Chrysanthemum.jpg'
	}, {
		name: '사막',
		file: 'Desert.jpg'
	}, {
		name: '수국',
		file: 'Hydrangeas.jpg'
	}, {
		name: '해파리',
		file: 'Jellyfish.jpg'
	}, {
		name: '코알라',
		file: 'Koala.jpg'
	}, {
		name: '등대',
		file: 'Lighthouse.jpg'
	}, {
		name: '팽귄',
		file: 'Penguins.jpg'
	}, {
		name: '튤립',
		file: 'Tulips.jpg'
	}]
};