// Compiled by ClojureScript 0.0-3208 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4404__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4404__auto__)){
var ns = temp__4404__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5540_5552 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5541_5553 = null;
var count__5542_5554 = (0);
var i__5543_5555 = (0);
while(true){
if((i__5543_5555 < count__5542_5554)){
var f_5556 = cljs.core._nth.call(null,chunk__5541_5553,i__5543_5555);
cljs.core.println.call(null,"  ",f_5556);

var G__5557 = seq__5540_5552;
var G__5558 = chunk__5541_5553;
var G__5559 = count__5542_5554;
var G__5560 = (i__5543_5555 + (1));
seq__5540_5552 = G__5557;
chunk__5541_5553 = G__5558;
count__5542_5554 = G__5559;
i__5543_5555 = G__5560;
continue;
} else {
var temp__4404__auto___5561 = cljs.core.seq.call(null,seq__5540_5552);
if(temp__4404__auto___5561){
var seq__5540_5562__$1 = temp__4404__auto___5561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5540_5562__$1)){
var c__3679__auto___5563 = cljs.core.chunk_first.call(null,seq__5540_5562__$1);
var G__5564 = cljs.core.chunk_rest.call(null,seq__5540_5562__$1);
var G__5565 = c__3679__auto___5563;
var G__5566 = cljs.core.count.call(null,c__3679__auto___5563);
var G__5567 = (0);
seq__5540_5552 = G__5564;
chunk__5541_5553 = G__5565;
count__5542_5554 = G__5566;
i__5543_5555 = G__5567;
continue;
} else {
var f_5568 = cljs.core.first.call(null,seq__5540_5562__$1);
cljs.core.println.call(null,"  ",f_5568);

var G__5569 = cljs.core.next.call(null,seq__5540_5562__$1);
var G__5570 = null;
var G__5571 = (0);
var G__5572 = (0);
seq__5540_5552 = G__5569;
chunk__5541_5553 = G__5570;
count__5542_5554 = G__5571;
i__5543_5555 = G__5572;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__3310__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3310__auto__)){
return or__3310__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5544 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5545 = null;
var count__5546 = (0);
var i__5547 = (0);
while(true){
if((i__5547 < count__5546)){
var vec__5548 = cljs.core._nth.call(null,chunk__5545,i__5547);
var name = cljs.core.nth.call(null,vec__5548,(0),null);
var map__5549 = cljs.core.nth.call(null,vec__5548,(1),null);
var map__5549__$1 = ((cljs.core.seq_QMARK_.call(null,map__5549))?cljs.core.apply.call(null,cljs.core.hash_map,map__5549):map__5549);
var doc = cljs.core.get.call(null,map__5549__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__5549__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__5573 = seq__5544;
var G__5574 = chunk__5545;
var G__5575 = count__5546;
var G__5576 = (i__5547 + (1));
seq__5544 = G__5573;
chunk__5545 = G__5574;
count__5546 = G__5575;
i__5547 = G__5576;
continue;
} else {
var temp__4404__auto__ = cljs.core.seq.call(null,seq__5544);
if(temp__4404__auto__){
var seq__5544__$1 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5544__$1)){
var c__3679__auto__ = cljs.core.chunk_first.call(null,seq__5544__$1);
var G__5577 = cljs.core.chunk_rest.call(null,seq__5544__$1);
var G__5578 = c__3679__auto__;
var G__5579 = cljs.core.count.call(null,c__3679__auto__);
var G__5580 = (0);
seq__5544 = G__5577;
chunk__5545 = G__5578;
count__5546 = G__5579;
i__5547 = G__5580;
continue;
} else {
var vec__5550 = cljs.core.first.call(null,seq__5544__$1);
var name = cljs.core.nth.call(null,vec__5550,(0),null);
var map__5551 = cljs.core.nth.call(null,vec__5550,(1),null);
var map__5551__$1 = ((cljs.core.seq_QMARK_.call(null,map__5551))?cljs.core.apply.call(null,cljs.core.hash_map,map__5551):map__5551);
var doc = cljs.core.get.call(null,map__5551__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__5551__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__5581 = cljs.core.next.call(null,seq__5544__$1);
var G__5582 = null;
var G__5583 = (0);
var G__5584 = (0);
seq__5544 = G__5581;
chunk__5545 = G__5582;
count__5546 = G__5583;
i__5547 = G__5584;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map