import csv
import numpy as np


def importData(csvPath):
    with open(csvPath, newline='') as csvFile:
        dataReader = csv.reader(csvFile, delimiter=',', quotechar='|')
        playerRows = 4
        teamMembers = 12
        teams = np.empty((1, playerRows * teamMembers + 1))
        team = []
        playersFeedback = 0
        index = 0

        for row in dataReader:
            player = np.array(list(map(int, row[1:5])))
            team = np.hstack((team, player))
            playersFeedback += int(row[6])
            index += 1

            if index % teamMembers == 0:
                matchPrecisionMean = int(playersFeedback / teamMembers)
                team = np.hstack((team, matchPrecisionMean))
                team.reshape(team.shape[0], 1)
                teams = np.vstack((teams, team))

                team = []
                playersFeedback = 0

        teams = teams[1:, :]
        return teams

