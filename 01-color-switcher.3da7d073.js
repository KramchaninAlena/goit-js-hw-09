!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),a=null;function o(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.style.backgroundColor=e}e.addEventListener("click",(function(){e.disabled=!0,a=setInterval(o,1e3),n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(a),n.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.3da7d073.js.map
