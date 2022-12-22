import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProvider } from 'src/app/Features/prediction/data-form/formprovider.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
  providers: [{ provide: FormProvider, useClass: DataFormComponent }]
})
export class DataFormComponent extends FormProvider implements OnInit {

  dataForm: FormGroup<any>;

  constructor(private fb: FormBuilder) {
    super();
    this.dataForm = this.fb.group({

    });
  }

  ngOnInit(): void {
  }

  getForm(): FormGroup<any> {
    return this.dataForm;
  }

}
