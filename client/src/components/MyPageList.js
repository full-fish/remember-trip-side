import React from 'react';

const moment = require('moment');

function MyPageList(props) {
  console.log('props 내려옴');
  console.log(props);
  const startDate = props.start_date.split('/');
  const endDate = props.end_date.split('/');
  startDate[0] = Number(startDate[0]);
  startDate[1] = Number(startDate[1]);
  startDate[2] = Number(startDate[2]);
  endDate[0] = Number(endDate[0]);
  endDate[1] = Number(endDate[1]);
  endDate[2] = Number(endDate[2]);

  return (
    <div>
      {props.country}Trip, total{props.totalCost},
      {moment(endDate).diff(moment(startDate), 'days')}days
    </div>
  );
}

export default MyPageList;
