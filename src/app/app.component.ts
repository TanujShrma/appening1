import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'appening';
  testData : any;
  searchedTitle: any;

  constructor(private myService: MyServiceService){
   
  }

  ngOnInit(){
    this.myService.getData().subscribe(data =>{
      this.testData = data;
    })
  }

  search(){
    if(this.searchedTitle != ""){
      this.testData = this.testData.filter((data: any) => {
        return data.title.toLocaleLowerCase().match(this.searchedTitle.toLocaleLowerCase())})      
    }else{
      this.ngOnInit();
    }
  }
    
}
