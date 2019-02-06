import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) {

  this.cargarProductos();

   }

   private cargarProductos() {

    this.http.get('https://angular-html-5e48e.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto[] ) => {

      this.productos = resp;
      this.cargando = false;

    });

   }

   public getProducto( id: string){

     return this.http.get(`https://angular-html-5e48e.firebaseio.com/productos/${ id }.json`);

    }
 }

