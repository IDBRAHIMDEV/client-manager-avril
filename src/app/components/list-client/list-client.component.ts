import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  
  clients:any[] = [];
  constructor(private clientService: ClientService, private flashMessage: FlashMessagesService,) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.getClients()
                      .subscribe((response: any[]) => {
                        this.clients = response;
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

}
