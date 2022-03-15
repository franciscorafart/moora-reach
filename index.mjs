import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

import  {ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';

const OUTCOME = ['Alice wins', 'Bob wins', 'Draw'];
const stdlib = loadStdlib(process.env);

(async () => {
    const isAlice = await ask('Are you Alice?', yesno);

    const acc = await stdlib.newTestAccount(stdlib.parseCurrency(100));

    let ctc = null;
    if (isAlice) {
        // attach contract
        ctc = acc.contract(backend);
        ctc.getInfo().then((info) => {
            console.log(`The contract is deployed as ${JSON.stringify(info)}`);
        });
    } else {
        // paste contract 
        const info = await ask(
            'Paste the contract information',
            JSON.parse,
        );
        ctc = acc.contract(backend, info); 
    }

    const fmt = (x) => stdlib.formatCurrency(x, 4);
    const getBalance = async () => fmt(await stdlib.balanceOf(acc));
    
    const before = await getBalance();
    console.log(`Your balance is ${before}`);

    const validateFingers = f => ['1', '2', '3', '4', '5'].includes(f);
    const interact = {...stdlib.hasRandom}

    interact.chooseFinger = async () => {
        const finger = await ask('Show your fingers! (1 to 5)', x => {
            const validChoice = validateFingers(x);

            if(!validChoice) {
                throw Error(`${x} is an invalid choice. Choose from 1 to 5`);
            }

            return x
        });

        console.log('You played', finger);
        return Number(finger);
    };

    interact.predictAmount = async () => {
        const prediction = await ask('How many fingers you think there will be in total?', x => {
            if(isNaN(Number(x))){
                throw Error(`${x} is not a number!`)
            }

            return x;
        })

        console.log(`You predicted ${prediction} fingers in total`);
        return Number(prediction);
    };

    interact.seeOutcome = async (outcome) => {
        const result = OUTCOME[outcome];
        console.log(result);
    }

    interact.informTimeout = async () => {
        console.log('Application time out!')
        process.exit(1);
    }

    if (isAlice) {
        interact.wager = await ask('How much do you want to bet?', stdlib.parseCurrency);
        const deadline = {
            ETH: 100,
            ALGO: 4,
            CFX: 1000,
        }[stdlib.connector];
        interact.deadline = deadline;
    } else {
        // Bob's interact object
        interact.acceptWager = async amt => {
            const accepted = await ask(`Do you accept the wager ${fmt(amt)}`, yesno);
            if (!accepted) {
                process.exit(0);
            }
        }
    }

    const part = isAlice ? ctc.p.Alice: ctc.p.Bob;
    await part(interact);

    const balance =  await getBalance(acc);
    console.log(`Your balance is ${balance}`);

    done();
})();
