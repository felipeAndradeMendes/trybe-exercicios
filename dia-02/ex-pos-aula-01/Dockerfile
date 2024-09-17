FROM chuanwen/cowsay
ENTRYPOINT [ "/usr/games/cowsay" ]
CMD ["Essa é uma mensagem padrão para p chuanwen/cowsay"]

# O FROM é a partir de qual imagem ja'pronta queremos fazer a nossa imagem
# O ENTRYPOINT é o que será executado obrigatóriamente após o buld da imagem
  # Esse endereço passado no Entrypoint é onde estáo executável, mas não entendi
  # pq colocando ele como Entrypoint o container passa a rodar a msg padrão ou do CMD...

  # Outra duvida é se é necessario ou não usar 'container' depois do 'run'.

####

  # Testei usar como base a imagem rancher/cowsay. Fica assim:
    # Inclusive ocupa 40mb, enuanto a do chuanwen ocupa 228mb

  # FROM rancher/rancher/cowsay
  # ENTRYPOINT [ "cowsay" ]
  # CMD [ "Essa é uma mensagem padrão para o rancher/cowsay" ]