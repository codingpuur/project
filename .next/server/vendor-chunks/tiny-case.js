/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tiny-case";
exports.ids = ["vendor-chunks/tiny-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/tiny-case/index.js":
/*!*****************************************!*\
  !*** ./node_modules/tiny-case/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("const reWords = /[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+|(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*/g\n\nconst words = (str) => str.match(reWords) || []\n\nconst upperFirst = (str) => str[0].toUpperCase() + str.slice(1)\n\nconst join = (str, d) => words(str).join(d).toLowerCase()\n\nconst camelCase = (str) =>\n  words(str).reduce(\n    (acc, next) =>\n      `${acc}${\n        !acc\n          ? next.toLowerCase()\n          : next[0].toUpperCase() + next.slice(1).toLowerCase()\n      }`,\n    '',\n  )\n\nconst pascalCase = (str) => upperFirst(camelCase(str))\n\nconst snakeCase = (str) => join(str, '_')\n\nconst kebabCase = (str) => join(str, '-')\n\nconst sentenceCase = (str) => upperFirst(join(str, ' '))\n\nconst titleCase = (str) => words(str).map(upperFirst).join(' ')\n\nmodule.exports = {\n  words,\n  upperFirst,\n  camelCase,\n  pascalCase,\n  snakeCase,\n  kebabCase,\n  sentenceCase,\n  titleCase,\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdGlueS1jYXNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLDhyREFBOHJELEVBQUUsMEtBQTBLLEVBQUU7O0FBRTUyRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Npb24tbmV4dC8uL25vZGVfbW9kdWxlcy90aW55LWNhc2UvaW5kZXguanM/YmUwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZVdvcmRzID0gL1tBLVpcXHhjMC1cXHhkNlxceGQ4LVxceGRlXT9bYS16XFx4ZGYtXFx4ZjZcXHhmOC1cXHhmZl0rKD86WyfigJldKD86ZHxsbHxtfHJlfHN8dHx2ZSkpPyg/PVtcXHhhY1xceGIxXFx4ZDdcXHhmN1xceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceGJmXFx1MjAwMC1cXHUyMDZmIFxcdFxceDBiXFxmXFx4YTBcXHVmZWZmXFxuXFxyXFx1MjAyOFxcdTIwMjlcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXXxbQS1aXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZV18JCl8KD86W0EtWlxceGMwLVxceGQ2XFx4ZDgtXFx4ZGVdfFteXFx1ZDgwMC1cXHVkZmZmXFx4YWNcXHhiMVxceGQ3XFx4ZjdcXHgwMC1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHhiZlxcdTIwMDAtXFx1MjA2ZiBcXHRcXHgwYlxcZlxceGEwXFx1ZmVmZlxcblxcclxcdTIwMjhcXHUyMDI5XFx1MTY4MFxcdTE4MGVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcZCtcXHUyNzAwLVxcdTI3YmZhLXpcXHhkZi1cXHhmNlxceGY4LVxceGZmQS1aXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZV0pKyg/Olsn4oCZXSg/OkR8TEx8TXxSRXxTfFR8VkUpKT8oPz1bXFx4YWNcXHhiMVxceGQ3XFx4ZjdcXHgwMC1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHhiZlxcdTIwMDAtXFx1MjA2ZiBcXHRcXHgwYlxcZlxceGEwXFx1ZmVmZlxcblxcclxcdTIwMjhcXHUyMDI5XFx1MTY4MFxcdTE4MGVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMF18W0EtWlxceGMwLVxceGQ2XFx4ZDgtXFx4ZGVdKD86W2EtelxceGRmLVxceGY2XFx4ZjgtXFx4ZmZdfFteXFx1ZDgwMC1cXHVkZmZmXFx4YWNcXHhiMVxceGQ3XFx4ZjdcXHgwMC1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHhiZlxcdTIwMDAtXFx1MjA2ZiBcXHRcXHgwYlxcZlxceGEwXFx1ZmVmZlxcblxcclxcdTIwMjhcXHUyMDI5XFx1MTY4MFxcdTE4MGVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcZCtcXHUyNzAwLVxcdTI3YmZhLXpcXHhkZi1cXHhmNlxceGY4LVxceGZmQS1aXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZV0pfCQpfFtBLVpcXHhjMC1cXHhkNlxceGQ4LVxceGRlXT8oPzpbYS16XFx4ZGYtXFx4ZjZcXHhmOC1cXHhmZl18W15cXHVkODAwLVxcdWRmZmZcXHhhY1xceGIxXFx4ZDdcXHhmN1xceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceGJmXFx1MjAwMC1cXHUyMDZmIFxcdFxceDBiXFxmXFx4YTBcXHVmZWZmXFxuXFxyXFx1MjAyOFxcdTIwMjlcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFxkK1xcdTI3MDAtXFx1MjdiZmEtelxceGRmLVxceGY2XFx4ZjgtXFx4ZmZBLVpcXHhjMC1cXHhkNlxceGQ4LVxceGRlXSkrKD86WyfigJldKD86ZHxsbHxtfHJlfHN8dHx2ZSkpP3xbQS1aXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZV0rKD86WyfigJldKD86RHxMTHxNfFJFfFN8VHxWRSkpP3xcXGQqKD86MVNUfDJORHwzUkR8KD8hWzEyM10pXFxkVEgpKD89XFxifFthLXpfXSl8XFxkKig/OjFzdHwybmR8M3JkfCg/IVsxMjNdKVxcZHRoKSg/PVxcYnxbQS1aX10pfFxcZCt8KD86W1xcdTI3MDAtXFx1MjdiZl18KD86XFx1ZDgzY1tcXHVkZGU2LVxcdWRkZmZdKXsyfXxbXFx1ZDgwMC1cXHVkYmZmXVtcXHVkYzAwLVxcdWRmZmZdKVtcXHVmZTBlXFx1ZmUwZl0/KD86W1xcdTAzMDAtXFx1MDM2ZlxcdWZlMjAtXFx1ZmUyZlxcdTIwZDAtXFx1MjBmZl18XFx1ZDgzY1tcXHVkZmZiLVxcdWRmZmZdKT8oPzpcXHUyMDBkKD86W15cXHVkODAwLVxcdWRmZmZdfCg/OlxcdWQ4M2NbXFx1ZGRlNi1cXHVkZGZmXSl7Mn18W1xcdWQ4MDAtXFx1ZGJmZl1bXFx1ZGMwMC1cXHVkZmZmXSlbXFx1ZmUwZVxcdWZlMGZdPyg/OltcXHUwMzAwLVxcdTAzNmZcXHVmZTIwLVxcdWZlMmZcXHUyMGQwLVxcdTIwZmZdfFxcdWQ4M2NbXFx1ZGZmYi1cXHVkZmZmXSk/KSovZ1xuXG5jb25zdCB3b3JkcyA9IChzdHIpID0+IHN0ci5tYXRjaChyZVdvcmRzKSB8fCBbXVxuXG5jb25zdCB1cHBlckZpcnN0ID0gKHN0cikgPT4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcblxuY29uc3Qgam9pbiA9IChzdHIsIGQpID0+IHdvcmRzKHN0cikuam9pbihkKS50b0xvd2VyQ2FzZSgpXG5cbmNvbnN0IGNhbWVsQ2FzZSA9IChzdHIpID0+XG4gIHdvcmRzKHN0cikucmVkdWNlKFxuICAgIChhY2MsIG5leHQpID0+XG4gICAgICBgJHthY2N9JHtcbiAgICAgICAgIWFjY1xuICAgICAgICAgID8gbmV4dC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgOiBuZXh0WzBdLnRvVXBwZXJDYXNlKCkgKyBuZXh0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKClcbiAgICAgIH1gLFxuICAgICcnLFxuICApXG5cbmNvbnN0IHBhc2NhbENhc2UgPSAoc3RyKSA9PiB1cHBlckZpcnN0KGNhbWVsQ2FzZShzdHIpKVxuXG5jb25zdCBzbmFrZUNhc2UgPSAoc3RyKSA9PiBqb2luKHN0ciwgJ18nKVxuXG5jb25zdCBrZWJhYkNhc2UgPSAoc3RyKSA9PiBqb2luKHN0ciwgJy0nKVxuXG5jb25zdCBzZW50ZW5jZUNhc2UgPSAoc3RyKSA9PiB1cHBlckZpcnN0KGpvaW4oc3RyLCAnICcpKVxuXG5jb25zdCB0aXRsZUNhc2UgPSAoc3RyKSA9PiB3b3JkcyhzdHIpLm1hcCh1cHBlckZpcnN0KS5qb2luKCcgJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdvcmRzLFxuICB1cHBlckZpcnN0LFxuICBjYW1lbENhc2UsXG4gIHBhc2NhbENhc2UsXG4gIHNuYWtlQ2FzZSxcbiAga2ViYWJDYXNlLFxuICBzZW50ZW5jZUNhc2UsXG4gIHRpdGxlQ2FzZSxcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tiny-case/index.js\n");

/***/ })

};
;