(require '[cljs.build.api :as b])
(require 'cljs.repl)
(require 'cljs.closure)
(require 'cljs.repl.browser)

(b/watch "src"
         {
          :main 'hello-world.core
          :asset-path "out"
          :output-to "resources/public/out/main.js"
          :output-dir "resources/public/out"
          :verbose true
          })

(cljs.repl/repl (cljs.repl.browser/repl-env)
  :watch "src"
  :output-dir "out")
