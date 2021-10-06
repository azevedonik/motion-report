import React, { FunctionComponent } from 'react';
import { Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import Layout from '../../components/Layout';

interface ReportProps {
  reportId?: string;
}

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      cubicInterpolationMode: 'monotone',
    },
  ],
};

const Report: FunctionComponent<ReportProps> = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Line data={data} />
      </Grid>
    </Layout>
  );
};

export default Report;
