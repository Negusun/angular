import { Component, OnInit } from '@angular/core';
import { NgForm }  from "@angular/forms";
import { Heroe }  from "../../interface/heroe.interface";
import { HeroesService } from "../../services/heroes.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe : Heroe = {
    nombre:"",
    bio:"",
    casa:""
  }

  constructor(private router:Router, private _heroesService: HeroesService) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.heroe);
    this._heroesService.nuevoHeroe(this.heroe)
    .subscribe(
      data=>{
        this.router.navigate(['/heroe',data.name]);
      },
      error=>{
        console.error(error);
      }
  )
  }

}