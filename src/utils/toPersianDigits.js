export function toPersianDigits(n) {
    const farsiDigits=["۱","۲","۳","۴","۵","۶","۷","۸","۹"];
    return n.toString().replace(/\d/g, (x)=>farsiDigits[parseInt(x)]);
    
}