export function getDateString() {
    var date = new Date('4-1-2015'); // M-D-YYYY

    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    
    var dateString = (d <= 9 ? '0' + d : d) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;

    return dateString
}