---
layout: page
title: User Interface icons
permalink: /resources/ui-icons/
resource: true
categories: Resources
---

User Interface Icons should be used to strengthen visual cues; use them wisely and do not overload the interface with icons.

Usually an icon should be shown accompanied by a corresponding text label, for the benefit of users who are unfamiliar with the icon.

Each icon is available in either a positive (dark) or a negative (light) fill, to suit your needs.

<div class="notice">
  <p>Need a User Interface icon not listed here? Send us a request via <a href="mailto:WFP.PUBLICATIONS@wfp.org?subject=UI%20icon%20request">wfp.publications@wfp.org</a>.</p>
</div>

<ul class="grid list-view icons" id="js-view">
{% directory path:img/icons/ui/png %}
  <li class="item unit-1-2">
    <div class="desc">
      <div class="desc-img {% cycle 'dark', 'light' %}"><img src="{{ site.baseurl }}/img/icons/ui/png/{{ file.name }}"></div>
      <div class="desc-label">{{ file.slug }}</div>
    </div>
  </li>
{% enddirectory %}
</ul>
