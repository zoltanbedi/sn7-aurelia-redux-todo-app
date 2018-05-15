import { IODataParams, Repository } from '@sensenet/client-core';
import { Task } from '@sensenet/default-content-types';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Home {
  filter: any;

  constructor(private repository: Repository) {
  }

  attached() {
    this.repository.authentication.currentUser.subscribe((a) => console.log(a));
  }

  getOptionObject() {
    const optionObj = {
      select: ['DisplayName', 'Status']
    } as IODataParams<Task>;
    switch (this.filter) {
      case 'Active':
        optionObj.filter = `isOf('Task') and Status eq 'Active'`;
        break;
      case 'Completed':
        optionObj.filter = `isOf('Task') and Status eq 'Completed'`;
        break;
      case 'All':
      default:
        optionObj.filter = `isOf('Task')`;
        break;
    }
    return optionObj;
  }
}
