// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, HeaderComponent, FooterComponent],
//   template: `
//     <div class="app-container">
//       <app-header></app-header>
//       <main class="main-content">
//         <router-outlet></router-outlet>
//       </main>
//       <app-footer></app-footer>
//     </div>
//   `,
//   styles: [`
//     .app-container {
//       display: flex;
//       flex-direction: column;
//       min-height: 100vh;
//     }
    
//     .main-content {
//       flex: 1;
//     }
//   `]
// })
// export class AppComponent {
//   title = 'Vehicle Safety Portal';
// }



import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vehicle-safety';
}
