console.log( 'js' );

$(document).ready(onReady);


let salaries = [];

function onReady() {

  $('#submitButton').on('click', submitData);
  $('#tableBody').on('click', '.deleteButton', handleDelete);

}


function submitData() {



  let totalCost = {salary:"salary"}


  console.log('Working!');


  let firstName = $( '#firstName').val();

  $( '#firstName').val('');

  let lastName = $( '#lastName').val();

  $( '#lastName').val('');

  let id = $('#rule').val();

  $('#rule').val('');

  let title = $( '#title' ).val();

  $('#title').val('');

  let salary = $('#annualSalary').val();

  salaries.push(salary);

  $('#annualSalary').val('');

  let monthlyCost = $('#annualSalary').val();

  $('#totalMonthly').val('');

  //end inputs

  $('#tableBody').append(`
    <tr>
    <td>` + firstName + `</td>
    <td>` + lastName + `</td>
    <td>` + id + `</td>
    <td>` + title + `</td>
    <td>` + salary + `</td>



    </tr>
    `);



    let result = 0;
    for (let i = 0; i < salaries.length; i++) {


      if (salaries[i]) {
        result += salary[i];



      }
    }

    // result = parseFloat(result)

    result = (result /12);
    
    result = result.toFixed(2);

    $('#totalMonthly').html('$' + result);




  }

  function handleDelete(){
    $(this).parent().remove();


  }
