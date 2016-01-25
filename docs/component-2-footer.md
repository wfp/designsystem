---
layout: page
title: Footer
permalink: /component/footer/
resource: true
categories: Components
---

Footer is the second most important place where your basic site information and links should live. Users turn often to the footer to look for important information, such as basic contact details, or links to less prominent sections of the website (privacy policy, terms of use, etc).

### Minimal
Not every footer needs to be extensive. Sometimes a very simple footer is all you really need, if you don't intend to use it for links, contact information, etc.

Below you can find the same footer which is used for pages in this documentation.

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

### Compact
This type of footer forms a simple layout containing social links, WFP logo, a copyrights notice, and a few inline links. Its compact size ensures minimum of space is used to create a simple, yet still very handy bottom section for your web pages.

###### Preview
<footer class="footer-compact">
  <div class="footer--top">
    <div class="wfp-grid wfp-wrapper">
      <div class="wfp-u-1 wfp-u-md-1-2 footer--panel left">
        <h4 class="footer--heading">Follow WFP on social networks</h4>
      </div>
      <div class="wfp-u-1 wfp-u-md-1-2 footer--panel right">
        <img src="{{ base }}/img/logos/png/en-full.png" srcset="{{ base }}/img/logos/png/en-full.png 1x, {{ base }}/img/logos/png/en-full@2x.png 2x">
      </div>
    </div>
  </div>

</footer>


### Standard


### Extensive
