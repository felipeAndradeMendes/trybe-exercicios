# ex 01
"""
Em um software monitor, o qual verifica a resiliência de outro software,
precisamos saber o tempo máximo que um software permaneceu sem instabilidades.
Para isto, a cada hora é feito uma requisição ao sistema
para verificamos se está tudo bem.
Supondo um array que contenha os estados coletados por nosso software,
calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.
"""


valores_coletados_1 = [0, 1, 1, 1, 0, 0, 1, 1]  # 3
valores_coletados_2 = [1, 1, 1, 1, 0, 0, 1, 1]  # 4


def max_stability(collected_values):
    max_period = 0
    curr_period = 0
    for data in collected_values:
        if data == 1:
            # max_period += 1
            curr_period += 1
        else:
            if curr_period > max_period:
                max_period = curr_period
                curr_period = 0
    return max_period


print(max_stability(valores_coletados_1))
print(max_stability(valores_coletados_2))


def verify_max_time_ok(collected_values):
    max_time = 0
    current_time = 0
    for value in collected_values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time
    return max_time


print(max_stability(valores_coletados_1))
print(verify_max_time_ok(valores_coletados_2))
