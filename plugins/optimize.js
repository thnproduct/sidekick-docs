
module.exports = async function addOptimize(context, options) {
  return {
    name: "add-optimize",
    injectHtmlTags() {      
     return {
       headTags: [
         {
           tagName: "script",
           attributes: {
             async: "",
             src: "https://www.googleoptimize.com/optimize.js?id=OPT-5J5BJCX"
           }
         },
       ]
     };
   }
  };
}