from dataProcessor import importData

import numpy as np
from keras.models import Sequential
from keras.layers import Dense
from keras.wrappers.scikit_learn import KerasRegressor
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import KFold
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline


def createBaselineModel():
    model = Sequential()
    model.add(Dense(150, input_dim=60, kernel_initializer='normal', activation='relu'))
    model.add(Dense(100, kernel_initializer='normal', activation='relu'))
    model.add(Dense(50, kernel_initializer='normal', activation='relu'))
    model.add(Dense(1, kernel_initializer='normal'))

    model.compile(loss='mean_squared_error', optimizer='adam')
    return model


def analyzeModel():
    seed = 10
    np.random.seed(seed)
    estimators = [('standardize', StandardScaler()),
                  ('mlp', KerasRegressor(build_fn=createBaselineModel, epochs=50, batch_size=10, verbose=2))]
    pipeline = Pipeline(estimators)
    kfold = KFold(n_splits=4, shuffle=True, random_state=seed)
    results = cross_val_score(pipeline, X, Y, cv=kfold)
    print("Standardized: %.2f (%.2f) Buddy" % (results.mean(), results.std()))


if __name__ == '__main__':
    teams = importData(".\Data\players.csv")

    X = teams[:, 0:teams.shape[1] - 1]
    Y = teams[:, teams.shape[1] - 1]

    model = createBaselineModel()
    model.fit(X, Y, epochs=300, batch_size=10, verbose=2)
    scores = model.evaluate(X, Y, verbose=0)
    print("Score was: %.2f%%" % (scores * 100))

    test = [28, 8, 5, 90, 177,
            19, 6, 9, 72, 173,
            19, 4, 7, 79, 175,
            18, 8, 9, 77, 183,
            24, 8, 9, 75, 187,
            31, 7, 8, 82, 171,
            27, 7, 10, 74, 178,
            35, 7, 6, 88, 182,
            23, 5, 8, 78, 174,
            27, 6, 8, 86, 174,
            23, 7, 7, 73, 190,
            25, 4, 9, 70, 171]

    test = np.array(test)
    test = test.reshape(1, test.shape[0])
    prediction = model.predict(test)
    print("Predicted: %s" % prediction)
