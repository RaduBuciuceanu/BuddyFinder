import csv
import numpy as np


def importData(csvPath):
    with open(csvPath, newline='') as csvFile:
        dataReader = csv.reader(csvFile, delimiter=',', quotechar='|')
        rows = []
        for row in dataReader:
            rows.append(row)

        return np.array(rows)


def importTrainingData(csvPath):
    playerFields = 5
    teamMembers = 12
    teams = np.empty((1, playerFields * teamMembers + 1))
    team = []
    playersFeedback = 0

    data = importData(csvPath)
    for index, row in enumerate(data):
        player = np.array(list(map(int, row[1:6])))
        team = np.hstack((team, player))
        playersFeedback += int(row[6])

        if index != 0 and (index + 1) % teamMembers == 0:
            matchPrecisionMean = int(playersFeedback / teamMembers)
            team = np.hstack((team, matchPrecisionMean))
            teams = np.vstack((teams, team))

            team = []
            playersFeedback = 0

    teams = teams[1:, :]
    return teams


def importTestData(csvPath):
    playerFields = 5
    teamMembers = 12
    testingTeams = np.empty((1, playerFields * teamMembers))
    team = []

    data = importData(csvPath)
    for index, row in enumerate(data):
        player = np.array(list(map(int, row[0:5])))
        team = np.hstack((team, player))

        if index % teamMembers == 0:
            testingTeams = np.vstack((testingTeams, team))
            team = []

    testingTeams = testingTeams[1:, :]
    return testingTeams
