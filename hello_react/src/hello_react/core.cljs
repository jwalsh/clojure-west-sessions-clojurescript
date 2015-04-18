(ns hello-react.core
  (:require cljsjs.react
            [goog.dom :as gdom]))(ns hello-react.core
  (:require cljsjs.react
            [goog.dom :as gdom]
            [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(deftype HelloComponent [props]
  Object
  (render [this]
    (js/React.DOM.div nil "Hello, React!")))

(def hello (js/React.createFactory HelloComponent))

(js/React.render (hello) (gdom/getElement "app"))
