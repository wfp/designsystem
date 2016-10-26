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
Predefined set of width values.

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


### Max Widths
Predefined set of `max-width` values.

- **Responsive:** Yes

{% highlight css %}
.mw1         { max-width: 1rem; }
.mw2         { max-width: 2rem; }
.mw3         { max-width: 4rem; }
.mw4         { max-width: 6rem; }
.mw5         { max-width: 8rem; }
.mw6         { max-width: 10rem; }
.mw7         { max-width: 12rem; }
.mw8         { max-width: 16rem; }
.mw9         { max-width: 20rem; }
.mw10        { max-width: 24rem; }
.mw11        { max-width: 32rem; }
.mw12        { max-width: 48rem; }
.mw13        { max-width: 56rem; }
.mw14        { max-width: 64rem; }
.mw15        { max-width: 96rem; }
.mw16        { max-width: 128rem; }

.mw-100      { max-width: 100%; }
.mw-none     { max-width: none; }
{% endhighlight %}

###### Example
{% highlight html %}
<div class="mw8 mw-100-md mw-none-lg"></div>
{% endhighlight %}

### Spacing (Padding)
Predefined padding values, to help with spacing out individual elements. Uses exponentiation of base value `0.25rem`, and exponents (`n`) of between `0` and `7` (inclusive).

- **Responsive:** Yes

{% highlight scss %}
// Padding: All
.pa(n) { padding: pow(0.25rem, n); }

// Padding: Directional
.pl(n) { padding-left: pow(0.25rem, n); }
.pr(n) { padding-right: pow(0.25rem, n); }
.pt(n) { padding-top: pow(0.25rem, n); }
.pb(n) { padding-bottom: pow(0.25rem, n); }

// Padding: Horizontal
.ph(n) {
  padding-left: pow(0.25rem, n);
  padding-right: pow(0.25rem, n);
}

// Padding: Vertical
.pv(n) {
  padding-top: pow(0.25rem, n);
  padding-bottom: pow(0.25rem, n);
}
{% endhighlight %}

###### Example
{% highlight html %}
<div class="pa2 ph4-md pv3-md"></div>
{% endhighlight %}

### Spacing (margin)
Predefined margin values, to help with spacing out individual elements. Uses exponentiation of base value `0.25rem`, and exponents (`n`) of between `0` and `7` (inclusive).

- **Responsive:** Yes

{% highlight scss %}
// Horizontally centred (non-responsive)
.mc {
  margin-left: auto;
  margin-right: auto;
}

// Margin: All
.ma(n) { margin: pow(0.25rem, n); }

// Margin: Directional
.ml(n) { margin-left: pow(0.25rem, n); }
.mr(n) { margin-right: pow(0.25rem, n); }
.mt(n) { margin-top: pow(0.25rem, n); }
.mb(n) { margin-bottom: pow(0.25rem, n); }

// Margin: Horizontal
.mh(n) {
  margin-left: pow(0.25rem, n);
  margin-right: pow(0.25rem, n);
}

// Margin: Vertical
.mv(n) {
  margin-top: pow(0.25rem, n);
  margin-bottom: pow(0.25rem, n);
}
{% endhighlight %}

###### Example
{% highlight html %}
<div class="ma2 mh4-md mv3-md"></div>
{% endhighlight %}

### Position
Various position states and values to help position elements as necessary. Uses exponentiation of base value `1rem`, and exponents (`n`) of between `-2` and `2` (inclusive).

- **Responsive:** No

{% highlight scss %}
// Position: states
.pos--absolute {
  position: absolute;
}
.pos--relative {
  position: relative;
}
.pos--static {
  position: static;
}
.pos--fixed {
  position: fixed;
}

// Position: Values
.pos--top-(n) { top: pow(1rem, n); }
.pos--bottom-(n) { bottom: pow(1rem, n); }
.pos--left-(n) { left: pow(1rem, n); }
.pos--right(n) { right: pow(1rem, n); }

// Position: Horizontal
.pos--fill-h {
  left: 0;
  right: 0;
}

// Position: Vertical
.pos--fill-v {
  top: 0;
  bottom: 0;
}
// Position: Vertical/horizontal
.pos--fill {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
{% endhighlight %}

###### Example
{% highlight html %}
<div class="ma2 mh4-md mv3-md"></div>
{% endhighlight %}
