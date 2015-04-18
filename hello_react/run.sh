#/bin/sh

# rlwrap java -cp ~/bin/cljs.jar:src clojure.main script/repl.clj

java -cp ~/bin/cljs.jar:lib/react-0.13.1-0.jar:src clojure.main script/repl.clj
