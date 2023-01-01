import React from 'react';
import {Chart} from 'react-google-charts';
import {ChartOptions, DefaultPlotChartData} from '@utils/static/Plot';
import type {ChartData, ChartEntry} from '../../types/types';
import {useForm} from 'react-hook-form';
import {TextareaAutosize} from '@mui/material';

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
  const {register, handleSubmit, reset} = useForm<ChartFormValues>();

  function addStakes(formData: ChartFormValues) {
    const chartConfig = chartData[0];
    const chartDataWithoutSettings = chartData.slice(1) as Array<ChartEntry>;
    const newChartData = chartDataWithoutSettings.filter(
      (data: ChartEntry) => data[0] !== Number(formData.percentage),
    );
    newChartData.push([Number(formData.percentage), Number(formData.stakes), formData.comment]);
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
    <div className="flex h-full flex-col font-montserrat">
      <div className="mx-auto  flex flex-col text-center text-xl">
        <span className=" text-3xl font-black uppercase">
          Visualize your story with the Plot Chart
        </span>
        <span className=" text-base font-light">
          Add the events of your story to the chart and see how your story flows.
        </span>
      </div>
      <Chart chartType="LineChart" data={chartData} options={ChartOptions} />
      <form className="mt-5 flex flex-col gap-5 pt-5" onSubmit={handleSubmit(addStakes)}>
        <div className="mx-auto ">
          Add
          <input
            className="mx-2 w-10 border border-black text-center  font-black"
            type="text"
            {...register('stakes', {
              pattern: /^[0-9]+$/,
              validate: value => Number(value) > 0 && Number(value) <= 100,
            })}
          />
          Relative Stakes Value at the
          <input
            className="mx-2 w-10 border border-black text-center  font-black"
            type="text"
            {...register('percentage', {
              pattern: /^[0-9]+$/,
              validate: value => Number(value) > 0 && Number(value) <= 100,
            })}
          />
          % mark of the plot with the following comment:
        </div>
        <div className="flex flex-col gap-1">
          <TextareaAutosize
            className="mx-auto w-3/4 border border-black p-2"
            {...register('comment')}
            id="comment-input"
          />
        </div>
        <div className="mx-auto mb-1">
          <button
            className="mx-0.5 rounded border bg-black px-2 text-white hover:border-red-700 hover:bg-red-700 "
            onClick={clearStakes}
          >
            Reset chart
          </button>
          <button
            className="mx-0.5 rounded border bg-black px-2 text-white hover:border-black hover:bg-white hover:text-black"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      <div className="mt-10 flex flex-col pb-10">
        <div className="mx-auto flex w-3/4 flex-col gap-5 px-5 text-base">
          {[...arcSummaries.entries()].map(([percentage, comment]) => (
            <div className="" key={percentage}>
              • At the <span className="font-black">{percentage}%</span> of the story: {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlotChart;
