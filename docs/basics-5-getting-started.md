---
layout: page
title: Getting Started
permalink: /basics/getting-started/
resource: true
categories: Basics
---

To make sure your interface follows WFP guidelines with ease, you should use the provided UI kit in your web pages and applications. We offer a number of ways to include WFP UI in your projects.

### Bower
You can easily install _WFP UI_ using [Bower](http://bower.io/). Our Bower package contains everything to get you started, from important variables, mixins and defaults available through SCSS, to minified and optimised distributable CSS.

<div class="notice">
  <h6 class="title">Notice</h6>
  <p>It's best to compile <i>WFP UI</i> directly to your SCSS main file, in order to benefit from <b>a smaller overall CSS file size</b>, and <b>having a single file to load and render by the web browser</b>. This is because CSS is considered a <a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css">render blocking resource</a>.</p>
</div>

{% highlight bash %}
# Install the latest release
$ bower install wfp-ui --save
# Install any particular release
$ bower install wfp-ui#0.3.0 --save
{% endhighlight %}

Now, add _WFP UI_ as a dependency to your main SCSS file:
{% highlight css %}
@import "bower_components/wfp-ui/scss/wfpui";
{% endhighlight %}

You can also reference a preprocessed _WFP UI_ library directly in your markup:
{% highlight html %}
<link rel="stylesheet" href="bower_components/wfp-ui/dist/wfpui.css">
{% endhighlight %}

### Content Delivery Network
Alternatively, you can load _WFP UI_ from our CDN, denoting a version number (i.e.: `v0.3.0`) in the URL:
{% highlight html %}
<link href="http://cdn.wfp.org/libraries/wfpui/v0.3.0/wfpui.min.css" rel="stylesheet">
{% endhighlight %}

### Offline Use
If your application or website is not able to connect to the Internet, you can use the _WFP UI_ offline. Easiest way to start is to install it with Bower, as per above instructions.

You can also download any particular release of [WFP UI from GitHub](https://github.com/wfp/ui/releases), copying `dist` directory to your project's location, and referencing `wfpui.css` contained inside.

<div class="notice">
  <h6 class="title">Notice</h6>
  <p>The <i>WFP UI</i> is intended to be plug &amp; play, and integrate seamlessly with any front-end framework unobtrusively. Whether you use <i>BootStrap</i>, <i>Foundation</i>, <i>Skeleton</i>, or any other framework, you should easily be able to apply WFP UI styles to your projects.</p>
</div>