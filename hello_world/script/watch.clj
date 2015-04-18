(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'hello-world.core
   :asset-path "out"
   :output-to "resources/public/out/main.js"
   :output-dir "resources/public/out"
   :verbose true})
