import dataProcessor as dataProcessor
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
    teams = dataProcessor.importData(".\data\players.csv")
    testingData = dataProcessor.importTestData(".\data\\medium.csv")

    X = teams[:, 0:teams.shape[1] - 1]
    Y = teams[:, teams.shape[1] - 1]

    model = createBaselineModel()
    model.fit(X, Y, epochs=300, batch_size=10, verbose=2)

    prediction = model.predict(testingData)
    print("Predicted: %s" % prediction)
