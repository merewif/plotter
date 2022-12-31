import type {ChartData} from '../../types/types';

export const DefaultPlotChartData = [
  [
    {type: 'number', label: 'Story Progression Percentage'},
    {type: 'number', label: 'Story Stakes'},
  ],
  [0, 0],
  [100, 0],
] as ChartData;
