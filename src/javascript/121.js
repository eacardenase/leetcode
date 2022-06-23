// Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = 0;
    let sell = 1;
    let profit = 0;
    let tempProfit = profit;

    while (buy < prices.length) {
        if (prices[sell] > prices[buy]) {
            tempProfit = prices[sell] - prices[buy];
            profit = tempProfit > profit ? tempProfit : profit;
        } else {
            buy = sell;
        }
        sell++;
    }

    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([1, 2])); // 1
console.log(maxProfit([2, 4, 1])); // 2
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2])); // 2
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // 4
console.log(maxProfit([0])); // 0
console.log(maxProfit([3, 2, 6, 5, 0, 3])); // 4
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9])); // 9
