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
  				label:'Carne',
  				data:[443,256,165,10,156,265,356,543,443,256,165,10],  				
  				backgroundColor:'rgba(255,0,255,0.4)',
  				borderColor:"rgba(255,0,255,0.4)",
  				fill:false,  				
  			},
  			{
  				type:"line",
  				label: "Verdura/Legume",
  				backgroundColor: 'rgba(0,0,255,0.4)',
  				borderColor:'rgba(0,0,255,0.4)',
  				data: [
  					10,30,50,10,56,65,35,543,543,543
  				],
  				fill:true,
  			},
  			{
  				type:'bar',
  				label:'Fruta',
  				data:[443,256,165,10,156,265,356,543,443,256,165,10].reverse(),  				
  				backgroundColor:'rgba(0,0,255,0.4)',
  				borderColor:"rgba(0,0,255,0.4)",
  				fill:false,  				
  			},
  			]
  		}
  	});

  	//Doughnut
  	new Chart('doughnut',{
  		type:'doughnut',
  		options: {
  			responsive:true,
  			title: {
  				display:true,
  				text:'Idade / Usuários'
  			},legend: {
  				position:'top',
  			}, animation: {
  				animateScale:true,
  				animateRotate:true
  			}
  		},
  		data: {
  			datasets:[{
  				data:[45,10,5,25,15],
  				backgroundColor:["#4d4dff","#d24dff","#ff4da6","#4dff4d","#ff944d"],
  				label:'Dataset 1'
  			}],
  			labels:['Até 20 anos',"De 20 a 30","De 30 a 40","De 40 a 50","50 para cima"]
  		}
  	})

  	//PieChart
  	new Chart('pie', {
  		type:'pie',
  		options: {
  			responsive: true,
  			title: {
  				display: true,
  				text: 'Visitantes do site - Primeiro Semestre /2019'
  			}, legend: {
  				position: 'top',
  			}, animation: {
  				animationScale: true,
  				animateRotate: true
  			}
  		},
  		data: {
  			datasets: [{
  				data:[45,10,5,25,15,100].reverse(),
  				backgroundColor: ['#4dffc3','#ff4da6','#ffff4d','#4d4dff','#4da6ff','#ff4d4d'],
  				label:''
  			}],
  			labels:['Jan','Fev','Mar','Abr','Mai','Jun']
  		}
  	})

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
