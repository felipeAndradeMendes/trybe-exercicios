with open("text_text.txt", "w") as file:
    list_of_names = ["Felipe\n", "Marilda\n", "Alfreda\n"]
    file.writelines(list_of_names)


with open("text_text.txt", "r") as file:
    content = file.read()
    print(content)
