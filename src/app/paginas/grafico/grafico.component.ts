import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.sass']
})
export class GraficoComponent implements OnInit {
	 
	LineChart=[];
	chart = [];
	chart2 = [];	


  constructor() { }

  ngOnInit() {

  	//chart
  	this.chart = new Chart('bar', {
  		type:'bar',
  		options: {
  			responsive:true,
  			title: {
  				display:true,
  				text:'Procura / Lista Compras do mês'
  			},
  		},
  		data: {
  			labels:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
  			datasets:[{
  				type:'bar',
  				label:'Feminino',
  				data:[443,256,165,10,156,265,356,543,443,256,165,10],  				
  				backgroundColor:'rgba(255,0,255,0.4)',
  				borderColor:"rgba(255,0,255,0.4)",
  				fill:false,  				
  			},
  			{
  				type:'bar',
  				label:'Masculino',
  				data:[443,256,165,10,156,265,356,543,443,256,165,10].reverse(),  				
  				backgroundColor:'rgba(0,0,255,0.4)',
  				borderColor:"rgba(0,0,255,0.4)",
  				fill:false,  				
  			},
  			]
  		}
  	});

  	//LineChart
  	this.LineChart = new Chart('lineChart', {
  		type:'line',
  		data: {
  			labels:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
  			datasets:[{
  				label:'Número de alimentos adicionados no mês',
  				data:[9,7,3,5,2,10,15,16,19,3,1,9],
  				fill:false,
  				lineTension:0.2,
  				borderColor:"red",
  				borderWidth:1
  			}]
  		},
  		options:{
  			title:{
  				text:"Alimentos / Mês",
  				display:true
  			},
  			scales:{
  				yAxes:[{
  					ticks:{
  						beginAtZero:true
  					}
  				}]
  			}
  		}
  	})
  }

}
