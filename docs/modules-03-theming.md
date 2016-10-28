---
layout: page
title: Theming
permalink: /modules/theming/
resource: true
categories: Modules
---
{% include base.html %}

The following CSS classes allow you to control theming.

### Colours
Use predefined colors agnostically.
- **Responsive:** No

{% highlight scss %}
.color--light {
  color: $white;
}

.color--dark {
  color: $text-color;
}

.color--primary {
  color: darken($primary, 12%);
}
{% endhighlight %}


### Background Colours
Use predefined colours and variant tints of `grey`, `blue` and `black`.
- **Responsive:** No

{% highlight scss %}
// Black Tints

{% endhighlight %}
