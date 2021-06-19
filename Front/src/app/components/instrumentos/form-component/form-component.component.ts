import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/Entity/Instrumento';
import { InstrumentService } from 'src/app/services/instrument.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  instrumento:Instrumento = new Instrumento();
  intrumentoActualizar:boolean = false;
  fotoSeleccionada!: File;
  validadorFoto!: Number;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private instrumentoService: InstrumentService) { }

  ngOnInit(): void {
    alert("Tiene que ingresar una foto antes de actualizar!")
    
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.instrumentoService.ver(params['id']).subscribe( instrumentos => {
        this.instrumento = instrumentos as Instrumento;
        this.intrumentoActualizar = true;
  
      })
      
    }); 
  }

  crear(){
    
    this.instrumentoService.crearConFoto(this.instrumento,this.fotoSeleccionada).subscribe(inst => {
      console.log("registrado con exito usuario: "+inst.instrument);
      alert("instrumento creado!")

      this.router.navigate(['/instrumentos'])
      
    })
  }

  actualizar(){
    this.instrumentoService.editarConFoto(this.instrumento,this.fotoSeleccionada).subscribe(inst => {
      console.log("registrado con exito usuario: "+inst.instrument);
      alert("instrumento editado!")

      this.router.navigate(['/instrumentos'])
      
    })
  }

  //FOTO
  //pasar imagenes de bytes a img
  formatImage(img: any): any {
    return 'data:image/jpeg;base64,' + img;
  }

   seleccionarFoto(event: any): void{
    this.validadorFoto = 0;
    this.fotoSeleccionada = event.target.files[0];
    console.info(this.fotoSeleccionada);
    this.validadorFoto = 1;

    if (this.fotoSeleccionada.type.indexOf('image') < 0) {
      alert('El archivo deber del tipo imagen');
    }
  }
}
