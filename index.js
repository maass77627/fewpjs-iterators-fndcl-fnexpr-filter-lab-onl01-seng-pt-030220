// Code your solution here

function findMatching(drivers, name){
  return drivers.filter( find_name => {
    return (find_name.toLowerCase() === name.toLowerCase())
   }
  )
}




function findMatching(drivers, name) {
// let array = []
  return drivers.filter(driver => {
    return driver === name
  })
}

function fuzzyMatch(drivers, name) {

}

function matchName() {

}
