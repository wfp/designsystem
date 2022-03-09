const gulp = require('gulp');
const svgo = require('gulp-svgo');
const rsp = require('remove-svg-properties').stream;
const dom = require('gulp-dom');
const xmlEdit = require('gulp-edit-xml');

const svgBuild = (src) => {
  return gulp
    .src(src)
    .pipe(
      rsp.remove({
        properties: ['fill', rsp.PROPS_STROKE],
        log: false,
      })
    )
    .pipe(
      dom(function () {
        this.querySelector('svg').setAttribute('fill-rule', 'evenodd');
        return this.querySelector('body').innerHTML;
      }, false)
    )
    .pipe(
      svgo({
        js2svg: {
          indent: 2,
          pretty: true,
        },
        plugins: [{ removeTitle: true }],
      })
    )
    .pipe(
      xmlEdit((xml) => {
        if (xml.svg.circle !== undefined) {
          const convertedCircles = xml.svg.circle
            .map((obj) => obj.$)
            .map((obj) => {
              const { cx, cy, r } = obj;
              return {
                $: {
                  d: `M ${cx} ${cy} m -${r},0 a ${r},${r} 0 1,1 ${
                    parseFloat(r) * 2
                  }, 0 a ${r},${r} 0 1,1 -${parseFloat(r) * 2}, 0`,
                },
              };
            });

          if (xml.svg.path !== undefined) {
            convertedCircles.forEach((circle) => xml.svg.path.push(circle));
          } else {
            xml.svg.path = [];
            convertedCircles.forEach((circle) => xml.svg.path.push(circle));
          }
          delete xml.svg.circle;
        }
        return xml;
      })
    );
};

module.exports = svgBuild;
