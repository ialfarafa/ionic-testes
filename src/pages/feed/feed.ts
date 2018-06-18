import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
     titulo: "Rafael Marighetti",
     data: "Novembro, 5 1955",
     descricao: "Estou criando um novo app incrível",
     qntd_likes: 12,
     qntd_comments: 4,
     time_comment: "11th ago" 
  }

  public nome_usuario:String = "Rafael Marighetti Código";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    private movieProvider: MoovieProvider
  ) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
   // alert(num1+num2); 
  }

  ionViewDidLoad() {
    // this.somaDoisNumeros(10, 99);
  }

}
