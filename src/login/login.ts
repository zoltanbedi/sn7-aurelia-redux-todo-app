import { LoginState, Repository } from '@sensenet/client-core';
import { Actions, Reducers } from '@sensenet/redux';
import { autoinject, observable } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { ValidationController, ValidationControllerFactory, ValidationRules } from 'aurelia-validation';
import { TodoStore } from 'store';

@autoinject
export class Login {
  @observable loginState: LoginState;
  controller: ValidationController;
  password: string = '';
  userName: string = '';

  constructor(controllerFactory: ValidationControllerFactory,
    private router: Router,
    private repository: Repository,
    private store: TodoStore<{ sensenet: Reducers.SensenetStateType }>) {
    this.controller = controllerFactory.createForCurrentScope();
  }

  attached() {
    this.store.subscribe(() => this.loginState = (this.store.getState().sensenet.session as { loginState: LoginState }).loginState);
  }

  submit() {
    this.controller.validate().then((value) => {
      if (!value.valid) {
        return;
      }
      this.store.dispatch(Actions.userLogin(this.userName, this.password));
    });
  }

  loginStateChanged(newState: LoginState) {
    if (newState === LoginState.Authenticated) {
      this.router.navigate(this.router.generate('home'));
    }
  }

}

ValidationRules
  .ensure('userName').required()
  .ensure('password').required()
  .on(Login);
