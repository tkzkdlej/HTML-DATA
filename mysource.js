let i='Hello World';
i=10;
document.write(i)  // == System.out.print() \n
document.write('<br>') // == System.out.print("\n") == System.out.println("")
document.write('Good Morning Vietnam<br>')
document.write('<input type=text><button>누르기</button><br>')
document.write('<select size="2"><option>USA</option><option>Korea</option></select><br>')

let ar=[1,2,'Hello',3.14,'World',-15];

document.write(ar[2]);
document.write('<br>')
document.write(ar[4]);
document.write('<br>')
ar.push(100);
document.write(ar);
document.write('<br>')

x=ar.pop() // 배열 맨 뒤에 요소를 제거한다. 100이 x에 저장되고, ar에서는 지워진다.
document.write(x);
document.write('<br>');
document.write(ar);

ar1 = [[1,2,3],['a','b','c','d'],[100,200]];
document.write('<br>');
document.write(ar1);
document.write('<br>');
document.write('length='+ar1[1].length);
document.write('<br>');

// reply = confirm('참/거짓 중에 고르시오.')
// document.write(reply);
// document.write('<br>');

answer = prompt('이름을 입력하시오.','익명');
console.log('name='+answer); // only for programmer, debugging
document.write(answer);