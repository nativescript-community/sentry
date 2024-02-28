class Process {}
Process.prototype[Symbol.toStringTag] = 'process';

module.exports = global.process = new Process() as any;
