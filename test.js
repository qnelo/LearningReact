function test() {
    "use strict";
    let a = { b: { c: 4 }, d: { e: { f: 1 } } };
    let g = Object.assign({}, a);
    let h = JSON.parse(JSON.stringify(a));
    console.log(JSON.stringify(g.d)); // { e: { f: 1 } }
    g.d.e = 32;
    console.log("g.d.e set to 32."); // g.d.e set to 32.
    console.log(JSON.stringify(g)); // { b: { c: 4 }, d: { e: 32 } }
    console.log(JSON.stringify(a)); // { b: { c: 4 }, d: { e: 32 } }
    console.log(JSON.stringify(h)); // { b: { c: 4 }, d: { e: { f: 1 } } }
    h.d.e = 54;
    console.log("h.d.e set to 54."); // h.d.e set to 54.
    console.log(JSON.stringify(g)); // { b: { c: 4 }, d: { e: 32 } }
    console.log(JSON.stringify(a)); // { b: { c: 4 }, d: { e: 32 } }
    console.log(JSON.stringify(h)); // { b: { c: 4 }, d: { e: 54 } }
    let k = Object.create(h);
    k.d.e = { j: 69 };
    console.log(JSON.stringify(h)); // { b: { c: 4 }, d: { e: 54 } }
    console.log(JSON.stringify(k)); // { b: { c: 4 }, d: { e: 54 } }
}
test();