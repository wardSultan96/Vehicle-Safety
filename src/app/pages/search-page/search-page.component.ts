import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, MatSnackBarModule],
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
        
        <form [formGroup]="form">
          <div class="search-form" *ngIf="activeTab === 'plate'">
            <p class="form-label">رقم اللوحة</p>
            <div class="plate-inputs">
              <select class="form-control plate-letters" formControlName="plateLetter1">
                <option *ngFor="let letter of arabicLetters" [value]="letter.english">{{letter.order}} - {{letter.english}} - {{letter.arabic}}</option>
              </select>
              <select class="form-control plate-prefix" formControlName="plateLetter2">
                <option *ngFor="let letter of arabicLetters" [value]="letter.english">{{letter.order}} - {{letter.english}} - {{letter.arabic}}</option>
              </select>
              <select class="form-control plate-prefix" formControlName="plateLetter3">
                <option *ngFor="let letter of arabicLetters" [value]="letter.english">{{letter.order}} - {{letter.english}} - {{letter.arabic}}</option>
              </select>
              <input type="text" class="form-control plate-number" placeholder="6892" formControlName="plateNumber" />
            </div>
          </div>
          
          <div class="search-form" *ngIf="activeTab === 'serial'">
            <p class="form-label">الرقم التسلسلي</p>
            <input type="text" class="form-control" placeholder="أدخل الرقم التسلسلي" formControlName="serialNumber" />
          </div>
          
          <div class="search-form" *ngIf="activeTab === 'chassis'">
            <p class="form-label">رقم الهيكل</p>
            <input type="text" class="form-control" placeholder="أدخل رقم الهيكل" formControlName="chassisNumber" />
          </div>
        </form>
        
        <div class="search-button">
          <button class="btn btn-primary full-width" (click)="search()">التحقق</button>
        </div>
        <div *ngIf="errorMsg" class="alert alert-danger" style="margin-top:10px;">{{errorMsg}}</div>
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
  arabicLetters = [
    { order: 1, english: 'A', arabic: 'أ' },
    { order: 2, english: 'B', arabic: 'ب' },
    { order: 3, english: 'H', arabic: 'ح' },
    { order: 4, english: 'D', arabic: 'د' },
    { order: 5, english: 'R', arabic: 'ر' },
    { order: 6, english: 'S', arabic: 'س' },
    { order: 7, english: 'X', arabic: 'ص' },
    { order: 8, english: 'T', arabic: 'ط' },
    { order: 9, english: 'G', arabic: 'ق' },
    { order: 10, english: 'K', arabic: 'ك' },
    { order: 11, english: 'L', arabic: 'ل' },
    { order: 12, english: 'M', arabic: 'م' },
    { order: 13, english: 'N', arabic: 'ن' },
    { order: 14, english: 'V', arabic: 'هـ' },
    { order: 15, english: 'W', arabic: 'و' },
    { order: 16, english: 'Y', arabic: 'ي' }
  ];
  form: FormGroup;
  user: any = null;
  errorMsg: string = '';
  constructor(private router: Router, private http: HttpClient, private snackBar: MatSnackBar) {
    this.form = new FormGroup({
      plateNumber: new FormControl('6892'),
      plateLetter1: new FormControl('A'),
      plateLetter2: new FormControl('A'),
      plateLetter3: new FormControl('A'),
      serialNumber: new FormControl(''),
      chassisNumber: new FormControl('')
    });
  }
  search() {
    this.errorMsg = '';
  

    const searchCriteria = { ...this.form.value };
    console.log("searchCriteria:", searchCriteria);
    this.http.get<any[]>('/assets/vehicle-data.json').subscribe({
      next: data => {
        let foundUser = null;
        if (this.activeTab === 'plate') {
   
          foundUser = data.find(u =>
            u.plateNumberEnglish === searchCriteria.plateNumber &&
            u.plateLettersEnglish.length === 3 &&
            u.plateLettersEnglish[0] === searchCriteria.plateLetter1 &&
            u.plateLettersEnglish[1] === searchCriteria.plateLetter2 &&
            u.plateLettersEnglish[2] === searchCriteria.plateLetter3
          );
        } else if (this.activeTab === 'serial') {
             
          foundUser = data.find(u => u.serialNumber === searchCriteria.serialNumber);
        } else if (this.activeTab === 'chassis') {
         
          foundUser = data.find(u => u.chassisNumber === searchCriteria.chassisNumber);
        }
        if (foundUser) {
       
          this.router.navigate(['/result', foundUser.id]);
        } else {
          this.snackBar.open('لم يتم العثور على بيانات مطابقة.', 'إغلاق', { duration: 3000 });
        }
      },
      error: err => {
        this.snackBar.open('حدث خطأ أثناء جلب البيانات.', 'إغلاق', { duration: 3000 });
      }
    });
  }
}