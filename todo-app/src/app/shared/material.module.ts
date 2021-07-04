import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MatFormFieldModule,
    MatExpansionModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class MaterialModule { }
