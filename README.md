# FlexSlider-Polymer

Flexslider realisation for Polymer project.

## Install & Usage:

1. Install with Bower:

	```bash
	$ bower install flexslider-polymer
	```

2. Include following code in your HTML <head> section:

	```html
	<script src="bower_components/jquery/dist/jquery.js"></script>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
	<link rel="import" href="bower_components/flexslider-polymer/flexslider-polymer.html">
	```

3. Use the component on the page:

	```html
	<flexslider-polymer width="600px" height="350px" slideshow="false">
		<img src="assets/slide1.jpg">
		<img src="assets/slide2.jpg">
		<img src="assets/slide3.jpg">
	</flexslider-polymer>
	```

### Options

You can use all available options like in original FlexSlider. Just add attrubute in `<flexslider-polymer>` element:

```html
<flexslider-polymer slideshow="false" controlNav="false" slideshowSpeed="1000" startAt="2">
```

[List of FlexSlider properties](https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties)

### Demo

1. Clone this repo:

	```bash
	$ git clone https://github.com/roovenier/flexslider-polymer.git && cd flexslider-polymer
	```

2. Install dependencies and start server:

	```bash
	$ bower install && npm install && npm start
	```

3. Open <code>http://localhost:8080</code> in browser
