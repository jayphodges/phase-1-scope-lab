var customerName = 'bob'

function upperCaseCustomerName() {
    let name = customerName.toUpperCase()
    customerName = name
}
function setBestCustomer() {
    bestCustomer = 'not bob'
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'doug'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'todd'
}