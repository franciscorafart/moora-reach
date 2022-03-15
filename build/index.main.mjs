// Automatically generated with Reach 0.1.8 (85500c11)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (85500c11)';
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
      3: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
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
  
  
  const v332 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v333 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v333, v332],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:62:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v333, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v337, v338], secs: v340, time: v339, didSend: v35, from: v336 } = txn1;
      
      sim_r.txns.push({
        amt: v337,
        kind: 'to',
        tok: undefined
        });
      const v349 = stdlib.add(v339, v338);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v337, v338], secs: v340, time: v339, didSend: v35, from: v336 } = txn1;
  ;
  const v349 = stdlib.add(v339, v338);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v349],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v336, v337, v338, v349],
      evt_cnt: 0,
      funcNum: 2,
      lct: v339,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        
        const {data: [], secs: v576, time: v575, didSend: v315, from: v574 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        sim_r.txns.push({
          amt: v337,
          kind: 'from',
          to: v336,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v576, time: v575, didSend: v315, from: v574 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:53:35:application',
      fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:69:65:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v355, time: v354, didSend: v44, from: v353 } = txn2;
    const v357 = stdlib.add(v337, v337);
    ;
    const v364 = stdlib.add(v354, v338);
    const v368 = stdlib.protect(ctc0, await interact.chooseFinger(), {
      at: './index.rsh:74:51:application',
      fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:19:function exp)'],
      msg: 'chooseFinger',
      who: 'Alice'
      });
    const v369 = stdlib.protect(ctc0, await interact.predictAmount(), {
      at: './index.rsh:75:56:application',
      fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:19:function exp)'],
      msg: 'predictAmount',
      who: 'Alice'
      });
    const v370 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:53:31:application',
      fs: ['at ./index.rsh:77:70:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:19:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v371 = stdlib.digest(ctc1, [v370, v368]);
    const v373 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:53:31:application',
      fs: ['at ./index.rsh:78:78:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:19:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v374 = stdlib.digest(ctc1, [v373, v369]);
    
    const txn3 = await (ctc.sendrecv({
      args: [v336, v337, v338, v353, v357, v364, v371, v374],
      evt_cnt: 2,
      funcNum: 3,
      lct: v354,
      onlyIf: true,
      out_tys: [ctc2, ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:84:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        
        const {data: [v377, v378], secs: v380, time: v379, didSend: v65, from: v376 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:84:11:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v382 = stdlib.addressEq(v336, v376);
        stdlib.assert(v382, {
          at: './index.rsh:84:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v389 = stdlib.add(v379, v338);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v364],
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v336, v337, v338, v353, v357, v364],
        evt_cnt: 0,
        funcNum: 4,
        lct: v354,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v557, time: v556, didSend: v283, from: v555 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v559 = stdlib.addressEq(v336, v555);
          const v560 = stdlib.addressEq(v353, v555);
          const v561 = v559 ? true : v560;
          stdlib.assert(v561, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:84:106:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          sim_r.txns.push({
            amt: v357,
            kind: 'from',
            to: v353,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v557, time: v556, didSend: v283, from: v555 } = txn4;
      ;
      const v559 = stdlib.addressEq(v336, v555);
      const v560 = stdlib.addressEq(v353, v555);
      const v561 = v559 ? true : v560;
      stdlib.assert(v561, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:84:106:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:53:35:application',
        fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:84:106:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v377, v378], secs: v380, time: v379, didSend: v65, from: v376 } = txn3;
      ;
      const v382 = stdlib.addressEq(v336, v376);
      stdlib.assert(v382, {
        at: './index.rsh:84:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v389 = stdlib.add(v379, v338);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 5,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v389],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v336, v337, v338, v353, v357, v377, v389],
          evt_cnt: 0,
          funcNum: 6,
          lct: v379,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            
            const {data: [], secs: v538, time: v537, didSend: v248, from: v536 } = txn5;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v540 = stdlib.addressEq(v336, v536);
            const v541 = stdlib.addressEq(v353, v536);
            const v542 = v540 ? true : v541;
            stdlib.assert(v542, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:100:100:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            sim_r.txns.push({
              amt: v357,
              kind: 'from',
              to: v336,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v538, time: v537, didSend: v248, from: v536 } = txn5;
        ;
        const v540 = stdlib.addressEq(v336, v536);
        const v541 = stdlib.addressEq(v353, v536);
        const v542 = v540 ? true : v541;
        stdlib.assert(v542, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:100:100:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:53:35:application',
          fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:100:100:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v402, v403], secs: v405, time: v404, didSend: v86, from: v401 } = txn4;
        ;
        const v407 = stdlib.addressEq(v353, v401);
        stdlib.assert(v407, {
          at: './index.rsh:100:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v414 = stdlib.add(v404, v338);
        const txn5 = await (ctc.sendrecv({
          args: [v336, v337, v338, v353, v357, v377, v402, v403, v414, v368, v370, v369, v373],
          evt_cnt: 4,
          funcNum: 7,
          lct: v404,
          onlyIf: true,
          out_tys: [ctc0, ctc0, ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:113:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            
            const {data: [v419, v420, v421, v422], secs: v424, time: v423, didSend: v99, from: v418 } = txn5;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:113:11:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v426 = stdlib.addressEq(v336, v418);
            stdlib.assert(v426, {
              at: './index.rsh:113:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v427 = stdlib.digest(ctc1, [v420, v419]);
            const v428 = stdlib.digestEq(v377, v427);
            stdlib.assert(v428, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:114:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v435 = stdlib.add(v423, v338);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v414],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v336, v337, v338, v353, v357, v377, v402, v403, v414],
            evt_cnt: 0,
            funcNum: 8,
            lct: v404,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              
              const {data: [], secs: v519, time: v518, didSend: v213, from: v517 } = txn6;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v521 = stdlib.addressEq(v336, v517);
              const v522 = stdlib.addressEq(v353, v517);
              const v523 = v521 ? true : v522;
              stdlib.assert(v523, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./index.rsh:113:132:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              sim_r.txns.push({
                amt: v357,
                kind: 'from',
                to: v353,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v519, time: v518, didSend: v213, from: v517 } = txn6;
          ;
          const v521 = stdlib.addressEq(v336, v517);
          const v522 = stdlib.addressEq(v353, v517);
          const v523 = v521 ? true : v522;
          stdlib.assert(v523, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:113:132:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:53:35:application',
            fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:113:132:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v419, v420, v421, v422], secs: v424, time: v423, didSend: v99, from: v418 } = txn5;
          ;
          const v426 = stdlib.addressEq(v336, v418);
          stdlib.assert(v426, {
            at: './index.rsh:113:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v427 = stdlib.digest(ctc1, [v420, v419]);
          const v428 = stdlib.digestEq(v377, v427);
          stdlib.assert(v428, {
            at: 'reach standard library:58:17:application',
            fs: ['at ./index.rsh:114:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v435 = stdlib.add(v423, v338);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 9,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v435],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v336, v337, v353, v357, v402, v403, v419, v421, v435],
              evt_cnt: 0,
              funcNum: 10,
              lct: v423,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                
                const {data: [], secs: v500, time: v499, didSend: v178, from: v498 } = txn7;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v502 = stdlib.addressEq(v336, v498);
                const v503 = stdlib.addressEq(v353, v498);
                const v504 = v502 ? true : v503;
                stdlib.assert(v504, {
                  at: 'reach standard library:189:11:dot',
                  fs: ['at ./index.rsh:125:122:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                sim_r.txns.push({
                  amt: v357,
                  kind: 'from',
                  to: v336,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined,
              tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v500, time: v499, didSend: v178, from: v498 } = txn7;
            ;
            const v502 = stdlib.addressEq(v336, v498);
            const v503 = stdlib.addressEq(v353, v498);
            const v504 = v502 ? true : v503;
            stdlib.assert(v504, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:125:122:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:53:35:application',
              fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:125:122:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v440, v441, v442, v443], secs: v445, time: v444, didSend: v115, from: v439 } = txn6;
            ;
            const v447 = stdlib.addressEq(v353, v439);
            stdlib.assert(v447, {
              at: './index.rsh:125:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v448 = stdlib.digest(ctc1, [v441, v440]);
            const v449 = stdlib.digestEq(v403, v448);
            stdlib.assert(v449, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:127:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v450 = stdlib.digest(ctc1, [v443, v442]);
            const v451 = stdlib.digestEq(v402, v450);
            stdlib.assert(v451, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:128:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            let v452;
            const v453 = stdlib.add(v419, v440);
            const v454 = stdlib.sub(v421, v453);
            const v455 = stdlib.eq(v454, stdlib.checkedBigNumberify('./index.rsh:18:52:decimal', stdlib.UInt_max, 0));
            const v456 = stdlib.sub(v442, v453);
            const v457 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:19:52:decimal', stdlib.UInt_max, 0));
            const v458 = v457 ? false : true;
            const v459 = v455 ? v457 : v458;
            if (v459) {
              v452 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
              }
            else {
              if (v457) {
                v452 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                }
              else {
                v452 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                }
              }
            const v460 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
            if (v460) {
              const v461 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:135:18:decimal', stdlib.UInt_max, 2), v337);
              ;
              stdlib.protect(ctc3, await interact.seeOutcome(v452), {
                at: './index.rsh:145:28:application',
                fs: ['at ./index.rsh:144:9:application call to [unknown function] (defined at: ./index.rsh:144:27:function exp)'],
                msg: 'seeOutcome',
                who: 'Alice'
                });
              
              return;
              }
            else {
              const v472 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              if (v472) {
                const v473 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:137:18:decimal', stdlib.UInt_max, 2), v337);
                ;
                stdlib.protect(ctc3, await interact.seeOutcome(v452), {
                  at: './index.rsh:145:28:application',
                  fs: ['at ./index.rsh:144:9:application call to [unknown function] (defined at: ./index.rsh:144:27:function exp)'],
                  msg: 'seeOutcome',
                  who: 'Alice'
                  });
                
                return;
                }
              else {
                ;
                ;
                stdlib.protect(ctc3, await interact.seeOutcome(v452), {
                  at: './index.rsh:145:28:application',
                  fs: ['at ./index.rsh:144:9:application call to [unknown function] (defined at: ./index.rsh:144:27:function exp)'],
                  msg: 'seeOutcome',
                  who: 'Alice'
                  });
                
                return;
                }}}
          
          }
        
        }
      
      }
    
    }
  
  
  
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
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v337, v338], secs: v340, time: v339, didSend: v35, from: v336 } = txn1;
  ;
  const v349 = stdlib.add(v339, v338);
  stdlib.protect(ctc1, await interact.acceptWager(v337), {
    at: './index.rsh:66:29:application',
    fs: ['at ./index.rsh:65:13:application call to [unknown function] (defined at: ./index.rsh:65:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v336, v337, v338, v349],
    evt_cnt: 0,
    funcNum: 1,
    lct: v339,
    onlyIf: true,
    out_tys: [],
    pay: [v337, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v355, time: v354, didSend: v44, from: v353 } = txn2;
      
      const v357 = stdlib.add(v337, v337);
      sim_r.txns.push({
        amt: v337,
        kind: 'to',
        tok: undefined
        });
      const v364 = stdlib.add(v354, v338);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v349],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v336, v337, v338, v349],
      evt_cnt: 0,
      funcNum: 2,
      lct: v339,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        
        const {data: [], secs: v576, time: v575, didSend: v315, from: v574 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        sim_r.txns.push({
          amt: v337,
          kind: 'from',
          to: v336,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v576, time: v575, didSend: v315, from: v574 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:53:35:application',
      fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:69:65:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v355, time: v354, didSend: v44, from: v353 } = txn2;
    const v357 = stdlib.add(v337, v337);
    ;
    const v364 = stdlib.add(v354, v338);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc2, ctc2],
      timeoutAt: ['time', v364],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v336, v337, v338, v353, v357, v364],
        evt_cnt: 0,
        funcNum: 4,
        lct: v354,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v557, time: v556, didSend: v283, from: v555 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v559 = stdlib.addressEq(v336, v555);
          const v560 = stdlib.addressEq(v353, v555);
          const v561 = v559 ? true : v560;
          stdlib.assert(v561, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:84:106:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          sim_r.txns.push({
            amt: v357,
            kind: 'from',
            to: v353,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v557, time: v556, didSend: v283, from: v555 } = txn4;
      ;
      const v559 = stdlib.addressEq(v336, v555);
      const v560 = stdlib.addressEq(v353, v555);
      const v561 = v559 ? true : v560;
      stdlib.assert(v561, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:84:106:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:53:35:application',
        fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:84:106:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v377, v378], secs: v380, time: v379, didSend: v65, from: v376 } = txn3;
      ;
      const v382 = stdlib.addressEq(v336, v376);
      stdlib.assert(v382, {
        at: './index.rsh:84:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v389 = stdlib.add(v379, v338);
      const v393 = stdlib.protect(ctc0, await interact.chooseFinger(), {
        at: './index.rsh:90:49:application',
        fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:17:function exp)'],
        msg: 'chooseFinger',
        who: 'Bob'
        });
      const v394 = stdlib.protect(ctc0, await interact.predictAmount(), {
        at: './index.rsh:91:54:application',
        fs: ['at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:17:function exp)'],
        msg: 'predictAmount',
        who: 'Bob'
        });
      const v395 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:93:66:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:17:function exp)'],
        msg: 'random',
        who: 'Bob'
        });
      const v396 = stdlib.digest(ctc3, [v395, v393]);
      const v398 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:94:74:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:89:13:application call to [unknown function] (defined at: ./index.rsh:89:17:function exp)'],
        msg: 'random',
        who: 'Bob'
        });
      const v399 = stdlib.digest(ctc3, [v398, v394]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v336, v337, v338, v353, v357, v377, v389, v399, v396],
        evt_cnt: 2,
        funcNum: 5,
        lct: v379,
        onlyIf: true,
        out_tys: [ctc2, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:100:9:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [v402, v403], secs: v405, time: v404, didSend: v86, from: v401 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:100:9:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v407 = stdlib.addressEq(v353, v401);
          stdlib.assert(v407, {
            at: './index.rsh:100:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v414 = stdlib.add(v404, v338);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v389],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v336, v337, v338, v353, v357, v377, v389],
          evt_cnt: 0,
          funcNum: 6,
          lct: v379,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            
            const {data: [], secs: v538, time: v537, didSend: v248, from: v536 } = txn5;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v540 = stdlib.addressEq(v336, v536);
            const v541 = stdlib.addressEq(v353, v536);
            const v542 = v540 ? true : v541;
            stdlib.assert(v542, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:100:100:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            sim_r.txns.push({
              amt: v357,
              kind: 'from',
              to: v336,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v538, time: v537, didSend: v248, from: v536 } = txn5;
        ;
        const v540 = stdlib.addressEq(v336, v536);
        const v541 = stdlib.addressEq(v353, v536);
        const v542 = v540 ? true : v541;
        stdlib.assert(v542, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:100:100:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:53:35:application',
          fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:100:100:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v402, v403], secs: v405, time: v404, didSend: v86, from: v401 } = txn4;
        ;
        const v407 = stdlib.addressEq(v353, v401);
        stdlib.assert(v407, {
          at: './index.rsh:100:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v414 = stdlib.add(v404, v338);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 4,
          funcNum: 7,
          out_tys: [ctc0, ctc0, ctc0, ctc0],
          timeoutAt: ['time', v414],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v336, v337, v338, v353, v357, v377, v402, v403, v414],
            evt_cnt: 0,
            funcNum: 8,
            lct: v404,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              
              const {data: [], secs: v519, time: v518, didSend: v213, from: v517 } = txn6;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v521 = stdlib.addressEq(v336, v517);
              const v522 = stdlib.addressEq(v353, v517);
              const v523 = v521 ? true : v522;
              stdlib.assert(v523, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./index.rsh:113:132:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              sim_r.txns.push({
                amt: v357,
                kind: 'from',
                to: v353,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v519, time: v518, didSend: v213, from: v517 } = txn6;
          ;
          const v521 = stdlib.addressEq(v336, v517);
          const v522 = stdlib.addressEq(v353, v517);
          const v523 = v521 ? true : v522;
          stdlib.assert(v523, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:113:132:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:53:35:application',
            fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:113:132:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v419, v420, v421, v422], secs: v424, time: v423, didSend: v99, from: v418 } = txn5;
          ;
          const v426 = stdlib.addressEq(v336, v418);
          stdlib.assert(v426, {
            at: './index.rsh:113:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v427 = stdlib.digest(ctc3, [v420, v419]);
          const v428 = stdlib.digestEq(v377, v427);
          stdlib.assert(v428, {
            at: 'reach standard library:58:17:application',
            fs: ['at ./index.rsh:114:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v435 = stdlib.add(v423, v338);
          const txn6 = await (ctc.sendrecv({
            args: [v336, v337, v353, v357, v402, v403, v419, v421, v435, v393, v395, v394, v398],
            evt_cnt: 4,
            funcNum: 9,
            lct: v423,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:125:9:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              
              const {data: [v440, v441, v442, v443], secs: v445, time: v444, didSend: v115, from: v439 } = txn6;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:125:9:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v447 = stdlib.addressEq(v353, v439);
              stdlib.assert(v447, {
                at: './index.rsh:125:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v448 = stdlib.digest(ctc3, [v441, v440]);
              const v449 = stdlib.digestEq(v403, v448);
              stdlib.assert(v449, {
                at: 'reach standard library:58:17:application',
                fs: ['at ./index.rsh:127:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v450 = stdlib.digest(ctc3, [v443, v442]);
              const v451 = stdlib.digestEq(v402, v450);
              stdlib.assert(v451, {
                at: 'reach standard library:58:17:application',
                fs: ['at ./index.rsh:128:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              let v452;
              const v453 = stdlib.add(v419, v440);
              const v454 = stdlib.sub(v421, v453);
              const v455 = stdlib.eq(v454, stdlib.checkedBigNumberify('./index.rsh:18:52:decimal', stdlib.UInt_max, 0));
              const v456 = stdlib.sub(v442, v453);
              const v457 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:19:52:decimal', stdlib.UInt_max, 0));
              const v458 = v457 ? false : true;
              const v459 = v455 ? v457 : v458;
              if (v459) {
                v452 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                if (v457) {
                  v452 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                else {
                  v452 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                }
              const v460 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
              if (v460) {
                const v461 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:135:18:decimal', stdlib.UInt_max, 2), v337);
                sim_r.txns.push({
                  amt: v461,
                  kind: 'from',
                  to: v336,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }
              else {
                const v472 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                if (v472) {
                  const v473 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:137:18:decimal', stdlib.UInt_max, 2), v337);
                  sim_r.txns.push({
                    amt: v473,
                    kind: 'from',
                    to: v353,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    amt: v337,
                    kind: 'from',
                    to: v353,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    amt: v337,
                    kind: 'from',
                    to: v336,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v435],
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v336, v337, v353, v357, v402, v403, v419, v421, v435],
              evt_cnt: 0,
              funcNum: 10,
              lct: v423,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                
                const {data: [], secs: v500, time: v499, didSend: v178, from: v498 } = txn7;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v502 = stdlib.addressEq(v336, v498);
                const v503 = stdlib.addressEq(v353, v498);
                const v504 = v502 ? true : v503;
                stdlib.assert(v504, {
                  at: 'reach standard library:189:11:dot',
                  fs: ['at ./index.rsh:125:122:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                sim_r.txns.push({
                  amt: v357,
                  kind: 'from',
                  to: v336,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined,
              tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v500, time: v499, didSend: v178, from: v498 } = txn7;
            ;
            const v502 = stdlib.addressEq(v336, v498);
            const v503 = stdlib.addressEq(v353, v498);
            const v504 = v502 ? true : v503;
            stdlib.assert(v504, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:125:122:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:53:35:application',
              fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:125:122:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v440, v441, v442, v443], secs: v445, time: v444, didSend: v115, from: v439 } = txn6;
            ;
            const v447 = stdlib.addressEq(v353, v439);
            stdlib.assert(v447, {
              at: './index.rsh:125:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v448 = stdlib.digest(ctc3, [v441, v440]);
            const v449 = stdlib.digestEq(v403, v448);
            stdlib.assert(v449, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:127:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v450 = stdlib.digest(ctc3, [v443, v442]);
            const v451 = stdlib.digestEq(v402, v450);
            stdlib.assert(v451, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:128:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            let v452;
            const v453 = stdlib.add(v419, v440);
            const v454 = stdlib.sub(v421, v453);
            const v455 = stdlib.eq(v454, stdlib.checkedBigNumberify('./index.rsh:18:52:decimal', stdlib.UInt_max, 0));
            const v456 = stdlib.sub(v442, v453);
            const v457 = stdlib.eq(v456, stdlib.checkedBigNumberify('./index.rsh:19:52:decimal', stdlib.UInt_max, 0));
            const v458 = v457 ? false : true;
            const v459 = v455 ? v457 : v458;
            if (v459) {
              v452 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
              }
            else {
              if (v457) {
                v452 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                }
              else {
                v452 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                }
              }
            const v460 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
            if (v460) {
              const v461 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:135:18:decimal', stdlib.UInt_max, 2), v337);
              ;
              stdlib.protect(ctc1, await interact.seeOutcome(v452), {
                at: './index.rsh:145:28:application',
                fs: ['at ./index.rsh:144:9:application call to [unknown function] (defined at: ./index.rsh:144:27:function exp)'],
                msg: 'seeOutcome',
                who: 'Bob'
                });
              
              return;
              }
            else {
              const v472 = stdlib.eq(v452, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              if (v472) {
                const v473 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:137:18:decimal', stdlib.UInt_max, 2), v337);
                ;
                stdlib.protect(ctc1, await interact.seeOutcome(v452), {
                  at: './index.rsh:145:28:application',
                  fs: ['at ./index.rsh:144:9:application call to [unknown function] (defined at: ./index.rsh:144:27:function exp)'],
                  msg: 'seeOutcome',
                  who: 'Bob'
                  });
                
                return;
                }
              else {
                ;
                ;
                stdlib.protect(ctc1, await interact.seeOutcome(v452), {
                  at: './index.rsh:145:28:application',
                  fs: ['at ./index.rsh:144:9:application call to [unknown function] (defined at: ./index.rsh:144:27:function exp)'],
                  msg: 'seeOutcome',
                  who: 'Bob'
                  });
                
                return;
                }}}
          
          }
        
        }
      
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BSATAAEFIFAICQIHKAMKoAEQGLgBeFgwJgMBAAEBACI1ADEYQQd2KmRJIls1ASEFWzUCNhoAF0lBAAciNQQjNQYANhoBFzYaAhc1BDYaAzUFSSQMQARrSSEFDEACYkkhBgxAAe1JIQsMQABxIQsSRCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE00RzI7AyBjQDIQxbD0Q0/zEAEjQDVyggMQASEUQ0A4FIW0lBAAyxsggjshA0/7IHsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRkkEkRCBplIIQY0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/NAMlWzX+NANXKCA1/TQFIls1/DQFIQVbNfs0BSENWzX6NAUhDls1+YAEpJZHtTT8FlA0+xZQNPoWUDT5FlCwMgY0AyEMWwxENP0xABJENANXcCA0+xY0/BZQARJENANXUCA0+RY0+hZQARJENAOBkAFbNPwINfc0+jT3CSISSTX2FDT2NAOBmAFbNPcJIhJNQQAHIQc1+EIADjT2QQAGIzX4QgADIjX4NPgiEkEAMCEHNP4LSUEADLGyCCOyEDT/sgezIkgisbIII7IQMgmyCTIKsgezIkgxGSQSREIFmzT4IxJBADAhBzT+C0lBAAyxsggjshA0/bIHsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRkkEkRCBWQ0/klBAAyxsggjshA0/bIHsyJINP5JQQAMsbIII7IQNP+yB7MiSCKxsggjshAyCbIJMgqyB7MiSDEZJBJEQgUkSCEINAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEF/zbLrAyBjQDIQ9bD0Q0A1cAIDEAEjT/MQASEUQ0AyEEW0lBAAyxsggjshA0/7IHsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRkkEkRCBLZJgQYMQAFNSSEIDEAA2UghCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf80AyVbNf40A1cwIDX9NAMhBFs1/DQDV3ggNfs0A1eYIDX6NAUiWzX5NAUhBVs1+DQFIQ1bNfc0BSEOWzX2gARAKnUwNPkWUDT4FlA09xZQNPYWULAyBjQDIQ9bDEQ0/zEAEkQ0A1dYIDT4FjT5FlABEkQyBjQDIQlbCDX1NP80/hZQNP1QNPwWUDT7UDT6UDT5FlA09xZQNPUWUChLAVcAf2cpSwFXfylnSCEGNQEyBjUCMRkiEkRCA89IJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABGG0rAywMgY0AyEQWw9ENP8xABI0A1cwIDEAEhFENAMhBFtJQQAMsbIII7IQNP+yB7MiSCKxsggjshAyCbIJMgqyB7MiSDEZJBJEQgNiSCQ0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/NAMlWzX+NAMhCVs1/TQDVzAgNfw0AyEEWzX7NANXWCA1+jQFVwAgNfk0BVcgIDX4gARjcI9BNPlQNPhQsDIGNAMhEFsMRDT8MQASRDIGNP0INfc0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4UDT3FlAoSwFXAH9nKUsBV39BZ0ghCDUBMgY1AjEZIhJEQgK0SSEHDEABbkkhCgxAARBJgQQMQABrSCEKNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEkSc087AyBjQDIRFbD0Q0A1cAIDEAEjT/MQASEUQ0AyEEW0lBAAyxsggjshA0/7IHsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRkkEkRCAjRIIQo0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/NAMlWzX+NAMhCVs1/TQDVzAgNfw0AyEEWzX7NAVXACA1+jQFVyAgNfmABB5uguM0+lA0+VCwMgY0AyERWwxENP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPgWUChLAVcAf2cpSwFXfwFnSCQ1ATIGNQIxGSISREIBlkgjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIRJbD0Q0AyVbSUEAD7GyCCOyEDQDVwAgsgezIkgisbIII7IQMgmyCTIKsgezIkgxGSQSREIBP0kjDEAAlkgjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/zQDJVs1/jQDIQlbNf2ABJqLkXSwMgY0AyESWwxENP5JCDX8NP5JQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIMgY0/Qg1+zT/NP4WUDT9FlAxAFA0/BZQNPsWUChLAVcAYGdIIQo1ATIGNQIxGSISREIAo0giNAESRDQESSISTDQCEhFENAUiWzX/NAUhBVs1/oAErNEfwzT/FlA0/hZQsIGgjQZJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRINP9JQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCMRkiEkRCAAAqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yw==`,
  appClear: `BQ==`,
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
                "name": "v337",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v338",
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
                "name": "v337",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v338",
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
        "internalType": "struct T5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
        "internalType": "struct T5",
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
                "name": "v377",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v378",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v402",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v403",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v419",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v420",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v422",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v442",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v443",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
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
        "internalType": "struct T5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
        "internalType": "struct T5",
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
                "name": "v377",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v378",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v402",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v403",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v419",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v420",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v422",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v442",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v443",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
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
  Bytecode: `0x60806040526040516200212638038062002126833981016040819052620000269162000248565b600080805543600355604080516020810190915290815260408051835181526020808501518051828401520151918101919091527f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9060600160405180910390a16020820151516200009c903414600762000141565b6020808301510151620000b09043620002a8565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013792600292909101906200016b565b505050506200030c565b81620001675760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017990620002cf565b90600052602060002090601f0160209004810192826200019d5760008555620001e8565b82601f10620001b857805160ff1916838001178555620001e8565b82800160010185558215620001e8579182015b82811115620001e8578251825591602001919060010190620001cb565b50620001f6929150620001fa565b5090565b5b80821115620001f65760008155600101620001fb565b604080519081016001600160401b03811182821017156200024257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025c57600080fd5b6200026662000211565b835181526040601f19830112156200027d57600080fd5b6200028762000211565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002ca57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e457607f821691505b602082108114156200030657634e487b7160e01b600052602260045260246000fd5b50919050565b611e0a806200031c6000396000f3fe6080604052600436106100bd5760003560e01c8063a7661d5411610079578063aff5115f11610056578063aff5115f14610194578063c7980037146101a7578063e00acef1146101ba578063e533a29d146101cd57005b8063a7661d541461014b578063ab53f2c61461015e578063ad2d91d11461018157005b80631e93b0f1146100c6578063258708a3146100ea5780632c10a159146100fd5780633a825029146101105780637eea518c14610123578063832307571461013657005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100c46100f83660046118e0565b6101e0565b6100c461010b366004611903565b61057f565b6100c461011e3660046118e0565b6107e8565b6100c4610131366004611903565b610acb565b34801561014257600080fd5b506001546100d7565b6100c4610159366004611903565b610c47565b34801561016a57600080fd5b50610173610de0565b6040516100e1929190611915565b6100c461018f366004611984565b610e7d565b6100c46101a2366004611984565b6110bf565b6100c46101b5366004611903565b61134d565b6100c46101c8366004611903565b6114e2565b6100c46101db366004611903565b611678565b6101f060096000541460336117cd565b61020a8135158061020357506001548235145b60346117cd565b60008080556002805461021c906119a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610248906119a0565b80156102955780601f1061026a57610100808354040283529160200191610295565b820191906000526020600020905b81548152906001019060200180831161027857829003601f168201915b50505050508060200190518101906102ad9190611a29565b90506102d5604051806060016040528060008152602001600081526020016000151581525090565b6102e7826101000151431060356117cd565b7f30be449314646203421152a74635b7495f0272615910fe7f70ee4867ac541243836040516103169190611ab2565b60405180910390a161032a3415602f6117cd565b6040820151610345906001600160a01b0316331460306117cd565b604080516103929161036c9190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460316117cd565b6040805160808501356020820152606080860135928201929092526103d891016040516020818303038152906040528051906020012060001c83608001511460326117cd565b60c08201516103ec90602085013590611b07565b60208201819052600090610404906060860135611b1f565b146040820152602081015160e083015160009161042091611b1f565b1461043c578060400151610435576001610442565b6000610442565b80604001515b156104505760028152610468565b8060400151156104635760018152610468565b600081525b80516104d45781600001516001600160a01b03166108fc836020015160026104909190611b36565b6040518115909202916000818181858888f193505050501580156104b8573d6000803e3d6000fd5b50600080805560018190556104cf906002906117f2565b505050565b8051600114156105005781604001516001600160a01b03166108fc836020015160026104909190611b36565b81604001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f19350505050158015610541573d6000803e3d6000fd5b50815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104b8573d6000803e3d6000fd5b61058f60016000541460096117cd565b6105a9813515806105a257506001548235145b600a6117cd565b6000808055600280546105bb906119a0565b80601f01602080910402602001604051908101604052809291908181526020018280546105e7906119a0565b80156106345780601f1061060957610100808354040283529160200191610634565b820191906000526020600020905b81548152906001019060200180831161061757829003601f168201915b505050505080602001905181019061064c9190611b55565b905061066b604051806040016040528060008152602001600081525090565b61067c82606001514310600b6117cd565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1836040516106ab9190611bce565b60405180910390a160208201516106c29080611b07565b815260208201516106d690341460086117cd565b60408201516106e59043611b07565b8160200181815250506107396040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b82516001600160a01b0390811680835260208086015181850190815260408088015181870190815233606080890191825289516080808b019182528b88015160a0808d019182526003600055436001558751998a019a909a529651958801959095529251908601525190951690830152925191810191909152905160c082015260e0015b604051602081830303815290604052600290805190602001906107e192919061182f565b5050505050565b6107f860076000541460276117cd565b6108128135158061080b57506001548235145b60286117cd565b600080805560028054610824906119a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610850906119a0565b801561089d5780601f106108725761010080835404028352916020019161089d565b820191906000526020600020905b81548152906001019060200180831161088057829003601f168201915b50505050508060200190518101906108b59190611bf8565b90506108cd6040518060200160405280600081525090565b6108df826101000151431060296117cd565b7fe4f3bf84b2d501e9971e2de20f3d9698dbae32dcf382a81223946e7f5e58c9978360405161090e9190611ab2565b60405180910390a1610922341560246117cd565b815161093a906001600160a01b0316331460256117cd565b60408051610987916109619190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460266117cd565b60408201516109969043611b07565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b039081168252602080850151818401526060808601519092166040808501919091526080808701518486015260c0808801519186019190915260e08088015160a087015288840135918601919091529287013592840192909252835161010084015260096000554360015590516107bd9183910181516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b610adb600160005414600d6117cd565b610af581351580610aee57506001548235145b600e6117cd565b600080805560028054610b07906119a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610b33906119a0565b8015610b805780601f10610b5557610100808354040283529160200191610b80565b820191906000526020600020905b815481529060010190602001808311610b6357829003601f168201915b5050505050806020019051810190610b989190611b55565b9050610bac8160600151431015600f6117cd565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e182604051610bdb9190611bce565b60405180910390a1610bef3415600c6117cd565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c2c573d6000803e3d6000fd5b5060008080556001819055610c43906002906117f2565b5050565b610c5760036000541460176117cd565b610c7181351580610c6a57506001548235145b60186117cd565b600080805560028054610c83906119a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610caf906119a0565b8015610cfc5780601f10610cd157610100808354040283529160200191610cfc565b820191906000526020600020905b815481529060010190602001808311610cdf57829003601f168201915b5050505050806020019051810190610d149190611c81565b9050610d288160a0015143101560196117cd565b7fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d182604051610d579190611bce565b60405180910390a1610d6b341560156117cd565b8051610d9f906001600160a01b03163314610d955760608201516001600160a01b03163314610d98565b60015b60166117cd565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610c2c573d6000803e3d6000fd5b600060606000546002808054610df5906119a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610e21906119a0565b8015610e6e5780601f10610e4357610100808354040283529160200191610e6e565b820191906000526020600020905b815481529060010190602001808311610e5157829003601f168201915b50505050509050915091509091565b610e8d60036000541460126117cd565b610ea781351580610ea057506001548235145b60136117cd565b600080805560028054610eb9906119a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee5906119a0565b8015610f325780601f10610f0757610100808354040283529160200191610f32565b820191906000526020600020905b815481529060010190602001808311610f1557829003601f168201915b5050505050806020019051810190610f4a9190611c81565b9050610f626040518060200160405280600081525090565b610f738260a00151431060146117cd565b7f84507ca2af78d13a2530a900a9f15ea561ca44c1932ac839ff12ff8719026e4a83604051610fa29190611d15565b60405180910390a1610fb6341560106117cd565b8151610fce906001600160a01b0316331460116117cd565b6040820151610fdd9043611b07565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260056000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e0820152610100016107bd565b6110cf600560005414601c6117cd565b6110e9813515806110e257506001548235145b601d6117cd565b6000808055600280546110fb906119a0565b80601f0160208091040260200160405190810160405280929190818152602001828054611127906119a0565b80156111745780601f1061114957610100808354040283529160200191611174565b820191906000526020600020905b81548152906001019060200180831161115757829003601f168201915b505050505080602001905181019061118c9190611d36565b90506111a46040518060200160405280600081525090565b6111b58260c001514310601e6117cd565b7f1eaeac47a27af9fa8e7714970bbba76871db160f28e5ce38b7ce799029c34f75836040516111e49190611d15565b60405180910390a16111f83415601a6117cd565b6060820151611213906001600160a01b03163314601b6117cd565b60408201516112229043611b07565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c08401528582013560e0840152835161010084015260076000554360015590516107bd9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b61135d60056000541460216117cd565b6113778135158061137057506001548235145b60226117cd565b600080805560028054611389906119a0565b80601f01602080910402602001604051908101604052809291908181526020018280546113b5906119a0565b80156114025780601f106113d757610100808354040283529160200191611402565b820191906000526020600020905b8154815290600101906020018083116113e557829003601f168201915b505050505080602001905181019061141a9190611d36565b905061142e8160c0015143101560236117cd565b7f4df267dd1a05b613b05cdeee7d7e028d3842cff6f4e5a9d9dde2cdaf415627598260405161145d9190611bce565b60405180910390a16114713415601f6117cd565b80516114a5906001600160a01b0316331461149b5760608201516001600160a01b0316331461149e565b60015b60206117cd565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c2c573d6000803e3d6000fd5b6114f260096000541460386117cd565b61150c8135158061150557506001548235145b60396117cd565b60008080556002805461151e906119a0565b80601f016020809104026020016040519081016040528092919081815260200182805461154a906119a0565b80156115975780601f1061156c57610100808354040283529160200191611597565b820191906000526020600020905b81548152906001019060200180831161157a57829003601f168201915b50505050508060200190518101906115af9190611a29565b90506115c4816101000151431015603a6117cd565b7f4c8b89b6d291e7da782b3a03ba8192a22dc69ae73b79029441f7242310b1a5a4826040516115f39190611bce565b60405180910390a1611607341560366117cd565b805161163b906001600160a01b031633146116315760408201516001600160a01b03163314611634565b60015b60376117cd565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c2c573d6000803e3d6000fd5b611688600760005414602c6117cd565b6116a28135158061169b57506001548235145b602d6117cd565b6000808055600280546116b4906119a0565b80601f01602080910402602001604051908101604052809291908181526020018280546116e0906119a0565b801561172d5780601f106117025761010080835404028352916020019161172d565b820191906000526020600020905b81548152906001019060200180831161171057829003601f168201915b50505050508060200190518101906117459190611bf8565b905061175a816101000151431015602e6117cd565b7fb9845e39b4c5715a32bc04872bfe1723e638b66042817fdde0a44e5b0466b6dc826040516117899190611bce565b60405180910390a161179d3415602a6117cd565b8051610d9f906001600160a01b031633146117c75760608201516001600160a01b031633146117ca565b60015b602b5b81610c435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546117fe906119a0565b6000825580601f1061180e575050565b601f01602090049060005260206000209081019061182c91906118b3565b50565b82805461183b906119a0565b90600052602060002090601f01602090048101928261185d57600085556118a3565b82601f1061187657805160ff19168380011785556118a3565b828001600101855582156118a3579182015b828111156118a3578251825591602001919060010190611888565b506118af9291506118b3565b5090565b5b808211156118af57600081556001016118b4565b600060a082840312156118da57600080fd5b50919050565b600060a082840312156118f257600080fd5b6118fc83836118c8565b9392505050565b6000604082840312156118da57600080fd5b82815260006020604081840152835180604085015260005b818110156119495785810183015185820160600152820161192d565b8181111561195b576000606083870101525b50601f01601f191692909201606001949350505050565b6000606082840312156118da57600080fd5b60006060828403121561199657600080fd5b6118fc8383611972565b600181811c908216806119b457607f821691505b602082108114156118da57634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff81118282101715611a0757634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114611a2457600080fd5b919050565b60006101208284031215611a3c57600080fd5b611a446119d5565b611a4d83611a0d565b815260208301516020820152611a6560408401611a0d565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b60a08101611aeb828480358252602081013560208301526040810135604083015260608101356060830152608081013560808301525050565b92915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611b1a57611b1a611af1565b500190565b600082821015611b3157611b31611af1565b500390565b6000816000190483118215151615611b5057611b50611af1565b500290565b600060808284031215611b6757600080fd5b6040516080810181811067ffffffffffffffff82111715611b9857634e487b7160e01b600052604160045260246000fd5b604052611ba483611a0d565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b81358152604081016020830135801515808214611bea57600080fd5b806020850152505092915050565b60006101208284031215611c0b57600080fd5b611c136119d5565b611c1c83611a0d565b81526020830151602082015260408301516040820152611c3e60608401611a0d565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060c08284031215611c9357600080fd5b60405160c0810181811067ffffffffffffffff82111715611cc457634e487b7160e01b600052604160045260246000fd5b604052611cd083611a0d565b81526020830151602082015260408301516040820152611cf260608401611a0d565b60608201526080830151608082015260a083015160a08201528091505092915050565b81358152602080830135908201526040808301359082015260608101611aeb565b600060e08284031215611d4857600080fd5b60405160e0810181811067ffffffffffffffff82111715611d7957634e487b7160e01b600052604160045260246000fd5b604052611d8583611a0d565b81526020830151602082015260408301516040820152611da760608401611a0d565b60608201526080830151608082015260a083015160a082015260c083015160c0820152809150509291505056fea2646970667358221220ecf9d0bbd253905ba1f4697442f32b1d5f0396492bbb1c0b5c5eae23766d251464736f6c63430008090033`,
  BytecodeLen: 8486,
  Which: `oD`,
  version: 6,
  views: {
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
