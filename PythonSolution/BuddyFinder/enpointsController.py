from flask import Flask
from flask_restful import Api
import jsonify

import constants
import dataProcessor

app = Flask(constants.ApiName)


class Controller:

    def __init__(self):
        self.api = Api(app)
        self.app = app


@app.route('/players', methods=['Get'])
def getPlayers():
    players = dataProcessor.importData(constants.PlayersFilePath)
    return jsonify(players)
