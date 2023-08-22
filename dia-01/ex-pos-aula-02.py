from math import ceil


class Estatistica:
    def __init__(self, numbers: []):
        self.numbers = numbers

    def media(self):
        return sum(self.numbers) / len(self.numbers)

    def mediana(self):
        numbers_sorted = sorted(self.numbers)
        numbers_length = len(self.numbers)
        # print("NUMBERS LENGTH:", numbers_length)

        if numbers_length % 2 != 0:
            return numbers_sorted[ceil(numbers_length / 2)]
        else:
            first_pos_index = int((numbers_length / 2) - 1)
            # print("FIRST INDEX", first_pos_index)
            second_pos_index = int(numbers_length / 2)
            # print("SECOND INDEX", second_pos_index)
            # print('NUM FIRST POS: ', numbers_sorted[first_pos_index])
            # print('NUM sECOND POS: ', numbers_sorted[second_pos_index])

            result = (
                (numbers_sorted[first_pos_index] + numbers_sorted[second_pos_index]) / 2
            )
            return result
        

    def moda(self):
        '''FALTA IMPLEMENTAR'''
        pass


numbers = [1, 10, 20, 20]
estatist = Estatistica(numbers)
print(estatist.media())
print(estatist.mediana())
