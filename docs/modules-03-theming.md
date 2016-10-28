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
