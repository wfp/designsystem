---
layout: page
title: Typography
permalink: /modules/typography/
resource: true
categories: Modules
---
{% include base.html %}


The following CSS classes allow you to control typography. Most of them are available in responsive variants.

### Alignment
Use to alignment inline elements
- **Responsive:** No

{% highlight scss %}
.ta-left,
.tl {
  text-align: left;
}
.ta-center,
.tc {
  text-align: center;
}
.ta-right,
.tr {
  text-align: right;
}
{% endhighlight %}

###  Font Weight
Use on elements to control the font thickness. Increases incrementally from `1` to `9`, in addition shortcut classes are `normal` and `bold`.
- **Responsive:** No

{% highlight scss %}
// Font Weight: Standard
  .normal {
    font-weight: normal;
  }
  .bold {
    font-weight: bold;
  }
  // Font Weight: Increments
  .fw--1 { font-weight: 100; }
  .fw--2 { font-weight: 200; }
  .fw--3 { font-weight: 300; }
  .fw--4 { font-weight: 400; }
  .fw--5 { font-weight: 500; }
  .fw--6 { font-weight: 600; }
  .fw--7 { font-weight: 700; }
  .fw--8 { font-weight: 800; }
  .fw--9 { font-weight: 900; }

{% endhighlight %}

###  Font Size
Predefined font size values, to maintain typography hierarchy. Uses exponentiation of base value `100`, and exponents (`n`) of between `100` and `900` (inclusive).
- **Responsive:** Yes

{% highlight scss %}
// Font Size

.fs(n) {
  font-size: pow(100, n);
}

{% endhighlight %}
