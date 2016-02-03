---
layout: page
title: Thematic icons
permalink: /resources/thematic-icons/
resource: true
categories: Resources
---
{% include base.html %}

The _Office for the Coordination of Humanitarian Affairs_ (OCHA) has established icons to represent humanitarian assistance and to ensure consistency in use, these have been shared widely with UN agencies and NGOs. On this section we have listed those OCHA icons that WFP uses most frequently in addition to a few WFP-specific ones.

Each icon is available in either a positive (transparent) or a negative (solid) background, to suit your needs.

### Usage
First thing to do, is to load the icons to your web site or application, by referencing it in `<head>` section. There are three stylesheets to choose from, depending on what browsers you intend on supporting. Two primary files use `base64` encoded SVGs and PNGs, while the third file relies on old-school `background-image: url()` fallback to PNGs available from the filesystem.

You can check [support for `base64`](http://caniuse.com/#feat=atob-btoa) and [SVG in CSS support](http://caniuse.com/#feat=svg-css) on [caniuse.com](caniuse.com).

{% highlight html %}
<!-- For modern browsers with SVG support -->
<link rel="stylesheet" href="bower_components/wfp-ui/dist/assets/icons/thematic/thematic-icons.svg.css">
<!-- For browsers without SVG support -->
<link rel="stylesheet" href="bower_components/wfp-ui/dist/assets/icons/thematic/thematic-icons.png.css">
<!-- IE8-9 Fallback -->
<link rel="stylesheet" href="bower_components/wfp-ui/dist/assets/icons/thematic/thematic-icons.fallback.css">
{% endhighlight %}

Add thematic icons to your website using `<i>` element with a class `thematic-{icon-name}`, where `{icon-name}` means a corresponding name of an icon, listed in a preview below (or in the package).

###### Example
{% highlight html %}
<i class="thematic-affected-population-pos"></i>
<i class="thematic-affected-population-neg"></i>
{% endhighlight %}

###### Preview
<i class="thematic-affected-population-pos"></i><i class="thematic-affected-population-neg"></i>

<div class="notice">
  <p>Need a Thematic icon not listed here? Send us a request via <a href="mailto:WFP.PUBLICATIONS@wfp.org?subject=Thematic%20icon%20request">wfp.publications@wfp.org</a>.</p>
</div>

<ul class="wfp-grid list-view icons">
{% directory path:img/icons/thematic/png %}
  <li class="item wfp-u-1-2">
    <div class="desc">
      <div class="desc-img light"><img src="{{ base }}/img/icons/thematic/png/{{ file.name }}"></div>
      <div class="desc-label">{{ file.slug }}</div>
    </div>
  </li>
{% enddirectory %}
</ul>
