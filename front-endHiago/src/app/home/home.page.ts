import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public login: string;
  public senha: string;
  public pessoas: any[] = [];

  constructor(private toastController: ToastController,
    private authentication: AuthenticationService,
    private router: Router) {
  }

  async loga() {
    const usuario = {
      login: this.login,
      senha: this.senha,
    };
    const retorno = await this.authentication
    .login(usuario);
    
    if (retorno) {
      this.router.navigate(["/lista"]);
    } else {
      this.exibirMensagem('Email ou Senha inválida.')
    }
  }

  private async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 4000,
      position: 'top',
    });
    toast.present();
  }
}
