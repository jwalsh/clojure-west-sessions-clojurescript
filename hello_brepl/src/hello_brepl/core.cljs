(ns hello-brepl.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(defun foo [a b]
   (+ a b))
