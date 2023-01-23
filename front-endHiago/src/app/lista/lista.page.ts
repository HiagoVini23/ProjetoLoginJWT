import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public login: string;
  public senha: string;
  public pessoas: any[] = [];

  constructor(private toastController: ToastController,
    private alertController: AlertController, private userService: UserService,  
    private authentication: AuthenticationService, private router: Router) { 
    this.findAll();
  }

  ngOnInit() {
  }

  logout() {
    this.authentication.logout();
    this.router.navigate(["/home"]);
  }
  async confirmarExclusao(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirma exclusao?',
      buttons: [
        {
          text: 'Nao',
        },
        {
          text: 'Sim',
          handler: () => {
            this.remover(id);
          },
        },
      ],
    });

    await alert.present();
  }

  public findAll(){
    this.userService.getAll()
    .then((users)=>{
      console.log(users);
      this.pessoas = users;
    }).catch(()=>{
      this.exibirMensagem('Erro na busca');
    });
  }

  private async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 4000,
      position: 'top',
    });
    toast.present();
  }

  public remover(id: number): void {
    this.userService.delete(id).then(()=> {
      this.exibirMensagem("Excluido com sucesso.");
      this.findAll();  
    }).catch(()=>{
      this.exibirMensagem("Erro na exclusão.");       
    })
  }

  private criarPessoa(): any {
    const p = {
      login: this.login,
      senha: this.senha,
    };
    return p;
  }

  public adicionar(): void {
    let p = this.criarPessoa();
    console.log(p.login);
    this.userService.create(p)
    .then(()=>{
      this.exibirMensagem('Pessoa adicionada.');
      this.findAll();
    }).catch((error)=>{
      this.exibirMensagem('Erro na criação.');  
      console.log(error);      
    })
  }

}
