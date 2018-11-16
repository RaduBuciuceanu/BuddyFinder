from flask_restful.representations import json

from playerattributes import PlayerAttributes


class Player:
    def __init__(self, row):
        self.name = row[PlayerAttributes.name.value]
        self.age = row[PlayerAttributes.age.value]
        self.monthMatches = row[PlayerAttributes.monthMatches.value]
        self.experienceYears = row[PlayerAttributes.experienceYears.value]
        self.weightCategory = row[PlayerAttributes.weightCategory.value]
        self.heightCategory = row[PlayerAttributes.heightCategory.value]

    def __repr__(self):
        return f"{{\"Name\": \"{self.name}\", \"Age\": {self.age}, \"MonthMatches\": {self.monthMatches}, \"ExperienceYears\": {self.experienceYears}, \"WeightCategory\": {self.weightCategory}, \"HeightCategory\": {self.heightCategory}}}"
