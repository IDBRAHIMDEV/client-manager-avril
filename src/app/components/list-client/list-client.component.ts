import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  total = 0;
  clients:any[] = [];
  constructor(private clientService: ClientService, private flashMessage: FlashMessagesService,) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.getClients()
                      .subscribe((response: any[]) => {
                        this.clients = response;
                        this.total = this.totalBalances();
                        console.log(response)
                      })
  }

  removeClient(id) {
    this.clientService.deleteClient(id)
                      .then(res => {
                        this.flashMessage.show('Client deleted', {
                          cssClass: 'alert-warning',
                          timeout: 3000
                        });
                      })
  }

  toggleStatus(client: Client) {
     this.clientService.setStatusClient(client)
          .then(res => {
            console.log(res);
            // this.flashMessage.show('Client ', {
            //   cssClass: 'alert-warning',
            //   timeout: 3000
            });
  }
  
  
totalBalances() {
   return this.clients.reduce((total, client) => {
     return total + parseFloat(client.balance);
   }, 0)
}
          

}
