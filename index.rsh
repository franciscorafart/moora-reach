'reach 0.1';

const Player = {
    ...hasRandom,
    chooseFinger: Fun([], UInt),
    predictAmount: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
};

const [ isFinger, ZERO, ONE, TWO, THREE, FOUR, FIVE ] = makeEnum(6);
const [ isPrediction, P_ZERO, P_ONE, P_TWO, P_THREE, P_FOUR, P_FIVE, P_SIX, P_SEVEN, P_EIGHT, P_NINE, P_TEN ] = makeEnum(11);
const [ isOutcome, A_WINS, B_WINS, DRAW] = makeEnum(3);

const winner = (fingerA, predictionA, fingerB, predictionB) => {
    const fingersTotal = fingerA + fingerB;

    const guessedA = predictionA - fingersTotal == 0;
    const guessedB = predictionB - fingersTotal == 0;

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
    // TODO: Can in be implemented for n amount of players?
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt,
    });

    const Bob = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    init();

    Alice.only(() => {
        const wager = declassify(interact.wager);

        const _aliceFinger = interact.chooseFinger();
        const _alicePrediction = interact.predictAmount();

        const [_aliceFingerCommit, _aliceFingerSalt] = makeCommitment(interact, _aliceFinger);
        const [_alicePredictionCommit, _alicePredictionSalt] = makeCommitment(interact, _alicePrediction);

        const aliceFingerCommit = declassify(_aliceFingerCommit);
        const alicePredictionCommit = declassify(_alicePredictionCommit);
    });
    
    Alice.publish(wager, aliceFingerCommit, alicePredictionCommit).pay(wager);
    commit();
    
    unknowable(Bob, Alice(_aliceFinger, _aliceFingerSalt, _alicePrediction, _alicePredictionSalt));

    Bob.only(() => {
        interact.acceptWager(wager);

        const _bobFinger = interact.chooseFinger();
        const _bobPrediction = interact.predictAmount();

        const [_bobFingerCommit, _bobFingerSalt] = makeCommitment(interact, _bobFinger);
        const [_bobPredictionCommit, _bobPredictionSalt] = makeCommitment(interact, _bobPrediction);

        const bobFingerCommit = declassify(_bobFingerCommit);
        const bobPredictionCommit = declassify(_bobPredictionCommit);
    });

    Bob.publish(bobPredictionCommit, bobFingerCommit).pay(wager);
    commit();

    unknowable(Alice, Bob(_bobFinger, _bobFingerSalt, _bobPrediction, _bobPredictionSalt));

    Alice.only(() => {
        const aliceFinger = declassify(_aliceFinger);
        const aliceFingerSalt = declassify(_aliceFingerSalt);

        const alicePrediction = declassify(_alicePrediction);
        const alicePredictionSalt = declassify(_alicePredictionSalt);
    });

    Alice.publish(aliceFinger, aliceFingerSalt, alicePrediction, alicePredictionSalt);
    checkCommitment(aliceFingerCommit, aliceFingerSalt, aliceFinger);
    commit();
    
    Bob.only(() => {
        const bobFinger = declassify(_bobFinger);
        const bobFingerSalt = declassify(_bobFingerSalt);

        const bobPrediction = declassify(_bobPrediction);
        const bobPredictionSalt = declassify(_bobPredictionSalt);
    });

    Bob.publish(bobFinger, bobFingerSalt, bobPrediction, bobPredictionSalt);

    checkCommitment(bobFingerCommit, bobFingerSalt, bobFinger);
    checkCommitment(bobPredictionCommit, bobPredictionSalt, bobPrediction);
    // commit();
    
    const outcome = winner(aliceFinger, alicePrediction, bobFinger, bobPrediction);
    // TODO: asset is outcome

    if (outcome == A_WINS) {
        transfer(2 * wager).to(Alice);
    } else if (outcome == B_WINS) {
        transfer(2 * wager).to(Bob);
    } else {
        transfer(wager).to(Bob);
        transfer(wager).to(Alice);
    }
    commit();

    each([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    });

    exit();
});
