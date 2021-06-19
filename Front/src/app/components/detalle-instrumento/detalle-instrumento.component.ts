import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/Entity/Instrumento';
import { InstrumentService } from 'src/app/services/instrument.service';
//import {InstrumentService} from 'src/app/services/instrument.service'; 


@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent implements OnInit {

  instrumento: Instrumento = new Instrumento();

  constructor(private activatedRoute:ActivatedRoute,
    private instrumentoService: InstrumentService,
    private router: Router) {
   // console.log("ID PARAM " + this.activatedRoute.params['id']);
    
  }

  envio(envio:string){
    if (envio == 'G') {
      return true;
    }else{
      return false;
    }
  }
  ngOnInit(): void {
    
    
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.instrumentoService.ver(params['id']).subscribe( instrumentos => {
        this.instrumento = instrumentos as Instrumento;
  
      })
      
    }); 
  }

  //pasar imagenes de bytes a img
  formatImage(img: any): any {
    return 'data:image/jpeg;base64,' + img;
  }

  eliminar(){
    this.instrumentoService.eliminar(this.instrumento.id).subscribe( aux =>{
      alert("eliminado");
    })
    this.router.navigate(['/instrumentos'])
  }
}

 


