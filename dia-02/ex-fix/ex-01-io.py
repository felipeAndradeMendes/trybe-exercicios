# ex 01
# Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na
# vertical.
person_name = input("Insira seu nome: ")

for letter in person_name:
    print(letter.upper())


# ex 02
# Escreva um programa que receba vários números naturais e
# calcule a soma desses valores.
# Caso algum valor da entrada seja inválido (por exemplo uma letra), uma
# mensagem deve ser
# exibida na saída de erros no seguinte formato: “Erro ao somar valores,
# {valor} é um valor inválido”.
# Ao final, você deve imprimir a soma dos valores válidos.
# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária que
# separe-os com um espaço.
# Receba os valores no formato str e utilize o método split para pegar cada
# valor separado.
# O método isdigit, embutido no tipo str, pode ser utilizado para verificar se
# a string corresponde a um número natural.

# import sys

# err = "Arquivo não encontrado"
# print(f"Erro aconteceu: {err}", file=sys.stderr)

# Utilizei mewtodo de quebra de linha abaixo para ficar
# com menos de 79 caracteres.
numbers_input = input("Escreva numeros positivos e inteiros"
                      " separados por espaço:")
numbers_list = numbers_input.split(" ")

sum = 0
for number in numbers_list:
    if not number.isdigit():
        print(f"Erro ao somar valores, {number} é um valor invalido")
        # err = "Erro ao somar valores, {number} é um valor invalido"
    else:
        sum += int(number)
print(f"A soma dos valores válidos é: {sum}")
