import marked from 'marked';
import { bindable } from 'aurelia-framework';
import { createStore } from 'redux';

export class MarkdownRedux {
  @bindable raw;
  html = '';
  store = createStore(textUpdater);

  constructor() {
    this.store.subscribe(this.update.bind(this));
  }

  update() {
    const state = this.store.getState();
    this.html = state.html;
    this.raw = state.raw;
  }

  keyupHandler(newValue) {
    this.store.dispatch(updateText(newValue));
  }

  attached() {
    this.keyupHandler(this.raw);
  }
}

const TEXT_UPDATE = 'UPDATE';

// action creator
const updateText = (text) => {
  return {
    type: TEXT_UPDATE,
    text
  };
};

// reducer
function textUpdater(state = { raw: '', html: '' }, action) {
  switch (action.type) {
  case TEXT_UPDATE:
    return {
      raw: action.text,
      html: marked(action.text)
    };
  default:
    return state;
  }
}
