---
layout: page
title: Thematic icons
permalink: /resources/thematic-icons/
resource: true
categories: Resources
---

The _Office for the Coordination of Humanitarian Affairs_ (OCHA) has established icons to represent humanitarian assistance and to ensure consistency in use, these have been shared widely with UN agencies and NGOs. On this section we have listed those OCHA icons that WFP uses most frequently in addition to a few WFP-specific ones.

Each icon is available in either a positive (transparent) or a negative (solid) background, to suit your needs. You can download the whole icon set in a PNG format or the EPS source file below:

<div class="notice">
  <p>Need a Thematic icon not listed here? Send us a request via <a href="mailto:WFP.PUBLICATIONS@wfp.org?subject=Thematic%20icon%20request">wfp.publications@wfp.org</a>.</p>
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
{% loop_directory directory:img/ocha/svg iterator:image filter:*.svg sort:ascending %}
  <li class="item pure-u-1-4 pure-u-md-1-8">
    <div class="desc">
      <div class="desc-img"><img src="{{ site.baseurl }}/img/ocha/svg/{{ image }}.svg"></div>
      <div class="desc-label">{{ image }}</div>
    </div>
  </li>
{% endloop_directory %}
</ul>

<div class="pure-g preview plain">
  <div class="pure-u-1 pure-u-md-1-3">
    <a class="pure-button" href="http://documents.wfp.org/stellent/groups/public/documents/communications/wfp263183.zip">PNG (ZIP, ~360 KB)</a>
  </div>
  <div class="pure-u-1 pure-u-md-1-3">
    <a class="pure-button" href="http://documents.wfp.org/stellent/groups/public/documents/communications/wfp263185.zip">EPS (ZIP, ~1.5 MB)</a>
  </div>
  <div class="pure-u-1 pure-u-md-1-3">
    <a class="pure-button" href="#">SVG (ZIP, ~200 KB)</a>
  </div>
</div>