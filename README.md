# FlexSlider-Polymer

Flexslider realisation for Polymer project.

## Install & Usage:

1. Install with Bower:

	```bash
	$ bower install flexslider-polymer
	```

2. Import component in your HTML <head> section:

	```html
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
