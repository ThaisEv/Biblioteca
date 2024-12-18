// src/app/shared/primeng.module.ts
import { NgModule } from '@angular/core';

// Importações do PrimeNG
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ImageModule } from 'primeng/image';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagModule } from 'primeng/tag';
import { StepperModule } from 'primeng/stepper';
import { StepsModule } from 'primeng/steps';
import { ListboxModule } from 'primeng/listbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DividerModule } from 'primeng/divider';

// Outras importações necessárias
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // PrimeNG Módulos
    ButtonModule,
    TableModule,
    InputTextModule,
    DialogModule,
    TooltipModule,
    DropdownModule,
    CalendarModule,
    ToastModule,
    ProgressSpinnerModule,
    ImageModule,
    PasswordModule,
    FloatLabelModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule, 
    MenubarModule,
    AvatarModule,
    ButtonModule,
    ImageModule,
    DataViewModule,
    RippleModule,
    PanelModule,
    BrowserAnimationsModule,
    TagModule,
    StepsModule
  ],
  exports: [
    CommonModule,
    FormsModule,

    // PrimeNG Módulos
    ButtonModule,
    TableModule,
    InputTextModule,
    DialogModule,
    TooltipModule,
    DropdownModule,
    CalendarModule,
    ToastModule,
    ProgressSpinnerModule,
    ImageModule,
    PasswordModule,
    FloatLabelModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule, 
    MenubarModule,
    AvatarModule,
    ButtonModule,
    ImageModule,
    RatingModule,
    FieldsetModule,
    PanelModule,
    BrowserAnimationsModule,
    DataViewModule,
    TagModule,
    StepperModule,
    StepsModule,
    ListboxModule,
    InputTextareaModule,
    DividerModule
  ],
})
export class PrimeNgModule {}
