import {ChartWrapperOptions} from 'react-google-charts';
import type {ChartData} from '../../types/types';

export const DefaultPlotChartData = [
  [
    {type: 'number', label: 'Story Progression Percentage'},
    {type: 'number', label: 'Story Stakes'},
    {role: 'tooltip', type: 'string'},
  ],
  [0, 0, 'Beginning'],
  [100, 0, 'End'],
] as ChartData;

export const ChartOptions = {
  title: 'Story Progression',
  titleTextStyle: {
    bold: false,
    italic: true,
  },
  colors: ['#000', '#000'],
  height: 500,
  vAxis: {
    baseline: 100,
    title: 'Stakes & Tension',
  },
  fontName: 'Cormorant Garamond',
  fontSize: 25,
  legend: 'none',
  curveType: 'function',
  tooltip: {
    trigger: 'hover',
    textStyle: {
      fontName: 'Montserrat',
      fontSize: 15,
    },
  },
  selectionMode: 'multiple',
  aggregationTarget: 'series',
  animation: {
    duration: 1000,
    easing: 'inAndOut',
  },
  enableInteractivity: true,
  hAxis: {
    gridlines: {
      color: '#fff',
    },
  },
  pointShape: 'polygon',
  pointSize: 10,
  pointsVisible: true,
};
