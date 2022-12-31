import React, {useEffect, useState} from 'react';
import {Chart} from 'react-google-charts';
import SaveButton from '../mui/AnimatedSaveButton';
import {DefaultPlotChartData} from '../../utils/static/Plot';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import type {ChartData, ChartEntry} from '../../types/types';
import {useForm} from 'react-hook-form';

const options = {
  title: 'Story Arc',
  titleTextStyle: {
    bold: false,
    italic: true,
  },
  legend: {position: 'bottom'},
  colors: ['#000', '#000'],
  height: 450,
  vAxis: {
    baseline: 100,
    title: 'Stakes & Tension',
  },
  fontName: 'Cormorant Garamond',
  fontSize: 25,
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
interface Props {
  chartData: ChartData;
  saveChart: (chartData: ChartData) => void;
}

interface ChartFormValues {
  stakes: number;
  percentage: number;
  comment: string;
}

const PlotChart = ({chartData, saveChart}: Props) => {
  const [curveType, setCurveType] = useState('function');
  const {register, handleSubmit, reset} = useForm<ChartFormValues>();

  function addStakes(formData: ChartFormValues) {
    const chartSettings = chartData[0];
    const chartDataWithoutSettings = chartData.slice(1) as Array<ChartEntry>;
    const newChartData = chartDataWithoutSettings.filter(
      (data: ChartEntry) => data[0] !== formData.percentage,
    );
    newChartData.push([Number(formData.percentage), Number(formData.stakes), formData.comment]);
    newChartData.sort((a: ChartEntry, b: ChartEntry) => a[0] - b[0]);
    saveChart([chartSettings, ...newChartData]);
    reset();
  }

  function clearStakes() {
    saveChart(DefaultPlotChartData);
    reset();
  }

  return (
    <>
      <Chart chartType="LineChart" data={chartData} options={{...options, curveType}} />
      <form id="chart-input" onSubmit={handleSubmit(addStakes)}>
        <label>
          Add
          <input type="text" {...register('stakes', {required: true})} />
          Relative Stakes Value at the
          <input type="text" {...register('percentage', {required: true})} />
          % mark of the plot with the following comment:
          <input type="text" {...register('comment')} id="comment-input" />
        </label>
        <button type="submit">Add</button>
        <button onClick={clearStakes}>Clear</button>
      </form>
      <div id="radio-btns">
        <FormControl>
          <RadioGroup
            row
            name="radiobtns"
            defaultValue="function"
            onChange={e => setCurveType(e.target.value)}
          >
            <FormControlLabel
              value="function"
              control={<Radio />}
              label="Curved Lines"
              labelPlacement="start"
            />
            <FormControlLabel value="none" control={<Radio />} label="Jagged Lines" />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};

export default PlotChart;
