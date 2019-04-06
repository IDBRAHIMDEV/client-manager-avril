import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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

  constructor(
        private clientService: ClientService,
        private flashMessage: FlashMessagesService,
        private router: Router) { }

  ngOnInit() {
  }

  persistClient() {
    this.clientService.addClient(this.myClient)
                      .then(res => {
                       
                        this.flashMessage.show('Client added', {
                          cssClass: 'alert-success',
                          timeout: 3000
                        });

                        this.router.navigate(['/clients']);
                      })
                      .catch(err => console.log(err))
  }

}
