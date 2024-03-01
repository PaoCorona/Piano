import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'piano';

  aplicarSonido(numero: number)
  {
    let audio = new Audio();
    switch(numero){
      case 1: 
        audio.src="../assets/sonidos/la-80237.mp3";
        audio.load();
        audio.play();
        break;
        case 2:
          audio.src='../assets/sonidos/sol-101774.mp3';
          audio.load();
          audio.play();
          break;
        case 3:
          audio.src='../assets/sonidos/mi-80239.mp3';
          audio.load();
          audio.play();
          break;
        case 4:
          audio.src='../assets/sonidos/re-78500.mp3';
          audio.load();
          audio.play();
          break;
        case 5:
          audio.src='../assets/sonidos/si-80238.mp3';
          audio.load();
          audio.play();
          break;
    }
  }
}
