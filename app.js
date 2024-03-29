
// // Listen for submit
// document.getElementById('loan-form').addEventListener('submit', calculateResults);

// // Calculate resluts
// function calculateResults(e){
//     console.log('Calculating...');
//     //UI vars(getting all form feilds)
//     const amount = document.getElementById('amount');
//     const interest = document.getElementById('interest');
//     const years = document.getElementById('years');
//     const monthlyPayment = document.getElementById('monthly-payment');
//     const totalPayment = document.getElementById('total-payment');
//     const totalInterest = document.getElementById('total-interest');

//     const principal = parseFloat(amount.value);
//     const calculatedInterest = parseFloat(interest.value) / 100 / 12;
//     const calculatedPayments = parseFloat(years.value) * 12;

//     //Compute monthly payments
//     const x =Math.pow(1 + calculatedInterest, calculatedPayments);
//     const monthly = (principal*x*calculatedInterest)/(x-1);

//     if(isFinite(monthly)){ 
//         //setting monthly payment value to calculation of 'monthly'
//         monthlyPayment.value = monthly.toFixed(2);
//         //setting total payment value
//         totalPayment.value = (monthly * calculatedPayments).toFixed(2);
//         totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
//     } else {
//         //Calling the showError function
//         showError('Please check your numbers');
//     }



//     e.preventDefault();
// }
//     //Creating the showError function
//     function showError(error){
//         //Create a div
//         const errorDiv= document.createElement('div');

//         //Get elements
//         const card = document.querySelector('.card');
//         const heading = document.querySelector('.heading');

//         //Add class
//         errorDiv.className = 'alert alert-danger';

//         //Create text node and append to div
//         errorDiv.appendChild(document.createTextNode(error));

//         //Insert error above heading
//         card.insertBefore(errorDiv, heading);

//         //Clear error after 3 seconds
//         //Calling clearError function
//         setTimeout(clearError, 3000);

//     }


//     //Creating clearError function
//     function clearError(){
//         document.querySelector('.alert').remove();
//     }
   
    


























































































// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Show loader
    document.getElementById('loading').style.display = 'block';
  
    setTimeout(calculateResults, 2000);
  
    e.preventDefault();
  });
  
  // Calculate Results
  function calculateResults(){
    console.log('Calculating...');
   //UI vars(getting all form feilds)
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
  
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
  
    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
  
    if(isFinite(monthly)) {
        //setting monthly payment value to calculation of 'monthly'
      monthlyPayment.value = monthly.toFixed(2);
      //setting total payment value
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  
      // Show results
      document.getElementById('results').style.display = 'block';
  
      // Hide loader
      document.getElementById('loading').style.display = 'none';
  
    } else {
        //Calling the showError function
      showError('Please check your numbers');
    }
  }
  
  // Creating the show Error function
  function showError(error){
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Hide loader
    document.getElementById('loading').style.display = 'none';
  
    // Create a div
    const errorDiv = document.createElement('div');
  
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
    // Add class
    errorDiv.className = 'alert alert-danger';
  
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
  
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
  
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }
  
//   Clear error
  function clearError(){
    document.querySelector('.alert').remove();
  }