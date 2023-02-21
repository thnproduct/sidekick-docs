
module.exports = async function addGTM(context, options) {
  return {
    name: "add-gtm",
    injectHtmlTags() {      
     return {
       headTags: [
        {
          tagName: "script",
          innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NQZ8GK6');
          `
        }
       ],
       preBodyTags: [
        {
          tagName: "noscript",
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQZ8GK6" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }
       ]
     };
   }
  };
}

