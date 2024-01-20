/*!
 * Chart_script.js
 * Author       : Bestwebcreator.
 * Template Name: Landing Page
 * Version      : 1.2
*/
var config = {
type: 'doughnut',
data: {
	
	datasets: [{
		data: [13.97, 6.12, 12.2, 7.12, 10.59],
		backgroundColor: ['#f69040','#78c596','#f17776','#0eadc9','#5b5da8'],
		borderColor: [
			'rgba(255,255,255,0.5)',
			'rgba(255,255,255,0.5)',
			'rgba(255,255,255,0.5)',
			'rgba(255,255,255,0.5)',
			'rgba(255,255,255,0.5)',
		],
		borderWidth: 1,
		label: 'Dataset 1'
	}],
	labels: [
		'Interconnection Dev.',
		'Marketing & General',
		'Mobile Ad Platform',
		'Ad Platform Integration',
		'Operational Overhead'
	]
},
options: {
	responsive: true,
	legend: {
	  display: false,
	},
	title: {
	  display: false,
	  text: 'Chart.js Doughnut Chart'
	},
	pieceLabel: {
		render: 'percentage',
		fontColor: ['#f17776','#0eadc9','#e8157d','#78c596','#f0e030'],
		fontSize: 16,
		fontStyle: 'bold',
		position: 'outside',
		precision: 2
	},
	animation: {
	  animateScale: true,
	  animateRotate: true
	}
}
};

var config2 = {
type: 'doughnut',
data: {
	
	datasets: [{
		data: [50,30,20],
		backgroundColor: ['#ffcc67','#0eadc9','#f17776'],
		borderColor: [
			'rgba(255,255,255,0.5)',
			'rgba(255,255,255,0.5)',
			'rgba(255,255,255,0.5)',
		],
		borderWidth: 2,
		label: 'Dataset 1'
	}],
	labels: [
        'Web Application',
        'Mobile Application',
		'Robotics',
	]
},
options: {
	responsive: true,
	legend: {
	  display: false,
	},
	title: {
	  display: false,
	  text: 'Chart.js Doughnut Chart'
	},
	pieceLabel: {
		render: 'percentage',
		fontColor: ['#ffcc67','#0eadc9','#f17776'],
		fontSize: 16,
		fontStyle: 'bold',
		position: 'outside',
		precision: 2
	},
	animation: {
	  animateScale: true,
	  animateRotate: true
	}
	
}
};

window.onload = function() {
// var ctx = document.getElementById('token_sale').getContext('2d');
// window.myPie = new Chart(ctx, config);
var ctx2 = document.getElementById('token_dist').getContext('2d');
window.myPie = new Chart(ctx2, config2);
};