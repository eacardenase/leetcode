// Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = 0;
    let sell = 1;
    let profit = 0;

    if (prices.length < 2) {
        return 0;
    }

    for (let i = 1; i < prices.length; i++) {
        let tempProfit = prices[sell] - prices[buy];

        if (prices[i] > prices[sell]) {
            sell = i;
        }

        if (prices[i] <= prices[buy] && i !== prices.length - 1) {
            buy = i;
        }

        if (sell < buy) {
            sell = i;
        }

        profit = tempProfit > profit ? tempProfit : profit;
    }

    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([1, 2])); // 1
console.log(maxProfit([2, 4, 1])); // 2
// console.log(maxProfit([2, 1, 2, 1, 0, 1, 2])); // 2
// console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // 4
console.log(maxProfit([0])); // 0
console.log(maxProfit([3, 2, 6, 5, 0, 3])); // 4
