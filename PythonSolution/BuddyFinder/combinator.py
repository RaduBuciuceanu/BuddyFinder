import csv
import threading
from itertools import combinations

import numpy

import constants
from dataProcessor import importData, importTestData
from keras.models import load_model


class Generator:
    def __init__(self):
        self.model = load_model(constants.ModelFilePath)
        self.players = importData(constants.PlayersFilePath)

    def createCombinationsFile(self, fileOutputPath):
        n = range(18)
        k = 12
        combs = combinations(n, k)

        writer = open(fileOutputPath, 'w')

        for row in enumerate(combs):
            s = str(list(row[1]))
            writer.write(s[1:-1])
            writer.write("\n")

    def getBestTeams(self, inputCombinationsPath):
        with open(inputCombinationsPath, newline='') as csvFile:
            dataReader = csv.reader(csvFile, delimiter=',', quotechar='|')

            predictions = []
            for row in dataReader:
                integersIndexes = list(map(int, row))
                fullFiledCombinedTeam = self.players[integersIndexes]

                predictionCombinedTeam = []
                for player in fullFiledCombinedTeam:
                    predictionCombinedTeam.extend(list(map(int, player[1:6])))

                predictionCombinedTeam = numpy.array(predictionCombinedTeam)
                predictionCombinedTeam = predictionCombinedTeam.reshape(1, predictionCombinedTeam.shape[0])

                # test = importTestData(constants.TestDataFilePath)
                prediction = self.model.predict(predictionCombinedTeam)

                predictions.append((prediction[0][0], fullFiledCombinedTeam))

            predictions.sort(reverse=True, key=predictionComparer)
            return predictions

def predictionComparer(pred):
    return pred[0]

class CombinatorThread(threading.Thread):
    def __init__(self, target, *args):
        self.target = target
        self.args = args
        threading.Thread.__init__(self)

    def run(self):
        self.target(*self._args)


# Example usage
def someOtherFunc(data, key):
    print
    "someOtherFunc was called : data=%s; key=%s" % (str(data), str(key))