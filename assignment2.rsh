'reach 0.1';

const User = {
    seePrice: Fun([], UInt),
    seeDescription: Fun([], Bytes(6)),
}

export const main = Reach.App(() => {
    const Creator = Participant('Creator', {
        ...User,
    });

    const Bidder = Participant('Bidder', {
        ...User,
    });

    const Buyer = Participant('Buyer', {
        ...User,
    });

    init();

    Bidder.only(() => {
        const price = declassify(interact.seePrice);
    });

    Bidder.publish(price);
    commit();

    Buyer.only(() => {
        const description = declassify(interact.seeDescription);
    });
    Buyer.publish(description);
    commit();

})