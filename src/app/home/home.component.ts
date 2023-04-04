import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../apiservice.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['id','image', 'name', 'real name', 'brief summary'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ComicDataAll: any;
  newComicDataAll: any;
  viewCharacterDetail: any;
  showLoader:boolean=false;
  constructor(private http: HttpClient, private apiservice: ApiserviceService, private router:Router) {
    
 
    this.dataSource = new MatTableDataSource<any>();
   }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
 
   this.getComicData();
    
  }

getComicData(){
  
this.showLoader=true;
  this.apiservice.getCharacters().subscribe((data)=>{
    this.showLoader=false;
    this.ComicDataAll = data;
    this.newComicDataAll = this.ComicDataAll.results;
    console.log(this.newComicDataAll, "data");
    
    const sortedData = this.newComicDataAll.sort((a:any, b:any) => {
      const dateA = new Date(a.date_last_updated);
      const dateB = new Date(b.date_last_updated);
      return dateB.getTime() - dateA.getTime();
    });
    this.dataSource = new MatTableDataSource(sortedData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  });
    
}


goToDetail(row: any) {
  this.router.navigate(['character-detail', row.id], { state: { row } });
}


  applyFilter(event: Event) {  
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



