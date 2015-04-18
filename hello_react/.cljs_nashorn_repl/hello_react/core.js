// Compiled by ClojureScript 0.0-3208 {}
goog.provide('hello_react.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('goog.dom');
goog.provide('hello_react.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('goog.dom');
goog.require('clojure.browser.repl');
if(typeof hello_react.core.conn !== 'undefined'){
} else {
hello_react.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}

/**
* @constructor
*/
hello_react.core.HelloComponent = (function (props){
this.props = props;
})
hello_react.core.HelloComponent.prototype.render = (function (){
var self__ = this;
var this$ = this;
return React.DOM.div(null,"Hello, React!");
});

hello_react.core.HelloComponent.cljs$lang$type = true;

hello_react.core.HelloComponent.cljs$lang$ctorStr = "hello-react.core/HelloComponent";

hello_react.core.HelloComponent.cljs$lang$ctorPrWriter = (function (this__3525__auto__,writer__3526__auto__,opt__3527__auto__){
return cljs.core._write.call(null,writer__3526__auto__,"hello-react.core/HelloComponent");
});

hello_react.core.__GT_HelloComponent = (function hello_react$core$__GT_HelloComponent(props){
return (new hello_react.core.HelloComponent(props));
});

hello_react.core.hello = React.createFactory(hello_react.core.HelloComponent);
React.render(hello_react.core.hello.call(null),goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map