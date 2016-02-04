---
layout: page
title: Grids
permalink: /components/grids/
resource: true
categories: Components
---
{% include base.html %}

Without grids, designing and implementing responsive layouts would not be possible. There are many grid systems available, each with their pros and cons, but for WFP UI, we have picked a very versatile, powerful, and relatively easy to use grid system, designed by Yahoo team for Pure CSS framework.

<div class="notice">
  <h2 class="title">Notice</h2>
  <p>Grids are totally optional. Please, refer to <a href="{{ base }}/basics/getting-started">Getting Started</a> section for information on including WFP UI + Grids in your projects.</p>
</div>

### Basics

###### Two types of classes
Grids in WFP UI make use of only two types of classes: the grid class (`wfp-grid`) and unit classes (`wfp-u` or `wfp-u-*`) to form layouts.

###### Units are fractions
Units have various names that represent their widths; i.e.: `wfp-u-1-2`, `wfp-u-3-4`, and `wfp-u-1-5` represent widths of 50% (1/2), 75% (3/4), and 20% (1/5), respectively. All widths are relative to the width of their grid container (`wfp-grid`).

###### Child elements of a grid must be units
Child elements contained within an element with a `wfp-grid` classname must be a grid unit with a `wfp-u` or `wfp-u-*` classname.

###### Content goes inside grid units
All content which is visible to people needs to be contained inside a grid unit. This ensures that the content will be rendered properly.

###### Grid units do not have gutters by default
To give you more control over your layouts, we have not applied default gutters to grid units. You can apply your own gutters via padding, for example by using `wfp-box` classname.

###### Example
<div class="wfp-grid grid-unit-sample">
  <div class="wfp-u-1-3 wfp-text-center"><p>Thirds</p></div>
  <div class="wfp-u-1-3 wfp-text-center"><p>Thirds</p></div>
  <div class="wfp-u-1-3 wfp-text-center"><p>Thirds</p></div>
</div>

{% highlight html %}
<div class="wfp-grid">
  <div class="wfp-u-1-3"><p>Thirds</p></div>
  <div class="wfp-u-1-3"><p>Thirds</p></div>
  <div class="wfp-u-1-3"><p>Thirds</p></div>
</div>
{% endhighlight %}

### Grid Units Sizes
Our grid allows you to use both a *5ths* and *24ths* based grid. Below you can find all the available units that can be appended to the `wfp-u-*` classname, where `*` is one the unit fractions, i.e.: to achieve a 50% width, use `wfp-u-1-2`.

<div class="notice">
  <h2 class="title">Notice</h2>
  <p>Grid containers (<code>wfp-grid</code>) always expand to fill 100% width of their parent.</p>
</div>

###### 5ths-based units
<div class="wfp-grid">
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">1-5</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-1-5">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">2-5</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-2-5">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">3-5</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-3-5">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">4-5</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-4-5">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">1</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-1">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">1-1</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-1-1">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">5-5</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-5-5">&nbsp;</div>
    </div>
  </div>
</div>

###### 24ths-based units
<div class="wfp-grid">
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">1-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-1-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">1-12</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-1-12">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">2-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-2-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">3-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-3-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">4-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-4-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">1-6</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-1-6">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">5-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-5-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">6-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-6-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">7-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-7-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">1-3</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-1-3">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">8-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-8-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">3-8</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-3-8">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">9-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-9-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">5-12</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-5-12">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">10-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-10-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">11-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-11-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">1-2</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-1-2">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">12-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-12-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">7-12</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-7-12">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">14-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-14-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">5-8</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-5-8">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">15-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-15-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">2-3</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-2-3">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">16-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-16-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">17-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-17-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">3-4</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-3-4">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">18-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-18-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">19-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-19-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">5-6</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-5-6">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">20-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-20-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">7-8</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-7-8">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">21-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-21-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">11-12</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-11-12">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">22-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-22-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">23-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-23-24">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">1</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-1">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">1-1</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-1-1">&nbsp;</div>
    </div>
  </div>
  <div class="wfp-u-1-5 wfp-u-md-1-12 grid-unit-width">24-24</div>
  <div class="wfp-u-4-5 wfp-u-md-11-12 grid-unit-sample">
    <div class="wfp-grid">
      <div class="wfp-u-24-24">&nbsp;</div>
    </div>
  </div>
</div>

### Media Queries
This grid system allows you to take control over grid behaviour at certain breakpoints by including additional class names. Use the following table to see what default breakpoints are supported.

<div class="wfp-overflow-wrapper">
  <table class="wfp-table">
    <thead>
      <th>Key</th>
      <th>CSS Media Query</th>
      <th>Breakpoint</th>
      <th>Classname</th>
    </thead>
    <tbody>
      <tr>
        <td><code>sm</code></td>
        <td><code>@media screen and (min-width: 35.5em)</code></td>
        <td>≥ 568px</td>
        <td><code>.wfp-u-<b>sm</b>-*</code></td>
      </tr>
      <tr>
        <td><code>md</code></td>
        <td><code>@media screen and (min-width: 48em)</code></td>
        <td>≥ 768px</td>
        <td><code>.wfp-u-<b>md</b>-*</code></td>
      </tr>
      <tr>
        <td><code>lg</code></td>
        <td><code>@media screen and (min-width: 64em)</code></td>
        <td>≥ 1024px</td>
        <td><code>.wfp-u-<b>lg</b>-*</code></td>
      </tr>
      <tr>
        <td><code>xl</code></td>
        <td><code>@media screen and (min-width: 80em)</code></td>
        <td>≥ 1280px</td>
        <td><code>.wfp-u-<b>xl</b>-*</code></td>
      </tr>
    </tbody>
  </table>
</div>

### Usage
The following code sample shows how to use grids to build a responsive layout for your pages using CSS Media Queries, as well as manage content layouts based on grids.

<div class="notice">
  <h2 class="title">Notice</h2>
  <p>If you want to maintain appropriate padding on the edge of a multiple-column layout when using <code>wfp-box</code> class, please make sure that your columns collapse only to a single-column layout, on screens smaller than the <code>md</code> breakpoint.</p>
</div>

###### Preview
<div class="preview plain paragraph">
  <div class="wfp-grid">
    <div class="wfp-u-1 wfp-u-md-1-3 wfp-box--flat">
      <nav class="wfp-menu">
        <h6 class="menu--heading">Menu</h6>
        <ul class="menu--wrapper">
          <li class="menu--item"><a href="#" class="menu--link">Home</a></li>
          <li class="menu--item"><a href="#" class="menu--link">About</a></li>
          <li class="menu--item"><a href="#" class="menu--link">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="wfp-u-1 wfp-u-md-2-3 wfp-box--flat">
      <h3>Title</h3>
      <p>This is a sample paragraph, written to showcase how you can arrange your content. It's not very long and you didn't have to read it anyway.</p>
      <div class="wfp-grid">
        <div class="wfp-u-1 wfp-u-md-1-2 wfp-box grid-unit-sample wfp-text-center">
          <h6>Label #1</h6>
        </div>
        <div class="wfp-u-1 wfp-u-md-1-2 wfp-box grid-unit-sample wfp-text-center">
          <h6>Label #2</h6>
        </div>
      </div>
      <div class="wfp-grid">
        <div class="wfp-u-1 wfp-u-md-1-3 wfp-box grid-unit-sample wfp-text-center">
          <h6>Label #1</h6>
        </div>
        <div class="wfp-u-1 wfp-u-md-1-3 wfp-box grid-unit-sample wfp-text-center">
          <h6>Label #2</h6>
        </div>
        <div class="wfp-u-1 wfp-u-md-1-3 wfp-box grid-unit-sample wfp-text-center">
          <h6>Label #3</h6>
        </div>
      </div>
    </div>
  </div>
</div>

###### Source
{% highlight html %}
<div class="wfp-grid">
  <div class="wfp-u-1 wfp-u-md-1-3 wfp-box">
    <nav class="wfp-menu">
      <h6 class="menu--heading">Menu</h6>
      <ul class="menu--wrapper">
        <li class="menu--item"><a href="#" class="menu--link">Home</a></li>
        <li class="menu--item"><a href="#" class="menu--link">About</a></li>
        <li class="menu--item"><a href="#" class="menu--link">Contact</a></li>
      </ul>
    </nav>
  </div>
  <div class="wfp-u-1 wfp-u-md-2-3 wfp-box">
    <h3>Title</h3>
    <p>This is a sample paragraph, written to showcase how you can arrange your content. It's not very long and you didn't have to read it anyway.</p>
    <div class="wfp-grid">
      <div class="wfp-u-1 wfp-u-md-1-2 wfp-box">
        <h6>Label #1</h6>
      </div>
      <div class="wfp-u-1 wfp-u-md-1-2 wfp-box">
        <h6>Label #2</h6>
      </div>
    </div>
    <hr>
    <div class="wfp-grid">
      <div class="wfp-u-1 wfp-u-md-1-3 wfp-box">
        <h6>Label #1</h6>
      </div>
      <div class="wfp-u-1 wfp-u-md-1-3 wfp-box">
        <h6>Label #2</h6>
      </div>
      <div class="wfp-u-1 wfp-u-md-1-3 wfp-box">
        <h6>Label #3</h6>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

---
*Portions of this page have been sourced from [purecss.io](http://purecss.io/grids).*
