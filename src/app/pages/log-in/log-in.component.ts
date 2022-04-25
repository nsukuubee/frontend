import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  

  constructor(private routers: Router ) { }

  ngOnInit(): void {
  }

  btnClick = () =>{
    
    this.routers.navigate(['/Home']);
  }

  home()
  {
    this.routers.navigate(['/home'])
  }
}
