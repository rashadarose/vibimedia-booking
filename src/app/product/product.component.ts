import { Component, ViewChild } from '@angular/core';
import { JsonPipe, NgFor } from '@angular/common';
import { NgForm, FormsModule, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { NodeapiService } from '../nodeapi.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

   @ViewChild('heroForm', { static: false }) form!: NgForm;

  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    // aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  // get aliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }

  constructor(private formBuilder: FormBuilder, private nodeapiService: NodeapiService, private http: HttpClient) {}

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  // addAlias() {
  //   this.aliases.push(this.formBuilder.control(''));
  // }

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.log(this.profileForm.value.firstName);
  
  //   //this.postData();
  // }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

   model :any = {'name':'Dr. IQ', 'age':34, 'address':'1818 Fannin Way', 'phoneNumber':'973-752-8237', 'power':this.powers[0], 'alterego':'Chuck Overstreet'};

   postData(){
      const infoData = {
        'name':this.model.name,
        "age": this.model.age,
        "address": this.model.address,
        "phoneNumber": this.model.phoneNumber
      }

       console.log(infoData);
      this.nodeapiService.postData(infoData).subscribe({
        next: () =>{
          console.log(infoData);
          console.log("hello");
        }
      })
     }




  

 

  submitted = false;

  onSubmit() { 
       console.log(this.model.name);
       console.log(this.form.value.name);
    }


  // newHero() {
  //   this.model = new Object('id': 42, '', '');
  // }

 

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

}
