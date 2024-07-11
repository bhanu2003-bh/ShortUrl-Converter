

export function randomstring(len){

const num = ['1','2','3','4','5','6','7','8','9','0','a','b','c'
,'d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'
,'u','v','w','x','y','z'
];

const sz = num.length;
let ans = "";
for (let i = 0; i < len; i++) {
     ans = ans+num[Math.floor(Math.random()*sz)];
}
return ans;

}
