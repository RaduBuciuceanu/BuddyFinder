from enum import Enum
import csv


class PlayerAttributes(Enum):
    name = 0
    age = 1
    monthMatches = 2
    experienceYears = 3
    weightCategory = 4
    heightCategory = 5


class Player:
    def __init__(self, row):
        self.name = row[PlayerAttributes.name.value]
        self.age = row[PlayerAttributes.age.value]
        self.monthMatches = row[PlayerAttributes.monthMatches.value]
        self.experienceYears = row[PlayerAttributes.experienceYears.value]
        self.weightCategory = row[PlayerAttributes.weightCategory.value]
        self.heightCategory = row[PlayerAttributes.heightCategory.value]


def importData(csvPath):
    with open(csvPath, newline='') as csvFile:
        dataReader = csv.reader(csvFile, delimiter=',', quotechar='|')
        players = []
        for row in dataReader:
            players.append(Player(row))

        return players


if __name__ == '__main__':
    players = importData(".\Data\players.csv")
    for player in players:
        print(player.name)
