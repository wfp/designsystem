const fs = require('fs');
const YAML = require('yaml');

const writeToFile = async (filename, data) => {
  return fs.writeFile(filename, data, (error) => {
    if (error) throw error;
    console.log(`The file ${filename} has been saved!`);
  });
};

const camelCaseToDash = (string) => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

const flattenArray = (arr, d = 1) => {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flattenArray(val, d - 1) : val),
        []
      )
    : arr.slice();
};

const findAllByValue = (obj, valueToFind) => {
  return Object.entries(obj).reduce(
    (acc, [key, value]) =>
      value === valueToFind
        ? acc.concat({
            id: Object.values(obj.id).join(''),
            name: Object.values(obj.name).join(''),
          })
        : typeof value === 'object'
        ? acc.concat(findAllByValue(value, valueToFind))
        : acc,
    []
  );
};

const createFolder = async (path) => {
  try {
    await fs.promises.access(path, fs.constants.F_OK);
  } catch (err) {
    await fs.promises.mkdir(path);
  }
};

const filterPrivateComponents = (svgs) =>
  svgs.filter(({ name }) => !name.startsWith('.') && !name.startsWith('_'));

const saveMeta = (data, name) => {
  let dataString = YAML.stringify(data);
  fs.writeFileSync(name, dataString);
};

const addDescription = (svgs, components) => {
  return svgs.map((e) => {
    let description = {};
    try {
      description = JSON.parse(components[e.id].description);
      console.log('Add description: ', description);
    } catch (e) {
      // Anweisungen für jeden Fehler
    }

    return {
      name: camelCaseToDash(e.name),
      friendly_name: e.name,
      aliases: [],
      ...description,
    };
  });
};

const generateCategories = (svgs, components) => {
  const categories = {
    categories: [
      {
        name: 'Actions',
        subcategories: [{ name: 'Controls', members: [] }],
      },
    ],
  };

  svgs.map((e) => {
    categories.categories[0].subcategories[0].members.push(e.name);
  });
  return categories;
};

/*
categories:
- name: Actions
  subcategories:
    - name: Controls
      members:
        - emergency--l2-large
*/

exports.writeToFile = writeToFile;
exports.camelCaseToDash = camelCaseToDash;
exports.flattenArray = flattenArray;
exports.findAllByValue = findAllByValue;
exports.createFolder = createFolder;
exports.filterPrivateComponents = filterPrivateComponents;
exports.saveMeta = saveMeta;
exports.addDescription = addDescription;
exports.generateCategories = generateCategories;
