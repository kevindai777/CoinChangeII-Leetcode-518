//Objective is similar to 'Coin Change', except this time we return the total
//number of combinations for said amount.

let amount = 5
let coins = [1, 2, 5]


//O(n^2) solution that goes through each coin value, then goes through each value
//from the coin up to the amount. We increment the number of combinations at that point
//by adding on the combinations from previous amounts.

let dp = new Array(amount + 1).fill(0)
dp[0] = 1
    
for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
        //Here, we add on the combinations from a previous amount
        dp[i] += dp[i - coin]
    }
}
    
return dp[amount]