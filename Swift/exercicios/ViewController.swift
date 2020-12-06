import UIKit

class ViewController: UIViewController{

    @IBOutlet var nomeTextField: UITextField! 
    @IBOutlet var felicidadeTextField: UITextField!

    //objective c
    //crach = quando o app fecha inesperadamente

    @IBAction func adcionar(_ sender: Any){
    let nome       = nomeTextField.text 
    let felicidade = felicidadeTextField.text
    
        print("comi \(nome) e fiquei com a felicidade: \(felicidade)")
    }

}