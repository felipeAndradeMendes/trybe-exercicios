_Unix & Shell- Part 2_
EXERCÍCIOS

##### COMANDOS DE INPUT E OUTPUT

1- mkdir unix_tests_skills.txt
2- cat > skills2.txt # escreve as coisas # ctrl + d
3- cat >> skills2.txt # adicona os itens # ctrl + d # sort < skills2.txt
4- wc -l skills2.txt
5- cat skills2.txt | sort | head -n 3 | cat > top_skills.txt
6- cat > phrases2.txt # adiciona frases
7- grep br phrases2.txt
8- grep -v br phrases2.txt
9- cat >> phrases2.txt # escreve os dois nomes # ctrl + d
9.2- criei o arquivo countries.txt
10- cat contries.txt phrases2.txt | cat > bunch_of_things.txt
11- sort -o bunch_of_things.txt bunch_of_things.txt

##### PERMISSOES

1- ps
2- sleep 30 &
3- ps # kill %1
4- sleep 30 # crtl + z (para pausar) # bg %1 (numero do processo na lista)
5- sleep 300 &
6- sleep 200 # ctrl + z # sleep 100 # crtl + z
7- jobs # fg %1 (esse processo está no num 2 da lista) # crtl + z
8- bg %3 (esse processo está no num 3 da lista)
9- kill %1 %2 %3

##### PROCESSOS E JOBS

1- ps
2- sleep 30 &
3- ps # kill 13113 (numerodoprocesso)
4- sleep 30 # ctrl + z # bg
5- sleep 300 &
6- sleep 200 # ctrl + z # sleep 100 # ctrl + z # jobs # kill %1 (numero na lista)
7- bg %3 (numero na lista)
8- op1: kill %1 %2 %3 (numeros na lista) ou kill 12116 11217 11218 (numeros PID)



##### BONUS
Não fiz pq nao queria instalar as coisas que nao sabia o que.