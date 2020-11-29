var str = "ola,"
str += "mundo"

// Encerramentos
func a (encerramento a : () -> Int) -> Int {
    return a()
}