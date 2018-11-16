import csv
import threading
from itertools import combinations


class Generator:
    def createCombinationsFile(self, fileOutputPath):
        n = range(18)
        k = 12
        combs = combinations(n, k)

        writer = open(fileOutputPath, 'w')

        for row in enumerate(combs):
            s = str(list(row[1]))
            writer.write(s[1:-1])
            writer.write("\n")


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