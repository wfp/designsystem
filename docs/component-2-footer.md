---
layout: page
title: Footer
permalink: /component/footer/
resource: true
categories: Components
---

Footer is the second most important place where your basic site information and links should live. Users turn often to the footer to look for important information, such as basic contact details, or links to less prominent sections of the website (privacy policy, terms of use, etc).

### Minimal
Not every footer needs to be extensive. Sometimes a very simple footer is all you really need. Below you can find the same footer which is used on pages for this documentation.

###### Preview
<footer class="footer-minimal">
  <div class="wfp-grid wfp-wrapper">
    <div class="wfp-u-1 wfp-u-md-2-3 footer--panel left">
      <h4 class="footer--label">{{ site.time | date: '%Y' }} &copy; World Food Programme</h4>
    </div>
    <div class="wfp-u-1 wfp-u-md-1-3 footer--panel right">
      <h4 class="footer--label">WFP UI &amp; UX</h4>
    </div>
  </div>
</footer>

###### Markup
{% highlight html %}
<footer class="footer-minimal">
  <div class="wfp-grid wfp-wrapper">
    <div class="wfp-u-1 wfp-u-md-2-3 footer--panel left">
      <h4 class="footer--label">{{ site.time | date: '%Y' }} &copy; World Food Programme</h4>
    </div>
    <div class="wfp-u-1 wfp-u-md-1-3 footer--panel right">
      <h4 class="footer--label">WFP UI &amp; UX</h4>
    </div>
  </div>
</footer>
{% endhighlight %}
