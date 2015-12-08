---
layout: page
title: User Interface icons
permalink: /resources/ui-icons/
resource: true
categories: Resources
---

User Interface Icons should be used to strenghten visual cues; use them wisely and do not overload the interface with icons.

Usually an icon should be shown accompanied by a corresponding text label, for the benefit of users who are unfamiliar with the icon.

Each icon is available in either a positive (transparent) or a negative (solid) background, to suit your needs. You can download the whole UI icon set in a PNG or SVG format using links at the bottom of the page.

<div class="notice">
  <p>Need a User Interface icon not listed here? Send us a request via <a href="mailto:WFP.PUBLICATIONS@wfp.org?subject=UI%20icon%20request">wfp.publications@wfp.org</a>.</p>
</div>

<div class="grid">
  <div class="unit-3-4"></div>
  <div class="unit-1-4 text-right">
    <ul class="segmented-control" id="js-view-control">
      <li class="segmented-control--item">
        <a href="#" id="js-view-list" class="segmented-control--link active">List</a>
      </li>
      <li class="segmented-control--item">
        <a href="#" id="js-view-grid" class="segmented-control--link">Grid</a>
      </li>
    </ul>
  </div>
</div>

<ul class="grid list-view icons" id="js-view">
{% directory path:img/ui/svg %}
  <li class="item unit-1-2">
    <div class="desc">
      <div class="desc-img"><img src="{{ site.baseurl }}/img/ui/svg/{{ file.name }}"></div>
      <div class="desc-label">{{ file.slug }}</div>
    </div>
  </li>
{% enddirectory %}
</ul>

<div class="grid preview plain">
  <div class="unit-1 unit-md-1-2">
    <a class="pure-button" href="{{ site.baseurl }}/assets/ui-icons-png.zip">PNG (zip, ~48 KB)</a>
  </div>
  <div class="unit-1 unit-md-1-2">
    <a class="pure-button" href="{{ site.baseurl }}/assets/ui-icons-svg.zip">SVG (zip, ~41 KB)</a>
  </div>
</div>