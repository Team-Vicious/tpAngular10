import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/Entity/Instrumento';
import { InstrumentService } from 'src/app/services/instrument.service';
//import {InstrumentService} from 'src/app/services/instrument.service';


@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {

  instrumArray:any[]= [];
  constructor(private router: Router,
    private instrumentoService: InstrumentService,
    private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.instrumentoService.listar().subscribe( instrumentos => {
      this.instrumArray = instrumentos as Instrumento[];
    })
    
    console.log(this.instrumArray);
  }

  public verInstrumento(idx:string){
    console.log("ID INSTRUMENTO " + idx);
    this.router.navigate(['/detalleInstrumento', idx])
  }

 
  envio(envio:string){
    if (envio == 'G') {
            
            
      return true;
  }else{
      return false;
  }
  }

  //pasar imagenes de bytes a img
  formatImage(img: any): any {
    return 'data:image/jpeg;base64,' + img;
  }

}
