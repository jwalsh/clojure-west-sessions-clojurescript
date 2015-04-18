(ns hello-world.core)

(. js/console (log "Hello World! 1"))

(.log js/console "Hello World! 2")

(js/console.log "Hello World! 3")

(enable-console-print!)

(println "Hello World! 4")
