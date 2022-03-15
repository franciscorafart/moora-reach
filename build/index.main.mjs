// Automatically generated with Reach 0.1.9 (2fb7c59c)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (2fb7c59c)';
export const _backendVersion = 10;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc2, ctc1],
      13: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v342 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v343 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v343, v342],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:61:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v343, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v347, v348], secs: v350, time: v349, didSend: v35, from: v346 } = txn1;
      
      sim_r.txns.push({
        amt: v347,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v359 = stdlib.add(v349, v348);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v347, v348], secs: v350, time: v349, didSend: v35, from: v346 } = txn1;
  ;
  const v359 = stdlib.add(v349, v348);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v359],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v346, v347, v348, v359],
      evt_cnt: 0,
      funcNum: 2,
      lct: v349,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v587, time: v586, didSend: v310, from: v585 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v347,
          kind: 'from',
          to: v346,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v587, time: v586, didSend: v310, from: v585 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:52:35:application',
      fs: ['at ./index.rsh:51:13:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:50:30:function exp)', 'at ./index.rsh:68:65:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v365, time: v364, didSend: v44, from: v363 } = txn2;
    const v367 = stdlib.add(v347, v347);
    ;
    let v368 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
    let v369 = v364;
    let v376 = v367;
    
    while (await (async () => {
      const v384 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      
      return v384;})()) {
      const v391 = stdlib.add(v369, v348);
      const v395 = stdlib.protect(ctc0, await interact.chooseFinger(), {
        at: './index.rsh:78:55:application',
        fs: ['at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'chooseFinger',
        who: 'Alice'
        });
      const v396 = stdlib.protect(ctc0, await interact.predictAmount(), {
        at: './index.rsh:79:60:application',
        fs: ['at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'predictAmount',
        who: 'Alice'
        });
      const v397 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:81:74:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v398 = stdlib.digest(ctc1, [v397, v395]);
      const v400 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:82:82:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v401 = stdlib.digest(ctc1, [v400, v396]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v346, v347, v348, v363, v376, v391, v398, v401],
        evt_cnt: 2,
        funcNum: 4,
        lct: v369,
        onlyIf: true,
        out_tys: [ctc2, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:88:15:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v404, v405], secs: v407, time: v406, didSend: v76, from: v403 } = txn3;
          
          ;
          const v408 = stdlib.addressEq(v346, v403);
          ;
          const v415 = stdlib.add(v406, v348);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v391],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v346, v347, v348, v363, v376, v391],
          evt_cnt: 0,
          funcNum: 5,
          lct: v369,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v539, time: v538, didSend: v259, from: v537 } = txn4;
            
            ;
            const v540 = stdlib.addressEq(v346, v537);
            const v541 = stdlib.addressEq(v363, v537);
            const v542 = v540 ? true : v541;
            ;
            sim_r.txns.push({
              amt: v376,
              kind: 'from',
              to: v363,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v539, time: v538, didSend: v259, from: v537 } = txn4;
        ;
        const v540 = stdlib.addressEq(v346, v537);
        const v541 = stdlib.addressEq(v363, v537);
        const v542 = v540 ? true : v541;
        stdlib.assert(v542, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:88:110:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:52:35:application',
          fs: ['at ./index.rsh:51:13:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:50:30:function exp)', 'at ./index.rsh:88:110:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v404, v405], secs: v407, time: v406, didSend: v76, from: v403 } = txn3;
        ;
        const v408 = stdlib.addressEq(v346, v403);
        stdlib.assert(v408, {
          at: './index.rsh:88:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v415 = stdlib.add(v406, v348);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc2, ctc2],
          timeoutAt: ['time', v415],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v346, v347, v348, v363, v376, v404, v415],
            evt_cnt: 0,
            funcNum: 7,
            lct: v406,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v521, time: v520, didSend: v225, from: v519 } = txn5;
              
              ;
              const v522 = stdlib.addressEq(v346, v519);
              const v523 = stdlib.addressEq(v363, v519);
              const v524 = v522 ? true : v523;
              ;
              sim_r.txns.push({
                amt: v376,
                kind: 'from',
                to: v346,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v521, time: v520, didSend: v225, from: v519 } = txn5;
          ;
          const v522 = stdlib.addressEq(v346, v519);
          const v523 = stdlib.addressEq(v363, v519);
          const v524 = v522 ? true : v523;
          stdlib.assert(v524, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:104:104:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:52:35:application',
            fs: ['at ./index.rsh:51:13:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:50:30:function exp)', 'at ./index.rsh:104:104:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v428, v429], secs: v431, time: v430, didSend: v96, from: v427 } = txn4;
          ;
          const v432 = stdlib.addressEq(v363, v427);
          stdlib.assert(v432, {
            at: './index.rsh:104:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v439 = stdlib.add(v430, v348);
          const txn5 = await (ctc.sendrecv({
            args: [v346, v347, v348, v363, v376, v404, v428, v429, v439, v395, v397, v396, v400],
            evt_cnt: 4,
            funcNum: 8,
            lct: v430,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:117:15:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v444, v445, v446, v447], secs: v449, time: v448, didSend: v108, from: v443 } = txn5;
              
              ;
              const v450 = stdlib.addressEq(v346, v443);
              ;
              const v451 = stdlib.digest(ctc1, [v445, v444]);
              const v452 = stdlib.digestEq(v404, v451);
              ;
              const v459 = stdlib.add(v448, v348);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v439],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v346, v347, v348, v363, v376, v404, v428, v429, v439],
              evt_cnt: 0,
              funcNum: 9,
              lct: v430,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v503, time: v502, didSend: v191, from: v501 } = txn6;
                
                ;
                const v504 = stdlib.addressEq(v346, v501);
                const v505 = stdlib.addressEq(v363, v501);
                const v506 = v504 ? true : v505;
                ;
                sim_r.txns.push({
                  amt: v376,
                  kind: 'from',
                  to: v363,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v503, time: v502, didSend: v191, from: v501 } = txn6;
            ;
            const v504 = stdlib.addressEq(v346, v501);
            const v505 = stdlib.addressEq(v363, v501);
            const v506 = v504 ? true : v505;
            stdlib.assert(v506, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:117:136:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:52:35:application',
              fs: ['at ./index.rsh:51:13:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:50:30:function exp)', 'at ./index.rsh:117:136:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v444, v445, v446, v447], secs: v449, time: v448, didSend: v108, from: v443 } = txn5;
            ;
            const v450 = stdlib.addressEq(v346, v443);
            stdlib.assert(v450, {
              at: './index.rsh:117:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v451 = stdlib.digest(ctc1, [v445, v444]);
            const v452 = stdlib.digestEq(v404, v451);
            stdlib.assert(v452, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:118:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v459 = stdlib.add(v448, v348);
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 4,
              funcNum: 10,
              out_tys: [ctc0, ctc0, ctc0, ctc0],
              timeoutAt: ['time', v459],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v346, v347, v348, v363, v376, v428, v429, v444, v446, v459],
                evt_cnt: 0,
                funcNum: 11,
                lct: v448,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v485, time: v484, didSend: v157, from: v483 } = txn7;
                  
                  ;
                  const v486 = stdlib.addressEq(v346, v483);
                  const v487 = stdlib.addressEq(v363, v483);
                  const v488 = v486 ? true : v487;
                  ;
                  sim_r.txns.push({
                    amt: v376,
                    kind: 'from',
                    to: v346,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v485, time: v484, didSend: v157, from: v483 } = txn7;
              ;
              const v486 = stdlib.addressEq(v346, v483);
              const v487 = stdlib.addressEq(v363, v483);
              const v488 = v486 ? true : v487;
              stdlib.assert(v488, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./index.rsh:129:126:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc3, await interact.informTimeout(), {
                at: './index.rsh:52:35:application',
                fs: ['at ./index.rsh:51:13:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:50:30:function exp)', 'at ./index.rsh:129:126:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v464, v465, v466, v467], secs: v469, time: v468, didSend: v123, from: v463 } = txn6;
              ;
              const v470 = stdlib.addressEq(v363, v463);
              stdlib.assert(v470, {
                at: './index.rsh:129:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v471 = stdlib.digest(ctc1, [v465, v464]);
              const v472 = stdlib.digestEq(v429, v471);
              stdlib.assert(v472, {
                at: 'reach standard library:58:17:application',
                fs: ['at ./index.rsh:131:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              const v473 = stdlib.digest(ctc1, [v467, v466]);
              const v474 = stdlib.digestEq(v428, v473);
              stdlib.assert(v474, {
                at: 'reach standard library:58:17:application',
                fs: ['at ./index.rsh:132:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              let v475;
              const v476 = stdlib.add(v444, v464);
              const v477 = stdlib.sub(v446, v476);
              const v478 = stdlib.eq(v477, stdlib.checkedBigNumberify('./index.rsh:18:52:decimal', stdlib.UInt_max, 0));
              const v479 = stdlib.sub(v466, v476);
              const v480 = stdlib.eq(v479, stdlib.checkedBigNumberify('./index.rsh:19:52:decimal', stdlib.UInt_max, 0));
              const v481 = v480 ? false : true;
              const v482 = v478 ? v480 : v481;
              if (v482) {
                v475 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                if (v480) {
                  v475 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                else {
                  v475 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                }
              const cv368 = v475;
              const cv369 = v468;
              const cv376 = v376;
              
              v368 = cv368;
              v369 = cv369;
              v376 = cv376;
              
              continue;}
            
            }
          
          }
        
        }
      
      }
    const v555 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    if (v555) {
      const v556 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:139:18:decimal', stdlib.UInt_max, 2), v347);
      ;
      stdlib.protect(ctc3, await interact.seeOutcome(v368), {
        at: './index.rsh:147:28:application',
        fs: ['at ./index.rsh:146:9:application call to [unknown function] (defined at: ./index.rsh:146:27:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const v567 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      if (v567) {
        const v568 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:141:18:decimal', stdlib.UInt_max, 2), v347);
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v368), {
          at: './index.rsh:147:28:application',
          fs: ['at ./index.rsh:146:9:application call to [unknown function] (defined at: ./index.rsh:146:27:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }
      else {
        stdlib.protect(ctc3, await interact.seeOutcome(v368), {
          at: './index.rsh:147:28:application',
          fs: ['at ./index.rsh:146:9:application call to [unknown function] (defined at: ./index.rsh:146:27:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }}}
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v347, v348], secs: v350, time: v349, didSend: v35, from: v346 } = txn1;
  ;
  const v359 = stdlib.add(v349, v348);
  stdlib.protect(ctc1, await interact.acceptWager(v347), {
    at: './index.rsh:65:29:application',
    fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v346, v347, v348, v359],
    evt_cnt: 0,
    funcNum: 1,
    lct: v349,
    onlyIf: true,
    out_tys: [],
    pay: [v347, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v365, time: v364, didSend: v44, from: v363 } = txn2;
      
      const v367 = stdlib.add(v347, v347);
      sim_r.txns.push({
        amt: v347,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v368 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
      const v369 = v364;
      const v376 = v367;
      
      if (await (async () => {
        const v384 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        
        return v384;})()) {
        const v391 = stdlib.add(v369, v348);
        sim_r.isHalt = false;
        }
      else {
        const v555 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        if (v555) {
          const v556 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:139:18:decimal', stdlib.UInt_max, 2), v347);
          sim_r.txns.push({
            amt: v556,
            kind: 'from',
            to: v346,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v567 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
          if (v567) {
            const v568 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:141:18:decimal', stdlib.UInt_max, 2), v347);
            sim_r.txns.push({
              amt: v568,
              kind: 'from',
              to: v363,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v359],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v346, v347, v348, v359],
      evt_cnt: 0,
      funcNum: 2,
      lct: v349,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v587, time: v586, didSend: v310, from: v585 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v347,
          kind: 'from',
          to: v346,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v587, time: v586, didSend: v310, from: v585 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:52:35:application',
      fs: ['at ./index.rsh:51:13:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:50:30:function exp)', 'at ./index.rsh:68:65:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v365, time: v364, didSend: v44, from: v363 } = txn2;
    const v367 = stdlib.add(v347, v347);
    ;
    let v368 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
    let v369 = v364;
    let v376 = v367;
    
    while (await (async () => {
      const v384 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      
      return v384;})()) {
      const v391 = stdlib.add(v369, v348);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v391],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v346, v347, v348, v363, v376, v391],
          evt_cnt: 0,
          funcNum: 5,
          lct: v369,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v539, time: v538, didSend: v259, from: v537 } = txn4;
            
            ;
            const v540 = stdlib.addressEq(v346, v537);
            const v541 = stdlib.addressEq(v363, v537);
            const v542 = v540 ? true : v541;
            ;
            sim_r.txns.push({
              amt: v376,
              kind: 'from',
              to: v363,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v539, time: v538, didSend: v259, from: v537 } = txn4;
        ;
        const v540 = stdlib.addressEq(v346, v537);
        const v541 = stdlib.addressEq(v363, v537);
        const v542 = v540 ? true : v541;
        stdlib.assert(v542, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:88:110:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:52:35:application',
          fs: ['at ./index.rsh:51:13:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:50:30:function exp)', 'at ./index.rsh:88:110:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v404, v405], secs: v407, time: v406, didSend: v76, from: v403 } = txn3;
        ;
        const v408 = stdlib.addressEq(v346, v403);
        stdlib.assert(v408, {
          at: './index.rsh:88:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v415 = stdlib.add(v406, v348);
        const v419 = stdlib.protect(ctc0, await interact.chooseFinger(), {
          at: './index.rsh:94:53:application',
          fs: ['at ./index.rsh:93:17:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)'],
          msg: 'chooseFinger',
          who: 'Bob'
          });
        const v420 = stdlib.protect(ctc0, await interact.predictAmount(), {
          at: './index.rsh:95:58:application',
          fs: ['at ./index.rsh:93:17:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)'],
          msg: 'predictAmount',
          who: 'Bob'
          });
        const v421 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:53:31:application',
          fs: ['at ./index.rsh:97:70:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:93:17:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)'],
          msg: 'random',
          who: 'Bob'
          });
        const v422 = stdlib.digest(ctc3, [v421, v419]);
        const v424 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:53:31:application',
          fs: ['at ./index.rsh:98:78:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:93:17:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)'],
          msg: 'random',
          who: 'Bob'
          });
        const v425 = stdlib.digest(ctc3, [v424, v420]);
        
        const txn4 = await (ctc.sendrecv({
          args: [v346, v347, v348, v363, v376, v404, v415, v425, v422],
          evt_cnt: 2,
          funcNum: 6,
          lct: v406,
          onlyIf: true,
          out_tys: [ctc2, ctc2],
          pay: [stdlib.checkedBigNumberify('./index.rsh:104:13:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v428, v429], secs: v431, time: v430, didSend: v96, from: v427 } = txn4;
            
            ;
            const v432 = stdlib.addressEq(v363, v427);
            ;
            const v439 = stdlib.add(v430, v348);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v415],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v346, v347, v348, v363, v376, v404, v415],
            evt_cnt: 0,
            funcNum: 7,
            lct: v406,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v521, time: v520, didSend: v225, from: v519 } = txn5;
              
              ;
              const v522 = stdlib.addressEq(v346, v519);
              const v523 = stdlib.addressEq(v363, v519);
              const v524 = v522 ? true : v523;
              ;
              sim_r.txns.push({
                amt: v376,
                kind: 'from',
                to: v346,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v521, time: v520, didSend: v225, from: v519 } = txn5;
          ;
          const v522 = stdlib.addressEq(v346, v519);
          const v523 = stdlib.addressEq(v363, v519);
          const v524 = v522 ? true : v523;
          stdlib.assert(v524, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:104:104:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:52:35:application',
            fs: ['at ./index.rsh:51:13:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:50:30:function exp)', 'at ./index.rsh:104:104:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v428, v429], secs: v431, time: v430, didSend: v96, from: v427 } = txn4;
          ;
          const v432 = stdlib.addressEq(v363, v427);
          stdlib.assert(v432, {
            at: './index.rsh:104:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v439 = stdlib.add(v430, v348);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v439],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v346, v347, v348, v363, v376, v404, v428, v429, v439],
              evt_cnt: 0,
              funcNum: 9,
              lct: v430,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v503, time: v502, didSend: v191, from: v501 } = txn6;
                
                ;
                const v504 = stdlib.addressEq(v346, v501);
                const v505 = stdlib.addressEq(v363, v501);
                const v506 = v504 ? true : v505;
                ;
                sim_r.txns.push({
                  amt: v376,
                  kind: 'from',
                  to: v363,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v503, time: v502, didSend: v191, from: v501 } = txn6;
            ;
            const v504 = stdlib.addressEq(v346, v501);
            const v505 = stdlib.addressEq(v363, v501);
            const v506 = v504 ? true : v505;
            stdlib.assert(v506, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:117:136:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:52:35:application',
              fs: ['at ./index.rsh:51:13:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:50:30:function exp)', 'at ./index.rsh:117:136:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v444, v445, v446, v447], secs: v449, time: v448, didSend: v108, from: v443 } = txn5;
            ;
            const v450 = stdlib.addressEq(v346, v443);
            stdlib.assert(v450, {
              at: './index.rsh:117:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v451 = stdlib.digest(ctc3, [v445, v444]);
            const v452 = stdlib.digestEq(v404, v451);
            stdlib.assert(v452, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:118:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v459 = stdlib.add(v448, v348);
            const txn6 = await (ctc.sendrecv({
              args: [v346, v347, v348, v363, v376, v428, v429, v444, v446, v459, v419, v421, v420, v424],
              evt_cnt: 4,
              funcNum: 10,
              lct: v448,
              onlyIf: true,
              out_tys: [ctc0, ctc0, ctc0, ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:129:13:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v464, v465, v466, v467], secs: v469, time: v468, didSend: v123, from: v463 } = txn6;
                
                ;
                const v470 = stdlib.addressEq(v363, v463);
                ;
                const v471 = stdlib.digest(ctc3, [v465, v464]);
                const v472 = stdlib.digestEq(v429, v471);
                ;
                const v473 = stdlib.digest(ctc3, [v467, v466]);
                const v474 = stdlib.digestEq(v428, v473);
                ;
                let v475;
                const v476 = stdlib.add(v444, v464);
                const v477 = stdlib.sub(v446, v476);
                const v478 = stdlib.eq(v477, stdlib.checkedBigNumberify('./index.rsh:18:52:decimal', stdlib.UInt_max, 0));
                const v479 = stdlib.sub(v466, v476);
                const v480 = stdlib.eq(v479, stdlib.checkedBigNumberify('./index.rsh:19:52:decimal', stdlib.UInt_max, 0));
                const v481 = v480 ? false : true;
                const v482 = v478 ? v480 : v481;
                if (v482) {
                  v475 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                  }
                else {
                  if (v480) {
                    v475 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                    }
                  else {
                    v475 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                    }
                  }
                const cv368 = v475;
                const cv369 = v468;
                const cv376 = v376;
                
                await (async () => {
                  const v368 = cv368;
                  const v369 = cv369;
                  const v376 = cv376;
                  
                  if (await (async () => {
                    const v384 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                    
                    return v384;})()) {
                    const v391 = stdlib.add(v369, v348);
                    sim_r.isHalt = false;
                    }
                  else {
                    const v555 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
                    if (v555) {
                      const v556 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:139:18:decimal', stdlib.UInt_max, 2), v347);
                      sim_r.txns.push({
                        amt: v556,
                        kind: 'from',
                        to: v346,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      const v567 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                      if (v567) {
                        const v568 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:141:18:decimal', stdlib.UInt_max, 2), v347);
                        sim_r.txns.push({
                          amt: v568,
                          kind: 'from',
                          to: v363,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}}})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v459],
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v346, v347, v348, v363, v376, v428, v429, v444, v446, v459],
                evt_cnt: 0,
                funcNum: 11,
                lct: v448,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v485, time: v484, didSend: v157, from: v483 } = txn7;
                  
                  ;
                  const v486 = stdlib.addressEq(v346, v483);
                  const v487 = stdlib.addressEq(v363, v483);
                  const v488 = v486 ? true : v487;
                  ;
                  sim_r.txns.push({
                    amt: v376,
                    kind: 'from',
                    to: v346,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v485, time: v484, didSend: v157, from: v483 } = txn7;
              ;
              const v486 = stdlib.addressEq(v346, v483);
              const v487 = stdlib.addressEq(v363, v483);
              const v488 = v486 ? true : v487;
              stdlib.assert(v488, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./index.rsh:129:126:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:52:35:application',
                fs: ['at ./index.rsh:51:13:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:50:30:function exp)', 'at ./index.rsh:129:126:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v464, v465, v466, v467], secs: v469, time: v468, didSend: v123, from: v463 } = txn6;
              ;
              const v470 = stdlib.addressEq(v363, v463);
              stdlib.assert(v470, {
                at: './index.rsh:129:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v471 = stdlib.digest(ctc3, [v465, v464]);
              const v472 = stdlib.digestEq(v429, v471);
              stdlib.assert(v472, {
                at: 'reach standard library:58:17:application',
                fs: ['at ./index.rsh:131:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v473 = stdlib.digest(ctc3, [v467, v466]);
              const v474 = stdlib.digestEq(v428, v473);
              stdlib.assert(v474, {
                at: 'reach standard library:58:17:application',
                fs: ['at ./index.rsh:132:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              let v475;
              const v476 = stdlib.add(v444, v464);
              const v477 = stdlib.sub(v446, v476);
              const v478 = stdlib.eq(v477, stdlib.checkedBigNumberify('./index.rsh:18:52:decimal', stdlib.UInt_max, 0));
              const v479 = stdlib.sub(v466, v476);
              const v480 = stdlib.eq(v479, stdlib.checkedBigNumberify('./index.rsh:19:52:decimal', stdlib.UInt_max, 0));
              const v481 = v480 ? false : true;
              const v482 = v478 ? v480 : v481;
              if (v482) {
                v475 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                if (v480) {
                  v475 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                else {
                  v475 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                }
              const cv368 = v475;
              const cv369 = v468;
              const cv376 = v376;
              
              v368 = cv368;
              v369 = cv369;
              v376 = cv376;
              
              continue;}
            
            }
          
          }
        
        }
      
      }
    const v555 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    if (v555) {
      const v556 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:139:18:decimal', stdlib.UInt_max, 2), v347);
      ;
      stdlib.protect(ctc1, await interact.seeOutcome(v368), {
        at: './index.rsh:147:28:application',
        fs: ['at ./index.rsh:146:9:application call to [unknown function] (defined at: ./index.rsh:146:27:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const v567 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      if (v567) {
        const v568 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:141:18:decimal', stdlib.UInt_max, 2), v347);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v368), {
          at: './index.rsh:147:28:application',
          fs: ['at ./index.rsh:146:9:application call to [unknown function] (defined at: ./index.rsh:146:27:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }
      else {
        stdlib.protect(ctc1, await interact.seeOutcome(v368), {
          at: './index.rsh:147:28:application',
          fs: ['at ./index.rsh:146:9:application call to [unknown function] (defined at: ./index.rsh:146:27:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }}}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiATAAEFUAIgCAsoCQcNqAEQGLgBeFgwJgMBAAEBACI1ADEYQQdvKmRJIls1ASEGWzUCNhoAF0lBAAciNQQjNQYANhoBFzYaAhc1BDYaAzUFSYEGDEADzUkhCQxAAb1JgQoMQAFLSSEHDEAAbiEHEkQhCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOPZNjWwMgY0AyEMWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJVuyCCOyEDT/sgezsSKyASKyCCOyEDIJsgkyCrIHszEZJBJEQgaUSCELNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/zQFIls1/jQFIQZbNf00BSENWzX8NAUhDls1+4AEgw4HeDT+FlA0/RZQNPwWUDT7FlCwMgY0AyEMWwxENP8xABJENANXeCA0/RY0/hZQARJENANXWCA0+xY0/BZQARJENAOBmAFbNP4INfk0/DT5CSISSTX4FDT4NAOBoAFbNPkJIhJNQQAHIQQ1+kIADjT4QQAGIzX6QgADIjX6NANXACA0AyEFWzQDIQhbNP80+jIGNAMlW0IE70ghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyEPWw9ENANXACAxABI0/zEAEhFEsSKyATQDJVuyCCOyEDT/sgezsSKyASKyCCOyEDIJsgkyCrIHszEZJBJEQgVTSSEKDEABU0khBgxAAOFIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/NAMhBVs1/jQDIQhbNf00A1cwIDX8NAMlWzX7NANXeCA1+jQDV5ggNfk0BSJbNfg0BSEGWzX3NAUhDVs19jQFIQ5bNfWABH+iO1I0+BZQNPcWUDT2FlA09RZQsDIGNAMhD1sMRDT/MQASRDQDV1ggNPcWNPgWUAESRDIGNP0INfQ0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09hZQNPQWUChLAVcAf2cpSwFXfzFnSCELNQEyBjUCMRkiEkRCBGRIIQk0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhEFsPRDT/MQASNANXMCAxABIRRLEisgE0AyVbsggjshA0/7IHs7EisgEisggjshAyCbIJMgqyB7MxGSQSREID+UghCTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf80AyEFWzX+NAMhCFs1/TQDVzAgNfw0AyVbNfs0A1dYIDX6NAVXACA1+TQFVyAgNfiABAQ0OZ40+VA0+FCwMgY0AyEQWwxENPwxABJEMgY0/Qg19zT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPhQNPcWUChLAVcAf2cpSwFXf0FnSCEHNQEyBjUCMRkiEkRCA0pJgQMMQAEVSYEEDEABDUkkDEAAaEghCjQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABMyZklywMgY0AyERWw9ENANXACAxABI0/zEAEhFEsSKyATQDJVuyCCOyEDT/sgezsSKyASKyCCOyEDIJsgkyCrIHszEZJBJEQgLOSCEKNAESRDQESSISTDQCEhFEKGRJNQNXACA1/zQDIQVbNf40AyEIWzX9NANXMCA1/DQDJVs1+zQFVwAgNfo0BVcgIDX5gARgXaQrNPpQNPlQsDIGNAMhEVsMRDT/MQASRDIGNP0INfg0/zT+FlA0/RZQNPxQNPsWUDT6UDT4FlAoSwFXAH9nKUsBV38BZ0ghCTUBMgY1AjEZIhJEQgIvSEkjDEAAwEkhBAxAAFZIIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyESWw9EsSKyATQDIQVbsggjshA0A1cAILIHs7EisgEisggjshAyCbIJMgqyB7MxGSQSREIBy0gjNAESRDQESSISTDQCEhFEKGRJNQMhBVs1/4AEmouRdLAyBjQDIRJbDEQ0AEkjCDUANP9LATgIEkQjSwE4EBJEMgpLATgHEkRINANXACA0/zQDIQhbMQAhBDIGNP9JCEIAmUgiNAESRDQESSISTDQCEhFENAUiWzX/NAUhBls1/oAErNEfwzT/FlA0/hZQsDQASSMINQCBoI0GSwE4CBJEI0sBOBASRDIKSwE4BxJESDQASSMINQA0/0sBOAgSRCNLATgQEkQyCksBOAcSREgyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQIxGSISREIAzzX/Nf41/TX8Nfs1+jX5NP0hBBJBADQ0/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0ghCjUBMgY1AjEZIhJEQgCFNP0iEkEALrEisgEhBDT6C7III7IQNPmyB7OxIrIBIrIII7IQMgmyCTIKsgezMRkkEkRCAFA0/SMSQQAusSKyASEENPoLsggjshA0/LIHs7EisgEisggjshAyCbIJMgqyB7MxGSQSREIAG7EisgEisggjshAyCbIJMgqyB7MxGSQSREIAACo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/L`,
  appClear: `Bg==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 192,
  unsupported: [],
  version: 9,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v348",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v348",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v464",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v465",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v466",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v467",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v428",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v429",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v444",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v445",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v447",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v464",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v465",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v466",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v467",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v428",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v429",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v444",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v445",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v447",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200221738038062002217833981016040819052620000269162000248565b600080805543600355604080516020810190915290815260408051835181526020808501518051828401520151918101919091527f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9060600160405180910390a16020820151516200009c903414600762000141565b6020808301510151620000b09043620002a8565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013792600292909101906200016b565b505050506200030c565b81620001675760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017990620002cf565b90600052602060002090601f0160209004810192826200019d5760008555620001e8565b82601f10620001b857805160ff1916838001178555620001e8565b82800160010185558215620001e8579182015b82811115620001e8578251825591602001919060010190620001cb565b50620001f6929150620001fa565b5090565b5b80821115620001f65760008155600101620001fb565b604080519081016001600160401b03811182821017156200024257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025c57600080fd5b6200026662000211565b835181526040601f19830112156200027d57600080fd5b6200028762000211565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002ca57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e457607f821691505b602082108114156200030657634e487b7160e01b600052602260045260246000fd5b50919050565b611efb806200031c6000396000f3fe6080604052600436106100bd5760003560e01c80638e31476911610079578063c6524acb11610056578063c6524acb14610194578063cc923b29146101a7578063de736998146101ba578063ebdbfdcc146101cd57005b80638e3147691461014b578063ab53f2c61461015e578063bf2c5b241461018157005b80631e93b0f1146100c657806321642639146100ea5780632c10a159146100fd5780637eea518c1461011057806383230757146101235780638b9fadc81461013857005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100c46100f8366004611910565b6101e0565b6100c461010b366004611933565b610499565b6100c461011e366004611933565b61062e565b34801561012f57600080fd5b506001546100d7565b6100c4610146366004611933565b6107aa565b6100c4610159366004611933565b610940565b34801561016a57600080fd5b50610173610ad9565b6040516100e1929190611945565b6100c461018f366004611933565b610b76565b6100c46101a23660046119b4565b610cce565b6100c46101b53660046119b4565b610fbe565b6100c46101c8366004611933565b611242565b6100c46101db366004611910565b61139b565b6101f0600960005414601c6115dd565b61020a8135158061020357506001548235145b601d6115dd565b60008080556002805461021c906119d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610248906119d0565b80156102955780601f1061026a57610100808354040283529160200191610295565b820191906000526020600020905b81548152906001019060200180831161027857829003601f168201915b50505050508060200190518101906102ad9190611a8b565b90506102c56040518060200160405280600081525090565b6102d68260c001514310601e6115dd565b7fdeffff81372f6a0134c2017dc69420e8947c073fa5ecccb9cf50511824542945836040516103059190611b29565b60405180910390a16103193415601a6115dd565b6060820151610334906001600160a01b03163314601b6115dd565b60408201516103439043611b62565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c08401528582013560e08401528351610100840152600b60005543600155905161046e9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b604051602081830303815290604052600290805190602001906104929291906117c9565b5050505050565b6104a960016000541460096115dd565b6104c3813515806104bc57506001548235145b600a6115dd565b6000808055600280546104d5906119d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610501906119d0565b801561054e5780601f106105235761010080835404028352916020019161054e565b820191906000526020600020905b81548152906001019060200180831161053157829003601f168201915b50505050508060200190518101906105669190611b7a565b905061057981606001514310600b6115dd565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516105a89190611bf3565b60405180910390a16105c18160200151341460086115dd565b6105c961184d565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600290525143920191909152516106179080611b62565b60208201516040015261062981611602565b505050565b61063e600160005414600d6115dd565b6106588135158061065157506001548235145b600e6115dd565b60008080556002805461066a906119d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610696906119d0565b80156106e35780601f106106b8576101008083540402835291602001916106e3565b820191906000526020600020905b8154815290600101906020018083116106c657829003601f168201915b50505050508060200190518101906106fb9190611b7a565b905061070f8160600151431015600f6115dd565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e18260405161073e9190611bf3565b60405180910390a16107523415600c6115dd565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561078f573d6000803e3d6000fd5b50600080805560018190556107a6906002906118a6565b5050565b6107ba600d6000541460386115dd565b6107d4813515806107cd57506001548235145b60396115dd565b6000808055600280546107e6906119d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610812906119d0565b801561085f5780601f106108345761010080835404028352916020019161085f565b820191906000526020600020905b81548152906001019060200180831161084257829003601f168201915b50505050508060200190518101906108779190611c1d565b905061088c816101200151431015603a6115dd565b7f5fe72957f5855f25860ec325face1305075da64ba42ea3b56918fbe46e26b404826040516108bb9190611bf3565b60405180910390a16108cf341560366115dd565b8051610903906001600160a01b031633146108f95760608201516001600160a01b031633146108fc565b60015b60376115dd565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561078f573d6000803e3d6000fd5b61095060076000541460176115dd565b61096a8135158061096357506001548235145b60186115dd565b60008080556002805461097c906119d0565b80601f01602080910402602001604051908101604052809291908181526020018280546109a8906119d0565b80156109f55780601f106109ca576101008083540402835291602001916109f5565b820191906000526020600020905b8154815290600101906020018083116109d857829003601f168201915b5050505050806020019051810190610a0d9190611cb2565b9050610a218160a0015143101560196115dd565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de882604051610a509190611bf3565b60405180910390a1610a64341560156115dd565b8051610a98906001600160a01b03163314610a8e5760608201516001600160a01b03163314610a91565b60015b60166115dd565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561078f573d6000803e3d6000fd5b600060606000546002808054610aee906119d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610b1a906119d0565b8015610b675780601f10610b3c57610100808354040283529160200191610b67565b820191906000526020600020905b815481529060010190602001808311610b4a57829003601f168201915b50505050509050915091509091565b610b8660096000541460216115dd565b610ba081351580610b9957506001548235145b60226115dd565b600080805560028054610bb2906119d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610bde906119d0565b8015610c2b5780601f10610c0057610100808354040283529160200191610c2b565b820191906000526020600020905b815481529060010190602001808311610c0e57829003601f168201915b5050505050806020019051810190610c439190611a8b565b9050610c578160c0015143101560236115dd565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e082604051610c869190611bf3565b60405180910390a1610c9a3415601f6115dd565b8051610903906001600160a01b03163314610cc45760608201516001600160a01b03163314610cc7565b60015b60206115dd565b610cde600d6000541460336115dd565b610cf881351580610cf157506001548235145b60346115dd565b600080805560028054610d0a906119d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610d36906119d0565b8015610d835780601f10610d5857610100808354040283529160200191610d83565b820191906000526020600020905b815481529060010190602001808311610d6657829003601f168201915b5050505050806020019051810190610d9b9190611c1d565b9050610dc3604051806060016040528060008152602001600081526020016000151581525090565b610dd5826101200151431060356115dd565b7f549c9fc546e5f8c4bf917827c2419521e946e3198cb9b2357f885e511e8d444f83604051610e049190611d46565b60405180910390a1610e183415602f6115dd565b6060820151610e33906001600160a01b0316331460306115dd565b60408051610e8091610e5a9190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360c001511460316115dd565b604080516080850135602080830191909152606080870135838501528351808403850181529201909252805191012060a0830151610ec0911460326115dd565b60e0820151610ed490602085013590611b62565b60208201819052600090610eec906060860135611d7f565b1460408201526020810151610100830151600091610f0991611d7f565b14610f25578060400151610f1e576001610f2b565b6000610f2b565b80604001515b15610f395760028152610f51565b806040015115610f4c5760018152610f51565b600081525b610f5961184d565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610fb881611602565b50505050565b610fce600b6000541460276115dd565b610fe881351580610fe157506001548235145b60286115dd565b600080805560028054610ffa906119d0565b80601f0160208091040260200160405190810160405280929190818152602001828054611026906119d0565b80156110735780601f1061104857610100808354040283529160200191611073565b820191906000526020600020905b81548152906001019060200180831161105657829003601f168201915b505050505080602001905181019061108b9190611d96565b90506110a36040518060200160405280600081525090565b6110b5826101000151431060296115dd565b7f6d2a760051c31ac710d5caab59ac56c4a07d80f9223f41860cee13a409443bec836040516110e49190611d46565b60405180910390a16110f8341560246115dd565b8151611110906001600160a01b0316331460256115dd565b6040805161115d916111379190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460266115dd565b604082015161116c9043611b62565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316838501526080808701519085015260c08087015160a086015260e080880151918601919091528783013590850152918601356101008401528351610120840152600d60005543600155905161046e91839101611e1f565b611252600b60005414602c6115dd565b61126c8135158061126557506001548235145b602d6115dd565b60008080556002805461127e906119d0565b80601f01602080910402602001604051908101604052809291908181526020018280546112aa906119d0565b80156112f75780601f106112cc576101008083540402835291602001916112f7565b820191906000526020600020905b8154815290600101906020018083116112da57829003601f168201915b505050505080602001905181019061130f9190611d96565b9050611324816101000151431015602e6115dd565b7fb764c356a899e639c4043e82fb6274894baac6d84c74f3b3ae78d8f4b22b0003826040516113539190611bf3565b60405180910390a16113673415602a6115dd565b8051610a98906001600160a01b031633146113915760608201516001600160a01b03163314611394565b60015b602b6115dd565b6113ab60076000541460126115dd565b6113c5813515806113be57506001548235145b60136115dd565b6000808055600280546113d7906119d0565b80601f0160208091040260200160405190810160405280929190818152602001828054611403906119d0565b80156114505780601f1061142557610100808354040283529160200191611450565b820191906000526020600020905b81548152906001019060200180831161143357829003601f168201915b50505050508060200190518101906114689190611cb2565b90506114806040518060200160405280600081525090565b6114918260a00151431060146115dd565b7f8a7f52857f5a8f65325114c9f376102f032d7b655b2da6a5e0a4fd78f992d983836040516114c09190611b29565b60405180910390a16114d4341560106115dd565b81516114ec906001600160a01b0316331460116115dd565b60408201516114fb9043611b62565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260096000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e08201526101000161046e565b816107a65760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516020810190915260008152602082015151600214156117245781516040015160208084015101516116379190611b62565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526007600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610fb89291906117c9565b60208201515161177b57815180516020909101516001600160a01b03909116906108fc90611753906002611ea6565b6040518115909202916000818181858888f1935050505015801561078f573d6000803e3d6000fd5b602082015151600114156117b3578160000151606001516001600160a01b03166108fc83600001516020015160026117539190611ea6565b600080805560018190556107a6906002906118a6565b8280546117d5906119d0565b90600052602060002090601f0160209004810192826117f7576000855561183d565b82601f1061181057805160ff191683800117855561183d565b8280016001018555821561183d579182015b8281111561183d578251825591602001919060010190611822565b506118499291506118e3565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016118a160405180606001604052806000815260200160008152602001600081525090565b905290565b5080546118b2906119d0565b6000825580601f106118c2575050565b601f0160209004906000526020600020908101906118e091906118e3565b50565b5b8082111561184957600081556001016118e4565b60006060828403121561190a57600080fd5b50919050565b60006060828403121561192257600080fd5b61192c83836118f8565b9392505050565b60006040828403121561190a57600080fd5b82815260006020604081840152835180604085015260005b818110156119795785810183015185820160600152820161195d565b8181111561198b576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561190a57600080fd5b600060a082840312156119c657600080fd5b61192c83836119a2565b600181811c908216806119e457607f821691505b6020821081141561190a57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff81118282101715611a3757634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611a3757634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114611a8657600080fd5b919050565b600060e08284031215611a9d57600080fd5b60405160e0810181811067ffffffffffffffff82111715611ace57634e487b7160e01b600052604160045260246000fd5b604052611ada83611a6f565b81526020830151602082015260408301516040820152611afc60608401611a6f565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b813581526020808301359082015260408083013590820152606081015b92915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611b7557611b75611b4c565b500190565b600060808284031215611b8c57600080fd5b6040516080810181811067ffffffffffffffff82111715611bbd57634e487b7160e01b600052604160045260246000fd5b604052611bc983611a6f565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b81358152604081016020830135801515808214611c0f57600080fd5b806020850152505092915050565b60006101408284031215611c3057600080fd5b611c38611a05565b611c4183611a6f565b81526020830151602082015260408301516040820152611c6360608401611a6f565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b600060c08284031215611cc457600080fd5b60405160c0810181811067ffffffffffffffff82111715611cf557634e487b7160e01b600052604160045260246000fd5b604052611d0183611a6f565b81526020830151602082015260408301516040820152611d2360608401611a6f565b60608201526080830151608082015260a083015160a08201528091505092915050565b60a08101611b46828480358252602081013560208301526040810135604083015260608101356060830152608081013560808301525050565b600082821015611d9157611d91611b4c565b500390565b60006101208284031215611da957600080fd5b611db1611a3d565b611dba83611a6f565b81526020830151602082015260408301516040820152611ddc60608401611a6f565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b81516001600160a01b03168152610140810160208301516020830152604083015160408301526060830151611e5f60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000816000190483118215151615611ec057611ec0611b4c565b50029056fea26469706673582212203aea598d544486ebec7c66e12eacc1a0ba109e78ef95420facfba204badb9f3464736f6c634300080c0033`,
  BytecodeLen: 8727,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:62:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:68:65:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:144:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:144:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:144:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:75:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:88:110:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:89:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:104:104:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:105:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:117:136:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:119:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:129:126:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
