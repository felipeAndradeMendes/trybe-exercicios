def blefe_winner(blefes):
    players = blefes.keys()
    player_curr = {}

    for player in players:
        curr_max = max(set(blefes[player]))
        curr_min = min(set(blefes[player]))
        player_curr[player] = curr_max - curr_min

    return max(player_curr)


entrada = {"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}

print(blefe_winner(entrada))

# talvez eu não tenha entendido o enunciado, o gabarito esta bem diferente
