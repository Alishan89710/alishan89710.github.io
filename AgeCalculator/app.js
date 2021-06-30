
const CalculateAge = () => {
    var date = document.getElementById("date_field").value;
    var month = document.getElementById("month_field").value;
    var year = document.getElementById("year_field").value;
    console.log(date);
    console.log(month);
    console.log(year);
    if (date > 31) {
        alert("input valid date")
        return;
    }
    let c_date = new Date(`${date} ${month} ${year}`);
    console.log(c_date);
    let n_date = new Date();
    let difference = n_date - c_date;
    console.log(difference)
    let days = Math.floor(difference / (1000 * 60 * 60));
    let months = Math.floor(difference / (1000 * 60 * 60 * 24));
    let years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    console.log(days);
    console.log(months);
    console.log(years);
    alert(`${years} year , ${months} month , ${days} days`)
}



