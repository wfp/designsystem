---
layout: page
title: Tables
permalink: /components/tables/
resource: true
categories: Components
---

### Standard
Tables should use a `wfp-table` class, and be properly structured, using `<thead>` and `<tbody>`, in order to achieve best results.

###### Preview
<table class="wfp-table">
  <thead>
    <th>#</th>
    <th>Name</th>
    <th>Origin</th>
    <th>Age</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>John Williams</td>
      <td>New York, USA</td>
      <td>83</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Thomas Newman</td>
      <td>Los Angeles, USA</td>
      <td>60</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Hans Zimmer</td>
      <td>Frankfurt, Germany</td>
      <td>58</td>
    </tr>
  </tbody>
</table>

###### Markup
{% highlight html %}
<table class="wfp-table">
  <thead>
    <th>#</th>
    <th>Name</th>
    <th>Origin</th>
    <th>Age</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>John Williams</td>
      <td>New York, USA</td>
      <td>83</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Thomas Newman</td>
      <td>Los Angeles, USA</td>
      <td>60</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Hans Zimmer</td>
      <td>Frankfurt, Germany</td>
      <td>58</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

### Striped
You can also display tables using *striped* rows. To do this, add `wfp-table--striped` class, instead of `wfp-table` to your table element.

###### Preview
<table class="wfp-table--striped">
  <thead>
    <th>#</th>
    <th>Name</th>
    <th>Origin</th>
    <th>Age</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>John Williams</td>
      <td>New York, USA</td>
      <td>83</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Thomas Newman</td>
      <td>Los Angeles, USA</td>
      <td>60</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Hans Zimmer</td>
      <td>Frankfurt, Germany</td>
      <td>58</td>
    </tr>
  </tbody>
</table>

###### Markup
{% highlight html %}
<table class="wfp-table--striped">
  ...
</table>
{% endhighlight %}
