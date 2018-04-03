
var constMap = {}

class Constant {
  constructor(value) {
    let c = constMap[value.toString()]
    if (c != null) return c
    // return new Constant(n)
    this.val = value // 前向函數執行結果 Gate Output 為常數
    // this.grad = 0   // 反向傳播梯度 Gradient = 0
  }
  get value() { return this.val }
  set value(c) { console.log('Constant cannot be set value') }
  get grad() { return 0 }
  set grad(c) { }
}

class Variable {
  constructor(value, grad) {
    this.value = value || 0// 前向函數執行結果 Gate Output
    this.grad = grad || 0 // 反向傳播梯度 Gradient
  }
}

function newVariables(list) {
  let d = {}
  for (let name of list) {
    d[name] = new Variable(0)
  }
  return d
}

function newConstants(list) {
  let a = []
  for (let name of list) {
    a.push(new Constant(name))
  }
  return a
}

module.exports = {
  Constant,
  Variable,
  newVariables,
  newConstants,
  PI: new Constant(Math.PI),
  E: new Constant(Math.E),
  C1: new Constant(1),
  C2: new Constant(2)
}