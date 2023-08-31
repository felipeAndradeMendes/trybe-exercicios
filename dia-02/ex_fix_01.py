class Conjunto:
    def __init__(self):
        self.set = [False] * 1001

    def add_item(self, new_item):
        if new_item <= 1000:
            self.set[new_item] = True

    def __str__(self):
        string = "{"
        for i in range(len(self.set)):
            if self.set[i]:
                string += str(i) + ", "
        string = string[:-2:]
        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def union(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjunto_b.set[index]:
                new_conjunto.add_item(index)
        return new_conjunto

    def intersection(self, conjunto_b):
        new_conjunto = Conjunto()
        for index in range(1001):
            if self.set[index] and conjunto_b.set[index]:
                new_conjunto.add_item(index)
        return new_conjunto

    def difference(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                new_conjunto.add_item(index)
        return new_conjunto

    def issubset(self, conjunto_b):
        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                return False
        return True

    def issuperset(self, conjunto_b):
        for index in range(1001):
            if conjunto_b.set[index] and not self.set[index]:
                return False
        return True


if __name__ == "__main__":
    obj1 = Conjunto()
    lista1 = [0, 10, 100, 1000]

    for item in lista1:
        obj1.add_item(item)


# print(obj1.__str__())
# print(obj1.__contains__(100))
conj1 = Conjunto()
for i in range(1, 11):
    conj1.add_item(i)

conj2 = Conjunto()
for i in range(10, 21):
    conj2.add_item(i)

conj3 = conj1.intersection(conj2)
# print(conj3)

# ex 07
estudantes = [1, 2, 3, 4, 5, 6, 7]
lista1_entregues = [1, 4, 7, 3]
lista2_entregues = [3, 1, 6]

conj_students = Conjunto()
conj_lista1 = Conjunto()
conj_lista2 = Conjunto()

for student in lista1_entregues:
    conj_lista1.add_item(student)

for student in lista2_entregues:
    conj_lista2.add_item(student)

for student in estudantes:
    conj_students.add_item(student)

# print(conj_lista1)
# print(conj_lista2)
# print(conj_students)

falta_lista1 = conj_students.difference(conj_lista1)
entregue_duas_listas = conj_lista1.intersection(conj_lista2)
# entregue_qqr_lista = conj_students.intersection(entregue_duas_listas)
# falta_lista2 = conj_students.difference(conj_lista2)

print("Quem já entregou pelo menos uma lista:", conj_lista1.union(conj_lista2))
print("Quem não entregou nenhuma:", conj_students.difference(conj_lista1.union(conj_lista2)))

# 1
print(falta_lista1)

# 2
print(entregue_duas_listas)

# 3
# print(entregue_qqr_lista)

# 4
# print(conj_students.difference(falta_lista1.union(falta_lista2)))
