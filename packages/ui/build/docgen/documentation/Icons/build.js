"use strict";

var gulp = require('gulp');

var svgo = require('gulp-svgo');

var rsp = require('remove-svg-properties').stream;

var dom = require('gulp-dom');

var xmlEdit = require('gulp-edit-xml');

var svgBuild = function svgBuild(src) {
  return gulp.src(src).pipe(rsp.remove({
    properties: ['fill', rsp.PROPS_STROKE],
    log: false
  })).pipe(dom(function () {
    this.querySelector('svg').setAttribute('fill-rule', 'evenodd');
    return this.querySelector('body').innerHTML;
  }, false)).pipe(svgo({
    js2svg: {
      indent: 2,
      pretty: true
    },
    plugins: [{
      removeTitle: true
    }]
  })).pipe(xmlEdit(function (xml) {
    if (xml.svg.circle !== undefined) {
      var convertedCircles = xml.svg.circle.map(function (obj) {
        return obj.$;
      }).map(function (obj) {
        var cx = obj.cx,
            cy = obj.cy,
            r = obj.r;
        return {
          $: {
            d: "M ".concat(cx, " ").concat(cy, " m -").concat(r, ",0 a ").concat(r, ",").concat(r, " 0 1,1 ").concat(parseFloat(r) * 2, ", 0 a ").concat(r, ",").concat(r, " 0 1,1 -").concat(parseFloat(r) * 2, ", 0")
          }
        };
      });

      if (xml.svg.path !== undefined) {
        convertedCircles.forEach(function (circle) {
          return xml.svg.path.push(circle);
        });
      } else {
        xml.svg.path = [];
        convertedCircles.forEach(function (circle) {
          return xml.svg.path.push(circle);
        });
      }

      delete xml.svg.circle;
    }

    return xml;
  }));
};

module.exports = svgBuild;