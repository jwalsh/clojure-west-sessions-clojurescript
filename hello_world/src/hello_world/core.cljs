(ns hello-world.core)

(. js/console (log "Hello World! 1"))

(.log js/console "Hello World! 2")

(js/console.log "Hello World! 3")

(enable-console-print!)

(println "Hello World! 4")

(def hello "Hello")
(def bigv (into [] (range 1e6)))

(defn say-message [xs]
  (js/console.log (first xs)))

(say-message ["Hello World! 5"])
(say-message [hello])
(say-message bigv)
(say-message [bigv])

(time
 (dotimes [_ 10]
   (js/console.log _)
   (time (doall (map #(js/Math.pow % %) bigv)))))

(set! (.-title js/document) "New Page Title")
