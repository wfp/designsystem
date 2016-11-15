---
layout: page
title: Typography
permalink: /modules/typography/
resource: true
categories: Modules
---
{% include base.html %}


The following CSS classes allow you to control typography. Most of them are available in responsive variants.

### Text Alignment
Use to alignment inline elements.

- **Responsive:** Yes

{% highlight scss %}
.tl {
  text-align: left;
}
.tc {
  text-align: center;
}
.tr {
  text-align: right;
}
{% endhighlight %}

###  Font Weight
Use on elements to control the font thickness. Increases incrementally from `1` to `9`, in addition shortcut classes are `normal` and `bold`.

- **Responsive:** No

{% highlight scss %}
.normal { font-weight: normal; }
.bold   { font-weight: bold; }

.fw1 { font-weight: 100; }
.fw2 { font-weight: 200; }
.fw3 { font-weight: 300; }
.fw4 { font-weight: 400; }
.fw5 { font-weight: 500; }
.fw6 { font-weight: 600; }
.fw7 { font-weight: 700; }
.fw8 { font-weight: 800; }
.fw9 { font-weight: 900; }
{% endhighlight %}

###  Font Size
Predefined font size values to maintain typography hierarchy.

- **Responsive:** Yes

{% highlight scss %}
.fs1 { font-size: 3rem;}
.fs2 { font-size: 2.25rem;}
.fs3 { font-size: 1.5rem;}
.fs4 { font-size: 1.25rem;}
.fs5 { font-size: 1rem;}
.fs6 { font-size: 0.875rem;}
{% endhighlight %}

###  Font Style
Use predefined styles on elements to control the font style.

- **Responsive:** No

{% highlight scss %}
.fst-normal {
  font-style: normal;
}
.fst-i {
  font-style: italics;
}
{% endhighlight %}

###  Text Decoration
Use predefined styles on elements to control the font decoration style.

- **Responsive:** No

{% highlight scss %}
.strike { text-decoration: line-through; }
.underline { text-decoration: underline; }
.no-decor { text-decoration: none; }

{% endhighlight %}

###  Text Transform
Use predefined styles on elements to control the font transform style.

- **Responsive:** No

{% highlight scss %}
.t-caps     { text-transform: capitalize; }
.t-allcaps  { text-transform: uppercase; }
.t-lowcase  { text-transform: lowercase; }
.t-firstcap { text-transform: capitalize; }
{% endhighlight %}

###  Vertical Alignment
Use predefined styles on elements to control the vertical alignment (including table) style.

- **Responsive:** No

{% highlight scss %}
.va-base        { vertical-align: baseline; }
.va-sub         { vertical-align: sub; }
.va-sup         { vertical-align: super; }
.va-texttop     { vertical-align: text-top; }
.va-textbottom  { vertical-align: text-bottom; }

// Table Alignment
.va-mid    { vertical-align: text-middle; }
.va-top    { vertical-align: text-top; }
.va-bottom { vertical-align: text-bottom; }
{% endhighlight %}

###  White space
Use predefined styles on elements to provide white space.

- **Responsive:** No

{% highlight scss %}
.ws-normal { white-space: normal; }
.ws-nowrap { white-space: nowrap; }
.ws-pre    { white-space: pre; }
{% endhighlight %}

###  Tracking
Use predefined styles on elements to provide tracking (letter spacing).

-  **Responsive:** No

{% highlight scss %}
.tr-tight  { letter-spacing: -0.03em; }
.tr-loose  { letter-spacing: 0.16em; }
.tr-xloose { letter-spacing: 0.32em; }
{% endhighlight %}

###  Leading (`line-height`)
Use predefined styles to provide standard, uniformed _line height_ styles for typography.

-  **Responsive:** Yes

{% highlight scss %}
.lh-default { line-height: 1; }
.lh-heading { line-height: 1.250; }
.lh-body    { line-height: 1.500; }
{% endhighlight %}
