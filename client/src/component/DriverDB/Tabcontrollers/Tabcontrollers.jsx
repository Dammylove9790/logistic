import React, { Component, useEffect, useState } from 'react'
import './Tabcontrollers.scss'
import Tabcontroller from '../Tabcontroller/Tabcontroller'
import {RxDashboard} from 'react-icons/rx'
import {DBcontroller, passengercontroller } from '../../../content/DBcontroller'
import { images } from '../../../asset'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Tabcontrollers() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    return (
      navigate('/tab')
    )
  }
  return (
    <div className='Tabcontrollers'>
        <div className='Tabcontrollers__con'>
        {
          passengercontroller.map((item, index) => {
            return(
              <Tabcontroller label={item.label} icon={item.icon} key={index} href={item.href}/>
            )
          })
        }
        <div className="getApp flex">
          <div className="getApp__content">
            <p className="small-title p-text">Get Mobile App</p>
            <div className="img__con flex">
              <img src={images.playStoreLogo} alt="play store" />
              <img src={images.appLogo} alt="apple store" />
            </div>
          </div>
          <img src={images.iphones} alt=""  className='iphones'/>
        </div>
      </div>
    </div>
  )
}

export default Tabcontrollers