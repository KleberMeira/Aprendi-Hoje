defmodule  Inmana.Welcomer do

# Receber um nome e uma idade do usuario
# Se usuario chamar banana e tiver idade "42", mensagem especial
# Se usuario for maior de idade, ele recebe mensagem normal
# Se o usuario for menor de idade, retornar erro
# Temos que tratatr um nome de usuario para entradas erradas, como "BaNaNa", "BaNanA  \n"


  def welcome(%{"name"=> name, "age" => age}) do

    age = String.to_integer(age)

    #pipe operator
    name
    |> String.trim()
    |> String.downcase()
    |>evaluate(age)
  end

  #Pattern Matching

  defp evaluate("banana", 42)  do
    {:ok, "You are very special banana"}
  end

  defp evaluate(name, age) when age >= 18 do
    {:ok, "Welcome #{name}"}
  end

  defp evaluate(name, _age) do
    {:error, "You shall not pass #{name}"}
  end

end
