import UIKit

class ViewController: UIViewController{

    @IBOutlet var nomeTextField: UITextField? 
    @IBOutlet var felicidadeTextField: UITextField?

    //objective c
    //crach = quando o app fecha inesperadamente

    @IBAction func adcionar(_ sender: Any){
    let nome       = nomeTextField.text 
    let felicidade = felicidadeTextField?.text
    
        print("comi \(nome) e fiquei com a felicidade: \(felicidade)")
    }


let nome = "churros"
let felicidade: Int = 5
let calorias: Double = 79.5
let vegetal: Bool = false

func alimentoConsumido(){
    print("o alimento consumido foi: \(nome)")
}

alimentoConsumido()
alimentoConsumido()

func alimentoConsumido(nome: String, caloria: Double){
    print("o alimento consumido foi : \(nome),
    com calorias: \(calorias)")
}

//nome do parametro e a sua definição
alimentoConsumido(nome:nome, calorias:calorias)


//ARRAYS E TIPOS DE LAÇO FOR

let caloria1 = 50.5
let caloria2 = 100
let caloria3 = 300
let caloria4 = 500

let totalDeCalorias = [50.5, 100, 300, 500]
print(totalDeCalorias)

//primeira forma de escrever for

for i in 0...3{
    print(i)
    print(totalDeCalorias[i])
}


//segunda forma

for i in 0...totalDeCalorias.count-1{
    print(i)
    print(totalDeCalorias[i])
}


//terceira forma

for caloria in totalDeCalorias{
    print(caloria)
}


///ARRAYS PARA FUNÇÕES DE RETORNO

let totalDeCalorias = [50.5, 100]

//Array<Double>
func todasCalorias(totalDeCalorias: [Double]) -> Double {

    var total: Double = 0

    for caloria in totalDeCalorias{
        total += caloria
    }

    return total

}

let total = todasCalorias(totalDeCalorias:[50.5,100,400])

print(total)


//Classes, instancias, objetos e propriedades


let       nome: String = " Macarrão "
let felicidade: String = "5"

 class Refeicao{

     let       nome: String = "Macarrao"
     let felicidade: String = "5"


 }


let refeicao = Refeicao()
// ou let refeicao: Refeicao = Refeicao()

print(refeicao.nome)



class refeicao2 {
    var        nome: String? 
    var felicißdade: String?
}

let refeicao2 = Refeicao2()
refeicao2.nome = "Macarrao"

// => Foced unwrap

if refeicao2.nome != nil {
    print(refeicao2.nome!)
}

//Boas praticas para extrair valores opcionais

if let nome = refeicao2.nome {
    print(nome)
}

//guard let

func exibeNomeDaRefeicao(){
    if let nome = refeicao2.nome {
        print(nome)
    }

    guard let nome = refeicao2.nome else { 
        // 
        return 
     }

     print(nome)

}

exibeNomeDaRefeicao()


//Metodos que retornam opcionais

let numero = Int("5")

if let n = numero{
    print(n)
}else{
    print("error ao converter string para int")
}
  
}


guard let nome = refeicao2.nome else {
    //alguma coisa aqui
    return
}



print(nome)

