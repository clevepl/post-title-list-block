!function(){"use strict";var t,e={101:function(){var t=window.wp.blocks,e=window.wp.element,n=window.wp.i18n,o=window.wp.blockEditor,l=(window.wp.data,window.wp.components);(0,t.registerBlockType)("cpl/post-title-list-block",{edit:function(t){let{attributes:{numberOfPostsToDisplay:r,postTypesToObtain:i},setAttributes:s}=t;return(0,e.createElement)("ul",(0,o.useBlockProps)(),(0,e.createElement)("li",null,"Example list of an item that will be fetchable"),(0,e.createElement)("li",null,"Will fetch different post types"),(0,e.createElement)("li",null,"and ",(0,e.createElement)("a",{href:"https://linktothatpost.com"},"a too these posts ")),(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(l.PanelBody,{title:(0,n.__)("settings","cpl"),initialOpen:!0}),(0,e.createElement)(l.QueryControls,null),(0,e.createElement)(l.RangeControl,{label:(0,n.__)("Number of posts to display"),value:r,onChange:t=>s({numberOfPostsToDisplay:t}),min:1,max:1e3})))},save:function(){return(0,e.createElement)("p",o.useBlockProps.save(),(0,n.__)("Post Title List Block – hello from the saved content!","post-title-list-block"))}})}},n={};function o(t){var l=n[t];if(void 0!==l)return l.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,o),r.exports}o.m=e,t=[],o.O=function(e,n,l,r){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],l=t[u][1],r=t[u][2];for(var s=!0,a=0;a<n.length;a++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[a])}))?n.splice(a--,1):(s=!1,r<i&&(i=r));if(s){t.splice(u--,1);var c=l();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,l,r]},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={826:0,431:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var l,r,i=n[0],s=n[1],a=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(l in s)o.o(s,l)&&(o.m[l]=s[l]);if(a)var u=a(o)}for(e&&e(n);c<i.length;c++)r=i[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},n=self.webpackChunkpost_title_list_block=self.webpackChunkpost_title_list_block||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var l=o.O(void 0,[431],(function(){return o(101)}));l=o.O(l)}();