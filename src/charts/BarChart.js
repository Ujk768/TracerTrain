import React,{useState,useEffect} from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)
export default function BarChart() {

    const [chart,setChart]=useState([])


    

    const option = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '98827f07b1msh27dc18c1dd92d69p1dd176jsn13371cb4b58d',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
};


    useEffect(() => {
        const fetchData= async ()=>{
            await fetch('https://coinranking1.p.rapidapi.com/coins?limit=10"referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', option)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
        }
        fetchData()
    }, )
    
   let data= {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    let options={
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend:{
            fontSize:26
        }

    }

  return (
    <div>
        <Bar
        height={400}
        data={data}
        options={options}
        
        />
    </div>
  )
}
