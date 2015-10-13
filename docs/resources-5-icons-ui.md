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

<div class="pure-g">
  <div class="pure-u-3-4"></div>
  <div class="pure-u-1-4 edit-menu">
    <ul class="tabs">
      <li><a href="#" id="js-view-grid" class="active">Grid</a></li>
      <li><a href="#" id="js-view-list">List</a></li>
    </ul>
  </div>
</div>

<ul class="pure-g inline-grid icons" id="js-view">
{% loop_directory directory:img/ui/svg iterator:image filter:*.svg sort:ascending %}
  <li class="item pure-u-1-4 pure-u-md-1-8">
    <div class="desc">
      <div class="desc-img"><img src="{{ site.baseurl }}/img/ui/svg/{{ image }}.svg"></div>
      <div class="desc-label">{{ image }}</div>
    </div>
  </li>
{% endloop_directory %}
</ul>

<div class="pure-g preview plain">
  <div class="pure-u-1 pure-u-md-1-2">
    <a class="pure-button" href="{{ site.baseurl }}/assets/ui-icons-png.zip">PNG (zip, ~48 KB)</a>
  </div>
  <div class="pure-u-1 pure-u-md-1-2">
    <a class="pure-button" href="{{ site.baseurl }}/assets/ui-icons-svg.zip">SVG (zip, ~41 KB)</a>
  </div>
</div>