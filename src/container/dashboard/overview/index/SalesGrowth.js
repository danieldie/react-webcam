import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Spin } from 'antd';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link, useAsyncError } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';
import { BorderLessHeading } from '../../../styled';
import { CardBarChart, ChartContainer } from '../../Style';
import config from '../../../../config/config';
import chartData from '../../../../demoData/dashboardChartContent.json';
import { DataService } from '../../../../config/dataService/dataService';

const SalesGrowth = React.memo(() => {

  const value = useSelector((state) => state.search.data);
  const salesGrowthData = chartData.salesGrowth;
  const { mainContent } = useSelector((state) => {
    return {
      mainContent: state.ChangeLayoutMode.mode,
    };
  });

  const [chartjsPieChart, setChartjsPieChart] = useState({});

  const [state, setState] = useState({
    sellingTab: 'today',
  });

  /* State destructuring */
  const { sellingTab } = state;
  const { themeColor } = config;
  useEffect(() => {
    getChartjsPieChartData()
  }, [value]);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const getChartjsPieChartData = async () => {
    try {
      const response = await DataService.post('/dashboard/get-manufacturer-breakdown-summary', value)

      const labels = []
      const datas = [];
      const backgroundColor = ['#560bd0', '#3679e9', '#d52027'];
      const additionalColorsCount = response.data.data.length - backgroundColor.length;
      if (additionalColorsCount > 0) {
        for (let i = 0; i < additionalColorsCount; i++) {
          backgroundColor.push(generateRandomColor()); // You can use a function to generate random colors
        }
      }
      response.data.data.map((item) => {
        labels.push(item['Name'])
        datas.push(item['Value'])
      })
      const tmpChartjsData = {
        height: 300,
        labels: labels,
        datasets: [
          {
            data: datas,
            backgroundColor: backgroundColor,
          },
        ],
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },

        option: {
          borderColor: themeColor[mainContent]['white-background'],
          maintainAspectRatio: false,
          responsive: true,
        },
        tooltip: {
          mode: 'index',
          callbacks: {
            label(t) {
              const { dataset, label, dataIndex } = t;
              return `  ${label} ${dataset.data[dataIndex]}`;
            },
            labelColor({ dataIndex, dataset }) {
              return {
                backgroundColor: dataset.backgroundColor[dataIndex],
                borderColor: 'transparent',
              };
            },
          },
        },
        legend: {
          display: true,
          position: 'right',
          align: 'center',
          labels: {
            boxWidth: 6,
            display: true,
            usePointStyle: true,
          },
        },
      };
      setChartjsPieChart(tmpChartjsData)
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  return (
    <BorderLessHeading>
      <Cards
        // isbutton={
        //   <div className="ninjadash-card-nav">
        //     <ul>
        //       <li className={sellingTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
        //         <Link onClick={(e) => handleChangePeriod('today', e)} to="#">
        //           Today
        //         </Link>
        //       </li>
        //       <li className={sellingTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
        //         <Link onClick={(e) => handleChangePeriod('week', e)} to="#">
        //           Week
        //         </Link>
        //       </li>
        //       <li className={sellingTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
        //         <Link onClick={(e) => handleChangePeriod('month', e)} to="#">
        //           Month
        //         </Link>
        //       </li>
        //     </ul>
        //   </div>
        // }
        title="Manufacturer Breakdown"
      >
        {!salesGrowthData[sellingTab] ? (
          <div className="sd-spin">
            <Spin />
          </div>
        ) : (
          <CardBarChart className="ninjadash-profitGroth-barCHar-wrap">
            <ChartContainer>
              <div className="ninjadash-chart-container">
                <DashboardChart {...chartjsPieChart} type="pie" id="pieChart" />
              </div>
            </ChartContainer>
          </CardBarChart>
        )}
      </Cards>
    </BorderLessHeading>
  );
});

export default SalesGrowth;
