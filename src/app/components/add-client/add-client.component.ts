import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  
  myClient = {
    name: '',
    phone: '',
    email: '',
    balance: 0
  }

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  persistClient() {
    this.clientService.addClient(this.myClient)
                      .then(res => console.log(res))
                      .catch(err => console.log(err))
  }

}
