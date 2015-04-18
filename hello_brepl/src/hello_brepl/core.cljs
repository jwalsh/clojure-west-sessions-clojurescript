(ns hello-brepl.core
  (:require [clojure.browser.repl :as repl]))

(defn foo [a b]
  (+ a b))

(js/console.log (foo 5 6))

;; (reader "[1 2 3 4 5]")

(defmacro foo [a b]
  `(+ ~a ~b))


(defonce conn
  (repl/connect "http://localhost:9000/repl"))
