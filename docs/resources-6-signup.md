---
layout: page
title: Newsletter Widget
permalink: /resources/signup/
resource: true
categories: Resources
---

If you require a lightweight and robust newsletter sign-up widget, which you can place on any web page, paste the code below into the `body` of your page.

To add tracking parameters (such as `lead_source`), place them after the main URL, using query string, i.e.:

{% highlight html %}
//cdn.wfp.org/signup/?lead_source=wfp_org
{% endhighlight %}

You can adjust classes, or styles on the anchor as you see fit, but WFP encourages you to adhere to guideliness contained within this UI Guide.

{% highlight html %}
<a href="//cdn.wfp.org/signup/" data-featherlight="iframe" data-featherlight-iframe-min-width="320" data-featherlight-iframe-width="100%" data-featherlight-iframe-height="575" class="pure-button primary" id="wfp-signup-show">Sign up for our Newsletter</a>
<script src="//cdn.wfp.org/signup/widget/widget.js" async></script>
{% endhighlight %}

You can test how it works using the button below:

<div class="preview plain">
  <a href="//cdn.wfp.org/signup" data-featherlight="iframe" data-featherlight-iframe-min-width="320" data-featherlight-iframe-width="100%" data-featherlight-iframe-height="575" class="pure-button primary" id="wfp-signup-show">Sign up for our Newsletter</a>
  <script src="//cdn.wfp.org/signup/widget/widget.js" async></script>
</div>