import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Widget from '../../Components/widget/Widget'
import Featured from '../../Components/featured/Featured'
import Chart from '../../Components/chart/Chart'
import Table from '../../Components/Table/Table'
import '../home/home.scss'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className='homeContainer'>
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className='charts'>
            <Featured />
            <Chart aspect={2 / 1} title="Last 6 Months ( Revenue )"/>
          </div>
          <div className="listContainer">
            <div className="listTitle">
              Latest Transactions
            </div>
            <Table />
          </div>
        </div>
    </div>
  )
}

export default Home