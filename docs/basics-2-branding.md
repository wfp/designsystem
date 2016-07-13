---
layout: page
title: Branding
permalink: /basics/branding/
resource: true
categories: Basics
---
{% include base.html %}

### Logo
WFP logo is available in three versions: _emblem_, _standard_, and _full_. Each has its own purpose and should be used appropriately, as per [official branding guidelines](http://wfp.org/branding), depending on available screen space and target audience.

<figure class="picture">
  <img src="{{ base }}/img/logo-versions.png" srcset="{{ base }}/img/logo-versions.png 1x, {{ base }}/img/logo-versions@2x.png 2x" alt="WFP Logo Variants">
  <figcaption>Fig 1. Different versions of WFP logo.</figcaption>
</figure>

To implement the logo properly, give it enough spacing to ensure it stands out on its own. The minimum required spacing is calculated using a simple formula displayed on Fig. 2.

<figure class="picture">
  <img src="{{ base }}/img/logo-usage.png" srcset="{{ base }}/img/logo-usage.png 1x, {{ base }}/img/logo-usage@2x.png 2x" alt="WFP Logo Spacing">
  <figcaption>Fig 2. How to calculate minimum spacing around the logo.</figcaption>
</figure>

Making sure WFP logo looks sharp and crisp on different screens is equally important. To achieve this, make sure to use HTML5 image `srcset` attribute, to target displays with different pixel density.

###### Markup
{% highlight html %}
<img src="logo-std.png" srcset="logo-std.png 1x, logo-std@2x.png 2x">
{% endhighlight %}

### Primary Colours
The following palette is comprised of basic colours for everyday use. The primary blue is an enhanced version of the corporate _WFP Blue_, designed to work well within digital colour space (RGB).

<ul class="wfp-grid inline-grid colours">
  <li class="wfp-u-1-2 wfp-u-md-1-4">
    <div class="inline-item c-primary"></div>
    <div class="desc">
      <h4>Primary</h4>
      <p><code>#2A93FC</code></p>
      <p><code>$primary</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-4">
    <div class="inline-item c-secondary"></div>
    <div class="desc">
      <h4>Accent</h4>
      <p><code>#1f6ebc</code></p>
      <p><code>$accent</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-4">
    <div class="inline-item c-text"></div>
    <div class="desc">
      <h4>Body Text</h4>
      <p><code>#404040</code></p>
      <p><code>$text-color</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-4">
    <div class="inline-item c-background"></div>
    <div class="desc">
      <h4>Background</h4>
      <p><code>#ffffff</code></p>
      <p><code>$white</code></p>
    </div>
  </li>
</ul>

### Blues
In addition to primary blue, you can use various shades of blue in your designs, to establish and maintain visual hierarchy. _Please, ensure you never use more than 3-4 shades of blue in your designs._

<ul class="wfp-grid inline-grid colours">
  <li class="wfp-u-1-2 wfp-u-md-1-5">
    <div class="inline-item narrow c-blue-1"></div>
    <div class="desc">
      <p><code>#b2d8fe</code></p>
      <p><code>$blue-lighter</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-5">
    <div class="inline-item narrow c-blue-2"></div>
    <div class="desc">
      <p><code>#85c1fd</code></p>
      <p><code>$blue-light</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-5">
    <div class="inline-item narrow c-blue-3"></div>
    <div class="desc">
      <p><code>#57aafd</code></p>
      <p><code>$blue</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-5">
    <div class="inline-item narrow c-blue-4"></div>
    <div class="desc">
      <p><code>#2a93fc</code></p>
      <p><code>$blue-dark</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-5">
    <div class="inline-item narrow c-blue-5"></div>
    <div class="desc">
      <p><code>#037cf5</code></p>
      <p><code>$blue-darker</code></p>
    </div>
  </li>
</ul>

### Greys
This palette was made to be used in establishing on-screen visual hierarchy. As grey is a neutral colour, it can be applied to any elements in need of small accents or emphasis.

<ul class="wfp-grid inline-grid colours">
  <li class="wfp-u-1-2 wfp-u-md-1-5">
    <div class="inline-item c-grey-1"></div>
    <div class="desc">
      <p><code>#e8e8e8</code></p>
      <p><code>$grey-lighter</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-5">
    <div class="inline-item c-grey-2"></div>
    <div class="desc">
      <p><code>#bababa</code></p>
      <p><code>$grey-light</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-5">
    <div class="inline-item c-grey-3"></div>
    <div class="desc">
      <p><code>#8c8c8c</code></p>
      <p><code>$grey</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-5">
    <div class="inline-item c-grey-4"></div>
    <div class="desc">
      <p><code>#5e5e5e</code></p>
      <p><code>$grey-dark</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-5">
    <div class="inline-item c-grey-5"></div>
    <div class="desc">
      <p><code>#303030</code></p>
      <p><code>$grey-darker</code></p>
    </div>
  </li>
</ul>

### Special Colours
Slightly desaturated, to make sure they are easy on the eye, these colours are reserved only for special cases, such as call to action buttons or highlighting important on-screen messages.

<ul class="wfp-grid inline-grid colours">
  <li class="wfp-u-1-2 wfp-u-md-1-4">
    <div class="inline-item c-red"></div>
    <div class="desc">
      <p><code>#ff5252</code></p>
      <p><code>$red</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-4">
    <div class="inline-item c-orange"></div>
    <div class="desc">
      <p><code>#ffc759</code></p>
      <p><code>$orange</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-4">
    <div class="inline-item c-yellow"></div>
    <div class="desc">
      <p><code>#fcdc5d</code></p>
      <p><code>$yellow</code></p>
    </div>
  </li>
  <li class="wfp-u-1-2 wfp-u-md-1-4">
    <div class="inline-item c-green"></div>
    <div class="desc">
      <p><code>#00a878</code></p>
      <p><code>$green</code></p>
    </div>
  </li>
</ul>
