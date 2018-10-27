import chalk from 'chalk';


class RebuildIndexes {

  /**
   * Rebuild indexes for one model (collection)
   * @param modelName - for example: usersModel
   */
  oneModel(modelName) {
    'use strict';
    modelName.collection.dropIndexesAsync()
      .then(() => {
        return modelName.ensureIndexesAsync()
          .catch((err) => {
            throw err;
          });
      })
      .catch(err => {
        throw err;
      });
  }



  /**
   * Rebuild indexes for all models (collections)
   */
  allModels() {
    const mongoose = require('mongoose');

    console.log(chalk.blue('NODE_RIND=true - Mongo indexes rebuild for: ', mongoose.modelNames()));

    const modelsArr = mongoose.modelNames();
    /*
    [
        'usersMD',
        'settingsMD',
        'plansMD',
        'dbmoDatabasesMD',
        'dbmoCollectionsMD',
        'dbmoEndpointsMD',
        'dbmoEndpointsAvailableMD',
        'emailServersMD',
        'emailEndpointsAvailableMD',
        'emailEndpointsMD',
        'authGroupsMD',
        'authUsersMD',
        'authEndpointsAvailableMD',
        'authEndpointsMD'
    ]
     */

    modelsArr.forEach(mdl => {

      mongoose.model(mdl).collection.dropIndexesAsync()
        .then(() => {
          return mongoose.model(mdl).ensureIndexesAsync()
            .catch(err => {
              throw err;
            });
        })
        .catch(err => {
          throw err;
        });

    });


  }

}


export default RebuildIndexes;
