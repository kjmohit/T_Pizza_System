import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Pizza } from '../shared/Pizza';





@Component({
    selector: 'customize-pizza',
    templateUrl: './customize-pizza.component.html',
    styleUrls: ['./customize-pizza.component.scss']
})
export class CustomizePizzaComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: Pizza,
        public dialogRef: MatDialogRef<CustomizePizzaComponent>,
        private cdr: ChangeDetectorRef    ) {
    }

    @ViewChild('form', { static: true }) ngForm: NgForm;

    public pizzaname: any;
    public total: number;

    form: FormGroup = new FormGroup({ 
        cheeseType: new FormControl('', Validators.required),
        35: new FormControl(''),
        americanCorn: new FormControl(''),
        blackOlive: new FormControl('')


    });

    initializeFormGroup() {
    }

    ngOnInit() {
      
        this.pizzaname = this.data.title;
        this.total = this.data.price;
        let g = this.form.get('35');

        this.form.valueChanges.subscribe(() => {
            this.cdr.detectChanges()
        })

       
     
    }

    ngOnChanges() {

        let g = this.form.get('35');

        this.form.valueChanges.subscribe(() => {
            this.cdr.detectChanges()
        })

    }

    onClear() {
    
    }

    onSubmit() {
        if (this.form.valid) {
          
        }
    }

    onClose() {
        this.dialogRef.close();
    }

   

    //populateForm(employee) {
    //    this.form.setValue(_.omit(employee, 'departmentName'));
    //}

}