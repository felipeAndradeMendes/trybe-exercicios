# Abaixo uma solução para saber quantasrepetições tem, mais ou menos.
# # nao acabei a implementação, por nao se tratar do que o exercicio pede
# fui por um caminho de tentar diminuir a complexidade para O(n),
# mas sem sucesso

# def pares(lista):
#     counter = {}

#     for num in lista:
#         if num in counter:
#             counter[num] += 1
#         else:
#             counter[num] = 1

#     answer = sum(value - 1 for value in counter.values() if value > 1)

#     return answer, counter


# produtos1 = [1, 3, 1, 1, 2, 3]
# produtos2 = [1, 1, 2, 3]
# print(pares(produtos1))


# abaixo a resolução do course
def good_pairs(numbers):
    answer = 0
    i = 0
    size = len(numbers)
    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                answer += 1
    return answer
