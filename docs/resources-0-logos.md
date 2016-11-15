---
layout: page
title: Logos
permalink: /resources/logos/
resource: true
categories: Resources
---
{% include base.html %}

We have bundled all available international WFP logos, in two colour variants. They are available in SVG and PNG formats, and you can reference them using the following format:

{% highlight bash %}
# SVG
/{colour}/{format}/{lang}-{variant}.{format}
/dark/svg/en-full.svg
# PNG
/{colour}/{format}/{size}/{lang}-{variant}.{format}
/dark/png/x2/en-full.png
{% endhighlight %}

<table class="wfp-table">
  <caption>Variable format definitions</caption>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>{colour}</code></td>
      <td>Colour variant</td>
      <td><code>light</code> or <code>dark</code></td>
    </tr>
    <tr>
      <td><code>{format}</code></td>
      <td>File format</td>
      <td><code>svg</code> or <code>png</code></td>
    </tr>
    <tr>
      <td><code>{lang}</code></td>
      <td>ISO language code</td>
      <td><code>en</code>, <code>it</code>, etc</td>
    </tr>
    <tr>
      <td><code>{variant}</code></td>
      <td>Logo variant</td>
      <td><code>emblem</code>, <code>standard</code>, or <code>full</code> <sup><a href="{{ base }}/basics/branding/">[1]</a></sup></td>
    </tr>
    <tr>
      <td><code>{size}</code></td>
      <td>PNG image size</td>
      <td><code>1x</code> or <code>2x</code></td>
    </tr>
  </tbody>
</table>

<table class="wfp-table">
  <caption>Available languages</caption>
  <thead>
    <tr>
      <th>ISO Code</th>
      <th>Language</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ar</td>
      <td>Arabic</td>
    </tr>
    <tr>
      <td>da</td>
      <td>Danish</td>
    </tr>
    <tr>
      <td>de</td>
      <td>German</td>
    </tr>
    <tr>
      <td>en</td>
      <td>English</td>
    </tr>
    <tr>
      <td>es</td>
      <td>Spanish</td>
    </tr>
    <tr>
      <td>fi</td>
      <td>Finnish</td>
    </tr>
    <tr>
      <td>fr</td>
      <td>French</td>
    </tr>
    <tr>
      <td>it</td>
      <td>Italian</td>
    </tr>
    <tr>
      <td>ja</td>
      <td>Japanese</td>
    </tr>
    <tr>
      <td>ko</td>
      <td>Korean</td>
    </tr>
    <tr>
      <td>nl</td>
      <td>Dutch</td>
    </tr>
    <tr>
      <td>no</td>
      <td>Norwegian</td>
    </tr>
    <tr>
      <td>ru</td>
      <td>Russian</td>
    </tr>
    <tr>
      <td>sv</td>
      <td>Swedish</td>
    </tr>
    <tr>
      <td>zh</td>
      <td>Chinese</td>
    </tr>
  </tbody>
</table>

### Loading from CDN
Loading logos from a Content Delivery Network can be done easily by referencing our CDN library, instead of your local Bower installation directory.

{% highlight html %}
<!-- SVG  -->
<img src="http://cdn.wfp.org/libraries/wfpui/{{ site.version }}/assets/logos/dark/svg/en-standard.svg" alt="WFP Logo (English)">
<!-- PNG -->
<img src="http://cdn.wfp.org/libraries/wfpui/{{ site.version }}/assets/logos/dark/png/1x/en-full.png" alt="WFP Logo (English)">
{% endhighlight %}

<div class="notice">
  <h2 class="title">Working with PNGs</h2>
  <p>If you are relying on PNGs, you should use `srcset` attribute to serve better resolution image to all HiDPI devices.</p>
</div>
