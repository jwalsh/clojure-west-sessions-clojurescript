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
var seq__70_82 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__71_83 = null;
var count__72_84 = (0);
var i__73_85 = (0);
while(true){
if((i__73_85 < count__72_84)){
var f_86 = cljs.core._nth.call(null,chunk__71_83,i__73_85);
cljs.core.println.call(null,"  ",f_86);

var G__87 = seq__70_82;
var G__88 = chunk__71_83;
var G__89 = count__72_84;
var G__90 = (i__73_85 + (1));
seq__70_82 = G__87;
chunk__71_83 = G__88;
count__72_84 = G__89;
i__73_85 = G__90;
continue;
} else {
var temp__4404__auto___91 = cljs.core.seq.call(null,seq__70_82);
if(temp__4404__auto___91){
var seq__70_92__$1 = temp__4404__auto___91;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70_92__$1)){
var c__3679__auto___93 = cljs.core.chunk_first.call(null,seq__70_92__$1);
var G__94 = cljs.core.chunk_rest.call(null,seq__70_92__$1);
var G__95 = c__3679__auto___93;
var G__96 = cljs.core.count.call(null,c__3679__auto___93);
var G__97 = (0);
seq__70_82 = G__94;
chunk__71_83 = G__95;
count__72_84 = G__96;
i__73_85 = G__97;
continue;
} else {
var f_98 = cljs.core.first.call(null,seq__70_92__$1);
cljs.core.println.call(null,"  ",f_98);

var G__99 = cljs.core.next.call(null,seq__70_92__$1);
var G__100 = null;
var G__101 = (0);
var G__102 = (0);
seq__70_82 = G__99;
chunk__71_83 = G__100;
count__72_84 = G__101;
i__73_85 = G__102;
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
var seq__74 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75 = null;
var count__76 = (0);
var i__77 = (0);
while(true){
if((i__77 < count__76)){
var vec__78 = cljs.core._nth.call(null,chunk__75,i__77);
var name = cljs.core.nth.call(null,vec__78,(0),null);
var map__79 = cljs.core.nth.call(null,vec__78,(1),null);
var map__79__$1 = ((cljs.core.seq_QMARK_.call(null,map__79))?cljs.core.apply.call(null,cljs.core.hash_map,map__79):map__79);
var doc = cljs.core.get.call(null,map__79__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__79__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__103 = seq__74;
var G__104 = chunk__75;
var G__105 = count__76;
var G__106 = (i__77 + (1));
seq__74 = G__103;
chunk__75 = G__104;
count__76 = G__105;
i__77 = G__106;
continue;
} else {
var temp__4404__auto__ = cljs.core.seq.call(null,seq__74);
if(temp__4404__auto__){
var seq__74__$1 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74__$1)){
var c__3679__auto__ = cljs.core.chunk_first.call(null,seq__74__$1);
var G__107 = cljs.core.chunk_rest.call(null,seq__74__$1);
var G__108 = c__3679__auto__;
var G__109 = cljs.core.count.call(null,c__3679__auto__);
var G__110 = (0);
seq__74 = G__107;
chunk__75 = G__108;
count__76 = G__109;
i__77 = G__110;
continue;
} else {
var vec__80 = cljs.core.first.call(null,seq__74__$1);
var name = cljs.core.nth.call(null,vec__80,(0),null);
var map__81 = cljs.core.nth.call(null,vec__80,(1),null);
var map__81__$1 = ((cljs.core.seq_QMARK_.call(null,map__81))?cljs.core.apply.call(null,cljs.core.hash_map,map__81):map__81);
var doc = cljs.core.get.call(null,map__81__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__81__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__111 = cljs.core.next.call(null,seq__74__$1);
var G__112 = null;
var G__113 = (0);
var G__114 = (0);
seq__74 = G__111;
chunk__75 = G__112;
count__76 = G__113;
i__77 = G__114;
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