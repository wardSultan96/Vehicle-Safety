import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="main-container animated">
      <div class="bordered-container">
        <div class="success-banner">
        
          <span class="success-icon">✓</span>
            <span>صالح وساري</span>
        </div>
        
        <div class="plate-number-display info-row">
          <div class="plate-box">6892SSA</div>
        </div>
     
        <div class="vehicle-info">
          <div class="info-row">
            <div class="info-label text-color">رقم الهيكل:</div>
            <div class="info-value text-color-value">WEB410550131042223</div>
          </div>
          
          <div class="info-row">
            <div class="info-label text-color">الشركة الصانعة:</div>
            <div class="info-value text-color-value">مرسيدس</div>
          </div>
          
          <div class="info-row">
            <div class="info-label text-color">نوع السيارة:</div>
            <div class="info-value text-color-value">باص</div>
          </div>
          
          <div class="info-row">
            <div class="info-label text-color">تاريخ الفحص:</div>
            <div class="info-value text-color-value">22/5/2025</div>
          </div>
          
          <div class="info-row">
            <div class="info-label text-color">مركز الفحص:</div>
            <div class="info-value text-color-value">الرياض حي النفيسة</div>
          </div>
          
          <div class="info-row">
            <div class="info-label text-color">الخدمة:</div>
            <div class="info-value text-color-value">خدمة الفحص الفني الدوري لباقات الحج</div>
          </div>
          
          <div class="info-row">
            <div class="info-label text-color">تاريخ انتهاء صلاحية الفحص:</div>
            <div class="info-value text-color-value">18/11/2025</div>
          </div>
        </div>
        
        <div class="search-button">
          <button class="btn btn-primary full-width" (click)="goBack()">رجوع</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .plate-number-display {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
    
    .plate-box {
    border: 1px solid;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 1000;
    margin: 1px  1px;
    min-width: 5rem;
    padding: 10px 10px;
    text-align: center;
    background-color: #fff;
     
    }
    
    .vehicle-info {
      margin: 30px 0;
    }
    
    .info-row {
      display: flex;
      padding: 12px 0;
      border-bottom: 1px solid #eee;
    }
    
    .info-label {
   
      font-weight: bold;
      text-align: right;
    }
    
    .info-value {
   
      text-align: right;
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
export class ResultPageComponent {
  constructor(private router: Router) {}
  
  goBack() {
    this.router.navigate(['/']);
  }
}