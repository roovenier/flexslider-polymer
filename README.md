# FlexSlider-Polymer

Flexslider realisation on Polymer project

### [https://github.com/alexqeo/flexslider-polymer-demo](Demo)

## Install & Usage:

1. Install with [http://bower.io](Bower):

```bash
$ bower install flexslider-polymer
```

2. Import component in your HTML <head> section:

```bash
<link rel="import" href="bower_components/flexslider-polymer/flexslider-polymer.html">
```

3. Use the component on the page:

```bash
<flexslider-polymer width="600px" height="350px" slideshow="false">
	<img src="assets/slide1.jpg">
	<img src="assets/slide2.jpg">
	<img src="assets/slide3.jpg">
</flexslider-polymer>
```

### Attributes

You can use all available options like in original FlexSlider. Just add attrubute in <flexslider-polymer> element:

```bash
<flexslider-polymer slideshow="false" controlNav="false" slideshowSpeed="1000" startAt="2">
```

[https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties](List of FlexSlider properties)