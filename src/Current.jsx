
function CurrentDateTime() 
{
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const now = new Date();
    const today = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const time = now.toLocaleTimeString();
    const CurrentDate =now.toDateString();

    return (
        <div>
            <h1>Current Date and Time</h1>
            <p>Today: {today}</p>
            <p>Date: {date}</p>
            <p>Month: {month}</p>
            <p>Year: {year}</p>
            <p>Current Time: {time}</p>
            <p>Current Date:{CurrentDate}</p>
            <h2>Current Date & Current Time : {CurrentDate} {time}</h2>
        </div>
    );
}

export default CurrentDateTime;
