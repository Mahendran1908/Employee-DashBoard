const ctx = document.getElementById('myChart');

    
    new Chart(ctx, {
      type: 'bar', 
      data: {
        labels: ['Maintance', 'Part changing', 'Cleaning', 'Sick', 'Servicing',],
        datasets: [{
          label: 'Loss of Working',
          data: [12,24,36,48,52,64],
          borderWidth: 1
          

        }]
        
      },
      options: {
        scales: {
          y: { 
            beginAtZero: true
          }
        }
      }
    });