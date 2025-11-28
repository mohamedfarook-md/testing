// ChartInit.js
import Chart from 'chart.js/auto';

export function createLineChart(canvas, data, options){
  if(!canvas) return null;
  return new Chart(canvas.getContext('2d'), {
    type: 'line',
    data,
    options: options || { responsive:true, maintainAspectRatio:false }
  });
}

export function createPieChart(canvas, data, options){
  if(!canvas) return null;
  return new Chart(canvas.getContext('2d'), { type: 'doughnut', data, options: options || { responsive:true, maintainAspectRatio:false } });
}

export function createBarChart(canvas, data, options){
  if(!canvas) return null;
  return new Chart(canvas.getContext('2d'), { type: 'bar', data, options: options || { responsive:true, maintainAspectRatio:false } });
}
