function svgToggleClass(svg, name, forceAdd) {
  const list = svg.getAttribute('class').trim().split(/\s+/);
  const uniqueList = Object.keys(
    list.reduce((o, item) => Object.assign(o, { [item]: 1 }), {})
  );
  const index = uniqueList.indexOf(name);
  const found = index >= 0;
  const add = forceAdd === undefined ? !found : forceAdd;

  if (found === !add) {
    if (add) {
      uniqueList.push(name);
    } else {
      uniqueList.splice(index, 1);
    }
    svg.setAttribute('class', uniqueList.join(' '));
  }
}

export default svgToggleClass;
