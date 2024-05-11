"use client"

import { useState, useEffect } from "react"
import styles from './Barchart.module.css'

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    plugins
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart() {

    const [chartData, setChartData] = useState({
        datasets:[]
    })

    const [chartOptions, setChartOptions,] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Asset', 'Licenses', 'Accessories', 'Consumables', 'Component' ],
            datasets:[
                {
                    labels: 'Asset as Status',
                    data: [12, 34, 56, 78, 90],
                    borderColor: 'rgb(0, 0, 0)',
                    backgroundColor: 'rgb(0, 0, 0)'
                }
            ]
        })

        setChartOptions({

            maintainAspectRation: true,
            responsive: true
        })
    }, [])

    return (
    <>
        <div className={styles.container}>
        <   Bar data={chartData} options={chartOptions} />
        </div>
    </>
  )
}
