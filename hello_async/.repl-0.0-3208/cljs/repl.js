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
var seq__5440_5452 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5441_5453 = null;
var count__5442_5454 = (0);
var i__5443_5455 = (0);
while(true){
if((i__5443_5455 < count__5442_5454)){
var f_5456 = cljs.core._nth.call(null,chunk__5441_5453,i__5443_5455);
cljs.core.println.call(null,"  ",f_5456);

var G__5457 = seq__5440_5452;
var G__5458 = chunk__5441_5453;
var G__5459 = count__5442_5454;
var G__5460 = (i__5443_5455 + (1));
seq__5440_5452 = G__5457;
chunk__5441_5453 = G__5458;
count__5442_5454 = G__5459;
i__5443_5455 = G__5460;
continue;
} else {
var temp__4404__auto___5461 = cljs.core.seq.call(null,seq__5440_5452);
if(temp__4404__auto___5461){
var seq__5440_5462__$1 = temp__4404__auto___5461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5440_5462__$1)){
var c__3679__auto___5463 = cljs.core.chunk_first.call(null,seq__5440_5462__$1);
var G__5464 = cljs.core.chunk_rest.call(null,seq__5440_5462__$1);
var G__5465 = c__3679__auto___5463;
var G__5466 = cljs.core.count.call(null,c__3679__auto___5463);
var G__5467 = (0);
seq__5440_5452 = G__5464;
chunk__5441_5453 = G__5465;
count__5442_5454 = G__5466;
i__5443_5455 = G__5467;
continue;
} else {
var f_5468 = cljs.core.first.call(null,seq__5440_5462__$1);
cljs.core.println.call(null,"  ",f_5468);

var G__5469 = cljs.core.next.call(null,seq__5440_5462__$1);
var G__5470 = null;
var G__5471 = (0);
var G__5472 = (0);
seq__5440_5452 = G__5469;
chunk__5441_5453 = G__5470;
count__5442_5454 = G__5471;
i__5443_5455 = G__5472;
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
var seq__5444 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5445 = null;
var count__5446 = (0);
var i__5447 = (0);
while(true){
if((i__5447 < count__5446)){
var vec__5448 = cljs.core._nth.call(null,chunk__5445,i__5447);
var name = cljs.core.nth.call(null,vec__5448,(0),null);
var map__5449 = cljs.core.nth.call(null,vec__5448,(1),null);
var map__5449__$1 = ((cljs.core.seq_QMARK_.call(null,map__5449))?cljs.core.apply.call(null,cljs.core.hash_map,map__5449):map__5449);
var doc = cljs.core.get.call(null,map__5449__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__5449__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__5473 = seq__5444;
var G__5474 = chunk__5445;
var G__5475 = count__5446;
var G__5476 = (i__5447 + (1));
seq__5444 = G__5473;
chunk__5445 = G__5474;
count__5446 = G__5475;
i__5447 = G__5476;
continue;
} else {
var temp__4404__auto__ = cljs.core.seq.call(null,seq__5444);
if(temp__4404__auto__){
var seq__5444__$1 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5444__$1)){
var c__3679__auto__ = cljs.core.chunk_first.call(null,seq__5444__$1);
var G__5477 = cljs.core.chunk_rest.call(null,seq__5444__$1);
var G__5478 = c__3679__auto__;
var G__5479 = cljs.core.count.call(null,c__3679__auto__);
var G__5480 = (0);
seq__5444 = G__5477;
chunk__5445 = G__5478;
count__5446 = G__5479;
i__5447 = G__5480;
continue;
} else {
var vec__5450 = cljs.core.first.call(null,seq__5444__$1);
var name = cljs.core.nth.call(null,vec__5450,(0),null);
var map__5451 = cljs.core.nth.call(null,vec__5450,(1),null);
var map__5451__$1 = ((cljs.core.seq_QMARK_.call(null,map__5451))?cljs.core.apply.call(null,cljs.core.hash_map,map__5451):map__5451);
var doc = cljs.core.get.call(null,map__5451__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__5451__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__5481 = cljs.core.next.call(null,seq__5444__$1);
var G__5482 = null;
var G__5483 = (0);
var G__5484 = (0);
seq__5444 = G__5481;
chunk__5445 = G__5482;
count__5446 = G__5483;
i__5447 = G__5484;
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
