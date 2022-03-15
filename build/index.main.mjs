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
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc2],
      3: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc1, ctc1]
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
  
  
  const v140 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v143 = stdlib.protect(ctc0, await interact.chooseFinger(), {
    at: './index.rsh:52:51:application',
    fs: ['at ./index.rsh:49:15:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)'],
    msg: 'chooseFinger',
    who: 'Alice'
    });
  const v144 = stdlib.protect(ctc0, await interact.predictAmount(), {
    at: './index.rsh:53:56:application',
    fs: ['at ./index.rsh:49:15:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)'],
    msg: 'predictAmount',
    who: 'Alice'
    });
  const v145 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:53:31:application',
    fs: ['at ./index.rsh:55:70:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:49:15:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v146 = stdlib.digest(ctc1, [v145, v143]);
  const v148 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:53:31:application',
    fs: ['at ./index.rsh:56:78:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:49:15:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v149 = stdlib.digest(ctc1, [v148, v144]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v140, v146, v149],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:62:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc2],
    pay: [v140, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v152, v153, v154], secs: v156, time: v155, didSend: v45, from: v151 } = txn1;
      
      sim_r.txns.push({
        amt: v152,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v152, v153, v154], secs: v156, time: v155, didSend: v45, from: v151 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc2, ctc2],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v170, v171], secs: v173, time: v172, didSend: v66, from: v169 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v151, v152, v153, v169, v170, v171, v143, v145, v144, v148],
    evt_cnt: 4,
    funcNum: 2,
    lct: v172,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:93:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v179, v180, v181, v182], secs: v184, time: v183, didSend: v79, from: v178 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:93:11:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v186 = stdlib.addressEq(v151, v178);
      stdlib.assert(v186, {
        at: './index.rsh:93:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v187 = stdlib.digest(ctc1, [v180, v179]);
      const v188 = stdlib.digestEq(v153, v187);
      stdlib.assert(v188, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:94:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc2, ctc4, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v179, v180, v181, v182], secs: v184, time: v183, didSend: v79, from: v178 } = txn3;
  ;
  const v186 = stdlib.addressEq(v151, v178);
  stdlib.assert(v186, {
    at: './index.rsh:93:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v187 = stdlib.digest(ctc1, [v180, v179]);
  const v188 = stdlib.digestEq(v153, v187);
  stdlib.assert(v188, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:94:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 3,
    out_tys: [ctc0, ctc0, ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v192, v193, v194, v195], secs: v197, time: v196, didSend: v95, from: v191 } = txn4;
  ;
  const v199 = stdlib.addressEq(v169, v191);
  stdlib.assert(v199, {
    at: './index.rsh:105:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v200 = stdlib.digest(ctc1, [v193, v192]);
  const v201 = stdlib.digestEq(v171, v200);
  stdlib.assert(v201, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:107:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v202 = stdlib.digest(ctc1, [v195, v194]);
  const v203 = stdlib.digestEq(v170, v202);
  stdlib.assert(v203, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:108:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  let v204;
  const v205 = stdlib.add(v179, v192);
  const v206 = stdlib.sub(v181, v205);
  const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:17:52:decimal', stdlib.UInt_max, 0));
  const v208 = stdlib.sub(v194, v205);
  const v209 = stdlib.eq(v208, stdlib.checkedBigNumberify('./index.rsh:18:52:decimal', stdlib.UInt_max, 0));
  const v210 = v209 ? false : true;
  const v211 = v207 ? v209 : v210;
  if (v211) {
    v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
    }
  else {
    if (v209) {
      v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      }
    else {
      v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
      }
    }
  const v212 = stdlib.eq(v204, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
  if (v212) {
    const v213 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:115:18:decimal', stdlib.UInt_max, 2), v152);
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v204), {
      at: './index.rsh:125:28:application',
      fs: ['at ./index.rsh:124:9:application call to [unknown function] (defined at: ./index.rsh:124:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const v224 = stdlib.eq(v204, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    if (v224) {
      const v225 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:117:18:decimal', stdlib.UInt_max, 2), v152);
      ;
      stdlib.protect(ctc3, await interact.seeOutcome(v204), {
        at: './index.rsh:125:28:application',
        fs: ['at ./index.rsh:124:9:application call to [unknown function] (defined at: ./index.rsh:124:27:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }
    else {
      ;
      ;
      stdlib.protect(ctc3, await interact.seeOutcome(v204), {
        at: './index.rsh:125:28:application',
        fs: ['at ./index.rsh:124:9:application call to [unknown function] (defined at: ./index.rsh:124:27:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }}
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v152, v153, v154], secs: v156, time: v155, didSend: v45, from: v151 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v152), {
    at: './index.rsh:68:29:application',
    fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v161 = stdlib.protect(ctc0, await interact.chooseFinger(), {
    at: './index.rsh:70:49:application',
    fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:17:function exp)'],
    msg: 'chooseFinger',
    who: 'Bob'
    });
  const v162 = stdlib.protect(ctc0, await interact.predictAmount(), {
    at: './index.rsh:71:54:application',
    fs: ['at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:17:function exp)'],
    msg: 'predictAmount',
    who: 'Bob'
    });
  const v163 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:53:31:application',
    fs: ['at ./index.rsh:73:66:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:17:function exp)'],
    msg: 'random',
    who: 'Bob'
    });
  const v164 = stdlib.digest(ctc3, [v163, v161]);
  const v166 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:53:31:application',
    fs: ['at ./index.rsh:74:74:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:67:13:application call to [unknown function] (defined at: ./index.rsh:67:17:function exp)'],
    msg: 'random',
    who: 'Bob'
    });
  const v167 = stdlib.digest(ctc3, [v166, v162]);
  
  const txn2 = await (ctc.sendrecv({
    args: [v151, v152, v153, v167, v164],
    evt_cnt: 2,
    funcNum: 1,
    lct: v155,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [v152, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v170, v171], secs: v173, time: v172, didSend: v66, from: v169 } = txn2;
      
      sim_r.txns.push({
        amt: v152,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v170, v171], secs: v173, time: v172, didSend: v66, from: v169 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 2,
    out_tys: [ctc0, ctc0, ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v179, v180, v181, v182], secs: v184, time: v183, didSend: v79, from: v178 } = txn3;
  ;
  const v186 = stdlib.addressEq(v151, v178);
  stdlib.assert(v186, {
    at: './index.rsh:93:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v187 = stdlib.digest(ctc3, [v180, v179]);
  const v188 = stdlib.digestEq(v153, v187);
  stdlib.assert(v188, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:94:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v151, v152, v169, v170, v171, v179, v181, v161, v163, v162, v166],
    evt_cnt: 4,
    funcNum: 3,
    lct: v183,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:105:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v192, v193, v194, v195], secs: v197, time: v196, didSend: v95, from: v191 } = txn4;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:105:9:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v199 = stdlib.addressEq(v169, v191);
      stdlib.assert(v199, {
        at: './index.rsh:105:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v200 = stdlib.digest(ctc3, [v193, v192]);
      const v201 = stdlib.digestEq(v171, v200);
      stdlib.assert(v201, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:107:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v202 = stdlib.digest(ctc3, [v195, v194]);
      const v203 = stdlib.digestEq(v170, v202);
      stdlib.assert(v203, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:108:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Bob'
        });
      let v204;
      const v205 = stdlib.add(v179, v192);
      const v206 = stdlib.sub(v181, v205);
      const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:17:52:decimal', stdlib.UInt_max, 0));
      const v208 = stdlib.sub(v194, v205);
      const v209 = stdlib.eq(v208, stdlib.checkedBigNumberify('./index.rsh:18:52:decimal', stdlib.UInt_max, 0));
      const v210 = v209 ? false : true;
      const v211 = v207 ? v209 : v210;
      if (v211) {
        v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
        }
      else {
        if (v209) {
          v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          }
        else {
          v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
          }
        }
      const v212 = stdlib.eq(v204, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      if (v212) {
        const v213 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:115:18:decimal', stdlib.UInt_max, 2), v152);
        sim_r.txns.push({
          amt: v213,
          kind: 'from',
          to: v151,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      else {
        const v224 = stdlib.eq(v204, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        if (v224) {
          const v225 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:117:18:decimal', stdlib.UInt_max, 2), v152);
          sim_r.txns.push({
            amt: v225,
            kind: 'from',
            to: v169,
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
            amt: v152,
            kind: 'from',
            to: v169,
            tok: undefined
            });
          sim_r.txns.push({
            amt: v152,
            kind: 'from',
            to: v151,
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
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc4, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v192, v193, v194, v195], secs: v197, time: v196, didSend: v95, from: v191 } = txn4;
  ;
  const v199 = stdlib.addressEq(v169, v191);
  stdlib.assert(v199, {
    at: './index.rsh:105:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v200 = stdlib.digest(ctc3, [v193, v192]);
  const v201 = stdlib.digestEq(v171, v200);
  stdlib.assert(v201, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:107:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v202 = stdlib.digest(ctc3, [v195, v194]);
  const v203 = stdlib.digestEq(v170, v202);
  stdlib.assert(v203, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:108:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  let v204;
  const v205 = stdlib.add(v179, v192);
  const v206 = stdlib.sub(v181, v205);
  const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:17:52:decimal', stdlib.UInt_max, 0));
  const v208 = stdlib.sub(v194, v205);
  const v209 = stdlib.eq(v208, stdlib.checkedBigNumberify('./index.rsh:18:52:decimal', stdlib.UInt_max, 0));
  const v210 = v209 ? false : true;
  const v211 = v207 ? v209 : v210;
  if (v211) {
    v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
    }
  else {
    if (v209) {
      v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      }
    else {
      v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
      }
    }
  const v212 = stdlib.eq(v204, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
  if (v212) {
    const v213 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:115:18:decimal', stdlib.UInt_max, 2), v152);
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v204), {
      at: './index.rsh:125:28:application',
      fs: ['at ./index.rsh:124:9:application call to [unknown function] (defined at: ./index.rsh:124:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const v224 = stdlib.eq(v204, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    if (v224) {
      const v225 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:117:18:decimal', stdlib.UInt_max, 2), v152);
      ;
      stdlib.protect(ctc2, await interact.seeOutcome(v204), {
        at: './index.rsh:125:28:application',
        fs: ['at ./index.rsh:124:9:application call to [unknown function] (defined at: ./index.rsh:124:27:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      return;
      }
    else {
      ;
      ;
      stdlib.protect(ctc2, await interact.seeOutcome(v204), {
        at: './index.rsh:125:28:application',
        fs: ['at ./index.rsh:124:9:application call to [unknown function] (defined at: ./index.rsh:124:27:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      return;
      }}
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BSAJAAECAwggBRAYJgMBAAEBACI1ADEYQQO/KmRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoBFzYaAhc1BDYaAzUFSSQMQAIqSSUMQAFuJRJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf80AyEFWzX+NANXKCA1/TQFIls1/DQFIQRbNfs0BSEHWzX6NAUhCFs1+YAEFxOh4zT8FlA0+xZQNPoWUDT5FlCwNP0xABJENANXaCA0+xY0/BZQARJENANXSCA0+RY0+hZQARJENAOBiAFbNPwINfc0+jT3CSISSTX2FDT2NAOBkAFbNPcJIhJNQQAGJDX4QgAONPZBAAYjNfhCAAMiNfg0+CISQQAwJDT+C0lBAAyxsggjshA0/7IHsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRkhBhJEQgJsNPgjEkEAMCQ0/gtJQQAMsbIII7IQNP2yB7MiSCKxsggjshAyCbIJMgqyB7MiSDEZIQYSREICNTT+SUEADLGyCCOyEDT9sgezIkg0/klBAAyxsggjshA0/7IHsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRkhBhJEQgH0SCQ0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/NAMhBVs1/jQDV0ggNf00A1doIDX8NANXiCA1+zQFIls1+jQFIQRbNfk0BSEHWzX4NAUhCFs194AEuefdADT6FlA0+RZQNPgWUDT3FlCwNP8xABJENANXKCA0+RY0+hZQARJENP80/hZQNP1QNPxQNPtQNPoWUDT4FlAoSwFXAH9nKUsBV38ZZ0glNQEyBjUCMRkiEkRCAT5JIwxAAJhIIzQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf80AyEFWzX+NANXKCA1/TQFVwAgNfw0BVcgIDX7gAQH7SYJNPxQNPtQsDT+SUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESDT/NP4WUDT9UDEAUDT8UDT7UChLAVcAf2cpSwFXfylnSCQ1ATIGNQIxGSISREIAoEgiNAESRDQESSISTDQCEhFENAUiWzX/NAVXCCA1/jQFVyggNf2ABESNblc0/xZQNP5QNP1QsIGgjQZJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRINP9JQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIMQA0/xZQNP5QKEsBVwBIZ0gjNQEyBjUCMRkiEkRCAAAqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yw==`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
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
                "name": "v152",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v154",
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
                "name": "v152",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v154",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v171",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v179",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v180",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v181",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
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
                "name": "v192",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v195",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v171",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v179",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v180",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v181",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
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
                "name": "v192",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v195",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200114338038062001143833981016040819052620000269162000236565b600080554360035560408051825181526020808401518051828401529081015182840152820151606082015290517f756807fe21484d54421b0dab51b98946711df868f9dc26ba5d9f68d9584b653d9181900360800190a16020810151516200009390341460076200012f565b620000c1604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012692600292019062000159565b5050506200030a565b81620001555760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016790620002cd565b90600052602060002090601f0160209004810192826200018b5760008555620001d6565b82601f10620001a657805160ff1916838001178555620001d6565b82800160010185558215620001d6579182015b82811115620001d6578251825591602001919060010190620001b9565b50620001e4929150620001e8565b5090565b5b80821115620001e45760008155600101620001e9565b604051606081016001600160401b03811182821017156200023057634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200024a57600080fd5b604080519081016001600160401b03811182821017156200027b57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200029557600080fd5b6200029f620001ff565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c90821680620002e257607f821691505b602082108114156200030457634e487b7160e01b600052602260045260246000fd5b50919050565b610e29806200031a6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806342ae229d146100835780634725882f1461009657806383230757146100a95780639aad84dd146100be578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610ab4565b6100f4565b61005d6100a4366004610ade565b610317565b3480156100b557600080fd5b50600154610070565b61005d6100cc366004610ade565b6106a4565b3480156100dd57600080fd5b506100e6610918565b60405161007a929190610b01565b61010460016000541460096109b5565b61011e8135158061011757506001548235145b600a6109b5565b60008080556002805461013090610b5e565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610b5e565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610baf565b604080518435815260208086013590820152848201358183015290519192507fd9db09b2d8159e1b10651765d2111016b57a8864385e9ac90399a79856fea14b919081900360600190a161021c8160200151341460086109b5565b6102676040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b039081168083526020808501518185019081526040808701518187019081523360608089019182528a8601356080808b019182528c86013560a0808d019182526002600055436001558751998a019a909a529651958801959095529251908601525190951690830152925191810191909152905160c082015260e0015b604051602081830303815290604052600290805190602001906103119291906109de565b50505050565b61032760036000541460146109b5565b6103418135158061033a57506001548235145b60156109b5565b60008080556002805461035390610b5e565b80601f016020809104026020016040519081016040528092919081815260200182805461037f90610b5e565b80156103cc5780601f106103a1576101008083540402835291602001916103cc565b820191906000526020600020905b8154815290600101906020018083116103af57829003601f168201915b50505050508060200190518101906103e49190610c1e565b905061040c604051806060016040528060008152602001600081526020016000151581525090565b7fcdd42dae2311b0dba27cf538c98b6f77620a6e389b6e57579d76c4627dfccd6c8360405161043b9190610cbc565b60405180910390a161044f341560106109b5565b604082015161046a906001600160a01b0316331460116109b5565b604080516104b7916104919190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c83608001511460126109b5565b6040805160808501356020820152606080860135928201929092526104fd91016040516020818303038152906040528051906020012060001c83606001511460136109b5565b60a082015161051190602085013590610d11565b60208201819052600090610529906060860135610d29565b146040820152602081015160c083015160009161054591610d29565b1461056157806040015161055a576001610567565b6000610567565b80604001515b15610575576002815261058d565b806040015115610588576001815261058d565b600081525b80516105f95781600001516001600160a01b03166108fc836020015160026105b59190610d40565b6040518115909202916000818181858888f193505050501580156105dd573d6000803e3d6000fd5b50600080805560018190556105f490600290610a62565b505050565b8051600114156106255781604001516001600160a01b03166108fc836020015160026105b59190610d40565b81604001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f19350505050158015610666573d6000803e3d6000fd5b50815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105dd573d6000803e3d6000fd5b6106b4600260005414600e6109b5565b6106ce813515806106c757506001548235145b600f6109b5565b6000808055600280546106e090610b5e565b80601f016020809104026020016040519081016040528092919081815260200182805461070c90610b5e565b80156107595780601f1061072e57610100808354040283529160200191610759565b820191906000526020600020905b81548152906001019060200180831161073c57829003601f168201915b50505050508060200190518101906107719190610d5f565b90507f7ef3e3d232751fb004d1f57944dc1b2191914c53c778fbb352350055826b4d51826040516107a29190610cbc565b60405180910390a16107b63415600b6109b5565b80516107ce906001600160a01b03163314600c6109b5565b6040805161081b916107f59190850135906020808701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826040015114600d6109b5565b61086d6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b03908116808352602080850151818501908152606080870151851660408088019182526080808a0151848a0190815260a0808c0151838c019081528d890135828d019081528e88013560c0808f0191825260036000554360015587519b8c019c909c529851958a01959095529451909916948701949094529251928501929092525194830194909452925191810191909152905160e0820152610100016102ed565b60006060600054600280805461092d90610b5e565b80601f016020809104026020016040519081016040528092919081815260200182805461095990610b5e565b80156109a65780601f1061097b576101008083540402835291602001916109a6565b820191906000526020600020905b81548152906001019060200180831161098957829003601f168201915b50505050509050915091509091565b816109da5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546109ea90610b5e565b90600052602060002090601f016020900481019282610a0c5760008555610a52565b82601f10610a2557805160ff1916838001178555610a52565b82800160010185558215610a52579182015b82811115610a52578251825591602001919060010190610a37565b50610a5e929150610a9f565b5090565b508054610a6e90610b5e565b6000825580601f10610a7e575050565b601f016020900490600052602060002090810190610a9c9190610a9f565b50565b5b80821115610a5e5760008155600101610aa0565b600060608284031215610ac657600080fd5b50919050565b600060a08284031215610ac657600080fd5b600060a08284031215610af057600080fd5b610afa8383610acc565b9392505050565b82815260006020604081840152835180604085015260005b81811015610b3557858101830151858201606001528201610b19565b81811115610b47576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610b7257607f821691505b60208210811415610ac657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610baa57600080fd5b919050565b600060608284031215610bc157600080fd5b6040516060810181811067ffffffffffffffff82111715610bf257634e487b7160e01b600052604160045260246000fd5b604052610bfe83610b93565b815260208301516020820152604083015160408201528091505092915050565b600060e08284031215610c3057600080fd5b60405160e0810181811067ffffffffffffffff82111715610c6157634e487b7160e01b600052604160045260246000fd5b604052610c6d83610b93565b815260208301516020820152610c8560408401610b93565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b60a08101610cf5828480358252602081013560208301526040810135604083015260608101356060830152608081013560808301525050565b92915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610d2457610d24610cfb565b500190565b600082821015610d3b57610d3b610cfb565b500390565b6000816000190483118215151615610d5a57610d5a610cfb565b500290565b600060c08284031215610d7157600080fd5b60405160c0810181811067ffffffffffffffff82111715610da257634e487b7160e01b600052604160045260246000fd5b604052610dae83610b93565b81526020830151602082015260408301516040820152610dd060608401610b93565b60608201526080830151608082015260a083015160a0820152809150509291505056fea26469706673582212203fc67d0579d598cc0352e2d6eda390095a91fa768bbcd550be0cace4d5342c9964736f6c63430008090033`,
  BytecodeLen: 4419,
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
