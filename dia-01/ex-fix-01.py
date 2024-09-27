class Ventilador:
    @property
    def cor(self):
        return self._cor

    @property
    def voltagem(self):
        return self._voltagem

    @property
    def preco(self):
        return self._preco

    @cor.setter
    def cor(self, nova_cor):
        self._cor = nova_cor

    @voltagem.setter
    def voltagem(self, nova_voltagem):
        self._voltagem = nova_voltagem

    @preco.setter
    def preco(self, novo_preco):
        self._preco = novo_preco

    def __init__(self, cor, voltagem, preco):
        self._cor = cor
        self._voltagem = voltagem
        self._preco = preco

    def __str__(self):
        return f"""
        VENTILADOR
                Cor: {self.cor}
                Voltagem: {self.voltagem}
                Preço: {self.preco}
                """


class Pessoa:
    @property
    def saldo(self):
        return self.__saldo

    def __init__(self, nome, idade, saldo):
        self.nome = nome
        self.idade = idade
        self.__saldo = saldo
        self._has_ventilador = None

    def comprar_ventilador(self, ventilador):
        if self.__saldo < ventilador.preco:
            raise ValueError(
                f"""
            Saldo insuficiente para comprar esse ventilador.
            Faltam {ventilador.preco - self.__saldo}"""
            )

        self.__saldo -= ventilador.preco
        self._has_ventilador = True
        return "Ventilador comprado!"

    def __str__(self):
        return f"""
        PESSOA
                Nome: {self.nome}
                Idade: {self.idade}
                Possui ventilador: {self._has_ventilador}
                """


pessoa = Pessoa("Felipe", 38, 1000)
# print(pessoa)

vent1 = Ventilador("branco", "220V", 120)
# print(vent1)

print(pessoa.saldo)

print(pessoa.comprar_ventilador(vent1))
print(pessoa._has_ventilador)
print(pessoa.saldo)
print(pessoa)
