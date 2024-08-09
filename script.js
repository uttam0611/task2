document.getElementById('numberInput').addEventListener('input', function() {
    const input = this.value;
    const message = document.getElementById('message');
    const result = document.getElementById('result');
    
    // Clear previous messages and results
    message.textContent = '';
    result.textContent = '';
    
    // Check if input is a number
    const num = parseFloat(input);
    
    if (isNaN(num)) {
        message.textContent = 'Please enter a valid number.';
        return;
    }

    if (num < 0) {
        message.textContent = 'Enter a positive value.';
        return;
    }
    
    const isEven = num % 2 === 0;
    const nextNumbers = [];
    
    if (isEven) {
        // Generate the next 3 even numbers
        for (let i = 1; i <= 3; i++) {
            nextNumbers.push(num + (i * 2));
        }
    } else {
        // Generate the next 3 odd numbers
        for (let i = 1; i <= 3; i++) {
            nextNumbers.push(num + (i * 2));
        }
    }
    
    result.textContent = `Next 3 numbers: ${nextNumbers.join(', ')}`;
});
