'use babel';

import { CompositeDisposable } from 'atom';

export default {

  config: {
    'path': {
      type: 'string',
      default: '/Users/jr/Sites'
    }
  },
  atomDefaultFolderView: null,

  activate(state) {
    this.openDefault();
  },

  deactivate() {
  },

  openDefault() {

    if(atom.project.getPaths.length === 0) {
      atom.project.setPaths([atom.config.get('atomDefaultFolder.path')]);
    }
  }

};
