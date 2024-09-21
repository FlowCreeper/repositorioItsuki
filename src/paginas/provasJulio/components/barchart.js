import { Grid2 as Grid } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';

export default function BasicBars({ groups = ['group A', 'group B', 'group C'], datas = [[0,1,3], [8,2,5], [0,2,3]]}) {
  const [datalist, setDataList] = useState([])
  useEffect(() =>{
    const formattedData = datas.map((e) => ({data: e}))
    setDataList(formattedData)
  }, [datas])
  
  return (
    <Grid container display={'flex'} columnSpacing={1} rowSpacing={1} justifyContent={'center'}>
      <BarChart
        xAxis={[{ scaleType: 'band', data: groups }]}
        series={datalist}
        width={1080}
        height={400}
      />
    </Grid>
  );
}
