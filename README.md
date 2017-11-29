# Suit
[https://efbe.github.io/suit/](https://efbe.github.io/suit/)

A dual layer, modular approach for creating easily maintainable, theme-based UI for the web.

## What is this about?

Most of the CSS frameworks out there are awesome but definitely not built to be redesigned at all. [Bootstrap](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss) and [Foundation](https://github.com/zurb/foundation-sites/blob/develop/scss/settings/_settings.scss) both have a 800+ line config file..
This means you can change colors and border-radiuses but the design is wired into the structure badly so you'll end up adding your code on the top of the existing codebase if you want another design.

Within Suit each module is separated into two layers. Each of them exclusively include the relevant properties and values so when you want to build a different kind of design you just have to touch the *theme* SCSS file of a module.

## How does this work codewise?

Each of Suit's modules are separated into two files and located in the *frame* and *theme* folders. The structure part of the `_button.scss` including the core properties looks something like this:

```scss
// Button structure

.button {
	display: inline-block;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
}
```

And here's a snippet of the design-related rules from the *theme* folder:

```scss
// Button design

.button {
	padding: $gutter-small;
	font-size: $font-size-big;
	font-weight: $text-extra-light;
	color: $color-white;
	background-color: $color-green;
	border-radius: $border-radius;
	...
}
```

The units, colors, typography properties, block sizes, etc... are stored in the theme specific `_variables.scss`.

There's a config SCSS in the root folder for each site or application which is responsible to collect the two layers and merge them with the variables into the desired modules. For this small documentation
you are reading right now check the [docs.scss](https://github.com/efbe/suit/blob/master/dev/scss/docs.scss) where you can see the inclusion order and module separation.

## What about modularity?
Suit is a combination of stand-alone modules using the popular "atomic design" approach. There are three categories based on the size and complexity of the elements:

* `essentials`

	small but mandatory snippets like the *reset* or the *typo* modules which cannot be left out
* `plugins`

	can be used all by themselves or help to extend a basic module into a more complex one like the *button-icon* plugin
* `apps`

	the most complex entities of the Suit universe. They contain the rules of bigger UI chunks like a *card* or *header*.

In the provided [example](http://efbe.github.io/suit/demo.html) you can check out the card app using the custom theme variables, essentials and plugins. Every module is built on the "mobile first" philosophy.

## Under the hood
Suit's distribution files are built by [Gulp](https://gulpjs.com/) tasks. The SCSS files are linted via an external config file which can be [customized](https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md) according to your code conventions. The CSS properties are [auto prefixed](https://github.com/postcss/autoprefixer). All files are minified.

## License
Suit is under MIT License. You can take what you want but don't forget to mention where your ideas came from.
