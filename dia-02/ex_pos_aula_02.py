# ex 02
"""
Em um jogo de baralho, as cartas estão representadas por um array numérico.
Para iniciar o jogo, devemos embaralhar as cartas.
Faremos isto dividindo uma porção de cartas em 2 e
depois mesclando as duas porções. Por exemplo:
"""


# ex 2 - Complexidade de tempo O(n)
def embaralha_cartas(cartas):
    middle = 0
    new_deck = []
    curr = 0

    if len(cartas) % 2 == 0:
        middle = len(cartas) // 2
    else:
        middle = len(cartas) // 2

    while curr < middle:
        new_deck.append(cartas[curr])
        new_deck.append(cartas[middle + curr])
        curr += 1

    return new_deck


# resposta do gabarito
"""
Notar que o extend usado na função abaixo é equivalente ao spread
operator no JS.
No caso, a cada passada do for, forma-se um novo array
com os valores das posições equivalentes ao meio do array
( 0 e 1, por exemplo) e esses valroes sao 'spredeados'
no new_deck. Na proxima passada o nvo array com dois valores
passara pelo mesmo processo
"""


def embaralha_cartas2(cartas):
    new_deck = []
    middle = len(cartas) // 2

    for offset in range(middle):
        new_deck.extend(cartas[offset::middle])

    return new_deck


cartas1 = [2, 6, 4, 5]
cartas2 = [1, 4, 4, 7, 6, 6]
# cartas3 = [2, 5, 6, 10, 43]

print(embaralha_cartas2(cartas1))

""" Soluçãoa baixo comecei a desenvolver, mas decidir
ir por outro caminho"""
# first_deck = []
# second_deck = []

# for index in range(len(cartas)):
#     if index <= middle:
#         first_deck.append(cartas[index])
#     else:
#         second_deck.append(cartas[index])

# new_deck = []
# [new for card in first_deck]

# return first_deck, second_deck
