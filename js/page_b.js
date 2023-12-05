var slider1 = new Swiper ('.slider5', {
    effect: 'slide',
    loop: 'true',
    
    pagination: {
      el: '.swiper-pagination',
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
});


//styling of chart section



// var BAChartDataValue = [
// 	45, 
// 	55, 
	 
// ]; /* 개발 연동 데이터 */
// var BAChartDataLabel = [
// 	'abc', 
// 	'def', 
	 
// ]; /* 개발 연동 데이터 */
// var BAChartJobErrColors = [
// 	'rgba(0, 0, 0, 1)',
// 	'rgba(119, 209, 190, 1)',
  
	
// ];

// var BAChartCountTotal = 0;
// if (BAChartDataValue.length > 0) {
// 	BAChartCountTotal = BAChartDataValue.reduce(function(acc, currentVal, currentIdx, arr){
// 		return acc + currentVal;
// 	}, 0);
// }

// window.addEventListener('load', function(){
// 	var BAChartCtx = document.getElementById('BA-chart-job-error').getContext('2d');
	


// 	var BAChartJobErr = new Chart(BAChartCtx, {
// 		type: 'doughnut',


		
// 		data: {
// 			labels: BAChartDataLabel,
			
// 			datasets: [{
// 				data: BAChartDataValue,
// 				backgroundColor: BAChartJobErrColors,
// 				borderColor: '#111111',
// 				borderWidth: 1,
				
// 			}]
			
// 		},
// 		options: {
// 			responsive: false,
// 			maintainAspectRatio: false,
// 			cutoutPercentage : 75,
			
// 			title: {
// 				display: true,
// 				position: 'top',
// 				fontSize: 12,
				
// 				fontColor: '#000',
// 				fontStyle: 'bold',
// 				padding: 0,
// 				text: '오류 현황',
// 			},
// 			plugins: {
// 				labels: [
// 					{
// 						render: 'label',
// 						fontColor: '#000',
// 						position: 'outside'
// 					},
// 					{
// 						render: 'percentage',
// 						fontColor: '#fff',
// 					}
// 				],
// 				// doughnutlabel: {
// 				// 	labels: [
// 				// 		{
// 				// 			// text: 'Total: ' + BAChartCountTotal,
// 				// 			// text: '75% ' + BAChartCountTotal,
// 				// 		}
// 				// 	]
// 				// }

// 				// options: {
// 				// 	cutout: '80%',
// 				// 	plugins: {
// 				// 	  afterDraw: function(chart) {
// 				// 		var centerLabel = document.getElementById('donutCenterLabel');
// 				// 		var total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0); // Calculate the total value
// 				// 		centerLabel.innerText = 'Total: ' + total; // Update the center label with the total value
// 				// 	  }
// 				// 	}
// 				//   },

				
// 			},
// 			legend: {
// 				display: false
// 			}
			
// 		}

		

		
// 	});


// 	// Function to update the center label with new data values
// 	function updateCenterLabel(data) {
// 		var centerLabel = document.getElementById('donutCenterLabel');
// 		centerLabel.innerText = data.join(', ');
// 	  }
  
// 	  // Example: Dynamically update the data values and center label
// 	  setTimeout(function() {
// 		// Update the data values
// 		data = [20, 50];
  
// 		// Update the chart data and re-render
// 		myDonutChart.data.datasets[0].data = data;
// 		myDonutChart.update();
  
// 		// Update the center label
// 		updateCenterLabel(data);
// 	  }, 3000);

	 
// });



var ctx1 = document.getElementById('myDonutChart').getContext('2d');
var myDonutChart1 = new Chart(ctx1, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [75, 25],
			backgroundColor: ['rgba(0, 0, 0, 1)', 'transparent'],
			borderColor: ['black', 'black'],
			borderWidth: 1,
		}]
	},
	options: {
		cutout: '90%',
		cutoutPercentage: 85,
		rotation: -0.5 * Math.PI,
	}
});

function updateCenterLabel1(data) {
	var centerLabel = document.getElementById('centerValue');
	centerLabel.innerText = data[0];
}

var ctx2 = document.getElementById('myDonutChartA').getContext('2d');
var myDonutChart2 = new Chart(ctx2, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [75, 25],
			backgroundColor: ['rgba(0, 0, 0, 1)', 'transparent'],
			borderColor: ['black', 'black'],
			borderWidth: 1,
		}]
	},
	options: {
		cutout: '90%',
		cutoutPercentage: 85,
		rotation: -0.5 * Math.PI,
	}
});

function updateCenterLabel2(data) {
	var centerLabel = document.getElementById('centerValueA');
	centerLabel.innerText = data[0];
}

// Initial update for both charts
updateCenterLabel1(myDonutChart1.data.datasets[0].data);
updateCenterLabel2(myDonutChart2.data.datasets[0].data);
