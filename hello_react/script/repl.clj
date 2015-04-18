(require '[cljs.build.api :as b])
(require '[cljs.repl :as repl])
(require '[cljs.repl.browser :as browser])

(b/build "src"
  {:main 'hello-react.core
   :asset-path "out"
   :output-to "resources/public/out/main.js"
   :output-dir "resources/public/out"
   :verbose true})

(repl/repl*
  (browser/repl-env*
    {:static-dir ["resources/public" "resources/public/out"]})
  {:output-dir "resources/public/out"})
