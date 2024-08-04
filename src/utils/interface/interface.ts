interface CustomBarInterface {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
}

interface ActivityChartProps {
  data: { name: string; pv: number }[];
}

interface FeedBackProps {
  data: {
    img: string;
    name: string;
    star: number;
    comment: string;
  }[];
}

interface NetProfitProps {
  data: {
    amount: string;
    profit: number;
    percent: number;
  };
}

interface OrderStatusprops {
  data: {
    id: number;
    content: string;
    count: string;
    percent: number;
  }[];
}

interface RecentOrderProps {
  data: {
    name: string;
    img: string;
    orderno: string;
    amount: string;
    status: string;
  }[];
}

export type {
  CustomBarInterface,
  ActivityChartProps,
  FeedBackProps,
  NetProfitProps,
  OrderStatusprops,
  RecentOrderProps,
};
