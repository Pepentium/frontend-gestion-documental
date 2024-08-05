import type { Expediente } from '../types/expediente';

export const mockData: Expediente[] = [
  {
    numeracion: '001',
    serie: 'Serie A',
    subserie: 'Subserie A1',
    descripcion: 'Descripción de la subserie A1',
    origen: 'Digital',
    condiciones: 'Público',
    periodo: '2022-2023'
  },
  {
    numeracion: '002',
    serie: 'Serie B',
    subserie: 'Subserie B1',
    descripcion: 'Descripción de la subserie B1',
    origen: 'Físico',
    condiciones: 'Confidencial',
    periodo: '2023-2024'
  },
  // Agrega más datos según sea necesario
];
