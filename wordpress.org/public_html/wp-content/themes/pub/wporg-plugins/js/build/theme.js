!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){e.exports=window.wp.element},function(e,t,n){e.exports=n(10)()},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(7);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(8).default,i=n(9);e.exports=function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,n(t,r)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";var r=n(11);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,s,a){if(a!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(3),s=n.n(i),a=n(4),o=n.n(a),l=n(5),u=n.n(l),c=n(6),h=n.n(c),d=n(2),m=n.n(d),f=n(1),p=n.n(f);function b(e,t){var n,r,i,s=null,a=0,o=function(){a=(new Date).getTime(),s=null,i=e.apply(n,r),s||(n=r=null)};return function(){var l=(new Date).getTime(),u=t-(l-a);return n=this,r=arguments,u<=0||u>t?(s&&(clearTimeout(s),s=null),a=l,i=e.apply(n,r),s||(n=r=null)):s||(s=setTimeout(o,u)),i}}function y(){var e=b.apply(void 0,arguments);return function(t){return t?(t.persist(),e(t)):e()}}var g=function(e){u()(a,e);var t,n,i=(t=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=m()(t);if(n){var i=m()(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return h()(this,e)});function a(e){var t;return s()(this,a),(t=i.call(this,e)).state={currentIndex:e.startIndex,thumbsTranslateX:0,offsetPercentage:0,galleryWidth:0,thumbnailWidth:0},t}return o()(a,[{key:"componentWillReceiveProps",value:function(e){this.props.disableArrowKeys!==e.disableArrowKeys&&(e.disableArrowKeys?window.removeEventListener("keydown",this._handleKeyDown):window.addEventListener("keydown",this._handleKeyDown))}},{key:"componentDidUpdate",value:function(e,t){t.thumbnailWidth===this.state.thumbnailWidth&&e.showThumbnails===this.props.showThumbnails||this._setThumbsTranslateX(-this._getThumbsTranslateX(this.state.currentIndex>0?1:0)*this.state.currentIndex),t.currentIndex!==this.state.currentIndex&&this._updateThumbnailTranslateX(t)}},{key:"componentWillMount",value:function(){this._slideLeft=y(this._slideLeft.bind(this),500,!0),this._slideRight=y(this._slideRight.bind(this),500,!0),this._handleResize=this._handleResize.bind(this),this._handleKeyDown=this._handleKeyDown.bind(this),this._thumbnailDelay=300}},{key:"componentDidMount",value:function(){var e=this;window.setTimeout((function(){return e._handleResize()}),500),this.props.disableArrowKeys||window.addEventListener("keydown",this._handleKeyDown),window.addEventListener("resize",this._handleResize)}},{key:"componentWillUnmount",value:function(){this.props.disableArrowKeys||window.removeEventListener("keydown",this._handleKeyDown),window.removeEventListener("resize",this._handleResize),this._intervalId&&(window.clearInterval(this._intervalId),this._intervalId=null)}},{key:"fullScreen",value:function(){var e=this._imageGallery;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}},{key:"slideToIndex",value:function(e,t){t&&t.preventDefault();var n=this.props.items.length-1,r=e;e<0?r=n:e>n&&(r=0),this.setState({previousIndex:this.state.currentIndex,currentIndex:r,offsetPercentage:0,style:{transition:"transform 0.45s ease-out"}})}},{key:"getCurrentIndex",value:function(){return this.state.currentIndex}},{key:"_handleResize",value:function(){this._imageGallery&&this.setState({galleryWidth:this._imageGallery.offsetWidth}),this._imageGalleryThumbnail&&this.setState({thumbnailWidth:this._imageGalleryThumbnail.offsetWidth})}},{key:"_handleKeyDown",value:function(e){switch(parseInt(e.keyCode||e.which||0)){case 37:this._canSlideLeft()&&!this._intervalId&&this._slideLeft();break;case 39:this._canSlideRight()&&!this._intervalId&&this._slideRight()}}},{key:"_handleMouseOverThumbnails",value:function(e){var t=this;this.props.slideOnThumbnailHover&&(this.setState({hovering:!0}),this._thumbnailTimer&&(window.clearTimeout(this._thumbnailTimer),this._thumbnailTimer=null),this._thumbnailTimer=window.setTimeout((function(){t.slideToIndex(e)}),this._thumbnailDelay))}},{key:"_handleMouseLeaveThumbnails",value:function(){this._thumbnailTimer&&(window.clearTimeout(this._thumbnailTimer),this._thumbnailTimer=null),this.setState({hovering:!1})}},{key:"_handleMouseOver",value:function(){this.setState({hovering:!0})}},{key:"_handleMouseLeave",value:function(){this.setState({hovering:!1})}},{key:"_handleImageError",value:function(e){this.props.defaultImage&&-1===e.target.src.indexOf(this.props.defaultImage)&&(e.target.src=this.props.defaultImage)}},{key:"_canNavigate",value:function(){return this.props.items.length>=2}},{key:"_canSlideLeft",value:function(){return this.props.infinite||this.state.currentIndex>0}},{key:"_canSlideRight",value:function(){return this.props.infinite||this.state.currentIndex<this.props.items.length-1}},{key:"_updateThumbnailTranslateX",value:function(e){if(0===this.state.currentIndex)this._setThumbsTranslateX(0);else{var t=Math.abs(e.currentIndex-this.state.currentIndex),n=this._getThumbsTranslateX(t);n>0&&(e.currentIndex<this.state.currentIndex?this._setThumbsTranslateX(this.state.thumbsTranslateX-n):e.currentIndex>this.state.currentIndex&&this._setThumbsTranslateX(this.state.thumbsTranslateX+n))}}},{key:"_setThumbsTranslateX",value:function(e){this.setState({thumbsTranslateX:e})}},{key:"_getThumbsTranslateX",value:function(e){if(this.props.disableThumbnailScroll)return 0;var t=this.state.thumbnailWidth;if(this._thumbnails){if(this._thumbnails.scrollWidth<=t)return 0;var n=this._thumbnails.children.length;return e*((this._thumbnails.scrollWidth-t)/(n-1))}}},{key:"_getAlignmentClassName",value:function(e){var t=this.state.currentIndex,n="";switch(e){case t-1:n=" ".concat("left");break;case t:n=" ".concat("center");break;case t+1:n=" ".concat("right")}return this.props.items.length>=3&&this.props.infinite&&(0===e&&t===this.props.items.length-1?n=" ".concat("right"):e===this.props.items.length-1&&0===t&&(n=" ".concat("left"))),n}},{key:"_getTranslateXForTwoSlide",value:function(e){var t=this.state,n=t.currentIndex,r=t.offsetPercentage,i=t.previousIndex,s=-100*n+100*e+r;return r>0?this.direction="left":r<0&&(this.direction="right"),0===n&&1===e&&r>0?s=-100+r:1===n&&0===e&&r<0&&(s=100+r),n!==i?0===i&&0===e&&0===r&&"left"===this.direction?s=100:1===i&&1===e&&0===r&&"right"===this.direction&&(s=-100):0===n&&1===e&&0===r&&"left"===this.direction?s=-100:1===n&&0===e&&0===r&&"right"===this.direction&&(s=100),s}},{key:"_getSlideStyle",value:function(e){var t=this.state,n=t.currentIndex,r=t.offsetPercentage,i=this.props,s=i.infinite,a=i.items,o=-100*n,l=a.length-1,u=o+100*e+r,c=1;e===n?c=3:e===this.state.previousIndex&&(c=2),s&&a.length>2&&(0===n&&e===l?u=-100+r:n===l&&0===e&&(u=100+r)),s&&2===a.length&&(u=this._getTranslateXForTwoSlide(e));var h="translate3d(".concat(u,"%, 0, 0)");return{WebkitTransform:h,MozTransform:h,msTransform:h,OTransform:h,transform:h,zIndex:c}}},{key:"_getThumbnailStyle",value:function(){var e="translate3d(".concat(this.state.thumbsTranslateX,"px, 0, 0)");return{WebkitTransform:e,MozTransform:e,msTransform:e,OTransform:e,transform:e}}},{key:"_slideLeft",value:function(e){this.slideToIndex(this.state.currentIndex-1,e)}},{key:"_slideRight",value:function(e){this.slideToIndex(this.state.currentIndex+1,e)}},{key:"_renderItem",value:function(e){return Object(r.createElement)("figure",{className:"image-gallery-image"},Object(r.createElement)("a",{href:e.original},Object(r.createElement)("img",{src:e.original,alt:e.originalAlt,srcSet:e.srcSet,sizes:e.sizes,onLoad:this.props.onImageLoad,onError:this._handleImageError.bind(this)})),e.description&&Object(r.createElement)("figcaption",{className:"image-gallery-description"},e.description))}},{key:"render",value:function(){var e=this,t=this.state.currentIndex,n=this._getThumbnailStyle(),i=this._slideLeft.bind(this),s=this._slideRight.bind(this),a=[],o=[];return this.props.items.map((function(n,i){var s=e._getAlignmentClassName(i),l=n.originalClass?" ".concat(n.originalClass):"",u=n.thumbnailClass?" ".concat(n.thumbnailClass):"",c=n.renderItem||e.props.renderItem||e._renderItem.bind(e),h=Object(r.createElement)("div",{key:i,className:"image-gallery-slide"+s+l,style:Object.assign(e._getSlideStyle(i),e.state.style),onClick:e.props.onClick},c(n));e.props.lazyLoad?s&&a.push(h):a.push(h),o.push(Object(r.createElement)("button",{type:"button",onMouseOver:e._handleMouseOverThumbnails.bind(e,i),onMouseLeave:e._handleMouseLeaveThumbnails.bind(e,i),key:i,className:"button-link image-gallery-thumbnail"+(t===i?" active":"")+u,onTouchStart:function(t){return e.slideToIndex.call(e,i,t)},onClick:function(t){return e.slideToIndex.call(e,i,t)}},Object(r.createElement)("img",{src:n.thumbnail,alt:n.thumbnailAlt,onError:e._handleImageError.bind(e)}),Object(r.createElement)("div",{className:"image-gallery-thumbnail-label"},n.thumbnailLabel)))})),Object(r.createElement)("section",{ref:function(t){return e._imageGallery=t},className:"image-gallery"},Object(r.createElement)("div",{onMouseOver:this._handleMouseOver.bind(this),onMouseLeave:this._handleMouseLeave.bind(this),className:"image-gallery-content"},this._canNavigate()?[this.props.showNav&&Object(r.createElement)("span",{key:"navigation"},this._canSlideLeft()&&Object(r.createElement)("button",{type:"button",className:"button-link image-gallery-left-nav",onClick:i}),this._canSlideRight()&&Object(r.createElement)("button",{type:"button",className:"button-link image-gallery-right-nav",onClick:s})),Object(r.createElement)("div",{key:this.state.currentIndex,className:"image-gallery-slides"},a)]:Object(r.createElement)("div",{className:"image-gallery-slides"},a),this.props.showIndex&&Object(r.createElement)("div",{className:"image-gallery-index"},Object(r.createElement)("span",{className:"image-gallery-index-current"},this.state.currentIndex+1),Object(r.createElement)("span",{className:"image-gallery-index-separator"},this.props.indexSeparator),Object(r.createElement)("span",{className:"image-gallery-index-total"},this.props.items.length))),Object(r.createElement)("div",{className:"image-gallery-thumbnails",ref:function(t){return e._imageGalleryThumbnail=t}},Object(r.createElement)("div",{ref:function(t){return e._thumbnails=t},className:"image-gallery-thumbnails-container",style:n},o)))}}]),a}(React.Component);g.propTypes={items:p.a.array.isRequired,showNav:p.a.bool,lazyLoad:p.a.bool,infinite:p.a.bool,showIndex:p.a.bool,showThumbnails:p.a.bool,slideOnThumbnailHover:p.a.bool,disableThumbnailScroll:p.a.bool,disableArrowKeys:p.a.bool,defaultImage:p.a.string,indexSeparator:p.a.string,startIndex:p.a.number,slideInterval:p.a.number,onClick:p.a.func,onImageLoad:p.a.func,onImageError:p.a.func,renderItem:p.a.func},g.defaultProps={items:[],showNav:!0,lazyLoad:!1,infinite:!0,showIndex:!1,showThumbnails:!0,slideOnThumbnailHover:!1,disableThumbnailScroll:!1,disableArrowKeys:!1,indexSeparator:" / ",startIndex:0,slideInterval:3e3};var v=function(e){var t=e.screenshots,n=void 0===t?[]:t;if(!n)return null;var i=n.map((function(e){var t=e.caption,n=e.src;return{original:n,originalAlt:"",thumbnail:n,thumbnailAlt:t||"",description:t||!1}}));return Object(r.createElement)("div",{id:"screenshots",className:"plugin-screenshots"},Object(r.createElement)("h2",null,localeData.screenshots),Object(r.createElement)(g,{items:i}))};!function(e){var t=document.getElementById("screenshots");if(t){for(var n=t.querySelectorAll("figure"),i=[],s=0;s<n.length;s++){var a=n[s].querySelector("figcaption"),o={src:n[s].querySelector("img.screenshot").src,caption:a?a.textContent:""};i.push(o)}i.length>0&&Object(r.render)(Object(r.createElement)(v,{screenshots:i}),t)}}()}]);