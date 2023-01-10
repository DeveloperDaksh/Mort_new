import numeral from "numeral";
import { Box, Card, CardContent, CardHeader, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Chart } from "../../chart";
import { GoogleMaps } from "./world-map";
//import USAMap from './map.svg';
// import {}

export const FinanceSalesByContinent = (props) => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#2F3EB1", "#4655CE", "#6E7AD8", "#9DA4DD", "#B9BDDF", "#E6E8F0"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: theme.palette.divider,
    },
    plotOptions: {
      bar: {
        barHeight: "65",
        distributed: true,
        horizontal: true,
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      y: {
        formatter: (value) => numeral(value).format("$0,0.00"),
      },
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: [
        // 'North America',
        // 'South America',
        // 'Europe',
        // 'Australia',
        // 'Asia',
        // 'Africa'
        "Missouri",
        "Ohio",
        "New York",
        "Florida",
        "North Carolina",
        "Texas",
      ],
    },
  };

  const chartSeries = [
    {
      name: "Sales",
      data: [470, 440, 410, 300, 187, 321],
    },
  ];

  return (
    <Card {...props}>
      <CardHeader title="Sales by Region" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <WorldMap
            colors={{
              af: '#E6E8F0',
              as: '#B9BDDF',
              au: '#9DA4DD',
              eu: '#6E7AD8',
              na: '#2F3EB1',
              sa: '#4655CE'
            }}
          /> */}
          <GoogleMaps />
          {/* <USAMap /> */}
        </Box>
        <Chart
          height={350}
          options={chartOptions}
          series={chartSeries}
          type="bar"
        />
      </CardContent>
    </Card>
  );
};
