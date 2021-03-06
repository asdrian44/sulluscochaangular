import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlAPI} from './urlAPI';
import {map} from 'rxjs/operators';

export interface DetalleReporte {
    codigo: string;
    descripcion: string;
    modelo: string;
    marca: string;
    color: string;
    talla: string;
    tipo: string;
    unidadMedida: string;
    entradas: number;
    salidas: number;
    stock: number;
    sumaTotales: number;
    precioUnitario: number;
    existenciasEntradas: number;
    existenciasSalidas: number;
    totalExistencias: number;
}

export interface ReporteModel {
    existenciasSalidas: number;
    totalExistencias: number;
    detalles: DetalleReporte[];
}

@Injectable({
    providedIn: 'root'
})
export class CardsServiceService {


    constructor(private http: HttpClient, private URL: UrlAPI) {
    }

    getCountRequerimientos() {


        return this.http.get(this.URL.getURL() + 'inventario/requerimiento/count');

    }

    getCountProductos(): Observable<any> {

        return this.http.get(this.URL.getURL() + 'inventario/product/count');
    }

    getCountEntradas() {
        return this.http.get(this.URL.getURL() + 'inventario/movimientos/count/entrada');
    }

    getCountSalidas() {

        return this.http.get(this.URL.getURL() + 'inventario/movimientos/count/salida');
    }

    ultimosProductos() {
        return this.http.get(this.URL.getURL() + 'inventario/dashboard/lastProduct');

    }

    requerimientoRechazado() {


        return this.http.get(this.URL.getURL() + 'inventario/dashboard/lastRequest/rechazadas');
    }

    requerimientoAceptado() {
        return this.http.get(this.URL.getURL() + 'inventario/dashboard/lastRequest/aceptados');

    }

    requerimientoEspera() {
        return this.http.get(this.URL.getURL() + 'inventario/dashboard/lastRequest/espera');

    }

    cargarReporte(): Observable<ReporteModel> {

        return this.http.get(this.URL.getURL() + 'inventario/reporte').pipe(map((value: ReporteModel) => {
            return value;
        }));
    }


}
