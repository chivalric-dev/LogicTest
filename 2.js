/** Find the maximum consecutive 1's in an array of 0's and 1's.
        Example:
            a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
            b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]
 */

function maxNum(){
    var array=[];
    var size = window.prompt("Enter the size of array: ");
    var i=0;
    for(i=0; i<size; i++){
    array [i] = window.prompt ("Enter the no." + (i+1)) ;}
    var curr=0 ;
    var maxCount = 0 ;
    for(i=0 ; i<size ; i ++)
    {
        
        if(array[i]==1)
        {
            curr++;
        }
        else if(array[i]==0){
            if(curr>maxCount){
            maxCount=curr;
            curr=0;}
            
        }
        
    }console.log(maxCount);
    

}

maxNum();