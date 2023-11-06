let atlyginimai = [824.25, 1225.12, 459.16, 1500];

for (let i = 0; i < atlyginimai.length; i++) {
    if (atlyginimai[i] <= 1000) {
        atlyginimai[i] += atlyginimai[i] *= 0.05
    }
    else {
        atlyginimai[i] += atlyginimai[i] *= 0.1
    }
}

console.log(atlyginimai);