class Tv:
    def __init__(self, tamanho, volume=50, canal=1, ligada=False):
        self.__tamanho = tamanho
        self.__volume = volume
        self.__canal = canal
        self.__ligada = ligada

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, new_channel):
        if new_channel < 1 or new_channel > 99:
            raise ValueError("O canal deve estar entre 1 e 99")

        self.__canal = new_channel
        # print(self.__canal)

    def ligar_desligar(self):
        self.__ligada = not self.__ligada


tv1 = Tv(42)
tv1.volume = 98
tv1.aumentar_volume()
print(tv1.volume)
tv1.aumentar_volume()
tv1.modificar_canal(10)
# print(tv1.canal)


# def test_volume(volume):
#     if not (1 <= volume <= 99):
#         return print("esta fora do esperado")
#     else:
#         return print('Tudo ok')


# volume = 0
# test_volume(volume)
