# trybe-exercicios
## Meu repositório de exercícios
### [X] 2-1: _GIT- O que é e para que serve?_

Hoje você vai aprender o que é controle de versão e o motivo pelo qual ele é essencial para a vida de uma pessoa desenvolvedora!

Você vai poder criar várias versões do seu projeto com a ajuda de um sistema de controle de versão chamado Git, que permite criar inúmeras ramificações (cópias) do seu projeto e acessar cada uma delas sempre que precisar! Prepare-se também para começar a se familiarizar com os termos branch, commit e merge!


EXERCÍCIOS

PT 01

01- Cria a pasta
02- acessa apasta
03- git init
04- code .
05- touch README.md
06- git add . # git commit -m "Cria README.md"
07- git checkout -b adiciona-readme
08- cat >> README.md # novo texto # git add . # git commit -m "altera-readme" # git chekout main # git merge adiciona-readme.
09- git checkout -b atualiza-readme 
10- touch infos.txt
11- git add . # git commit -m "Adiciona infos"
12- cat >> infos.txt # Felipe Mendes # ctrl + d
13- git add . # git commit -m "atualiza infos"
14- git checkout -b adiciona-infos
15- Acessa o arquivo readme na nova branch e edita 
16- git add . # git commit -m "Adicona descrição sobre versionamento"
17- git checkout atualiza-readme
18- git merge adiciona-infos
19- git checkout main # git merge atualiza-readme

##### RESUMO SOBRE COMO FUNCIONA O VERSIONAMENTO

O primeiro passo é criar e ter uma pasta versionada, usando o comando git init nessa pasta.

Então cria -se uma branch nova, que será por padrão a branch main. Antigamente utilizava-se branch master, mas hj não é mais. O padrão, porém, ainda é master, entã temos que mudar para main com o seguinte comando: git config --global init.defaultBranch main.
Nessa branch maincria-se o código ou arquivo e faz a edição. Quando terminado, coloca pra stage com git add nomedoarquivo ou git add . (todos os arquivos ). Após isso, faz o commit com git commit -m "descriçaõ do commit".

Para continuar o trabalho sem alterar a branch main, vria uma nova branch, que será como uma copia da main, com git checkou -b nomedabranch. Pode-s criar tb em duas etapas, sem utilizar o "-b", usando: git branch nomedabranch e depois git checkout nomedabranch, para acessar-la.

Após feito o trabalho na branch secundária, faz o stage com git add . e depois o commit com git commit -m "decrição do commit". 

Para adiconar essas mudanças feitas na branch secundária à branch main, acessa a branch main com git checkout main, e depois faz o merge com git merge nomedabranchsecundaria.
