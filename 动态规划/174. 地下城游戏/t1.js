/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    let m=dungeon.length , n=dungeon[0].length;
    let max=Number.MAX_VALUE;
    let dp=new Array();
    for(let i=0;i<m+1;i++){
        dp[i]=new Array();
        for(let j=0;j<n+1;j++){
            dp[i][j]=max;
        }
    }
    //数组下标=数组长度-1
    dp[m][n-1]=dp[m-1][n]=1;
    //初始化(m+1)*(n+1)的健康初始值数组
    for(let i=m-1;i>=0;i--){
        for(let j=n-1;j>=0;j--){
            dp[i][j]=Math.max(1,Math.min(dp[i+1][j],dp[i][j+1])-dungeon[i][j]);
        }
    }
    return dp[0][0];
};

