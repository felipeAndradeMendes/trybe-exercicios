def calculate_presence(entradas, saidas, horario):
    count = 0
    # index = 0
    for index in range(len(entradas)):
        if horario in range(entradas[index], saidas[index]):
            count += 1

    return count


entradas = [1, 1, 3]
saidas = [3, 2, 7]
instante_buscado = 2

print(calculate_presence(entradas, saidas, instante_buscado))
