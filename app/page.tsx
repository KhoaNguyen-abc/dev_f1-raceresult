'use client'
import Image from 'next/image'
import { useState } from 'react'
import * as THREE from 'three';
import {changeOptionsYear, changeOptionsCategories, changeOptionsAll, changeDanta} from './handler'

export default function Home() {
  const [year, setYear] = useState('2023');
  const [categories, setCategories] = useState('RACES');
  const [others, setOthers] = useState('ALL');

  const handleChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value)
  }

  const handleChangeCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategories(e.target.value)
  }

  const hnadleChangeOthers = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOthers(e.target.value)
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <h1>F1 RACE RESULTS</h1>
        <h1>Email: in.khoaitvn@gmail.com</h1>
        <div className="row" style={{display: "flex"}}>
          <div className="col" style={{marginLeft: "2%"}}>
            <h3>Season</h3>
            <h3>Choose year:{year}</h3>
            <select onChange={handleChangeYear}>
              {
                changeOptionsYear().map((item:any) => (
                  <option key={item} value={item}>{item}</option>
                ))
              }
            </select>
          </div>
          {/* <div className="col" style={{marginLeft: "2%"}}>
            <h3>Categories</h3>
            <h3>Choose categories:{categories}</h3>
            <select>
              <option value="RACES" selected>RACES</option>
              {
                changeOptionsCategories().map((item:any) => (
                  <option key={item} value={item}>{item}</option>
                ))
              }
            </select>
          </div> */}
          {/* <div className="col" style={{marginLeft: "2%"}}>
            <h3>Others</h3>
            <h3>Choose others:{others}</h3>
            <select>
                <option value="ALL" selected>ALL</option>
                {
                  changeOptionsAll().map((item:any) => (
                    <option key={item} value={item}>{item}</option>
                  ))
                }              
              </select>
          </div> */}
        </div>
        <div className="row">
          <div className="col">
                {changeDanta(year)}
                <table>
                  <thead>
                    <tr>
                      <th>GRAND PRIX</th>
                      <th>DATE</th>
                      <th>WINNER</th>
                      <th>CAR</th>
                      <th>LAPS</th>
                      <th>TIME</th>
                    </tr>
                  </thead>
                  <tbody id="bodyContent">

                    <tr>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
          <div className="col">
              <h2>F1 results INTERVIEW</h2>
          </div>
        </div>
    </main>
  )
}
