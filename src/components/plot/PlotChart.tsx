import React, {useState} from 'react';
import {Chart} from 'react-google-charts';
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
  arcSummaries: Map<number, string>;
  saveChart: (chartData: ChartData, arcSummaries: Map<number, string>) => void;
}

interface ChartFormValues {
  stakes: number;
  percentage: number;
  comment: string;
}

const PlotChart = ({chartData, arcSummaries, saveChart}: Props) => {
  const [curveType, setCurveType] = useState('function');
  const {register, handleSubmit, reset} = useForm<ChartFormValues>();

  function addStakes(formData: ChartFormValues) {
    const chartConfig = chartData[0];
    const chartDataWithoutSettings = chartData.slice(1) as Array<ChartEntry>;
    const newChartData = chartDataWithoutSettings.filter(
      (data: ChartEntry) => data[0] !== Number(formData.percentage),
    );
    newChartData.push([Number(formData.percentage), Number(formData.stakes)]);
    newChartData.sort((a: ChartEntry, b: ChartEntry) => a[0] - b[0]);
    const newArcSummaries = new Map(arcSummaries);
    newArcSummaries.set(Number(formData.percentage), formData.comment);
    saveChart([chartConfig, ...newChartData], newArcSummaries);
    reset();
  }

  function clearStakes() {
    saveChart(DefaultPlotChartData, new Map());
    reset();
  }

  return (
    <>
      <FormControl>
        <RadioGroup
          row
          name="radiobtns"
          style={{display: 'flex', flexDirection: 'row', gap: 20}}
          defaultValue="function"
          onChange={e => setCurveType(e.target.value)}
        >
          <FormControlLabel value="function" control={<Radio />} label="Curved Lines" />
          <FormControlLabel value="none" control={<Radio />} label="Jagged Lines" />
        </RadioGroup>
      </FormControl>
      <Chart chartType="LineChart" data={chartData} options={{...options, curveType}} />
      <form
        className="mt-5 flex flex-col gap-5 border-t-4 border-black pt-5"
        onSubmit={handleSubmit(addStakes)}
      >
        <div>
          Add
          <input
            className="mx-2 w-10 border border-black"
            type="text"
            {...register('stakes', {
              pattern: /^[0-9]+$/,
              validate: value => Number(value) > 0 && Number(value) <= 100,
            })}
          />
          Relative Stakes Value at the
          <input
            className="mx-2 w-10 border border-black"
            type="text"
            {...register('percentage', {
              pattern: /^[0-9]+$/,
              validate: value => Number(value) > 0 && Number(value) <= 100,
            })}
          />
          % mark of the plot with the following comment:
        </div>
        <div className="flex flex-col gap-1">
          <textarea
            className="mx-auto border border-black"
            {...register('comment')}
            id="comment-input"
          />
        </div>
        <div>
          <button className="mx-0.5 bg-black px-1 text-white" type="submit">
            Add
          </button>
          <button className="mx-0.5 bg-black px-1 text-white" onClick={clearStakes}>
            Clear
          </button>
        </div>
      </form>

      {[...arcSummaries.entries()].map(([percentage, comment]) => (
        <div key={percentage}>
          {percentage}%: {comment}
        </div>
      ))}
    </>
  );
};

export default PlotChart;
