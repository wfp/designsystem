---
layout: page
title: Footer
permalink: /components/footer/
resource: true
categories: Components
---
{% include base.html %}

Footer is the second most important place where your basic site information and links should live. Users turn often to the footer to look for important information, such as contact details, or links to less prominent sections of the website (privacy policy, terms of use, etc).

### Minimal
Not every footer needs to be extensive. Sometimes a very simple footer is all you really need, if you don't intend to use it for links, contact information, etc. Below you can find the same footer which is used for pages in this documentation. You can define it using `wfp-footer--mini` class.

###### Preview
<footer class="wfp-footer--mini">
  <div class="wfp-grid wfp-wrapper pv2">
    <div class="wfp-u-1 wfp-u-md-1-3 tc tl-md">
      <p class="fs6 bold">{{ site.time | date: '%Y' }} &copy; World Food Programme</p>
    </div>
    <div class="wfp-u-1 wfp-u-md-2-3 tc tr-md">
      <ul class="nl fs6 mv2 pa0">
        <li class="dib ma0 ml1"><a href="#">Donate</a></li>
        <li class="dib ma0 ml1"><a href="#">Privacy</a></li>
        <li class="dib ma0 ml1"><a href="#">Terms of Use</a></li>
      </ul>
    </div>
  </div>
</footer>

###### Source
{% highlight html %}
<footer class="wfp-footer--mini">
  <div class="wfp-grid wfp-wrapper pv2">
    <div class="wfp-u-1 wfp-u-md-1-3 tc tl-md">
      <p class="fs6 bold">{{ site.time | date: '%Y' }} &copy; World Food Programme</p>
    </div>
    <div class="wfp-u-1 wfp-u-md-2-3 tc tr-md">
      <ul class="nl fs6 mv2 pa0">
        <li class="dib ma0 ml1"><a href="#">Donate</a></li>
        <li class="dib ma0 ml1"><a href="#">Privacy</a></li>
        <li class="dib ma0 ml1"><a href="#">Terms of Use</a></li>
      </ul>
    </div>
  </div>
</footer>
{% endhighlight %}

### Compact
This type of footer forms a simple layout containing social links, WFP logo, a copyrights notice, and a few inline links. Its compact size ensures minimum of space is used to create a simple, yet still very handy bottom section for your web pages. You can define it using `wfp-footer--compact` class.

###### Preview
<footer class="wfp-footer--compact">
  <div class="footer--top">
    <div class="wfp-grid wfp-wrapper pv2">
      <div class="wfp-u-1 wfp-u-md-1-2 tc tl-md">
        <h5 class="footer--heading">Follow WFP on social networks</h5>
        <ul class="footer--links">
          <li class="link"><a href="#" class="wfp-btn--twitter xsmall">Twitter</a></li>
          <li class="link"><a href="#" class="wfp-btn--facebook xsmall">Facebook</a></li>
          <li class="link"><a href="#" class="wfp-btn--gplus xsmall">Google+</a></li>
        </ul>
      </div>
      <div class="wfp-u-1 wfp-u-md-1-2 tc tr-md">
        <img src="{{ base }}/img/logos/dark/png/1x/en-full.png" srcset="{{ base }}/img/logos/dark/png/1x/en-full.png 1x, {{ base }}/img/logos/dark/png/2x/en-full.png 2x" class="footer--logo" alt="WFP Logo">
      </div>
    </div>
  </div>
  <div class="footer--bottom fs6">
    <div class="wfp-grid wfp-wrapper">
      <div class="wfp-u-1 wfp-u-md-1-3 tc tl-md">
        <p>{{ site.time | date: '%Y' }} &copy; World Food Programme</p>
      </div>
      <div class="wfp-u-1 wfp-u-md-2-3 tc tr-md">
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
    <div class="wfp-grid wfp-wrapper pv2">
      <div class="wfp-u-1 wfp-u-md-1-2 tc tl-md">
        <h5 class="footer--heading">Follow WFP on social networks</h5>
        <ul class="footer--links">
          <li class="link"><a href="#" class="wfp-btn--twitter xsmall">Twitter</a></li>
          <li class="link"><a href="#" class="wfp-btn--facebook xsmall">Facebook</a></li>
          <li class="link"><a href="#" class="wfp-btn--gplus xsmall">Google+</a></li>
        </ul>
      </div>
      <div class="wfp-u-1 wfp-u-md-1-2 tc tr-md">
        <img src="img/logos/dark/png/1x/en-full.png" srcset="img/logos/dark/png/1x/en-full.png 1x, img/logos/dark/png/2x/en-full.png 2x" class="footer--logo" alt="WFP Logo">
      </div>
    </div>
  </div>
  <div class="footer--bottom fs6">
    <div class="wfp-grid wfp-wrapper">
      <div class="wfp-u-1 wfp-u-md-1-3 tc tl-md">
        <p>{{ site.time | date: '%Y' }} &copy; World Food Programme</p>
      </div>
      <div class="wfp-u-1 wfp-u-md-2-3 tc tr-md">
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

<div class="notice">
  <h2 class="title">Languages</h2>
  <p>If your website or application is multilingual, it is necessary to <strong>include a language switcher as part of your footer</strong>, even if you already have included one in your header, to improve its usability.</p>
</div>

###### Preview
<footer class="wfp-footer--std">
  <div class="footer--top">
    <div class="wfp-grid wfp-wrapper pv2">
      <div class="wfp-u-1 wfp-u-md-3-5 tc tl-md">
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
      <div class="wfp-u-1 wfp-u-md-2-5 tc tr-md">
        <div class="pa1">
          <img src="{{ base }}/img/logos/dark/png/1x/en-standard.png" srcset="{{ base }}/img/logos/dark/png/1x/en-standard.png 1x, {{ base }}/img/logos/dark/png/2x/en-standard.png 2x" class="footer--logo" alt="WFP Logo">
        </div>
        <div class="pa1">
          <ul class="footer--links">
            <li class="link"><a href="#" class="wfp-btn--twitter xsmall">Twitter</a></li>
            <li class="link"><a href="#" class="wfp-btn--facebook xsmall">Facebook</a></li>
            <li class="link"><a href="#" class="wfp-btn--gplus xsmall">Google+</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer--bottom fs6">
    <div class="wfp-grid wfp-wrapper">
      <div class="wfp-u-1 wfp-u-md-1-3 tc tl-md">
        <p>{{ site.time | date: '%Y' }} &copy; World Food Programme</p>
      </div>
      <div class="wfp-u-1 wfp-u-md-2-3 tc tr-md">
        <p>Via Cesare Giulio Viola 68-70, 00148 Rome, Italy</p>
      </div>
    </div>
  </div>
</footer>

###### Source
{% highlight html %}
<footer class="wfp-footer--std">
  <div class="footer--top">
    <div class="wfp-grid wfp-wrapper pv2">
      <div class="wfp-u-1 wfp-u-md-3-5 tc tl-md">
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
      <div class="wfp-u-1 wfp-u-md-2-5 tc tr-md">
        <div class="pa1">
          <img src="img/logos/dark/png/1x/en-standard.png" srcset="img/logos/dark/png/1x/en-standard.png 1x, img/logos/dark/png/2x/en-standard.png 2x" class="footer--logo" alt="WFP Logo">
        </div>
        <div class="pa1">
          <ul class="footer--links">
            <li class="link"><a href="#" class="wfp-btn--twitter xsmall">Twitter</a></li>
            <li class="link"><a href="#" class="wfp-btn--facebook xsmall">Facebook</a></li>
            <li class="link"><a href="#" class="wfp-btn--gplus xsmall">Google+</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer--bottom fs6">
    <div class="wfp-grid wfp-wrapper">
      <div class="wfp-u-1 wfp-u-md-1-3 tc tl-md">
        <p>{{ site.time | date: '%Y' }} &copy; World Food Programme</p>
      </div>
      <div class="wfp-u-1 wfp-u-md-2-3 tc tr-md">
        <p>Via Cesare Giulio Viola 68-70, 00148 Rome, Italy</p>
      </div>
    </div>
  </div>
</footer>
{% endhighlight %}
