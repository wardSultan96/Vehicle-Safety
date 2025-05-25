// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   template: `
//     <header class="header">
//       <div class="container">
//         <div class="logo-container">
//           <img src="../../../assets/noheaderLogo.svg" alt="Vehicle Safety Logo" class="logo" />
//           <div class="logo-text">
//             <div class="arabic">سلامة المركبات</div>
//             <div class="english">Vehicle Safety</div>
//           </div>
//         </div>
//       </div>
//     </header>
//   `,
//   styles: [`
//     .header {
//       padding: 20px 0;
//       text-align: center;
//     }
    
//     .logo-container {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       gap: 5px;
//     }
    
//     .logo {
//       width: 80px;
//       height: auto;
//     }
    
//     .logo-text {
//       text-align: center;
//     }
    
//     .arabic {
//       font-weight: bold;
//       font-size: 20px;
//     }
    
//     .english {
//       font-size: 16px;
//       color: #666;
//     }
//   `]
// })
// export class HeaderComponent {

//  constructor(){
  
//  } 
// }





import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.comonent.htm',
  styleUrls: ['./header.component.scss'],
  imports:[    
    CommonModule,
    FormsModule,
     ]
})
export class HeaderComponent {

}