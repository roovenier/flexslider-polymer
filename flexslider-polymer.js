var sliderProps = {};

Polymer({
	is: 'flexslider-polymer',
	ready: function() {
		$(".flexslider .slides img").wrap("<li></li>");

		sliderProps.width = (this.getAttribute('width')) ? this.getAttribute('width') : 'auto';
		sliderProps.height = (this.getAttribute('height')) ? this.getAttribute('height') : 'auto';

		sliderProps.namespace = (this.getAttribute('namespace')) ? this.getAttribute('namespace') : "flex-";
		sliderProps.selector = (this.getAttribute('selector')) ? this.getAttribute('selector') : ".slides > li";
		sliderProps.animation = (this.getAttribute('animation')) ? this.getAttribute('animation') : "fade";
		sliderProps.easing = (this.getAttribute('easing')) ? this.getAttribute('easing') : "swing";
		sliderProps.direction = (this.getAttribute('direction')) ? this.getAttribute('direction') : "horizontal";
		sliderProps.reverse = (this.getAttribute('reverse') == "true") ? true : false;
		sliderProps.animationLoop = (this.getAttribute('animationLoop') == "false") ? false : true;
		sliderProps.smoothHeight = (this.getAttribute('smoothHeight') == "true") ? true : false;
		sliderProps.startAt = (this.getAttribute('startAt')) ? parseInt(this.getAttribute('startAt')) : 0;
		sliderProps.slideshow = (this.getAttribute('slideshow') == "false") ? false : true;
		sliderProps.slideshowSpeed = (this.getAttribute('slideshowSpeed')) ? parseInt(this.getAttribute('slideshowSpeed')) : 7000;
		sliderProps.animationSpeed = (this.getAttribute('animationSpeed')) ? parseInt(this.getAttribute('animationSpeed')) : 600;
		sliderProps.initDelay = (this.getAttribute('initDelay')) ? parseInt(this.getAttribute('initDelay')) : 0;
		sliderProps.randomize = (this.getAttribute('randomize') == "true") ? true : false;

		sliderProps.pauseOnAction = (this.getAttribute('pauseOnAction') == "false") ? false : true;
		sliderProps.pauseOnHover = (this.getAttribute('pauseOnHover') == "true") ? true : false;
		sliderProps.useCSS = (this.getAttribute('useCSS') == "false") ? false : true;
		sliderProps.touch = (this.getAttribute('touch') == "false") ? false : true;
		sliderProps.video = (this.getAttribute('video') == "true") ? true : false;

		sliderProps.controlNav = (this.getAttribute('controlNav') == "false") ? false : true;
		sliderProps.directionNav = (this.getAttribute('directionNav') == "false") ? false : true;
		sliderProps.prevText = (this.getAttribute('prevText')) ? this.getAttribute('prevText') : "Previous";
		sliderProps.nextText = (this.getAttribute('nextText')) ? this.getAttribute('nextText') : "Next";

		sliderProps.keyboard = (this.getAttribute('keyboard') == "false") ? false : true;
		sliderProps.multipleKeyboard = (this.getAttribute('multipleKeyboard') == "true") ? true : false;
		sliderProps.mousewheel = (this.getAttribute('mousewheel') == "true") ? true : false;
		sliderProps.pausePlay = (this.getAttribute('pausePlay') == "true") ? true : false;
		sliderProps.pauseText = (this.getAttribute('pauseText')) ? this.getAttribute('pauseText') : 'Pause';
		sliderProps.playText = (this.getAttribute('playText')) ? this.getAttribute('playText') : 'Play';

		sliderProps.controlsContainer = (this.getAttribute('controlsContainer')) ? this.getAttribute('controlsContainer') : "";
		sliderProps.manualControls = (this.getAttribute('manualControls')) ? this.getAttribute('manualControls') : "";
		sliderProps.sync = (this.getAttribute('sync')) ? this.getAttribute('sync') : "";
		sliderProps.asNavFor = (this.getAttribute('asNavFor')) ? this.getAttribute('asNavFor') : "";

		sliderProps.itemWidth = (this.getAttribute('itemWidth')) ? parseInt(this.getAttribute('itemWidth')) : 0;
		sliderProps.itemMargin = (this.getAttribute('itemMargin')) ? parseInt(this.getAttribute('itemMargin')) : 0;
		sliderProps.minItems = (this.getAttribute('minItems')) ? parseInt(this.getAttribute('minItems')) : 0;
		sliderProps.maxItems = (this.getAttribute('maxItems')) ? parseInt(this.getAttribute('maxItems')) : 0;
		sliderProps.move = (this.getAttribute('move')) ? parseInt(this.getAttribute('move')) : 0;
	}
});

window.onload = function() {
	$('.flexslider').flexslider({
		namespace: sliderProps.namespace,
		selector: sliderProps.selector,
		animation: sliderProps.animation,
		easing: sliderProps.easing,
		direction: sliderProps.direction,
		reverse: sliderProps.reverse,
		animationLoop: sliderProps.animationLoop,
		smoothHeight: sliderProps.smoothHeight,
		startAt: sliderProps.startAt,
		slideshow: sliderProps.slideshow,
		slideshowSpeed: sliderProps.slideshowSpeed,
		animationSpeed: sliderProps.animationSpeed,
		initDelay: sliderProps.initDelay,
		randomize: sliderProps.randomize,

		// Usability features
		pauseOnAction: sliderProps.pauseOnAction,
		pauseOnHover: sliderProps.pauseOnHover,
		useCSS: sliderProps.useCSS,
		touch: sliderProps.touch,
		video: sliderProps.video,

		// Primary Controls
		controlNav: sliderProps.controlNav,
		directionNav: sliderProps.directionNav,
		prevText: sliderProps.prevText,
		nextText: sliderProps.nextText,

		// Secondary Navigation
		keyboard: sliderProps.keyboard,
		multipleKeyboard: sliderProps.multipleKeyboard,
		mousewheel: sliderProps.mousewheel,
		pausePlay: sliderProps.pausePlay,
		pauseText: sliderProps.pauseText,
		playText: sliderProps.playText,

		// Special properties
		controlsContainer: sliderProps.controlsContainer,
		manualControls: sliderProps.manualControls,
		sync: sliderProps.sync,
		asNavFor: sliderProps.asNavFor,

		// Carousel Options
		itemWidth: sliderProps.itemWidth,
		itemMargin: sliderProps.itemMargin,
		minItems: sliderProps.minItems,
		maxItems: sliderProps.maxItems,
		move: sliderProps.move,
	}).css({width: sliderProps.width, height: sliderProps.height});
};
