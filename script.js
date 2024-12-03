const jsonUrl = 'https://raw.githubusercontent.com/Apitecynthia/JSON/refs/heads/main/index2.json';

fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        visualizeData(data);
        visualizeDataDistrict(data);
        visualizeDatatrends(data);
        visualizeDatapopularity(data);
        

    })
    .catch(error => console.error('Error fetching data:', error));

    function visualizeData(data) {
        
        const allStudents = data.admissionData.pages.flatMap(page => page.students);
    
        
        const genderCounts = allStudents.reduce((counts, student) => {
            counts[student.gender] = (counts[student.gender] || 0) + 1;
            return counts;
        }, {});
    
        const genders = Object.keys(genderCounts);
        const counts = Object.values(genderCounts);
    
        
        const ctx = document.getElementById('admissionChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar', 
            data: {
                labels: genders,
                datasets: [{
                    label: 'Gender Distribution',
                    data: counts,
                    backgroundColor: ['#FFB6C1', '#87CEEB', '#2196F3', '#FFC107', '#9C27B0'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }


    function visualizeDataDistrict(data) {
        
        const allStudents = data.admissionData.pages.flatMap(page => page.students);
    
    
        const districtCounts = allStudents.reduce((counts, student) => {
            counts[student.districtName] = (counts[student.districtName] || 0) + 1;
            return counts;
        }, {});
    
        const districtName = Object.keys(districtCounts);
        const counts = Object.values(districtCounts);
    
        // Step 3: Render Chart
        const ctx = document.getElementById('districtchart').getContext('2d');
        new Chart(ctx, {
            type: 'line', 
            data: {
                labels: districtName,
                datasets: [{
                    label: 'Students Per District',
                    data: counts,
                    backgroundColor: ['#FF66B2', '#B3A0D6', '#E91E63', '#80C7FF ', '#D870A3'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }
    
    
    function visualizeDatatrends(data) {
        
        const allStudents = data.admissionData.pages.flatMap(page => page.students);
    
        
        const trendCounts = allStudents.reduce((counts, student) => {
            counts[student.year] = (counts[student.year] || 0) + 1;
            return counts;
        }, {});
    
        const year = Object.keys(trendCounts);
        const counts = Object.values(trendCounts);
    
        
        const ctx = document.getElementById('trends').getContext('2d');
        new Chart(ctx, {
            type: 'line', 
            data: {
                labels: year,
                datasets: [{
                    label: 'Admission Trends Over Years',
                    data: counts,
                    backgroundColor: ['#FFB6C1', '#87CEEB', '#2196F3', '#FFC107', '#9C27B0'],
                    borderwidth: 5,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }


    function visualizeDatapopularity(data) {
        
        const allStudents = data.admissionData.pages.flatMap(page => page.students);
    
        
        const popularityCounts = allStudents.reduce((counts, student) => {
            counts[student.courseName] = (counts[student.courseName] || 0) + 1;
            return counts;
        }, {});
    
        const courseName = Object.keys(popularityCounts);
        const counts = Object.values(popularityCounts);
    
        
        const ctx = document.getElementById('popularity').getContext('2d');
        new Chart(ctx, {
            type: 'pie', 
            data: {
                labels: courseName,
                datasets: [{
                    label: 'Popular Course Over The Years',
                    data: counts,
                    backgroundColor: ['#FFB6C1', '#87CEEB', '#2196F3', '#FFC107', '#9C27B0'], 
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }

   

    