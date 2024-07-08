// Function to calculate demerit points based on speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) {
            return "License suspended";
        } else {
            return `Points: ${points}`;
        }
    }
}

// Example usage:
const speed1 = 80;
const result1 = calculateDemeritPoints(speed1);
console.log(`Speed: ${speed1}, Result: ${result1}`); // Output: Speed: 80, Result: Points: 2

const speed2 = 65;
const result2 = calculateDemeritPoints(speed2);
console.log(`Speed: ${speed2}, Result: ${result2}`); // Output: Speed: 65, Result: Ok

const speed3 = 140;
const result3 = calculateDemeritPoints(speed3);
console.log(`Speed: ${speed3}, Result: ${result3}`); // Output: Speed: 140, Result: License suspended