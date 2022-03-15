'reach 0.1';

const User = {
    getChallenge: Fun([], UInt),
    seeResult: Fun([UInt], Null),
}

export const main = Reach.App(() => {
    const Pat = Participant('Pat', {
        ...User,
    });

    const Vanna = Participant('Vanna', {
        ...User,
    });

    init();

    Pat.only(() => {
        const challengePat = declassify(interact.getChallenge);
    });

    Pat.publish(challengePat);
    commit();

    Vanna.only(() => {
        const challengeVanna = declassify(interact.getChallenge);
    });

    Vanna.publish(challengeVanna);
    commit();
})