#!/bin/sh

rlwrap java -cp ~/bin/cljs.jar:src clojure.main script/watch.clj
