import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  data: any = [];
  url: string;
  dataToModal = {};
  private modalElementId = 'myModal';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.httpClient.get('api/v1/site_info/').subscribe((data: any) => {
      this.data = data.reverse();
    });
  }

  crawlSite() {
    this.httpClient.get('api/v1/site_crawel/?url=' + this.url).subscribe(
      (data: any) => {
        this.url = null;
        this.loadData();
      },
      (error: any) => {
        alert(error.error.message);
      }
    );
  }

  toggle(data: any = {}) {
    this.dataToModal = data;

    if (document.getElementById(this.modalElementId).style.display === 'none') {
      document.getElementById(this.modalElementId).style.display = 'block';
    } else {
      document.getElementById(this.modalElementId).style.display = 'none';
    }
  }
}
