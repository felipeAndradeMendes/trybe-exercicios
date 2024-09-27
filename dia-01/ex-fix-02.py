class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Secador(Eletrodomestico):
    def __init__(self, cor, potencia=1500, tensao=220, preco=100):
        super().__init__(cor, potencia, tensao, preco)

    def __str__(self):
        return f"""
                Cor: {self.cor}
                Potencia: {self._potencia}
                Voltagem: {self._tensao}
                Preço: {self.preco}
                """


class Batedeira(Eletrodomestico):
    pass


class Maquina_de_Lavar(Eletrodomestico):
    pass


secador1 = Secador("vermelho")
print(secador1)


"""
No exemplo dado, a classe Secador herda da classe Eletrodomestico.
Quando você cria uma instância da classe Secador, o construtor __init__ da
classe Secador é chamado.
No entanto, você quer que o construtor da classe pai Eletrodomestico também
seja chamado para inicializar os atributos da classe pai.

É aqui que entra o super().
O super() permite que você chame um método da classe pai.
No caso do construtor, você pode usar super().__init__() para chamar o
construtor da classe pai e
passar os argumentos necessários para inicializar os atributos da classe pai.
"""
