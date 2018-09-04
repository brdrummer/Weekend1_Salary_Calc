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

  let salary = Number($('#annualSalary').val());

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
    <td><button class="deleteButton">Delete</button></td>




    </tr>
    `);



    let result = 0;
    for (let i = 0; i < salaries.length; i++) {


      if (salaries[i]) {
        result += salaries[i];



      }
    }

    // result = parseFloat(result)

    result = (result /12);

    result = result.toFixed(2);

    $('#totalMonthly').html('$' + result);

if (result > 20000){
h2mouseEnter();
}


}



  function handleDelete(){
    $(this).parent().parent().remove();


  }

  function h2mouseEnter(){
  $( "h2" ).css( 'background-color', 'red');

}
