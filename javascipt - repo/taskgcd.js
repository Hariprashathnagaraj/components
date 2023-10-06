let a=6,b=9
let gcd;
 for(i=1;i<=a && i<=b;i++)
 {
  if(a%i==0 && b%i==0)
  gcd=i
}
  document.write(gcd)