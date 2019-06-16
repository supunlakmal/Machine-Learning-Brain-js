const brain = require('brain.js');
const data = require('./data.json')
const network = new brain.recurrent.LSTM();
const traningData = data.map(item => ({
    input: item.text,
    output: item.category
}));
network.train(traningData, { 
    iterations:2000
});
const output=  network.run('yo  i fix  power suplly');
console.log(` cat : ${output}`);