(() => {
  /*
  Purpose:Places to Travel
  Author:Anil
  Date:10/10/2020
  */
  const places = [
    { sqno: 1, name: "Delhi" },
    { sqno: 2, name: "Mumbai" },
    { sqno: 3, name: "Dubai" },
    { sqno: 4, name: "London" },
  ];
  /*
 Purpose:Travel Details
 Author:Anil
 Date:10/10/2020
 */
  const flights = [
    { fno: 122131, dep: "22:30", arr: "00:30", dur: "2h 10m", price: "2500" },
    { fno: 122132, dep: "23:30", arr: "1:30", dur: "3h 10m", price: "3500" },
    { fno: 122133, dep: "24:30", arr: "2:30", dur: "4h 10m", price: "5500" },
    { fno: 122134, dep: "25:30", arr: "3:30", dur: "1h 10m", price: "5500" },
  ];
  let placeOptions = "";
  for (place in places) {
    placeOptions += "<option>" + places[place].name + "</option>";
  }
  $("#toLocation").append(placeOptions);
  $("#fromLocation").append(placeOptions);

  $("#formData").submit(function (e) {
    e.preventDefault();

    /*
    Purpose:Public Variables
    Author:Anil Tiwari
    Date:10/10/2020
    */
    let toLocation = $("#toLocation").val();
    let fromLocation = $("#fromLocation").val();
    let fromDate = $("#fromDate").val();
    let toDate = $("#toDate").val();
    let flightTable = ''
    $("#page1").addClass("d-none");

    /*
    Purpose:Flight Page
    Author:Anil Tiwari
    Date:10/10/2020
    */
    let flightDetails = `<div class="flight-header">
    <ul class="flight-details-list d-flex jc-sa">
    <li><span>${toLocation.substr(
      0,
      3
    )}</span><span class="details">${toLocation} </span><span class="details">${toDate} </span></li>
    <li><span>${fromLocation.substr(
      0,
      3
    )}</span><span class="details">${fromLocation} </span><span class="details">${fromDate} </span></li>
    <li><span>Class</span><span class="details">Economy</span></li>
        <li><span>Passenger</span><span class="details">Adult</span></li>
        <li><a  class="change-details">Change</a></li>
    </ul>
</div>

            <div class="w-100 f-table-wrapper d-flex">
                <div class="w-50">
                    <ul class="scroll-list">
                    <li class="list-item"><span class="detials">wed, ${toDate} </span><span class="price">Rs 2500</span></li>
                    <li class="list-item"><span class="detials">wed, ${toDate} </span><span class="price">Rs 3500</span></li>
                    <li class="list-item"><span class="detials">wed, ${toDate} </span><span class="price">Rs 4500</span></li>
                </ul>
                <div class="table-wrapper">
                <table class="flight-table">
                    <thead>
                        <tr>
                            <th>Flight No.</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Duration</th>
                    <th>Price</th>
                        </tr>
                    </thead>
                    <tbody class="flight-table-body">
                       
                </tbody>
                </table>
            </div>
               
            </div>
                <div class="w-50">
                    <ul class="scroll-list">
                        <li class="list-item"><span class="detials">wed, ${fromDate} </span><span class="price">Rs 2500</span></li>
                        <li class="list-item"><span class="detials">wed, ${fromDate} </span><span class="price">Rs 3500</span></li>
                        <li class="list-item"><span class="detials">wed, ${fromDate} </span><span class="price">Rs 4500</span></li>
                    </ul>

                    <div class="table-wrapper">
                    <table class="flight-table">
                        <thead>
                            <tr>
                                <th>Flight No.</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Duration</th>
                        <th>Price</th>
                            </tr>
                        </thead>
                        <tbody class="flight-table-body">
                           
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            
`;
    $("#flight-details").append(flightDetails);
    $("#flight-details").show(500);

    /*
    Purpose:Flight Table
    Author:Anil Tiwari
    Date:10/10/2020
    */
    for (flight in flights) {
      flightTable += `<tr><td><span class="d-flex ai-c jc-c"><input type="radio" name="flightSel"/> ${flights[flight].fno} </span></td>
        <td> ${fromLocation.substr(0, 3)} ${flights[flight].dep} </td>
            <td>${toLocation.substr(0, 3)}  ${flights[flight].arr} </td>
                <td> ${flights[flight].dur} </td>
                <td> ${flights[flight].price} </td>
                </tr>`;
    }
    $(".flight-table-body").append(flightTable);
  });
})();
