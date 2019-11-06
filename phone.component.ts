import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {

  public Name = "";
  public Number = 0;
  public Phoneno = [
    {ProductId: 1, Name: 'Manoj', Number: 9776801910},
    {ProductId: 1, Name: 'Sohail', Number: 9876543210},
  ];

  public AddProduct(){
    let id = this.Phoneno.length+1;
    this.Phoneno.push({ProductId: id, Name: this.Name, Number: this.Number});
    alert ('Phone number inserted successfully');
    this.Name = '';
    this.Number = 0;
  }

  public DeleteProduct(index){
    let Confirm = confirm('Are you sure you want to delete?');
    if(Confirm == true){
      this.Phoneno.splice(index, 1);
    }
  }

}
