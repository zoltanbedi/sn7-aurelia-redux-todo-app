import { Actions, Reducers } from '@sensenet/redux';
import { autoinject } from 'aurelia-framework';
import { ValidationController, ValidationControllerFactory, ValidationRules } from 'aurelia-validation';
import { AureliaUXFormRenderer } from 'resources/renderers/aurelia-ux-form';
import { AuthService } from 'resources/services/auth-service';
import { TodoStore } from 'store';

@autoinject
export class Login {
  controller: ValidationController;
  password: string = '';
  userName: string = '';

  constructor(controllerFactory: ValidationControllerFactory,
    private readonly auth: AuthService,
    private readonly store: TodoStore<{ sensenet: Reducers.SensenetStateType }>) {
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new AureliaUXFormRenderer());
  }

  submit() {
    this.controller.validate().then((value) => {
      if (!value.valid) {
        return;
      }
      this.store.dispatch(Actions.userLogin(this.userName, this.password));
    });
  }
}

ValidationRules
  .ensure('userName').required()
  .ensure('password').required()
  .on(Login);
