import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

  const getAllValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const getMaxValue = Math.max(...getAllValue);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={getMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
