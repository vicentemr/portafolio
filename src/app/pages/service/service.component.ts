import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public dataServices = [
    {
      titulo1: 'Facturación Electrónica',
      titulo2: 'Implementación e integración dentro de Netsuite.',
      icono: 'fas fa-th-large',
      modalInfo: [
        {
          nombre: 'Integración con OSE.',
        },
        {
          nombre: 'Envío, lectura y recibimiento del documento electrónico.',
        },
        {
          nombre: 'Automatización de envíos.',
        },
        {
          nombre: 'Guardado de documento electrónico.',
        },
      ],
    },
    {
      titulo1: 'Libros Contables',
      titulo2: 'Implementación e integración dentro de Netsuite.',
      icono: 'fas fa-code',
      modalInfo: [
        {
          nombre: 'Generación de libro contable.',
        },
        {
          nombre: 'Personalizaciones.',
        },
      ],
    },
    {
      titulo1: 'Personalización según cliente',
      titulo2: 'Implementar procesos y automatizaciones personalizadas.',
      icono: 'fas fa-pencil-alt',
      modalInfo: [
        {
          nombre: 'Levantamiento de requerimiento.',
        },
        {
          nombre: 'Desarrollo y pruebas de solución.',
        },
        {
          nombre: 'Pruebas internas y de usuario.',
        },
        {
          nombre: 'Acompañamiento.',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
