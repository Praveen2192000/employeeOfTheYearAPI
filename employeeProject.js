let employeeId;

let api_file = "https://jsonplaceholder.typicode.com/users";
fetch(api_file)
  .then((response) => response.json())
  .then(
    (data) =>
      (document.getElementById("cardID").innerHTML = data
        .map((data) => {
          console.log("data---", data);
          return ` <div class="card1" id="${data.id}" onclick="employee_all_detail_resume(${data.id})">
                     <div class="img">
                       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill: firebrick; class="bi bi-person-circle1" viewBox="0 0 16 16">
                         <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                         <path fill-rule="evenodd"d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                       </svg>
                     </div>
                     <h4 class="employeeName">
                        ${data.name}
                     </h4>
     
      
                     <div class="tooltiptext">
                         <div class="tooltip_img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style="margin-left:5px">
                              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            <h6 style="margin-left:7px ;color:antiquewhite;">
                                ${data.name}
                            </h6>
                          </div>
                          <div class="text-content">
                             <ul>
                                 <li>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
                                        <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
                                        <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
                                      </svg>
                                      Name : ${data.company.name}
                                 </li>
                                 <li>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16">
                                       <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
                                     </svg>
                                       :  ${data.address.street} , ${data.address.suite} , ${data.address.city} , ${data.address.zipcode}
                                 </li>
                             </ul>
                         </div>
                         <i></i>
                     </div>
                   </div>
                   `;
        })
        .join(" "))
  );

// =-------------------------------------------------------------------------------
// -----------------search input ( search employee movie by name )---------------------

const searchFun = () => {
  let searchBox = document.getElementById("searchInputId").value.toUpperCase();
  let card = document.querySelectorAll(".card1");
  let employeeName = document.getElementsByTagName("h4");

  for (let i = 0; i < employeeName.length; i++) {
    let match = card[i].getElementsByTagName("h4")[0];
    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        card[i].style.display = "";
      } else {
        card[i].style.display = "none";
      }
    }
  }
};

// -------------------------------------------------------------------------------------------------
// ---------------------------card on click Function : employee all detail resume = whenever we click on card ,-----
// ----------------------------we will get all info about that employee--------------------

let employee_all_detail_resume = function (id) {
  fetch(api_file)
    .then((response) => response.json())
    .then(
      (data) =>
        (document.getElementById("cardID").innerHTML = data
          .filter((data) => {
            if (data.id == id) {
              console.log("data", data);
              return data;
            }
          })
          .map((data) => {
            return `  <div class="tooltiptext" style=" width: 490px;">
                         <div class="employee_img_details" style="display: flex; border-radius: 5px; flex-direction: row; align-items: center;  justify-content: space-between;  padding: 7px;  border: ridge;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" class="bi bi-person-circle1" viewBox="0 0 16 16" style="margin-left:5px">
                              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            <div class="userName_email" style="display: flex; flex-direction: column; margin-right: 10px; align-items: baseline;">
                               <h6 style="margin-left:7px ;color:blue;">
                                  ${data.username}
                               </h6>
                               <span class="oneEmployee_headerDetail" style="font-size:x-small">Email : ${data.email}</span>
                               <span class="oneEmployee_headerDetail" style="font-size:x-small">Phone : ${data.phone}</span>

                            </div>
                          </div>
                          
                    
                     <div class="job_detail">
                            <ul style=" border: ridge; height: 222px;">
                                 <li class="li"><span>&diams; Name </span><span style=" margin-left: 87px; margin-right: 15px;" >:</span><span ">${data.name}</span>  </li>
                                 <li class="li"><span>&diams; Employee's Adress</span> <span style=" margin-left: 11px; margin-right: 15px;" >:</span><span> ${data.address.street} , ${data.address.suite} ,<br> ${data.address.city} ,<br> ${data.address.zipcode}</span>  </li>
                                  <li class="li"><span>&diams; Job Profile </span><span style="margin-left: 57px;">:</span><ul><li><span>Company Name <span style=" margin-left: 10px; margin-right: 10px;">:</span> <a href="${data.website}">${data.company.name}</a></span></li><li>BS <span style="margin-left: 67px; margin-right: 10px;">:</span> ${data.company.bs}</li> </ul> </li>
                            </ul>
                      </div>
                   </div>
               </div>`;
          }))
    );
};
