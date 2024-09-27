from abc import ABC, abstractclassmethod


class FiguraGeometrica(ABC):
    @abstractclassmethod
    def area(self):
        raise NotImplementedError("Essa classe é abstrata")

    @abstractclassmethod
    def perimetro(self):
        raise NotImplementedError("Essa classe é abstrata")


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * 2

    def perimetro(self):
        return self.lado * 4


class retangulo(FiguraGeometrica):
    def __init_(self, base, altura):
        self.base = base
        self.altura = altura

    # FALTA IMPLEMENTAR AS FUNÇÕES E CLASSES DO EX 03


quad = Quadrado(20)
print("LADO:", quad.lado)
print("AREA:", quad.area())
print("PERIMETRO:", quad.perimetro())
