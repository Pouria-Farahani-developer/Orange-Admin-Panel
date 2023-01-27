import React from 'react'
import '../single/single.scss'
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import Chart from "../../Components/chart/Chart"
import List from "../../Components/Table/Table"

function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButtons">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">jan doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemvalue">jandoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemvalue">+1 2313 12 14</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemvalue">Elton st. 234 Garden Yd. NewYork</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemvalue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Month )" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single