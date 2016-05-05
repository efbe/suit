# Re:Tictrac Front End Developer Test

### Hi there Stephen & Paul!

I really liked the description of the test so I figured why not answer with an .md file as well. Stephen asked me during the interview that how would I build up a new module in my khm *framework* so I thought why wouldn't I create your tweet list app inside of **suit** as a part of an existing ecosystem. I hope you won't consider it as a usage of a CSS framework. I only used internal SASS mixins and Grunt tasks that I've created before.

### About the workflow

I guess besides the code itself you are curious about my workflow as well so here are a couple of lines.

* The first step was a small planning part on [paper](https://www.dropbox.com/s/oedwt427kmq6e6x/Photo%2005-05-16%2009%2007%2034.jpg?dl=0). I usually like to draw the UI before getting started and kinda sort out the place of each component/module.
* My second step was to fill up the `_config.scss` with as many design related variables based on the PSD as possible. Not all of them of course, some of them like the `$border-width` came up in the end when I reviewed my code.
* After this I've created the empty files, the CSS config for minification and started to add the spine of the app into `base.scss`. I extracted, optimized (using ImageOptim) and base64 encoded the logo. 
* Meanwhile I started to build the header and the hamburger button. I thought I'd would be handy to put it into its own module in case we need it somewhere else. I was playing with the idea to use some of [jonsuh's hamburgers](https://github.com/jonsuh/hamburgers) but I was horrified when I opened up the .js file and realized the size of it. Kind of a big price for such a small pleasure. No thx!
* When I was finished with the mobile part I created the tweet cards. I also put them into an external file so they can be used anywhere else whitin a sidebar or something like that.
* After reading a bit about Aria roles I added the `js` snippet for the menu in mobile view (the provided code was missing a `https://` string in front of jquery's url btw).
* Some code review and cleanup in the end after testing the app in Firefox.
* And right now I've just realised that there's no twitter username in mobile view so I dropped a `display: none;`
* Checking the mobile view on my girlfriends iPhone in mobile Safari after a Git push cause it was next to me.

### The code & the app
* The working app is at [http://efbe.github.io/tictrac/](http://efbe.github.io/tictrac/)
* The code is at [https://github.com/efbe/suit/compare/tictrac](https://github.com/efbe/suit/compare/tictrac)

---

I guess that's it. Thanks for the test, it was kind of fun. I'm looking forward to meet you guys in person.

Peace,

eFBé (Balazs Foky)
