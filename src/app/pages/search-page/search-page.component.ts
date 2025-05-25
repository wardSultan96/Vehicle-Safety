import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="main-container animated">
      <div class="bordered-container">
       <div class="success-banner">
         
          <span class="success-icon">✓</span>
           <span>صالح وساري</span>
        </div>
        
        
        <div class="expiry-date text-center">
          <p>تاريخ انتهاء صلاحية الفحص</p>
          <h2>18/11/2025</h2>
        </div>
        
        <hr class="divider" />
        
        <div class="search-instructions">
          <p>للاطلاع على تفاصيل المركبة يرجى إدخال رقم اللوحة أو الرقم التسلسلي للمركبة أو رقم الهيكل</p>
        </div>
        
        <div class="tabs">
          <div class="tab" [class.active]="activeTab === 'plate'" (click)="activeTab = 'plate'">رقم اللوحة</div>
          <div class="tab" [class.active]="activeTab === 'serial'" (click)="activeTab = 'serial'">رقم التسلسلي</div>
          <div class="tab" [class.active]="activeTab === 'chassis'" (click)="activeTab = 'chassis'">رقم الهيكل</div>
        </div>
        
        <div class="search-form" *ngIf="activeTab === 'plate'">
          <p class="form-label">رقم اللوحة</p>
          <div class="plate-inputs">
            <input type="text" class="form-control plate-letters" placeholder="س ص" />
            <input type="text" class="form-control plate-prefix" placeholder="١ - أ" />
              <input type="text" class="form-control plate-prefix" placeholder="١ - أ" />
            <input type="text" class="form-control plate-number" placeholder="6892" [(ngModel)]="plateNumber" />
          </div>
        </div>
        
        <div class="search-form" *ngIf="activeTab === 'serial'">
          <p class="form-label">الرقم التسلسلي</p>
          <input type="text" class="form-control" placeholder="أدخل الرقم التسلسلي" />
        </div>
        
        <div class="search-form" *ngIf="activeTab === 'chassis'">
          <p class="form-label">رقم الهيكل</p>
          <input type="text" class="form-control" placeholder="أدخل رقم الهيكل" />
        </div>
        
        <div class="search-button">
          <button class="btn btn-primary full-width" (click)="search()">التحقق</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .text-center {
      text-align: center;
    }
    
    .expiry-date {
      margin: 20px 0;
    }
    .success-text-head{
    font-size: 18px;
    font-weight: 700;
    }
    .expiry-date p {
      margin-bottom: 5px;
      color: #666;
    }
    
    .expiry-date h2 {
      font-size: 24px;
      font-weight: bold;
    }
    
    .divider {
      border: none;
      border-top: 1px solid #eee;
      margin: 20px 0;
    }
    
    .search-instructions {
      margin-bottom: 20px;
      text-align: center;
    }
    
    .tabs {
      display: flex;
   
      margin-bottom: 20px;
    }
    
    .tab {
      padding: 10px 20px;
      cursor: pointer;
   
 
      margin-right: 5px;
      background-color: #f5f5f5;
    }
    
    .tab.active {
      background-color: #fff;
      color:#0e4c60;
      font-weight: 700;
      margin-bottom: -1px;
    }
    
    .form-label {
      margin-bottom: 10px;
      font-weight: 500;
    }
    
    .plate-inputs {
      display: flex;
      gap: 10px;
    }
    
    .plate-number {
      flex: 0 0 40%;
    }
    
    .plate-letters, .plate-prefix {
      flex: 1;
    }
    
    .search-button {
      margin-top: 30px;
  

    }
    
    .full-width {
      width: 100%;
      height: 50px;
         font-weight: 1000;
    }
  `]
})
export class SearchPageComponent {
  activeTab: string = 'plate';
  plateNumber: string = '6892';
  
  constructor(private router: Router) {}
  
  search() {
    this.router.navigate(['/result']);
  }
}