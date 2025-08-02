import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Contact } from './contact/contact';
import { Protofolio } from './protofolio/protofolio';
import { Notfound } from './notfound/notfound';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Nav,Home,Footer,Contact,Protofolio,Notfound],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignment');
}
