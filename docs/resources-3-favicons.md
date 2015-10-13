---
layout: page
title: Favicons
permalink: /resources/favicons/
resource: true
categories: Resources
---

Favicons are small icons that are being often displayed in the browser address bar, stored with bookmarked pages, etc. You should only use the officialy approved favicons.

Add the following lines to the `<head>` section of your page:

{% highlight html %}
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="http://cdn.wfp.org/apple-touch-icon-152x152-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="http://cdn.wfp.org/apple-touch-icon-144x144-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="http://cdn.wfp.org/apple-touch-icon-120x120-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://cdn.wfp.org/apple-touch-icon-114x114-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="http://cdn.wfp.org/apple-touch-icon-76x76-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://cdn.wfp.org/apple-touch-icon-72x72-precomposed.png" />
<link rel="apple-touch-icon-precomposed" href="http://cdn.wfp.org/apple-touch-icon-precomposed.png" />
<link rel="shortcut icon" href="http://cdn.wfp.org/favicon.ico" />
{% endhighlight %}

If your application or website is not able to connect to the Internet, you can use the favicon offline kit to host favicons locally. Download the ZIP file, unpack it and place its contents in the root of your site.

<div class="preview plain">
  <p>
    <a class="pure-button" href="{{site.baseurl}}/assets/favicon.zip" download>Download WFP Favicons (zip)</a>
  </p>
</div>