# dia 02 aba Lidando com exceções
# ex 01
# opção 01
try:
    with open("notas_alunos.txt", "r") as file:
        content = file.readlines()
        alunos_reprovados = []
        for line in content:
            if int(line.split()[1]) < 6:
                alunos_reprovados.append(line.split()[0] + '\n')
        print(alunos_reprovados)
        with open('alunos_reprovados.txt', 'w') as file:
            file.writelines(alunos_reprovados)
except FileNotFoundError:
    print("Arquivo não encontrado")
else:
    print('Lista de reprovados gerada com sucesso')
finally:
    print('Procedimento encerrado')


# opção 02
try:
    with open("notas_alunos.txt", "r") as notas_file:
        content = notas_file.readlines()
        alunos_reprovados = []
        for line in content:
            nota = line.split()[1]
            nome = line.split()[0]
            if int(nota) < 6:
                alunos_reprovados.append(nome + "\n")
        print("ALUNOS REPROVADOS", alunos_reprovados)
    with open("alunos_reprovados.txt", "w") as reprovados_file:
        reprovados_file.writelines(alunos_reprovados)
except FileNotFoundError:
    print("Arquivo não encontrado")
else:
    print("Lista de reprovados gerada com sucesso")
finally:
    print("Procedimento encerrado")
