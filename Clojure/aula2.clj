
Exercicios

(defn valor-descontado
"Retorna o valor com desconto de 10% se o valor bruto for estritamente maior que 100."
[valor-bruto]
(if ( > valor-bruto 100))
    (let [taxa-de-desconto (/ 10 100)
        desconto         (* valor-bruto taxa-de-desconto)]
    (println "Calculando desconto de " desconto)
    (* valor-bruto (-1 desconto))
    (valor-bruto)))
(valor-descontado 100)


(if nil "verdadeiro" "falso")
->"falso"


Condicionais

(> 500 100)
(< 500 100)

(if (> 500 100) 
    (println "maior")
    (println "menor ou igual"))