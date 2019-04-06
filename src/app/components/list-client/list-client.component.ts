import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  
  clients:any[] = [];
  constructor(private clientService: ClientService) { }

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

}
