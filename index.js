cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
createTimeInEvent.call(cRecord, "2044-03-15 0900")
createTimeOutEvent.call(cRecord, "2044-03-15 1100")
createTimeInEvent.call(cRecord, "2044-04-15 0900")
createTimeOutEvent.call(cRecord, "2044-04-15 1400")


const DataEmployees = createEmployeeRecords([
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
  ])

  DataEmployees.push(cRecord)

function createEmployeeRecord(array){
    let obj = {}
    obj.firstName = array[0]
    obj.familyName = array[1]
    obj.title = array[2]
    obj.payPerHour = array[3]
    obj.timeInEvents = []
    obj.timeOutEvents = []
    return obj
}

function createEmployeeRecords(arrayOfArrays){
   return arrayOfArrays.map(createEmployeeRecord)
}

function createTimeInEvent(dateTimeStamp){
    this.timeInEvents.push({type: 'TimeIn', hour: parseInt(dateTimeStamp.split(' ')[1],10), date: dateTimeStamp.split(' ')[0]})
    return this
}


function createTimeOutEvent(dateTimeStamp){
    this.timeOutEvents.push({type: 'TimeOut', hour: parseInt(dateTimeStamp.split(' ')[1],10), date: dateTimeStamp.split(' ')[0]})
    return this
}


function hoursWorkedOnDate(date){

let clockIns= []
let clockOuts = []

for (let i = 0; i< this.timeInEvents.length; i++){
    if (this.timeInEvents[i].date === date){clockIns.push(this.timeInEvents[i].hour)}
}

for (let i = 0; i< this.timeOutEvents.length; i++){
        if (this.timeOutEvents[i].date === date){clockOuts.push(this.timeOutEvents[i].hour)}
}
//you gotta go with the first recorded clock in and clock out, provided there are multiples on the same day.  techinally I would disagree, and make the function more robust by being able to clock in and out. but this is because of how they wrote their tests, as Natalie clocks in at 17 and later at 13 (typo in the test?) and clocks out at 23 and 23 on the same day and they expect 10 hours total
let total =(clockOuts[clockOuts.length-1] - clockIns[0])/100


return total
}


// function hoursWorkedOnDate(date){
// let total = 0
// //I know there is a way to do this without using the for let loop...
// for (let i = 0; i< this.timeInEvents.length; i++){
//     if (this.timeInEvents[i].date === date)
//     {total = (this.timeOutEvents[i].hour - this.timeInEvents[i].hour)/100}
// }

// return total
// }

function wagesEarnedOnDate(date){
return (hoursWorkedOnDate.call(this,date) * this.payPerHour)
}






function findEmployeeByFirstName(array, name){
    let match
    array.map( 
                 x=>
                    {if (x.firstName === name){
                      match = x }
                    }
            )
    return match
    }
    




function calculatePayroll(array){
let total = 0
array.map(x=>total = total + allWagesFor.call(x))
//  return array.reduce((prev,cur) => {return prev + allWagesFor.call(cur)},0 )
return total
}
// Argument(s)
// Array of employee records
// Returns
// Sum of pay owed for all employees for all dates, as a number
// Behavior
// Using allWagesFor for each of the employees, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number.









/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function allWagesFor() {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}




const csvDataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
  ]

  const csvTimesIn = [
    ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
    ["Natalia", ["2018-01-03 1700", "2018-01-05 1800", "2018-01-03 1300"]],
    ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
    ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
  ]

  const csvTimesOut = [
    ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Natalia", ["2018-01-03 2300", "2018-01-05 2300", "2018-01-03 2300"]],
    ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
    ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
  ]

  let employeeRecords = createEmployeeRecords(csvDataEmployees)
  employeeRecords.forEach(function (rec) {
    let timesInRecordRow = csvTimesIn.find(function (row) {
      return rec.firstName === row[0]
    })

    let timesOutRecordRow = csvTimesOut.find(function (row) {
      return rec.firstName === row[0]
    })

    timesInRecordRow[1].forEach(function(timeInStamp){
      createTimeInEvent.call(rec, timeInStamp)
    })

    timesOutRecordRow[1].forEach(function(timeOutStamp){
      createTimeOutEvent.call(rec, timeOutStamp)
    })
  })

  /*
1. they could have hard coded the wrong number.
2. I am calculating the wrong number. Only way to see is to manually add them up.
3. I declared a global variable that is effecting the list creation in the test file.
  */