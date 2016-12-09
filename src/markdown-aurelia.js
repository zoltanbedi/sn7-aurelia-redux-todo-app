import marked from 'marked';
import {bindable} from 'aurelia-framework';

export class MarkdownAurelia {
  @bindable raw;
  html = '';

  rawChanged(newValue) {
    this.html = marked(newValue);
  }
}
