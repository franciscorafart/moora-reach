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
  
  
  const v341 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v342 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v342, v341],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:61:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v342, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v346, v347], secs: v349, time: v348, didSend: v35, from: v345 } = txn1;
      
      sim_r.txns.push({
        amt: v346,
        kind: 'to',
        tok: undefined
        });
      const v358 = stdlib.add(v348, v347);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v346, v347], secs: v349, time: v348, didSend: v35, from: v345 } = txn1;
  ;
  const v358 = stdlib.add(v348, v347);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v358],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v345, v346, v347, v358],
      evt_cnt: 0,
      funcNum: 2,
      lct: v348,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        
        const {data: [], secs: v591, time: v590, didSend: v317, from: v589 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        sim_r.txns.push({
          amt: v346,
          kind: 'from',
          to: v345,
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
    const {data: [], secs: v591, time: v590, didSend: v317, from: v589 } = txn3;
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
    const {data: [], secs: v364, time: v363, didSend: v44, from: v362 } = txn2;
    const v366 = stdlib.add(v346, v346);
    ;
    let v367 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
    let v368 = v363;
    let v374 = v366;
    
    while (await (async () => {
      const v382 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      
      return v382;})()) {
      const v389 = stdlib.add(v368, v347);
      const v393 = stdlib.protect(ctc0, await interact.chooseFinger(), {
        at: './index.rsh:78:55:application',
        fs: ['at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'chooseFinger',
        who: 'Alice'
        });
      const v394 = stdlib.protect(ctc0, await interact.predictAmount(), {
        at: './index.rsh:79:60:application',
        fs: ['at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'predictAmount',
        who: 'Alice'
        });
      const v395 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:81:74:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v396 = stdlib.digest(ctc1, [v395, v393]);
      const v398 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:82:82:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v399 = stdlib.digest(ctc1, [v398, v394]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v345, v346, v347, v362, v374, v389, v396, v399],
        evt_cnt: 2,
        funcNum: 4,
        lct: v368,
        onlyIf: true,
        out_tys: [ctc2, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:88:15:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [v402, v403], secs: v405, time: v404, didSend: v77, from: v401 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:88:15:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v407 = stdlib.addressEq(v345, v401);
          stdlib.assert(v407, {
            at: './index.rsh:88:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v414 = stdlib.add(v404, v347);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v389],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v345, v346, v347, v362, v374, v389],
          evt_cnt: 0,
          funcNum: 5,
          lct: v368,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            
            const {data: [], secs: v542, time: v541, didSend: v265, from: v540 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v544 = stdlib.addressEq(v345, v540);
            const v545 = stdlib.addressEq(v362, v540);
            const v546 = v544 ? true : v545;
            stdlib.assert(v546, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:88:110:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            sim_r.txns.push({
              amt: v374,
              kind: 'from',
              to: v362,
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
        const {data: [], secs: v542, time: v541, didSend: v265, from: v540 } = txn4;
        ;
        const v544 = stdlib.addressEq(v345, v540);
        const v545 = stdlib.addressEq(v362, v540);
        const v546 = v544 ? true : v545;
        stdlib.assert(v546, {
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
        const {data: [v402, v403], secs: v405, time: v404, didSend: v77, from: v401 } = txn3;
        ;
        const v407 = stdlib.addressEq(v345, v401);
        stdlib.assert(v407, {
          at: './index.rsh:88:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v414 = stdlib.add(v404, v347);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc2, ctc2],
          timeoutAt: ['time', v414],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v345, v346, v347, v362, v374, v402, v414],
            evt_cnt: 0,
            funcNum: 7,
            lct: v404,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              
              const {data: [], secs: v523, time: v522, didSend: v230, from: v521 } = txn5;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v525 = stdlib.addressEq(v345, v521);
              const v526 = stdlib.addressEq(v362, v521);
              const v527 = v525 ? true : v526;
              stdlib.assert(v527, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./index.rsh:104:104:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              sim_r.txns.push({
                amt: v374,
                kind: 'from',
                to: v345,
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
          const {data: [], secs: v523, time: v522, didSend: v230, from: v521 } = txn5;
          ;
          const v525 = stdlib.addressEq(v345, v521);
          const v526 = stdlib.addressEq(v362, v521);
          const v527 = v525 ? true : v526;
          stdlib.assert(v527, {
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
          const {data: [v427, v428], secs: v430, time: v429, didSend: v98, from: v426 } = txn4;
          ;
          const v432 = stdlib.addressEq(v362, v426);
          stdlib.assert(v432, {
            at: './index.rsh:104:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v439 = stdlib.add(v429, v347);
          const txn5 = await (ctc.sendrecv({
            args: [v345, v346, v347, v362, v374, v402, v427, v428, v439, v393, v395, v394, v398],
            evt_cnt: 4,
            funcNum: 8,
            lct: v429,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:117:15:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              
              const {data: [v444, v445, v446, v447], secs: v449, time: v448, didSend: v111, from: v443 } = txn5;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:117:15:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v451 = stdlib.addressEq(v345, v443);
              stdlib.assert(v451, {
                at: './index.rsh:117:15:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v452 = stdlib.digest(ctc1, [v445, v444]);
              const v453 = stdlib.digestEq(v402, v452);
              stdlib.assert(v453, {
                at: 'reach standard library:58:17:application',
                fs: ['at ./index.rsh:118:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              const v460 = stdlib.add(v448, v347);
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
              args: [v345, v346, v347, v362, v374, v402, v427, v428, v439],
              evt_cnt: 0,
              funcNum: 9,
              lct: v429,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                
                const {data: [], secs: v504, time: v503, didSend: v195, from: v502 } = txn6;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v506 = stdlib.addressEq(v345, v502);
                const v507 = stdlib.addressEq(v362, v502);
                const v508 = v506 ? true : v507;
                stdlib.assert(v508, {
                  at: 'reach standard library:189:11:dot',
                  fs: ['at ./index.rsh:117:136:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                sim_r.txns.push({
                  amt: v374,
                  kind: 'from',
                  to: v362,
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
            const {data: [], secs: v504, time: v503, didSend: v195, from: v502 } = txn6;
            ;
            const v506 = stdlib.addressEq(v345, v502);
            const v507 = stdlib.addressEq(v362, v502);
            const v508 = v506 ? true : v507;
            stdlib.assert(v508, {
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
            const {data: [v444, v445, v446, v447], secs: v449, time: v448, didSend: v111, from: v443 } = txn5;
            ;
            const v451 = stdlib.addressEq(v345, v443);
            stdlib.assert(v451, {
              at: './index.rsh:117:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v452 = stdlib.digest(ctc1, [v445, v444]);
            const v453 = stdlib.digestEq(v402, v452);
            stdlib.assert(v453, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:118:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v460 = stdlib.add(v448, v347);
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 4,
              funcNum: 10,
              out_tys: [ctc0, ctc0, ctc0, ctc0],
              timeoutAt: ['time', v460],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v345, v346, v347, v362, v374, v427, v428, v444, v446, v460],
                evt_cnt: 0,
                funcNum: 11,
                lct: v448,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  
                  const {data: [], secs: v485, time: v484, didSend: v160, from: v483 } = txn7;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v487 = stdlib.addressEq(v345, v483);
                  const v488 = stdlib.addressEq(v362, v483);
                  const v489 = v487 ? true : v488;
                  stdlib.assert(v489, {
                    at: 'reach standard library:189:11:dot',
                    fs: ['at ./index.rsh:129:126:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  sim_r.txns.push({
                    amt: v374,
                    kind: 'from',
                    to: v345,
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
                tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v485, time: v484, didSend: v160, from: v483 } = txn7;
              ;
              const v487 = stdlib.addressEq(v345, v483);
              const v488 = stdlib.addressEq(v362, v483);
              const v489 = v487 ? true : v488;
              stdlib.assert(v489, {
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
              const {data: [v465, v466, v467, v468], secs: v470, time: v469, didSend: v127, from: v464 } = txn6;
              ;
              const v472 = stdlib.addressEq(v362, v464);
              stdlib.assert(v472, {
                at: './index.rsh:129:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v473 = stdlib.digest(ctc1, [v466, v465]);
              const v474 = stdlib.digestEq(v428, v473);
              stdlib.assert(v474, {
                at: 'reach standard library:58:17:application',
                fs: ['at ./index.rsh:131:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              const v475 = stdlib.digest(ctc1, [v468, v467]);
              const v476 = stdlib.digestEq(v427, v475);
              stdlib.assert(v476, {
                at: 'reach standard library:58:17:application',
                fs: ['at ./index.rsh:132:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              let v477;
              const v478 = stdlib.add(v444, v465);
              const v479 = stdlib.eq(v446, v478);
              const v480 = stdlib.eq(v467, v478);
              const v481 = v480 ? false : true;
              const v482 = v479 ? v480 : v481;
              if (v482) {
                v477 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                if (v480) {
                  v477 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                else {
                  v477 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                }
              const cv367 = v477;
              const cv368 = v469;
              const cv374 = v374;
              
              v367 = cv367;
              v368 = cv368;
              v374 = cv374;
              
              continue;}
            
            }
          
          }
        
        }
      
      }
    const v559 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    if (v559) {
      const v560 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:139:18:decimal', stdlib.UInt_max, 2), v346);
      ;
      stdlib.protect(ctc3, await interact.seeOutcome(v367), {
        at: './index.rsh:147:28:application',
        fs: ['at ./index.rsh:146:9:application call to [unknown function] (defined at: ./index.rsh:146:27:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const v571 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      if (v571) {
        const v572 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:141:18:decimal', stdlib.UInt_max, 2), v346);
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v367), {
          at: './index.rsh:147:28:application',
          fs: ['at ./index.rsh:146:9:application call to [unknown function] (defined at: ./index.rsh:146:27:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }
      else {
        stdlib.protect(ctc3, await interact.seeOutcome(v367), {
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
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v346, v347], secs: v349, time: v348, didSend: v35, from: v345 } = txn1;
  ;
  const v358 = stdlib.add(v348, v347);
  stdlib.protect(ctc1, await interact.acceptWager(v346), {
    at: './index.rsh:65:29:application',
    fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v345, v346, v347, v358],
    evt_cnt: 0,
    funcNum: 1,
    lct: v348,
    onlyIf: true,
    out_tys: [],
    pay: [v346, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v364, time: v363, didSend: v44, from: v362 } = txn2;
      
      const v366 = stdlib.add(v346, v346);
      sim_r.txns.push({
        amt: v346,
        kind: 'to',
        tok: undefined
        });
      const v367 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
      const v368 = v363;
      const v374 = v366;
      
      if (await (async () => {
        const v382 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        
        return v382;})()) {
        const v389 = stdlib.add(v368, v347);
        sim_r.isHalt = false;
        }
      else {
        const v559 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        if (v559) {
          const v560 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:139:18:decimal', stdlib.UInt_max, 2), v346);
          sim_r.txns.push({
            amt: v560,
            kind: 'from',
            to: v345,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }
        else {
          const v571 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
          if (v571) {
            const v572 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:141:18:decimal', stdlib.UInt_max, 2), v346);
            sim_r.txns.push({
              amt: v572,
              kind: 'from',
              to: v362,
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
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v358],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v345, v346, v347, v358],
      evt_cnt: 0,
      funcNum: 2,
      lct: v348,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        
        const {data: [], secs: v591, time: v590, didSend: v317, from: v589 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        sim_r.txns.push({
          amt: v346,
          kind: 'from',
          to: v345,
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
    const {data: [], secs: v591, time: v590, didSend: v317, from: v589 } = txn3;
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
    const {data: [], secs: v364, time: v363, didSend: v44, from: v362 } = txn2;
    const v366 = stdlib.add(v346, v346);
    ;
    let v367 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
    let v368 = v363;
    let v374 = v366;
    
    while (await (async () => {
      const v382 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      
      return v382;})()) {
      const v389 = stdlib.add(v368, v347);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v389],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v345, v346, v347, v362, v374, v389],
          evt_cnt: 0,
          funcNum: 5,
          lct: v368,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            
            const {data: [], secs: v542, time: v541, didSend: v265, from: v540 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v544 = stdlib.addressEq(v345, v540);
            const v545 = stdlib.addressEq(v362, v540);
            const v546 = v544 ? true : v545;
            stdlib.assert(v546, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:88:110:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            sim_r.txns.push({
              amt: v374,
              kind: 'from',
              to: v362,
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
        const {data: [], secs: v542, time: v541, didSend: v265, from: v540 } = txn4;
        ;
        const v544 = stdlib.addressEq(v345, v540);
        const v545 = stdlib.addressEq(v362, v540);
        const v546 = v544 ? true : v545;
        stdlib.assert(v546, {
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
        const {data: [v402, v403], secs: v405, time: v404, didSend: v77, from: v401 } = txn3;
        ;
        const v407 = stdlib.addressEq(v345, v401);
        stdlib.assert(v407, {
          at: './index.rsh:88:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v414 = stdlib.add(v404, v347);
        const v418 = stdlib.protect(ctc0, await interact.chooseFinger(), {
          at: './index.rsh:94:53:application',
          fs: ['at ./index.rsh:93:17:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)'],
          msg: 'chooseFinger',
          who: 'Bob'
          });
        const v419 = stdlib.protect(ctc0, await interact.predictAmount(), {
          at: './index.rsh:95:58:application',
          fs: ['at ./index.rsh:93:17:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)'],
          msg: 'predictAmount',
          who: 'Bob'
          });
        const v420 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:53:31:application',
          fs: ['at ./index.rsh:97:70:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:93:17:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)'],
          msg: 'random',
          who: 'Bob'
          });
        const v421 = stdlib.digest(ctc3, [v420, v418]);
        const v423 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:53:31:application',
          fs: ['at ./index.rsh:98:78:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:93:17:application call to [unknown function] (defined at: ./index.rsh:93:21:function exp)'],
          msg: 'random',
          who: 'Bob'
          });
        const v424 = stdlib.digest(ctc3, [v423, v419]);
        
        const txn4 = await (ctc.sendrecv({
          args: [v345, v346, v347, v362, v374, v402, v414, v424, v421],
          evt_cnt: 2,
          funcNum: 6,
          lct: v404,
          onlyIf: true,
          out_tys: [ctc2, ctc2],
          pay: [stdlib.checkedBigNumberify('./index.rsh:104:13:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            
            const {data: [v427, v428], secs: v430, time: v429, didSend: v98, from: v426 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:104:13:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v432 = stdlib.addressEq(v362, v426);
            stdlib.assert(v432, {
              at: './index.rsh:104:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v439 = stdlib.add(v429, v347);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v414],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v345, v346, v347, v362, v374, v402, v414],
            evt_cnt: 0,
            funcNum: 7,
            lct: v404,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              
              const {data: [], secs: v523, time: v522, didSend: v230, from: v521 } = txn5;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v525 = stdlib.addressEq(v345, v521);
              const v526 = stdlib.addressEq(v362, v521);
              const v527 = v525 ? true : v526;
              stdlib.assert(v527, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./index.rsh:104:104:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              sim_r.txns.push({
                amt: v374,
                kind: 'from',
                to: v345,
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
          const {data: [], secs: v523, time: v522, didSend: v230, from: v521 } = txn5;
          ;
          const v525 = stdlib.addressEq(v345, v521);
          const v526 = stdlib.addressEq(v362, v521);
          const v527 = v525 ? true : v526;
          stdlib.assert(v527, {
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
          const {data: [v427, v428], secs: v430, time: v429, didSend: v98, from: v426 } = txn4;
          ;
          const v432 = stdlib.addressEq(v362, v426);
          stdlib.assert(v432, {
            at: './index.rsh:104:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v439 = stdlib.add(v429, v347);
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
              args: [v345, v346, v347, v362, v374, v402, v427, v428, v439],
              evt_cnt: 0,
              funcNum: 9,
              lct: v429,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                
                const {data: [], secs: v504, time: v503, didSend: v195, from: v502 } = txn6;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v506 = stdlib.addressEq(v345, v502);
                const v507 = stdlib.addressEq(v362, v502);
                const v508 = v506 ? true : v507;
                stdlib.assert(v508, {
                  at: 'reach standard library:189:11:dot',
                  fs: ['at ./index.rsh:117:136:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                sim_r.txns.push({
                  amt: v374,
                  kind: 'from',
                  to: v362,
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
            const {data: [], secs: v504, time: v503, didSend: v195, from: v502 } = txn6;
            ;
            const v506 = stdlib.addressEq(v345, v502);
            const v507 = stdlib.addressEq(v362, v502);
            const v508 = v506 ? true : v507;
            stdlib.assert(v508, {
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
            const {data: [v444, v445, v446, v447], secs: v449, time: v448, didSend: v111, from: v443 } = txn5;
            ;
            const v451 = stdlib.addressEq(v345, v443);
            stdlib.assert(v451, {
              at: './index.rsh:117:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v452 = stdlib.digest(ctc3, [v445, v444]);
            const v453 = stdlib.digestEq(v402, v452);
            stdlib.assert(v453, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:118:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v460 = stdlib.add(v448, v347);
            const txn6 = await (ctc.sendrecv({
              args: [v345, v346, v347, v362, v374, v427, v428, v444, v446, v460, v418, v420, v419, v423],
              evt_cnt: 4,
              funcNum: 10,
              lct: v448,
              onlyIf: true,
              out_tys: [ctc0, ctc0, ctc0, ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:129:13:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                
                const {data: [v465, v466, v467, v468], secs: v470, time: v469, didSend: v127, from: v464 } = txn6;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:129:13:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v472 = stdlib.addressEq(v362, v464);
                stdlib.assert(v472, {
                  at: './index.rsh:129:13:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v473 = stdlib.digest(ctc3, [v466, v465]);
                const v474 = stdlib.digestEq(v428, v473);
                stdlib.assert(v474, {
                  at: 'reach standard library:58:17:application',
                  fs: ['at ./index.rsh:131:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                const v475 = stdlib.digest(ctc3, [v468, v467]);
                const v476 = stdlib.digestEq(v427, v475);
                stdlib.assert(v476, {
                  at: 'reach standard library:58:17:application',
                  fs: ['at ./index.rsh:132:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                let v477;
                const v478 = stdlib.add(v444, v465);
                const v479 = stdlib.eq(v446, v478);
                const v480 = stdlib.eq(v467, v478);
                const v481 = v480 ? false : true;
                const v482 = v479 ? v480 : v481;
                if (v482) {
                  v477 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                  }
                else {
                  if (v480) {
                    v477 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                    }
                  else {
                    v477 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                    }
                  }
                const cv367 = v477;
                const cv368 = v469;
                const cv374 = v374;
                
                await (async () => {
                  const v367 = cv367;
                  const v368 = cv368;
                  const v374 = cv374;
                  
                  if (await (async () => {
                    const v382 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                    
                    return v382;})()) {
                    const v389 = stdlib.add(v368, v347);
                    sim_r.isHalt = false;
                    }
                  else {
                    const v559 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
                    if (v559) {
                      const v560 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:139:18:decimal', stdlib.UInt_max, 2), v346);
                      sim_r.txns.push({
                        amt: v560,
                        kind: 'from',
                        to: v345,
                        tok: undefined
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      const v571 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                      if (v571) {
                        const v572 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:141:18:decimal', stdlib.UInt_max, 2), v346);
                        sim_r.txns.push({
                          amt: v572,
                          kind: 'from',
                          to: v362,
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
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        }}}})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v460],
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v345, v346, v347, v362, v374, v427, v428, v444, v446, v460],
                evt_cnt: 0,
                funcNum: 11,
                lct: v448,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  
                  const {data: [], secs: v485, time: v484, didSend: v160, from: v483 } = txn7;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v487 = stdlib.addressEq(v345, v483);
                  const v488 = stdlib.addressEq(v362, v483);
                  const v489 = v487 ? true : v488;
                  stdlib.assert(v489, {
                    at: 'reach standard library:189:11:dot',
                    fs: ['at ./index.rsh:129:126:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  sim_r.txns.push({
                    amt: v374,
                    kind: 'from',
                    to: v345,
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
                tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v485, time: v484, didSend: v160, from: v483 } = txn7;
              ;
              const v487 = stdlib.addressEq(v345, v483);
              const v488 = stdlib.addressEq(v362, v483);
              const v489 = v487 ? true : v488;
              stdlib.assert(v489, {
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
              const {data: [v465, v466, v467, v468], secs: v470, time: v469, didSend: v127, from: v464 } = txn6;
              ;
              const v472 = stdlib.addressEq(v362, v464);
              stdlib.assert(v472, {
                at: './index.rsh:129:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v473 = stdlib.digest(ctc3, [v466, v465]);
              const v474 = stdlib.digestEq(v428, v473);
              stdlib.assert(v474, {
                at: 'reach standard library:58:17:application',
                fs: ['at ./index.rsh:131:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v475 = stdlib.digest(ctc3, [v468, v467]);
              const v476 = stdlib.digestEq(v427, v475);
              stdlib.assert(v476, {
                at: 'reach standard library:58:17:application',
                fs: ['at ./index.rsh:132:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              let v477;
              const v478 = stdlib.add(v444, v465);
              const v479 = stdlib.eq(v446, v478);
              const v480 = stdlib.eq(v467, v478);
              const v481 = v480 ? false : true;
              const v482 = v479 ? v480 : v481;
              if (v482) {
                v477 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                if (v480) {
                  v477 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                else {
                  v477 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                }
              const cv367 = v477;
              const cv368 = v469;
              const cv374 = v374;
              
              v367 = cv367;
              v368 = cv368;
              v374 = cv374;
              
              continue;}
            
            }
          
          }
        
        }
      
      }
    const v559 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    if (v559) {
      const v560 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:139:18:decimal', stdlib.UInt_max, 2), v346);
      ;
      stdlib.protect(ctc1, await interact.seeOutcome(v367), {
        at: './index.rsh:147:28:application',
        fs: ['at ./index.rsh:146:9:application call to [unknown function] (defined at: ./index.rsh:146:27:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const v571 = stdlib.eq(v367, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      if (v571) {
        const v572 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:141:18:decimal', stdlib.UInt_max, 2), v346);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v367), {
          at: './index.rsh:147:28:application',
          fs: ['at ./index.rsh:146:9:application call to [unknown function] (defined at: ./index.rsh:146:27:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }
      else {
        stdlib.protect(ctc1, await interact.seeOutcome(v367), {
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
  appApproval: `BSATAAEFUAIgCAsoCQcNqAEQGLgBeFgwJgMBAAEBACI1ADEYQQeHKmRJIls1ASEGWzUCNhoAF0lBAAciNQQjNQYANhoBFzYaAhc1BDYaAzUFSYEGDEADz0khCQxAAb1JgQoMQAFJSSEHDEAAcCEHEkQhCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOPZNjWwMgY0AyEMWw9ENP8xABI0A1cwIDEAEhFENAMlW0lBAAyxsggjshA0/7IHsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRkkEkRCBqpIIQs0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/NAUiWzX+NAUhBls1/TQFIQ1bNfw0BSEOWzX7gASDDgd4NP4WUDT9FlA0/BZQNPsWULAyBjQDIQxbDEQ0/zEAEkQ0A1d4IDT9FjT+FlABEkQ0A1dYIDT7FjT8FlABEkQ0A4GYAVs0/gg1+TT8NPkSSTX4FDT4NAOBoAFbNPkSTUEAByEENfpCAA40+EEABiM1+kIAAyI1+jQDVwAgNAMhBVs0AyEIWzT/NPoyBjQDJVtCBQZIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gASiBWaOsDIGNAMhD1sPRDQDVwAgMQASNP8xABIRRDQDJVtJQQAMsbIII7IQNP+yB7MiSCKxsggjshAyCbIJMgqyB7MiSDEZJBJEQgVrSSEKDEABVUkhBgxAAOFIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/NAMhBVs1/jQDIQhbNf00A1cwIDX8NAMlWzX7NANXeCA1+jQDV5ggNfk0BSJbNfg0BSEGWzX3NAUhDVs19jQFIQ5bNfWABH+iO1I0+BZQNPcWUDT2FlA09RZQsDIGNAMhD1sMRDT/MQASRDQDV1ggNPcWNPgWUAESRDIGNP0INfQ0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09hZQNPQWUChLAVcAf2cpSwFXfzFnSCELNQEyBjUCMRkiEkRCBHxIIQk0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhEFsPRDT/MQASNANXMCAxABIRRDQDJVtJQQAMsbIII7IQNP+yB7MiSCKxsggjshAyCbIJMgqyB7MiSDEZJBJEQgQPSCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/zQDIQVbNf40AyEIWzX9NANXMCA1/DQDJVs1+zQDV1ggNfo0BVcAIDX5NAVXICA1+IAEBDQ5njT5UDT4ULAyBjQDIRBbDEQ0/DEAEkQyBjT9CDX3NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+FA09xZQKEsBVwB/ZylLAVd/QWdIIQc1ATIGNQIxGSISREIDYEmBAwxAARdJgQQMQAEPSSQMQABqSCEKNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIRFbD0Q0A1cAIDEAEjT/MQASEUQ0AyVbSUEADLGyCCOyEDT/sgezIkgisbIII7IQMgmyCTIKsgezIkgxGSQSREIC4kghCjQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf80AyEFWzX+NAMhCFs1/TQDVzAgNfw0AyVbNfs0BVcAIDX6NAVXICA1+YAEYF2kKzT6UDT5ULAyBjQDIRFbDEQ0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+BZQKEsBVwB/ZylLAVd/AWdIIQk1ATIGNQIxGSISREICQ0hJIwxAAMdJIQQMQABYSCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhElsPRDQDIQVbSUEAD7GyCCOyEDQDVwAgsgezIkgisbIII7IQMgmyCTIKsgezIkgxGSQSREIB3UgjNAESRDQESSISTDQCEhFEKGRJNQMhBVs1/4AEmouRdLAyBjQDIRJbDEQ0/0lBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREg0A1cAIDT/NAMhCFsxACEEMgY0/0kIQgCjSCI0ARJENARJIhJMNAISEUQ0BSJbNf80BSEGWzX+gASs0R/DNP8WUDT+FlCwgaCNBklBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREg0/0lBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREgyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQIxGSISREIA0jX/Nf41/TX8Nfs1+jX5NP0hBBJBADQ0/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0ghCjUBMgY1AjEZIhJEQgCINP0iEkEAMCEENPoLSUEADLGyCCOyEDT5sgezIkgisbIII7IQMgmyCTIKsgezIkgxGSQSREIAUTT9IxJBADAhBDT6C0lBAAyxsggjshA0/LIHsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRkkEkRCABoisbIII7IQMgmyCTIKsgezIkgxGSQSREIAACo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/L`,
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
                "name": "v346",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v347",
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
                "name": "v346",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v347",
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
              },
              {
                "internalType": "uint256",
                "name": "v468",
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
                "name": "v427",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v428",
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
              },
              {
                "internalType": "uint256",
                "name": "v468",
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
                "name": "v427",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v428",
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
  Bytecode: `0x6080604052604051620021e4380380620021e4833981016040819052620000269162000248565b600080805543600355604080516020810190915290815260408051835181526020808501518051828401520151918101919091527f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9060600160405180910390a16020820151516200009c903414600762000141565b6020808301510151620000b09043620002a8565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013792600292909101906200016b565b505050506200030c565b81620001675760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017990620002cf565b90600052602060002090601f0160209004810192826200019d5760008555620001e8565b82601f10620001b857805160ff1916838001178555620001e8565b82800160010185558215620001e8579182015b82811115620001e8578251825591602001919060010190620001cb565b50620001f6929150620001fa565b5090565b5b80821115620001f65760008155600101620001fb565b604080519081016001600160401b03811182821017156200024257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025c57600080fd5b6200026662000211565b835181526040601f19830112156200027d57600080fd5b6200028762000211565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002ca57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e457607f821691505b602082108114156200030657634e487b7160e01b600052602260045260246000fd5b50919050565b611ec8806200031c6000396000f3fe6080604052600436106100bd5760003560e01c80638e31476911610079578063c6524acb11610056578063c6524acb14610194578063cc923b29146101a7578063de736998146101ba578063ebdbfdcc146101cd57005b80638e3147691461014b578063ab53f2c61461015e578063bf2c5b241461018157005b80631e93b0f1146100c657806321642639146100ea5780632c10a159146100fd5780637eea518c1461011057806383230757146101235780638b9fadc81461013857005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100c46100f83660046118f4565b6101e0565b6100c461010b366004611917565b610499565b6100c461011e366004611917565b61062e565b34801561012f57600080fd5b506001546100d7565b6100c4610146366004611917565b6107aa565b6100c4610159366004611917565b610940565b34801561016a57600080fd5b50610173610ad9565b6040516100e1929190611929565b6100c461018f366004611917565b610b76565b6100c46101a2366004611998565b610cce565b6100c46101b5366004611998565b610fa2565b6100c46101c8366004611917565b611226565b6100c46101db3660046118f4565b61137f565b6101f0600960005414601c6115c1565b61020a8135158061020357506001548235145b601d6115c1565b60008080556002805461021c906119b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610248906119b4565b80156102955780601f1061026a57610100808354040283529160200191610295565b820191906000526020600020905b81548152906001019060200180831161027857829003601f168201915b50505050508060200190518101906102ad9190611a6f565b90506102c56040518060200160405280600081525090565b6102d68260c001514310601e6115c1565b7fdeffff81372f6a0134c2017dc69420e8947c073fa5ecccb9cf50511824542945836040516103059190611b0d565b60405180910390a16103193415601a6115c1565b6060820151610334906001600160a01b03163314601b6115c1565b60408201516103439043611b46565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c08401528582013560e08401528351610100840152600b60005543600155905161046e9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b604051602081830303815290604052600290805190602001906104929291906117ad565b5050505050565b6104a960016000541460096115c1565b6104c3813515806104bc57506001548235145b600a6115c1565b6000808055600280546104d5906119b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610501906119b4565b801561054e5780601f106105235761010080835404028352916020019161054e565b820191906000526020600020905b81548152906001019060200180831161053157829003601f168201915b50505050508060200190518101906105669190611b5e565b905061057981606001514310600b6115c1565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516105a89190611bd7565b60405180910390a16105c18160200151341460086115c1565b6105c9611831565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600290525143920191909152516106179080611b46565b602082015160400152610629816115e6565b505050565b61063e600160005414600d6115c1565b6106588135158061065157506001548235145b600e6115c1565b60008080556002805461066a906119b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610696906119b4565b80156106e35780601f106106b8576101008083540402835291602001916106e3565b820191906000526020600020905b8154815290600101906020018083116106c657829003601f168201915b50505050508060200190518101906106fb9190611b5e565b905061070f8160600151431015600f6115c1565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e18260405161073e9190611bd7565b60405180910390a16107523415600c6115c1565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561078f573d6000803e3d6000fd5b50600080805560018190556107a69060029061188a565b5050565b6107ba600d6000541460386115c1565b6107d4813515806107cd57506001548235145b60396115c1565b6000808055600280546107e6906119b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610812906119b4565b801561085f5780601f106108345761010080835404028352916020019161085f565b820191906000526020600020905b81548152906001019060200180831161084257829003601f168201915b50505050508060200190518101906108779190611c01565b905061088c816101200151431015603a6115c1565b7f5fe72957f5855f25860ec325face1305075da64ba42ea3b56918fbe46e26b404826040516108bb9190611bd7565b60405180910390a16108cf341560366115c1565b8051610903906001600160a01b031633146108f95760608201516001600160a01b031633146108fc565b60015b60376115c1565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561078f573d6000803e3d6000fd5b61095060076000541460176115c1565b61096a8135158061096357506001548235145b60186115c1565b60008080556002805461097c906119b4565b80601f01602080910402602001604051908101604052809291908181526020018280546109a8906119b4565b80156109f55780601f106109ca576101008083540402835291602001916109f5565b820191906000526020600020905b8154815290600101906020018083116109d857829003601f168201915b5050505050806020019051810190610a0d9190611c96565b9050610a218160a0015143101560196115c1565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de882604051610a509190611bd7565b60405180910390a1610a64341560156115c1565b8051610a98906001600160a01b03163314610a8e5760608201516001600160a01b03163314610a91565b60015b60166115c1565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561078f573d6000803e3d6000fd5b600060606000546002808054610aee906119b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610b1a906119b4565b8015610b675780601f10610b3c57610100808354040283529160200191610b67565b820191906000526020600020905b815481529060010190602001808311610b4a57829003601f168201915b50505050509050915091509091565b610b8660096000541460216115c1565b610ba081351580610b9957506001548235145b60226115c1565b600080805560028054610bb2906119b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610bde906119b4565b8015610c2b5780601f10610c0057610100808354040283529160200191610c2b565b820191906000526020600020905b815481529060010190602001808311610c0e57829003601f168201915b5050505050806020019051810190610c439190611a6f565b9050610c578160c0015143101560236115c1565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e082604051610c869190611bd7565b60405180910390a1610c9a3415601f6115c1565b8051610903906001600160a01b03163314610cc45760608201516001600160a01b03163314610cc7565b60015b60206115c1565b610cde600d6000541460336115c1565b610cf881351580610cf157506001548235145b60346115c1565b600080805560028054610d0a906119b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610d36906119b4565b8015610d835780601f10610d5857610100808354040283529160200191610d83565b820191906000526020600020905b815481529060010190602001808311610d6657829003601f168201915b5050505050806020019051810190610d9b9190611c01565b9050610dc3604051806060016040528060008152602001600081526020016000151581525090565b610dd5826101200151431060356115c1565b7f549c9fc546e5f8c4bf917827c2419521e946e3198cb9b2357f885e511e8d444f83604051610e049190611d2a565b60405180910390a1610e183415602f6115c1565b6060820151610e33906001600160a01b0316331460306115c1565b60408051610e8091610e5a9190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360c001511460316115c1565b604080516080850135602080830191909152606080870135838501528351808403850181529201909252805191012060a0830151610ec0911460326115c1565b60e0820151610ed490602085013590611b46565b6020820181905260608401358114604083015261010083015114610f09578060400151610f02576001610f0f565b6000610f0f565b80604001515b15610f1d5760028152610f35565b806040015115610f305760018152610f35565b600081525b610f3d611831565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610f9c816115e6565b50505050565b610fb2600b6000541460276115c1565b610fcc81351580610fc557506001548235145b60286115c1565b600080805560028054610fde906119b4565b80601f016020809104026020016040519081016040528092919081815260200182805461100a906119b4565b80156110575780601f1061102c57610100808354040283529160200191611057565b820191906000526020600020905b81548152906001019060200180831161103a57829003601f168201915b505050505080602001905181019061106f9190611d63565b90506110876040518060200160405280600081525090565b611099826101000151431060296115c1565b7f6d2a760051c31ac710d5caab59ac56c4a07d80f9223f41860cee13a409443bec836040516110c89190611d2a565b60405180910390a16110dc341560246115c1565b81516110f4906001600160a01b0316331460256115c1565b604080516111419161111b9190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460266115c1565b60408201516111509043611b46565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316838501526080808701519085015260c08087015160a086015260e080880151918601919091528783013590850152918601356101008401528351610120840152600d60005543600155905161046e91839101611dec565b611236600b60005414602c6115c1565b6112508135158061124957506001548235145b602d6115c1565b600080805560028054611262906119b4565b80601f016020809104026020016040519081016040528092919081815260200182805461128e906119b4565b80156112db5780601f106112b0576101008083540402835291602001916112db565b820191906000526020600020905b8154815290600101906020018083116112be57829003601f168201915b50505050508060200190518101906112f39190611d63565b9050611308816101000151431015602e6115c1565b7fb764c356a899e639c4043e82fb6274894baac6d84c74f3b3ae78d8f4b22b0003826040516113379190611bd7565b60405180910390a161134b3415602a6115c1565b8051610a98906001600160a01b031633146113755760608201516001600160a01b03163314611378565b60015b602b6115c1565b61138f60076000541460126115c1565b6113a9813515806113a257506001548235145b60136115c1565b6000808055600280546113bb906119b4565b80601f01602080910402602001604051908101604052809291908181526020018280546113e7906119b4565b80156114345780601f1061140957610100808354040283529160200191611434565b820191906000526020600020905b81548152906001019060200180831161141757829003601f168201915b505050505080602001905181019061144c9190611c96565b90506114646040518060200160405280600081525090565b6114758260a00151431060146115c1565b7f8a7f52857f5a8f65325114c9f376102f032d7b655b2da6a5e0a4fd78f992d983836040516114a49190611b0d565b60405180910390a16114b8341560106115c1565b81516114d0906001600160a01b0316331460116115c1565b60408201516114df9043611b46565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260096000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e08201526101000161046e565b816107a65760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160208101909152600081526020820151516002141561170857815160400151602080840151015161161b9190611b46565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526007600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610f9c9291906117ad565b60208201515161175f57815180516020909101516001600160a01b03909116906108fc90611737906002611e73565b6040518115909202916000818181858888f1935050505015801561078f573d6000803e3d6000fd5b60208201515160011415611797578160000151606001516001600160a01b03166108fc83600001516020015160026117379190611e73565b600080805560018190556107a69060029061188a565b8280546117b9906119b4565b90600052602060002090601f0160209004810192826117db5760008555611821565b82601f106117f457805160ff1916838001178555611821565b82800160010185558215611821579182015b82811115611821578251825591602001919060010190611806565b5061182d9291506118c7565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161188560405180606001604052806000815260200160008152602001600081525090565b905290565b508054611896906119b4565b6000825580601f106118a6575050565b601f0160209004906000526020600020908101906118c491906118c7565b50565b5b8082111561182d57600081556001016118c8565b6000606082840312156118ee57600080fd5b50919050565b60006060828403121561190657600080fd5b61191083836118dc565b9392505050565b6000604082840312156118ee57600080fd5b82815260006020604081840152835180604085015260005b8181101561195d57858101830151858201606001528201611941565b8181111561196f576000606083870101525b50601f01601f191692909201606001949350505050565b600060a082840312156118ee57600080fd5b600060a082840312156119aa57600080fd5b6119108383611986565b600181811c908216806119c857607f821691505b602082108114156118ee57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff81118282101715611a1b57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff81118282101715611a1b57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114611a6a57600080fd5b919050565b600060e08284031215611a8157600080fd5b60405160e0810181811067ffffffffffffffff82111715611ab257634e487b7160e01b600052604160045260246000fd5b604052611abe83611a53565b81526020830151602082015260408301516040820152611ae060608401611a53565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b813581526020808301359082015260408083013590820152606081015b92915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611b5957611b59611b30565b500190565b600060808284031215611b7057600080fd5b6040516080810181811067ffffffffffffffff82111715611ba157634e487b7160e01b600052604160045260246000fd5b604052611bad83611a53565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b81358152604081016020830135801515808214611bf357600080fd5b806020850152505092915050565b60006101408284031215611c1457600080fd5b611c1c6119e9565b611c2583611a53565b81526020830151602082015260408301516040820152611c4760608401611a53565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b600060c08284031215611ca857600080fd5b60405160c0810181811067ffffffffffffffff82111715611cd957634e487b7160e01b600052604160045260246000fd5b604052611ce583611a53565b81526020830151602082015260408301516040820152611d0760608401611a53565b60608201526080830151608082015260a083015160a08201528091505092915050565b60a08101611b2a828480358252602081013560208301526040810135604083015260608101356060830152608081013560808301525050565b60006101208284031215611d7657600080fd5b611d7e611a21565b611d8783611a53565b81526020830151602082015260408301516040820152611da960608401611a53565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b81516001600160a01b03168152610140810160208301516020830152604083015160408301526060830151611e2c60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000816000190483118215151615611e8d57611e8d611b30565b50029056fea26469706673582212202531138782b5b62330ad819f5140f4d66494f94fe6753984395e7ab98c34559e64736f6c63430008090033`,
  BytecodeLen: 8676,
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
