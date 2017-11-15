import { ValidationControllerFactory, ValidationRules, ValidationController } from 'aurelia-validation';
import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { Repository } from "sn-client-js";

@autoinject
export class Login {
  controller: ValidationController;
  password: string = '';
  userName: string = '';

  constructor(controllerFactory: ValidationControllerFactory,
    private router: Router,
    private snService: Repository.BaseRepository) {
    this.controller = controllerFactory.createForCurrentScope();
  }

  submit() {

    this.controller.validate().then((value) => {
      if (!value.valid) {
        return;
      }
      const success = this.snService.Authentication.Login(this.userName, this.password)
        .subscribe(success => {
          if (success) {
            this.router.navigate('/');
          }
        }, error => console.log('Error in login:' + error));

    });
  }

}

ValidationRules
  .ensure('userName').required()
  .ensure('password').required()
  .on(Login);
