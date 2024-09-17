import math


# exercicio 01
def bigger_num(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2


print("Função 01:", bigger_num(90, 34))


# exercicio 02
def average(list_of_num):
    list_len = len(list_of_num)
    return sum(list_of_num) / list_len


print("Função 02:", average([1, 2, 3, 4, 5]))


# exercicio 03
def quadradinhos(n):
    counter = 0
    while counter < n:
        print(n * "*")
        counter += 1


quadradinhos(5)


# exercicio 04
def bigger_name(names):
    bigger = ""
    for name in names:
        if len(name) >= len(bigger):
            bigger = name
    return bigger


print(
    "Função 04:", bigger_name(
        ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
)


# exercicio 05
def calculate_paint(area):
    price = 80
    liters = area / 3
    latas = math.ceil(liters / 18)
    return (latas, latas * price)


print("Função 05:", calculate_paint(100))


# exercicio 06
def triangle_type(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3 and side2 + side3 > side1 and
        side1 + side3 > side2
    )
    if not is_triangle:
        return "Não é um triangulo"
    elif side1 == side2 == side3:
        return "Triangulo Equilátero"
    elif side1 == side2 or side2 == side3 or side3 == side1:
        return "Triangulo Isosceles"
    else:
        return "Triangulo Escaleno"


print(triangle_type(20, 20, 20))
