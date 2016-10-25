---
layout: page
title: Layout
permalink: /modules/layout/
resource: true
categories: Modules
---
{% include base.html %}

The following CSS classes allow you to control layout. Most of them are available in responsive variants.

### Box Sizing
Use these to set `box-sizing` property for individual elements.

- **Responsive:** No

{% highlight css %}
.bs-bb { box-sizing: border-box; }
.bs-cb { box-sizing: content-box; }
{% endhighlight %}

### Clearfix
Use on containers to clear floats contained within.

- **Responsive:** No

{% highlight scss %}
.cf {
  &::before,
  &::after {
    content: " ";
    display: table;
  }

  &::after {
    clear: both;
  }
}
{% endhighlight %}

### Display
Use them, to set display modes for individual elements.

- **Responsive:** Yes (`-sm`, `-md`, `-lg`, `xl`)

{% highlight scss %}
.dn { display: none; }
.di { display: inline; }
.df { display: flex; }
.db { display: block; }
.dib { display: inline-block; }
.dit { display: inline-table; }
.dt { display: table; }
.dtc { display: table-cell; }
.dt-row { display: table-row; }
.dt-row-group { display: table-row-group; }
.dt-col { display: table-column; }
.dt-col-group { display: table-column-group; }
{% endhighlight %}

###### Example
{% highlight html %}
<div class="dn df-md dib-xl"></div>
{% endhighlight %}

### Fixed Table Layout
Sets table to 100% width and all cells to equal width.

- **Responsive:** No

{% highlight css %}
.dt--fixed {
  width: 100%;
  table-layout: fixed;
}
{% endhighlight %}

### Floats
Float elements left/right/centre.

- **Responsive:** Yes

{% highlight css %}
.fl { float: left; }
.fr { float: right; }
.fn { float: none; }
{% endhighlight %}

###### Example
{% highlight html %}
<div class="fl fr-md fn-lg"></div>
{% endhighlight %}

### Heights
Predefined set of height values.

- **Responsive:** Yes

{% highlight css %}
.h-25       { height: 25%; }
.h-50       { height: 50%; }
.h-75       { height: 75%; }
.h-100      { height: 100%; }
.h-auto     { height: auto; }
.h-inherit  { height: inherit; }
{% endhighlight %}

###### Example
{% highlight html %}
<div class="h-100 h-50-md h-auto-lg"></div>
{% endhighlight %}

### Widths
Predefined set of height values.

- **Responsive:** Yes

{% highlight css %}
.w1         { width: 1rem; }
.w2         { width: 2rem; }
.w3         { width: 4rem; }
.w4         { width: 6rem; }
.w5         { width: 8rem; }
.w6         { width: 10rem; }
.w7         { width: 12rem; }
.w8         { width: 16rem; }
.w9         { width: 20rem; }
.w10        { width: 24rem; }
.w11        { width: 32rem; }
.w12        { width: 48rem; }
.w13        { width: 56rem; }
.w14        { width: 64rem; }
.w15        { width: 96rem; }
.w16        { width: 128rem; }

.w-25       { width: 25%; }
.w-50       { width: 50%; }
.w-75       { width: 75%; }
.w-100      { width: 100%; }
.w-auto     { width: auto; }
{% endhighlight %}

###### Example
{% highlight html %}
<div class="w8 w-50-md w-auto-lg"></div>
{% endhighlight %}
