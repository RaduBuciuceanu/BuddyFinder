from flask import Flask, make_response
from flask_jsonpify import jsonify
from flask_restful import Api
from keras.models import load_model

import constants
import dataProcessor
from combinator import Generator
from player import Player

app = Flask(constants.ApiName)


class Controller:

    def __init__(self):
        self.api = Api(app)
        self.app = app



@app.route('/players', methods=['Get'])
def getPlayers():
    rowsPlayers = dataProcessor.importData(constants.PlayersFilePath)
    players = []

    for row in rowsPlayers:
        player = str(Player(row))
        players.append(player)

    result = '['
    result += ','.join(players)
    result += ']'
    return result


@app.route('/allteams', methods=['Get'])
def getAllTeams():
    bestTeams = Generator().getBestTeams(constants.CombinationsFilePath)
    return str(bestTeams)

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)
