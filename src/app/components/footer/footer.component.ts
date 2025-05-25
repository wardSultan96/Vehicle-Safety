// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-footer',
//   standalone: true,
//   template: `
//     <footer class="footer">
//       <div class="container">
//         <div class="logos">
//           <img src="https://i.ibb.co/44BtPq8/vision-2030.png" alt="Vision 2030" class="footer-logo" />
//           <img src="https://i.ibb.co/FnkdSZM/saudi-standards.png" alt="Saudi Standards" class="footer-logo" />
//         </div>
//       </div>
//     </footer>
//   `,
//   styles: [`
//     .footer {
//       padding: 20px 0;
//       background-color: #f9f9f9;
//       border-top: 1px solid #eee;
//       margin-top: auto;
//     }
    
//     .logos {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       gap: 40px;
//     }
    
//     .footer-logo {
//       height: 50px;
//       width: auto;
//     }
    
//     @media (max-width: 768px) {
//       .logos {
//         gap: 20px;
//       }
      
//       .footer-logo {
//         height: 40px;
//       }
//     }
//   `]
// })
// export class FooterComponent {}






import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports:[    
    CommonModule,
    FormsModule,
     ]
})
export class FooterComponent {

}