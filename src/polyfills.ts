;(window as any).__assign = Object.assign || function(target: any, ...sources: any[]) {
    for (const s of sources) for (const k in s) if (Object.prototype.hasOwnProperty.call(s, k)) target[k] = s[k];
    return target;
  };

;(window as any).__spreadArrays = function(...args: any[]) {
    return args.reduce((acc, val) => acc.concat(val), []);
};