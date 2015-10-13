---
layout: page
title: Pagination
permalink: /patterns/pagination/
resource: true
categories: Patterns
---

_Pagination_ is very useful pattern that allows users to browse through available content when it is grouped into manageble chunks: pages. You can use any size available for the buttons.

###### Preview
<div class="preview-plain">
  <div class="pagination">
    <ol class="pagination-wrapper">
      <li class="item"><a href="#" class="pure-button xsmall">Previous</a></li>
      <li class="item current"><span class="pure-button transparent xsmall">1</span></li>
      <li class="item"><a href="#" class="pure-button xsmall">2</a></li>
      <li class="item"><a href="#" class="pure-button xsmall">3</a></li>
      <li class="item"><a href="#" class="pure-button xsmall">Next</a></li>
    </ol>
  </div>
</div>

###### Markup
{% highlight html %}
<div class="pagination">
  <ol class="pagination-wrapper">
    <li class="item"><a href="#" class="pure-button xsmall">Previous</a></li>
    <li class="item current"><span class="pure-button transparent xsmall">1</span></li>
    <li class="item"><a href="#" class="pure-button xsmall">2</a></li>
    <li class="item"><a href="#" class="pure-button xsmall">3</a></li>
    <li class="item"><a href="#" class="pure-button xsmall">Next</a></li>
  </ol>
</div>
{% endhighlight %}