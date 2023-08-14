import random

# ex-01
# name = input("Escreva seu nome para invertermos:")
# while len(name) > 0:
#     name_listed = list(name)
#     name_listed.pop(-1)
#     # joiner = ""
#     print(name)
#     name = ("").join(name_listed)


# ex 02
list_of_words = ["jurubeba", "jamilson", "roebson", "girafales"]


def guess_the_word():
    print("entrei na função")
    random_word = random.choice(list_of_words)
    scrambled_word = "".join(random.sample(random_word, len(random_word)))
    print(scrambled_word)

    chances = 3
    while chances > 0:
        guessed_word = input(
            f"Tente adivinhar a palavra. Vc tem {chances} chances. Vai:"
        )
        if guessed_word == random_word:
            return print("Vc acertou! A palavra"
                         f" correta é mesmo {random_word}")
            break
        else:
            chances -= 1

    return print(f"acabaram suas chances... a palavra correta é {random_word}")


guess_the_word()

# ex 03
# não iniciei ainda o exercicio
