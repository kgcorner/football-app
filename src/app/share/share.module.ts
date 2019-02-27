import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatCardModule, 
  MatMenuModule, 
  MatToolbarModule, 
  MatIconModule,
  MatGridListModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatTableModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatDialogModule
 } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule,
    MatGridListModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDialogModule,
    HttpClientModule
  ],
  exports: [
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule,
    MatGridListModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDialogModule,
    HttpClientModule
  ]
  
})
export class ShareModule { }
