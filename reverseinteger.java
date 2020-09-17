//Java Solution

class Solution {
    public int reverse(int x) {
        int result = 0;
        int prevResult = 0;
        
        while (x != 0) {
            result = (result * 10) + (x % 10);
            
            if((result - x % 10) / 10 != prevResult){
                return 0;
            }
            
            prevResult = result;
            x = x / 10;
        }
        
        return result;
    }
}