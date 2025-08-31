import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="main-container animated" *ngIf="user">
      <div class="bordered-container">
        <div class="success-banner">
          <span class="success-icon">✓</span>
          <span>صالح وساري</span>
        </div>
        <div class="plate-number-display info-row">
          <div class="plate-box">{{user.plateNumberArabic}} {{user.plateLettersEnglish.join('')}}</div>
        </div>
        <div class="vehicle-info">
          <div class="info-row">
            <div class="info-label text-color">رقم الهيكل:</div>
            <div class="info-value text-color-value">{{user.chassisNumber}}</div>
          </div>
          <div class="info-row">
            <div class="info-label text-color">الشركة الصانعة:</div>
            <div class="info-value text-color-value">{{user.company}}</div>
          </div>
          <div class="info-row">
            <div class="info-label text-color">نوع السيارة:</div>
            <div class="info-value text-color-value">{{user.vehicleType}}</div>
          </div>
          <div class="info-row">
            <div class="info-label text-color">المالك:</div>
            <div class="info-value text-color-value">{{user.owner}}</div>
          </div>
          <div class="info-row">
            <div class="info-label text-color">الرقم التسلسلي:</div>
            <div class="info-value text-color-value">{{user.serialNumber}}</div>
          </div>
          <div class="info-row">
            <div class="info-label text-color">سنة الصنع:</div>
            <div class="info-value text-color-value">{{user.yearOfManufacture}}</div>
          </div>
        </div>
        <div class="search-button">
          <button class="btn btn-primary full-width" (click)="goBack()">رجوع</button>
        </div>
      </div>
    </div>
    <div *ngIf="!user">
      <p>لا يوجد بيانات للمركبة المطلوبة.</p>
      <button class="btn btn-primary full-width" (click)="goBack()">رجوع</button>
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
  user: any = null;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.http.get<any[]>('/assets/vehicle-data.json').subscribe((data: any[]) => {
        this.user = data.find(u => u.id === id);
      });
    });
  }
  goBack() {
    this.router.navigate(['/']);
  }
}