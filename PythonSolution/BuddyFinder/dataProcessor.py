import csv


def importData(csvPath):
    with open(csvPath, newline='') as csvFile:
        dataReader = csv.reader(csvFile, delimiter=',', quotechar='|')
        players = []
        for row in dataReader:
            from player import Player
            players.append(Player(row))

        return players

