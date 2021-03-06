'reach 0.1';

const Player = {
    ...hasRandom,
    chooseFinger: Fun([], UInt),
    predictAmount: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null),
};

const [ isFinger, ZERO, ONE, TWO, THREE, FOUR, FIVE ] = makeEnum(6);
const [ isPrediction, P_ZERO, P_ONE, P_TWO, P_THREE, P_FOUR, P_FIVE, P_SIX, P_SEVEN, P_EIGHT, P_NINE, P_TEN ] = makeEnum(11);
const [ isOutcome, A_WINS, B_WINS, DRAW] = makeEnum(3);

const winner = (fingerA, predictionA, fingerB, predictionB) => {
    const fingersTotal = fingerA + fingerB;

    const guessedA = predictionA == fingersTotal;
    const guessedB = predictionB == fingersTotal;

    if (guessedA == guessedB) {
        return DRAW;
    } else if (guessedB) {
        return B_WINS;
    } else {
        return A_WINS;
    }
};

assert(winner(ONE, P_TWO, ONE, P_SEVEN) == A_WINS);
assert(winner(ONE ,P_FIVE, TWO, P_TWO) == DRAW);
assert(winner(ONE, P_THREE, TWO, P_THREE) == DRAW);
assert(winner(TWO, P_FOUR, TWO, P_SEVEN) == A_WINS);

// Forall?

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt,
        deadline: UInt,
    });

    const Bob = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    init();

    const informTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout();
        });
    };

    Alice.only(() => {
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    });
    
    Alice.publish(wager, deadline).pay(wager);
    commit();
    
    Bob.only(() => {
        interact.acceptWager(wager);
    });

    Bob.pay(wager).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    // commit();

    var outcome = DRAW
    invariant(balance() == 2 * wager && isOutcome(outcome));

    while(outcome == DRAW) {
        commit();

        Alice.only(() => {
            const _aliceFinger = interact.chooseFinger();
            const _alicePrediction = interact.predictAmount();
            
            const [_aliceFingerCommit, _aliceFingerSalt] = makeCommitment(interact, _aliceFinger);
            const [_alicePredictionCommit, _alicePredictionSalt] = makeCommitment(interact, _alicePrediction);
            
            const aliceFingerCommit = declassify(_aliceFingerCommit);
            const alicePredictionCommit = declassify(_alicePredictionCommit);
        });
        
        Alice.publish(aliceFingerCommit, alicePredictionCommit).timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));; // timeout
        commit();
        
        unknowable(Bob, Alice(_aliceFinger, _aliceFingerSalt, _alicePrediction, _alicePredictionSalt));
        
        Bob.only(() => {
            const _bobFinger = interact.chooseFinger();
            const _bobPrediction = interact.predictAmount();
            
            const [_bobFingerCommit, _bobFingerSalt] = makeCommitment(interact, _bobFinger);
            const [_bobPredictionCommit, _bobPredictionSalt] = makeCommitment(interact, _bobPrediction);
            
            const bobFingerCommit = declassify(_bobFingerCommit);
            const bobPredictionCommit = declassify(_bobPredictionCommit);
        });
        
        Bob.publish(bobPredictionCommit, bobFingerCommit).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        commit();
        
        unknowable(Alice, Bob(_bobFinger, _bobFingerSalt, _bobPrediction, _bobPredictionSalt));
        
        Alice.only(() => {
            const aliceFinger = declassify(_aliceFinger);
            const aliceFingerSalt = declassify(_aliceFingerSalt);
            
            const alicePrediction = declassify(_alicePrediction);
            const alicePredictionSalt = declassify(_alicePredictionSalt);
        });
        
        Alice.publish(aliceFinger, aliceFingerSalt, alicePrediction, alicePredictionSalt).timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        checkCommitment(aliceFingerCommit, aliceFingerSalt, aliceFinger);
        commit();
        
        Bob.only(() => {
            const bobFinger = declassify(_bobFinger);
            const bobFingerSalt = declassify(_bobFingerSalt);
            
            const bobPrediction = declassify(_bobPrediction);
            const bobPredictionSalt = declassify(_bobPredictionSalt);
        });
        
        Bob.publish(bobFinger, bobFingerSalt, bobPrediction, bobPredictionSalt).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        
        checkCommitment(bobFingerCommit, bobFingerSalt, bobFinger);
        checkCommitment(bobPredictionCommit, bobPredictionSalt, bobPrediction);
        
        outcome = winner(aliceFinger, alicePrediction, bobFinger, bobPrediction);
        continue;
    }

    if (outcome == A_WINS) {
        transfer(2 * wager).to(Alice);
    } else if (outcome == B_WINS) {
        transfer(2 * wager).to(Bob);
    }

    commit();
    
    each([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    });

    exit();
});
