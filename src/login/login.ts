import { Repository } from '@sensenet/client-core';
import { Actions, Reducers } from '@sensenet/redux';
import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { ValidationController, ValidationControllerFactory, ValidationRules } from 'aurelia-validation';
import { TodoStore } from 'store';

@autoinject
export class Login {
  controller: ValidationController;
  password: string = '';
  userName: string = '';

  constructor(controllerFactory: ValidationControllerFactory,
    private router: Router,
    private repository: Repository,
    private store: TodoStore<any>) {
    this.controller = controllerFactory.createForCurrentScope();
  }

  submit() {
    this.controller.validate().then((value) => {
      if (!value.valid) {
        return;
      }
      this.store.dispatch(Actions.userLogin(this.userName, this.password));
      console.log(this.store.getState());
    });
  }

}

ValidationRules
  .ensure('userName').required()
  .ensure('password').required()
  .on(Login);
