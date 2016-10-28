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

### Borders
- **Responsive:** No

{% highlight scss %}
// Borders

{% endhighlight %}

### Box Shadow
Predefined box-shadow values. Incrementally increasing with intensity.

- **Responsive:** No

{% highlight scss %}
// Box Shadow
.shadow-1 {
  box-shadow: 0 1px 3px rgba(black, 0.15);
}
.shadow-2 {
  box-shadow: 0 1px 8px rgba(black, 0.15)
}
.shadow-3 {
  box-shadow: inset 4px 0 0 rgba($primary, 1);
}
{% endhighlight %}
