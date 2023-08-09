// public static int sumN(int n){
//         if (n==0){
//             return 0;
//         }
//         return n+sumN(n-1);
//     }

//     public static int fib2(int n){
//         if (n==0 || n ==1){
//             return n;
//         } else {
//             return fib(n-1)+fib(n-2);
//         }
//     }

//     public static int fib(int n){
//         int sum=0;
//         int first= 0;
//         int sec =1; //0 1 1 2 3
//         for (int i = 3; i <= n; i++) {
//             sum = first+sec;
//             first=sec;
//             sec=sum;
// }
//         return sum;
//     }

//     public static String rev(String s){
//         if (s.length()==0){
//             return "";
//         } else {
//             return s.charAt(s.length()-1)+rev(s.substring(0,s.length()-1));
//         }
//     }

//     public static int recBinary(int[] arr, int target, int st, int end){
//         if (st>end){
//             return -1;
//         } else {
//             int mid = st+(end-st)/2;
//             if (arr[mid] ==target){
//                 return mid;
// } else if (arr[mid]>target){
//                 return recBinary(arr,target,st,mid-1);
//             } else {
//                 return recBinary(arr, target, mid+1, end);
//             }
//         }
//     }

//     public static boolean palindrom(String s){
//         if (s.length() == 0 || s.length()==1){
//             return true;
//         } else if (s.charAt(0) == s.charAt(s.length()-1)){
//             return palindrom(s.substring(1,s.length()-1));
//         } else {
//             return false;
//         }
//     }
// zxi-etzf-jjy