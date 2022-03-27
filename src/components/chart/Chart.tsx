import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./chart.css";

interface ChartProps {
  titleChart: string;
  data: Array<any>;
  dataName: string;
  dataKey: string;
}

function Chart({ titleChart, data, dataName, dataKey }: ChartProps) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{titleChart}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={dataName} stroke="#550BD3" />
          <YAxis />
          <Line type="monotone" dataKey={dataKey} />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Chart;
