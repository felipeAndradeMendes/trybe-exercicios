try:
    with open("notas_alunos.txt", mode="r") as file:
        data = file.readlines()
except FileNotFoundError:
    print("Arquivo inexistente")
else:
    with open("alunos_reprovados.txt", mode='w') as file:
        reprovados = []
        for student in data:
            name, grade = student.split()
            if int(grade) < 6:
                reprovados.append(name + '\n')
        file.writelines(reprovados)
    print('Arquivo de alunos reprovados gerado com sucesso.')
