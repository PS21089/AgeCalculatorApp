
let months=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function calculateAge()
{

    let userDate=document.getElementById("date").value;
   // console.log(userDate);
    let userMonth=document.getElementById("month").value;
   // console.log(userMonth);
    let userYear=document.getElementById("year").value;
   // console.log(userYear);

    if(validateInput(userDate, userMonth, userYear))
    {
        //calculate Age

        let todaysDate=new Date();

        let currentDate=todaysDate.getDate();
        let currentMonth=todaysDate.getMonth();
        let currentYear=todaysDate.getFullYear();

        if(userDate > currentDate)
        {
            currentDate=currentDate + months[userMonth-1];
            currentMonth=currentMonth-1;
        }

        if(userMonth > currentMonth)
        {
            currentMonth=currentMonth + 12;
            currentYear=currentYear - 1;
        }

        let numOfDays=currentDate-userDate;
        let numOfMonths=currentMonth-userMonth;
        let numOfYear=currentYear-userYear;

        showMsg(`Your age is ${numOfYear} Years, ${numOfMonths} Months & ${numOfDays} Days`);
    }
}

function validateInput(userDate, userMonth, userYear)
{
    if(userDate ==null || userDate== "")
    {
        showMsg("Please provide Date.");
        return false;
    }

    if(userMonth ==null || userMonth== "")
    {
        showMsg("Please provide Month.");
        return false;
    }

    if(userYear ==null || userYear== "")
    {
        showMsg("Please provide Year.");
        return false;
    }

    if(parseInt(userMonth) > 12)
    {
        showMsg("Please provide Month value in the range from 1 to 12.");
        return false;
    }

    if(String(userYear).length < 4)
    {
        showMsg("Provide year in format YYYY.");
        return false;
    }

   if(isNaN(userDate))
   {
    showMsg("Please provide valid Date.")
    return false;
   }

   if(isNaN(userMonth))
   {
    showMsg("Please provide valid Month.")
    return false;
   }

   if(isNaN(userYear))
   {
    showMsg("Please provide valid Year.")
    return false;
   }

   if(userDate < 0)
   {
    showMsg("Date cannot be 0 or less than 0.");
    return false;
   }

   if(userMonth < 0)
   {
    showMsg("Month cannot be 0 or less than 0.");
    return false;
   }

   if(userYear < 0)
   {
    showMsg("Year cannot be 0 or less than 0.");
    return false;
   }

   if(userDate > months[userMonth-1])
   {
    showMsg("Please provide valid Date with respect to Month");
    return false;
   }

    return true;
}

function showMsg(msg)
{
    let msgDiv= document.getElementById("msg");
    msgDiv.innerText=msg;
}

