import { Actions } from 'sn-redux';
import { reduxStore } from '../store';
import { SN_DEMO_SITE_URL } from '../constants';
import { Content } from 'sn-client-js';
import { customElement } from 'aurelia-framework';

@customElement('todo-add')
export class TodoAdd {
  private todoName: string;

  createContent(): Content {
    let content = Content.Create('Task', {
      Type: 'Task',
      DisplayName: this.todoName
    });
    content['Status'] = 'active';
    return content;
  }

  addTodo() {
    reduxStore.dispatch(Actions.CreateContent(SN_DEMO_SITE_URL, this.createContent()));
  }

  submit() {
    this.addTodo();
    this.todoName = '';
  }
}
