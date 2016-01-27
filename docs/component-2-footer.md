---
layout: page
title: Footer
permalink: /component/footer/
resource: true
categories: Components
---

Footer is the second most important place where your basic site information and links should live. Users turn often to the footer to look for important information, such as contact details, or links to less prominent sections of the website (privacy policy, terms of use, etc).

### Minimal
Not every footer needs to be extensive. Sometimes a very simple footer is all you really need, if you don't intend to use it for links, contact information, etc. Below you can find the same footer which is used for pages in this documentation. You can define it using `wfp-footer--mini` class.

###### Preview
<footer class="wfp-footer--mini">
  <div class="wfp-grid wfp-wrapper">
    <div class="wfp-u-1 wfp-u-md-2-3 footer--panel left">
      <h4 class="footer--label">{{ site.time | date: '%Y' }} &copy; World Food Programme</h4>
    </div>
    <div class="wfp-u-1 wfp-u-md-1-3 footer--panel right">
      <h4 class="footer--label">WFP UI &amp; UX</h4>
    </div>
  </div>
</footer>

###### Source
{% highlight html %}
<footer class="wfp-footer--mini">
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
This type of footer forms a simple layout containing social links, WFP logo, a copyrights notice, and a few inline links. Its compact size ensures minimum of space is used to create a simple, yet still very handy bottom section for your web pages. You can define it using `wfp-footer--compact` class.

###### Preview
<footer class="wfp-footer--compact">
  <div class="footer--top">
    <div class="wfp-grid wfp-wrapper">
      <div class="wfp-u-1 wfp-u-md-1-2 footer--panel left">
        <h5 class="footer--heading">Follow WFP on social networks</h5>
        <ul class="footer--links">
          <li class="link"><a href="#" class="wfp-btn--twitter xsmall">Twitter</a></li>
          <li class="link"><a href="#" class="wfp-btn--facebook xsmall">Facebook</a></li>
          <li class="link"><a href="#" class="wfp-btn--gplus xsmall">Google+</a></li>
        </ul>
      </div>
      <div class="wfp-u-1 wfp-u-md-1-2 footer--panel right">
        <img src="{{ base }}/img/logos/dark/png/1x/en-full.png" srcset="{{ base }}/img/logos/dark/png/1x/en-full.png 1x, {{ base }}/img/logos/dark/png/2x/en-full.png 2x" class="footer--logo">
      </div>
    </div>
  </div>
  <div class="footer--bottom">
    <div class="wfp-grid wfp-wrapper">
      <div class="wfp-u-1 wfp-u-md-1-3 footer--panel left">
        <h4 class="footer--label">{{ site.time | date: '%Y' }} &copy; World Food Programme</h4>
      </div>
      <div class="wfp-u-1 wfp-u-md-2-3 footer--panel right">
        <ul class="footer--links">
          <li class="link"><a href="#">Donate</a></li>
          <li class="link"><a href="#">Privacy</a></li>
          <li class="link"><a href="#">Terms of Use</a></li>
          <li class="link"><a href="#">Executive Board</a></li>
          <li class="link"><a href="#">WFP Alumni</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

###### Source
{% highlight html %}
<footer class="wfp-footer--compact">
  <div class="footer--top">
    <div class="wfp-grid wfp-wrapper">
      <div class="wfp-u-1 wfp-u-md-1-2 footer--panel left">
        <h5 class="footer--heading">Follow WFP on social networks</h5>
        <ul class="footer--links">
          <li class="link"><a href="#" class="wfp-btn--twitter xsmall">Twitter</a></li>
          <li class="link"><a href="#" class="wfp-btn--facebook xsmall">Facebook</a></li>
          <li class="link"><a href="#" class="wfp-btn--gplus xsmall">Google+</a></li>
        </ul>
      </div>
      <div class="wfp-u-1 wfp-u-md-1-2 footer--panel right">
        <img src="{{ base }}/img/logos/dark/png/1x/en-full.png" srcset="{{ base }}/img/logos/dark/png/1x/en-full.png 1x, {{ base }}/img/logos/dark/png/2x/en-full.png 2x" class="footer--logo">
      </div>
    </div>
  </div>
  <div class="footer--bottom">
    <div class="wfp-grid wfp-wrapper">
      <div class="wfp-u-1 wfp-u-md-1-3 footer--panel left">
        <h4 class="footer--label">{{ site.time | date: '%Y' }} &copy; World Food Programme</h4>
      </div>
      <div class="wfp-u-1 wfp-u-md-2-3 footer--panel right">
        <ul class="footer--links">
          <li class="link"><a href="#">Donate</a></li>
          <li class="link"><a href="#">Privacy</a></li>
          <li class="link"><a href="#">Terms of Use</a></li>
          <li class="link"><a href="#">Executive Board</a></li>
          <li class="link"><a href="#">WFP Alumni</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
{% endhighlight %}


### Standard
This flagship footer variant, builds up on top of `wfp-footer--compact` pattern. The addition of `wfp-menu-plain` allows to group links and add other useful information. Using `wfp-grid`, you can flexibly adjust your navigation, but we recommend including between 2 and 3 groups of links, to give every other component a bit of a breathing room.

###### Preview
<footer class="wfp-footer--std">
  <div class="footer--top">
    <div class="wfp-grid wfp-wrapper">
      <div class="wfp-u-1 wfp-u-md-3-5 footer--panel left">
        <nav class="wfp-menu-plain wfp-grid">
          <div class="menu--group wfp-u-1 wfp-u-md-1-2">
            <h6 class="menu--heading">Get Involved</h6>
            <ul class="menu--wrapper">
              <li class="menu--item"><a href="#" class="menu--link">Make a donation</a></li>
              <li class="menu--item"><a href="#" class="menu--link">Join the community</a></li>
              <li class="menu--item"><a href="#" class="menu--link">Spread the word</a></li>
              <li class="menu--item"><a href="#" class="menu--link">Careers at WFP</a></li>
            </ul>
          </div>
          <div class="menu--group wfp-u-1 wfp-u-md-1-2">
            <h6 class="menu--heading">Media &amp; Library</h6>
            <ul class="menu--wrapper">
              <li class="menu--item"><a href="#" class="menu--link">Newsroom</a></li>
              <li class="menu--item"><a href="#" class="menu--link">Publications</a></li>
              <li class="menu--item"><a href="#" class="menu--link">Data and statistics</a></li>
              <li class="menu--item"><a href="#" class="menu--link">Social media</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="wfp-u-1 wfp-u-md-2-5 footer--panel right">
        <div class="wfp-logo-wrapper">
          <img src="{{ base }}/img/logos/dark/png/1x/en-standard.png" srcset="{{ base }}/img/logos/dark/png/1x/en-standard.png 1x, {{ base }}/img/logos/dark/png/2x/en-standard.png 2x" class="footer--logo">
        </div>
        <div class="wfp-content-wrapper">
          <ul class="footer--links">
            <li class="link"><a href="#" class="wfp-btn--twitter xsmall">Twitter</a></li>
            <li class="link"><a href="#" class="wfp-btn--facebook xsmall">Facebook</a></li>
            <li class="link"><a href="#" class="wfp-btn--gplus xsmall">Google+</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer--bottom">
    <div class="wfp-grid wfp-wrapper">
      <div class="wfp-u-1 wfp-u-md-1-3 footer--panel left">
        <h4 class="footer--label">{{ site.time | date: '%Y' }} &copy; World Food Programme</h4>
      </div>
      <div class="wfp-u-1 wfp-u-md-2-3 footer--panel right">
        <h4 class="footer--label">Via Cesare Giulio Viola 68-70, 00148 Rome, Italy</h4>
      </div>
    </div>
  </div>
</footer>

###### Source
{% highlight html %}
<footer class="wfp-footer--std">
  <div class="footer--top">
    <div class="wfp-grid wfp-wrapper">
      <div class="wfp-u-1 wfp-u-md-3-5 footer--panel left">
        <nav class="wfp-menu-plain wfp-grid">
          <div class="menu--group wfp-u-1 wfp-u-md-1-2">
            <h6 class="menu--heading">Get Involved</h6>
            <ul class="menu--wrapper">
              <li class="menu--item"><a href="#" class="menu--link">Make a donation</a></li>
              <li class="menu--item"><a href="#" class="menu--link">Join "One Future" community</a></li>
              <li class="menu--item"><a href="#" class="menu--link">Spread the word</a></li>
              <li class="menu--item"><a href="#" class="menu--link">Careers at WFP</a></li>
            </ul>
          </div>
          <div class="menu--group wfp-u-1 wfp-u-md-1-2">
            <h6 class="menu--heading">Media &amp; Library</h6>
            <ul class="menu--wrapper">
              <li class="menu--item"><a href="#" class="menu--link">Newsroom</a></li>
              <li class="menu--item"><a href="#" class="menu--link">Publications</a></li>
              <li class="menu--item"><a href="#" class="menu--link">Data and statistics</a></li>
              <li class="menu--item"><a href="#" class="menu--link">Social media</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="wfp-u-1 wfp-u-md-2-5 footer--panel right">
        <div class="wfp-logo-wrapper">
          <img src="{{ base }}/img/logos/dark/png/1x/en-standard.png" srcset="{{ base }}/img/logos/dark/png/1x/en-standard.png 1x, {{ base }}/img/logos/dark/png/2x/en-standard.png 2x" class="footer--logo">
        </div>
        <div class="wfp-content-wrapper">
          <ul class="footer--links">
            <li class="link"><a href="#" class="wfp-btn--twitter xsmall">Twitter</a></li>
            <li class="link"><a href="#" class="wfp-btn--facebook xsmall">Facebook</a></li>
            <li class="link"><a href="#" class="wfp-btn--gplus xsmall">Google+</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer--bottom">
    <div class="wfp-grid wfp-wrapper">
      <div class="wfp-u-1 wfp-u-md-1-3 footer--panel left">
        <h4 class="footer--label">{{ site.time | date: '%Y' }} &copy; World Food Programme</h4>
      </div>
      <div class="wfp-u-1 wfp-u-md-2-3 footer--panel right">
        <h4 class="footer--label">Via Cesare Giulio Viola 68-70, 00148 Rome, Italy</h4>
      </div>
    </div>
  </div>
</footer>
{% endhighlight %}
