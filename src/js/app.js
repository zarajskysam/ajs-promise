import { Promise } from 'core-js';
import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  load() {
    return new Promise((resolve) => read()
      .then((data) => json(data))
      .then((data) => JSON.parse(data))
      .then((data) => resolve(new GameSaving(data.id, data.created, data.userInfo))));
  }
}
