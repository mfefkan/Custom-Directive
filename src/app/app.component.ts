import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div appExample color="green">merhaba</div>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Custom-Directive';
}
//#Directive Oluşturma
//ng generate directive... ya da ng g d ... diyerek oluşturuyoruz.
//Bir directive oluşturulduğu zaman ana modüle declare edilmelidir.
//Bir directive'in sınıf adının sonunda Directive olması isimsel bir kültürdür.
//Bir directive'in directive olabilmesi için @Directive decorator'ı tarafından işaretlenmiş olması gerekmektedir.

//#selector'ı Attribute olarak kullanma
//Selector özelliği köşeli parantez içerisinde yazılıyorsa bu attribute olarak kullanılacağı anlamına gelmektedir.
//#selector'ı class Olarak Kullanma
// .appExample olarak kullanılıyorsa bu da class olarak ilgili directive'in kullanılacağı anlamına gelmektedir.

//#Directive ile işaretlenmiş HTML Nesnesini Elde Etme
//#Directive'e Parametre Tanımlama
 //Directive üzerinde parametre tanımlayabilmek için Input field tanımlamak yeterlidir.