function deepEqual(var_x, var_y) {
    if (var_x === var_y) return true;
    if (var_x == null || typeof var_x != 'object' || var_y == null || typeof var_y != 'object') return false;
    var c1 = 0, c2 = 0;
    for (i in var_x)
         c1 += 1;
    for (i in var_y) {
        c2 += 1;
        if (!(i in var_x) || !deepEqual(var_x[i], var_y[i])) return false;
    }
    return c1 == c2;
}

var x={
    FirstName : "Akanksha",
    LastName : "Dhanewar",
    College : "Msit"
    }

var y={
    FirstName : "",
    LastName : "Dhanewar",
    College : "Msit"
    }

console.log(deepEqual(x,y))