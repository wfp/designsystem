import slugify from "slugify";


export default function slugifyWithSlashes(myString) {
    if (!myString)
     return "";
    return myString.split('/').map((val) => slugify(val, {lower: true})).join('/');
   }

