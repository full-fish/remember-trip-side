import React from 'react';

const moment = require('moment');

function MyPageList(props) {
  console.log('props 내려옴');
  console.log(props);
  return (
    <div>
      {props.country}Trip, total{props.totalCost},
      {moment(props.start_date).diff(moment(props.end_date), 'days')}days
    </div>
  );
}

export default MyPageList;
