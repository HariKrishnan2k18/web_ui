import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "./styled.components";
import {
  ActivityChartProps,
  CustomBarInterface,
} from "../../utils/interface/interface";

const CustomBar = (props: CustomBarInterface) => {
  const { x, y, width, height, fill } = props;
  const barWidth = 20;
  const offsetX = width && (width - barWidth) / 2;
  const xaxisWidth = x && offsetX && x + offsetX;

  return (
    <rect
      x={xaxisWidth}
      y={y}
      width={barWidth}
      height={height}
      fill={fill}
      rx={10}
    />
  );
};

const ActivityChart = (props: ActivityChartProps) => {
  return (
    <ChartContainer>
      <h3>Activity</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            radius={[10, 10, 10, 10]}
            shape={<CustomBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ActivityChart;
