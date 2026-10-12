/* מרכז הניהול במאוחדת – behaviour (loaded at end of body) */
/* ============ scaling ============ */
function fit(){const s=Math.min(innerWidth/1280,innerHeight/720);document.getElementById('stage').style.transform='scale('+s+')'}
addEventListener('resize',fit);fit();

/* ============ icons ============ */
const ICONS={
 arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 6l-6 6 6 6"/></svg>',
 workplan:'<svg viewBox="0 0 64 64"><defs><linearGradient id="gb1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4f7bff"/><stop offset="1" stop-color="#2b33d6"/></linearGradient></defs><rect x="12" y="6" width="34" height="46" rx="6" fill="url(#gb1)"/><rect x="18" y="15" width="4" height="4" rx="1" fill="#fff"/><rect x="25" y="15" width="15" height="4" rx="2" fill="#fff"/><rect x="18" y="24" width="4" height="4" rx="1" fill="#fff"/><rect x="25" y="24" width="15" height="4" rx="2" fill="#c9d6ff"/><rect x="18" y="33" width="4" height="4" rx="1" fill="#fff"/><rect x="25" y="33" width="11" height="4" rx="2" fill="#c9d6ff"/><circle cx="45" cy="45" r="12" fill="#f7801e"/><path d="M39 45l4 4 8-8" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
 strategy:'<svg viewBox="0 0 64 64"><path d="M32 4l5 1 1 6 5 2 5-4 4 4-4 5 2 5 6 1 1 5-1 5-6 1-2 5 4 5-4 4-5-4-5 2-1 6-5 1-5-1-1-6-5-2-5 4-4-4 4-5-2-5-6-1-1-5 1-5 6-1 2-5-4-5 4-4 5 4 5-2 1-6z" fill="#2b47e6"/><circle cx="32" cy="32" r="16" fill="#fff"/><circle cx="32" cy="28" r="5" fill="#f7801e"/><path d="M23 41c2-6 6-8 9-8s7 2 9 8z" fill="#f7801e"/></svg>',
 leadership:'<svg viewBox="0 0 64 64"><path d="M4 22l12-8 10 6-12 16z" fill="#f7801e"/><path d="M60 22l-12-8-10 6 12 16z" fill="#f7801e"/><path d="M16 22l10-5 8 3 8-3 10 7-4 12-14 12c-2 2-5 2-7 0L14 36z" fill="#2b47e6"/><path d="M26 20l8 8c2 2 5 2 6 0" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M22 38l6 6M27 34l6 6M32 31l6 6" stroke="#90a8ff" stroke-width="2" stroke-linecap="round"/></svg>',
 ai:'<svg viewBox="0 0 64 64"><g stroke="#f7801e" stroke-width="2.4"><path d="M24 8v8M32 6v10M40 8v8M24 48v8M32 48v10M40 48v8M8 24h8M6 32h10M8 40h8M48 24h8M48 32h10M48 40h8"/></g><g fill="#f7801e"><circle cx="24" cy="7" r="2.6"/><circle cx="40" cy="7" r="2.6"/><circle cx="24" cy="57" r="2.6"/><circle cx="40" cy="57" r="2.6"/><circle cx="7" cy="24" r="2.6"/><circle cx="7" cy="40" r="2.6"/><circle cx="57" cy="24" r="2.6"/><circle cx="57" cy="40" r="2.6"/></g><rect x="15" y="15" width="34" height="34" rx="8" fill="#2b47e6"/><text x="32" y="39" text-anchor="middle" font-family="Heebo,Arial" font-weight="900" font-size="17" fill="#fff">AI</text></svg>',
 data:'<svg viewBox="0 0 64 64"><rect x="8" y="34" width="12" height="22" rx="3" fill="#3f6bff"/><rect x="26" y="22" width="12" height="34" rx="3" fill="#f7801e"/><rect x="44" y="6" width="12" height="50" rx="3" fill="#2b33d6"/></svg>',
 performance:'<svg viewBox="0 0 64 64"><circle cx="14" cy="22" r="7" fill="#2b47e6"/><circle cx="50" cy="22" r="7" fill="#2b47e6"/><path d="M2 48c0-10 6-15 12-15s12 5 12 15z" fill="#2b47e6"/><path d="M38 48c0-10 6-15 12-15s12 5 12 15z" fill="#2b47e6"/><circle cx="32" cy="16" r="9" fill="#2b33d6"/><path d="M16 56c0-14 7-21 16-21s16 7 16 21z" fill="#f7801e"/></svg>',
 procurement:'<svg viewBox="0 0 64 64"><path d="M6 22l22-8 22 8-22 9z" fill="#ffa24a"/><path d="M6 22v24l22 10V31z" fill="#f7801e"/><path d="M50 22v12l-22 22V31z" fill="#e86b0c"/><path d="M14 18l22 9" stroke="#fff" stroke-width="4"/><circle cx="48" cy="48" r="12" fill="#2b47e6"/><circle cx="48" cy="48" r="4.5" fill="#fff"/><g stroke="#2b47e6" stroke-width="4" stroke-linecap="round"><path d="M48 33v4M48 59v4M33 48h4M59 48h4M37.4 37.4l2.8 2.8M55.8 55.8l2.8 2.8M37.4 58.6l2.8-2.8M55.8 40.2l2.8-2.8"/></g></svg>',
 bulb:'<svg viewBox="0 0 40 40"><path d="M20 4a11 11 0 00-6 20v4h12v-4A11 11 0 0020 4z" fill="#ffa24a"/><rect x="15" y="30" width="10" height="4" rx="2" fill="#2b33d6"/></svg>',
 send:'<svg viewBox="0 0 40 40"><rect x="6" y="6" width="22" height="28" rx="4" fill="#3f6bff"/><path d="M11 14h12M11 20h12M11 26h7" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><circle cx="30" cy="28" r="8" fill="#f7801e"/><path d="M27 28h6M31 25l3 3-3 3" stroke="#fff" stroke-width="2" fill="none"/></svg>',
 check:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="#3f6bff"/><path d="M13 20l5 5 9-10" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
 gauge:'<svg viewBox="0 0 40 40"><path d="M5 28a15 15 0 0130 0" stroke="#3f6bff" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M20 28l7-10" stroke="#f7801e" stroke-width="3.4" stroke-linecap="round"/><circle cx="20" cy="28" r="3.4" fill="#2b33d6"/></svg>',
 flag:'<svg viewBox="0 0 40 40"><path d="M10 5v31" stroke="#2b33d6" stroke-width="3" stroke-linecap="round"/><path d="M11 7h20l-4 7 4 7H11z" fill="#f7801e"/></svg>',
 home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1z"/></svg>'
};
/* ---- organisation icon style: dark-grey outline + flat orange accents (see מאוחדת app icons) ---- */
const K='#4d4d4d',OR='#f7941d';
const G=`fill="none" stroke="${K}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
const S=b=>`<svg viewBox="0 0 48 48">${b}</svg>`;
const D=(d,x='')=>`<path d="${d}" ${G} ${x}/>`;
const F=d=>`<path d="${d}" fill="${OR}"/>`;
const FO=d=>`<path d="${d}" fill="${OR}" stroke="${K}" stroke-width="2" stroke-linejoin="round"/>`;
const docShape=D('M9 4h18l8 8v31H9z')+F('M27 4v8h8z')+D('M14 18h14M14 24h14M14 30h8');
Object.assign(ICONS,{
 target:S(`<circle cx="22" cy="26" r="16" ${G}/><circle cx="22" cy="26" r="9" ${G}/><circle cx="22" cy="26" r="3.5" fill="${OR}"/>`+D('M22 26L38 10')+F('M35 5l2 6 6 2-4 4-6-2-2-6z')),
 network:S(D('M24 24L10 10M24 24L38 10M24 24L10 38M24 24L38 38')+[[10,10],[38,10],[10,38],[38,38]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="#fff" stroke="${K}" stroke-width="2"/>`).join('')+`<circle cx="24" cy="24" r="7" fill="${OR}"/>`),
 medal:S(F('M15 3h8l5 13h-8z')+D('M33 3h-8l-5 13h8z')+`<circle cx="24" cy="30" r="12" fill="#fff" ${G}/>`+F('M24 23.5l2 4.1 4.5.6-3.2 3.2.8 4.5-4.1-2.1-4.1 2.1.8-4.5-3.2-3.2 4.5-.6z')),
 growth:S(FO('M13 31h22l-3 13H16z')+D('M24 31V15M24 21c0-8 5-13 14-13 0 9-5 13-14 13zM24 26c0-6-4-10-11-10 0 7 4 10 11 10z')),
 think:S(D('M9 22c0-9 7-15 15-15s15 6 15 14-6 13-15 13h-2l-7 6v-7c-4-2-6-6-6-11z')+`<text x="24" y="27.5" text-anchor="middle" font-family="Heebo,Arial" font-weight="900" font-size="15" fill="${OR}">?</text><circle cx="38" cy="40" r="2.5" fill="${OR}"/><circle cx="43" cy="45" r="1.6" fill="${OR}"/>`),
 bulb:S(D('M24 6a11 11 0 00-6.5 19.8V30h13v-4.2A11 11 0 0024 6z')+`<rect x="17.5" y="32" width="13" height="5" rx="1.5" fill="${OR}"/>`+D('M20 41h8M21 19l3 3 3-3M24 22v7M24 1.5v1M9.5 8l1.5 1.5M38.5 8L37 9.5M5 19h2M41 19h2')),
 pin:S(FO('M17 5h14l-2 12 6 6H13l6-6z')+D('M24 23v21')),
 warning:S(D('M24 5l20 36H4z')+`<path d="M24 17v11" stroke="${OR}" stroke-width="3.2" stroke-linecap="round"/><circle cx="24" cy="34" r="2.2" fill="${OR}"/>`),
 building:S(FO('M6 15L24 5l18 10z')+D('M8 19h32M11 22v14M19 22v14M29 22v14M37 22v14M8 37h32M5 42h38')),
 lock:S(D('M16 21v-6a8 8 0 0116 0v6')+`<rect x="10" y="21" width="28" height="22" rx="4" fill="${OR}"/><circle cx="24" cy="30" r="3" fill="#fff"/><path d="M24 32v5" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`),
 laptopbolt:S(`<rect x="8" y="8" width="32" height="22" rx="2" ${G}/>`+D('M4 35h40l-3 5H7z')+F('M26.5 11L19 21h5l-2 7 7.5-10h-5z')),
 docsclock:S(docShape+`<circle cx="36" cy="36" r="9" fill="${OR}"/><path d="M36 31v5l3 2" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>`),
 doccheck:S(docShape+`<circle cx="36" cy="36" r="9" fill="${OR}"/><path d="M32 36l3 3 5-6" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
 ban:S(`<circle cx="24" cy="24" r="17" fill="#fff" stroke="${OR}" stroke-width="4"/><path d="M12 12l24 24" stroke="${OR}" stroke-width="4"/>`),
 calendar:S(`<rect x="6" y="9" width="36" height="33" rx="3" ${G}/>`+F('M9 9h30a3 3 0 013 3v5H6v-5a3 3 0 013-3z')+D('M15 5v7M33 5v7')+`<g fill="${K}"><circle cx="15" cy="25" r="1.8"/><circle cx="24" cy="25" r="1.8"/><circle cx="33" cy="25" r="1.8"/><circle cx="15" cy="34" r="1.8"/><circle cx="24" cy="34" r="1.8"/></g><rect x="30.5" y="31.5" width="5" height="5" rx="1" fill="${OR}"/>`),
 search:S(`<circle cx="20" cy="20" r="12" ${G}/><path d="M29 29l12 12" stroke="${OR}" stroke-width="5" stroke-linecap="round"/>`),
 headset:S(D('M9 26v-4a15 15 0 0130 0v4')+`<rect x="6" y="24" width="8" height="12" rx="3" fill="${OR}"/><rect x="34" y="24" width="8" height="12" rx="3" fill="${OR}"/>`+D('M38 36c0 4-4 6-10 6')+`<circle cx="26" cy="42" r="2.5" fill="${K}"/>`),
 mappin:S(D('M24 4a13 13 0 00-13 13c0 10 13 24 13 24s13-14 13-24A13 13 0 0024 4zM15 44h18')+`<circle cx="24" cy="17" r="5" fill="${OR}"/>`),
 phoneheart:S(`<rect x="13" y="4" width="22" height="40" rx="4" ${G}/>`+D('M21 9h6')+F('M24 31s-7-4.2-7-9a3.7 3.7 0 017-1.8 3.7 3.7 0 017 1.8c0 4.8-7 9-7 9z')),
 stethoscope:S(D('M11 5v10a8 8 0 0016 0V5M8 5h6M24 5h6M19 23v6a9 9 0 0018 0v-3')+`<circle cx="37" cy="21" r="5" fill="${OR}"/>`),
 crown:S(D('M6 16l9 8 9-13 9 13 9-8-4 21H10z')+`<rect x="10" y="38" width="28" height="5" rx="1.5" fill="${OR}"/><circle cx="24" cy="8" r="2.5" fill="${OR}"/><circle cx="6" cy="13" r="2" fill="${OR}"/><circle cx="42" cy="13" r="2" fill="${OR}"/>`),
 iterate:S(D('M37 19A14 14 0 0011 15M8 8v8h8')+`<path d="M11 29a14 14 0 0026 4M40 40v-8h-8" stroke="${OR}" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
 humanloop:S(D('M38 12A17 17 0 1041 25M33 6l5 6-7 2')+`<circle cx="24" cy="19" r="4.5" fill="${OR}"/>`+F('M15 34c0-6 4-9 9-9s9 3 9 9z')),
 stopwatch:S(`<circle cx="24" cy="27" r="16" ${G}/>`+D('M20 4h8M24 4v7M37 12l3-3')+`<path d="M24 27v-9" stroke="${OR}" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="27" r="2.6" fill="${OR}"/>`),
 cloud:S(D('M14 38a9 9 0 01-1-18 12 12 0 0123-3 10 10 0 011 21z')+`<path d="M24 34V22M19 27l5-5 5 5" stroke="${OR}" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
 chartup:S(D('M5 43h38')+`<rect x="9" y="29" width="7" height="14" ${G}/><rect x="21" y="22" width="7" height="21" ${G}/>`+FO('M33 15h7v28h-7z')+`<path d="M8 21l9-7 7 4 12-10M31 6h6v6" stroke="${OR}" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
 personchart:S(`<circle cx="14" cy="13" r="6" ${G}/>`+D('M4 38c0-8 4-13 10-13s10 5 10 13M28 43h17')+`<rect x="29" y="31" width="4" height="12" fill="${OR}"/><rect x="35" y="25" width="4" height="18" fill="${OR}"/><rect x="41" y="18" width="4" height="25" fill="${OR}"/>`),
 chat:S(D('M6 6h22a4 4 0 014 4v9a4 4 0 01-4 4H14l-6 5v-5H6a4 4 0 01-4-4v-9a4 4 0 014-4z')+`<g fill="${K}"><circle cx="11" cy="14.5" r="1.6"/><circle cx="17" cy="14.5" r="1.6"/><circle cx="23" cy="14.5" r="1.6"/></g>`+F('M22 24h20a4 4 0 014 4v8a4 4 0 01-4 4h-1v5l-6-5H22a4 4 0 01-4-4v-8a4 4 0 014-4z')),
 routine:S(`<rect x="4" y="8" width="28" height="26" rx="3" ${G}/>`+D('M4 15h28M11 5v6M25 5v6')+`<circle cx="35" cy="35" r="9.5" fill="${OR}"/><path d="M30.5 35a4.5 4.5 0 017.8-3M39.5 35a4.5 4.5 0 01-7.8 3M38.5 29v3.2h-3.2M31.5 41v-3.2h3.2" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
 trophy:S(FO('M14 6h20v9a10 10 0 01-20 0z')+D('M14 9H8v3a6 6 0 006 6M34 9h6v3a6 6 0 01-6 6M24 25v8M18 33h12v9H18zM15 42h18')),
 form:S(`<rect x="9" y="7" width="26" height="36" rx="3" ${G}/><rect x="16" y="4" width="12" height="6" rx="2" fill="${OR}"/>`+D('M15 18h14M15 24h14M15 30h8')+FO('M29 41l1.5-6 10-10 4.5 4.5-10 10z')),
 gavel:S(`<g transform="rotate(-40 24 20)">${FO('M13 6h22v10H13z')}${D('M24 16v22')}</g>`+D('M6 43h22')),
 cart:S(D('M3 6h6l5 23h24l4-15H12')+`<circle cx="17" cy="38" r="3" ${G}/><circle cx="34" cy="38" r="3" ${G}/><rect x="18" y="12" width="9" height="9" rx="1" fill="${OR}"/><rect x="28" y="15" width="7" height="6" rx="1" fill="${OR}" opacity=".7"/>`),
 compass:S(`<circle cx="24" cy="24" r="18" ${G}/>`+D('M31 17l-5 9-9 5 5-9z')+F('M31 17l-9 5 4 4z')+`<g fill="${K}"><circle cx="24" cy="9.5" r="1.3"/><circle cx="38.5" cy="24" r="1.3"/><circle cx="24" cy="38.5" r="1.3"/><circle cx="9.5" cy="24" r="1.3"/></g>`),
 rocket:S(D('M24 4c7 5 10 14 9 24H15c-1-10 2-19 9-24zM15 22l-6 9 7-1M33 22l6 9-7-1')+`<circle cx="24" cy="17" r="3.5" ${G}/>`+F('M19 32h10l-5 12z')),
 people:S(`<circle cx="24" cy="13" r="6" fill="${OR}"/>`+F('M13 42c0-10 5-16 11-16s11 6 11 16z')+`<circle cx="10" cy="17" r="4.5" ${G}/><circle cx="38" cy="17" r="4.5" ${G}/>`+D('M2 39c0-7 3-11 8-11M46 39c0-7-3-11-8-11')),
 kids:S(`<circle cx="17" cy="14" r="6" ${G}/>`+D('M7 43c0-11 4-18 10-18s10 7 10 18M36 22c-2 6 2 9-6 14')+`<ellipse cx="36" cy="13" rx="7" ry="9" fill="${OR}"/>`),
 careheart:S(F('M24 24s-10-6-10-12a5.5 5.5 0 0110-2.6A5.5 5.5 0 0134 12c0 6-10 12-10 12z')+D('M4 31h7l8 4h8a3 3 0 010 6h-9M27 41l11-6a3 3 0 013.5 4.6L30 46H12')),
 doctor:S(`<circle cx="24" cy="12" r="7" ${G}/>`+D('M8 44c0-12 7-19 16-19s16 7 16 19M19 26l5 9 5-9')+`<rect x="29" y="32" width="9" height="9" rx="1.5" fill="${OR}"/><path d="M33.5 34v5M31 36.5h5" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>`),
 maplocal:S(D('M4 12l12-5 16 5 12-5v30l-12 5-16-5-12 5zM16 7v30M32 12v30')+F('M24 8a7 7 0 00-7 7c0 5 7 12 7 12s7-7 7-12a7 7 0 00-7-7z')+`<circle cx="24" cy="15" r="2.5" fill="#fff"/>`),
 plane:S(D('M44 5L4 21l12 5 3 14 6-9 10 7zM16 26L44 5')+F('M10 45s-6-3.5-6-7.5a3 3 0 016-1.3 3 3 0 016 1.3c0 4-6 7.5-6 7.5z')),
 shieldplus:S(D('M24 4l17 6v12c0 11-7 18-17 22C14 40 7 33 7 22V10z')+`<path d="M24 15v15M16.5 22.5h15" stroke="${OR}" stroke-width="4" stroke-linecap="round"/>`),
 apple:S(FO('M24 15c-4-4-17-3-17 10 0 10 7 19 13 19 2 0 3-1.5 4-1.5s2 1.5 4 1.5c6 0 13-9 13-19 0-13-13-14-17-10z')+D('M24 15c0-4 1.5-7 4-9M27 9c4-5 10-3 11-1-3 5-9 5-11 1z')),
 tooth:S(D('M10 7c4-3 9-1 14-1s10-2 14 1c4 4 3 12 1 17-1.5 4-1.5 9-3 15-1 4.5-5 6-6 0-.8-4.5-1.5-9-6-9s-5.2 4.5-6 9c-1 6-5 4.5-6 0-1.5-6-1.5-11-3-15-2-5-3-13 1-17z')+F('M41 2l1.5 3.5L46 7l-3.5 1.5L41 12l-1.5-3.5L36 7l3.5-1.5z')),
 gauge:S(D('M6 36a18 18 0 0136 0M10.5 25l3 1.8M24 18v3.5M37.5 25l-3 1.8M6 40h36')+`<path d="M24 36l9-11" stroke="${OR}" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="36" r="3" fill="${OR}"/>`),
 steps:S(D('M4 43h10v-9h10v-9h10v-9h10v27H4z')+FO('M37 15V4l7 3.5-7 3.5')),
 flag:S(D('M10 45V5')+FO('M10 7h26l-5 7 5 7H10z')),
 send:S(D('M8 4h18l8 8v31H8z')+F('M26 4v8h8z')+D('M13 18h14M13 24h10')+`<circle cx="36" cy="36" r="9" fill="${OR}"/><path d="M32 36h8M37 33l3 3-3 3" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
 check:S(`<circle cx="24" cy="24" r="18" ${G}/><path d="M16 24l6 6 11-12" stroke="${OR}" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
 toolbox:S(`<rect x="5" y="16" width="38" height="25" rx="3" ${G}/>`+D('M17 16v-5a2 2 0 012-2h10a2 2 0 012 2v5M5 26h38')+`<rect x="20" y="22" width="8" height="8" rx="1.5" fill="${OR}"/>`),
 smile:`<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="27" fill="#fff"/><path d="M20 26q4-5 8 0M36 26q4-5 8 0" stroke="#f7801e" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M19 37q13 13 26 0" stroke="#f7801e" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`
});
/* white version (outline -> white, orange kept) for icons on coloured backgrounds */
const W=s=>s.replace(/#4d4d4d/g,'#fff');
/* all-white version for icons on orange buttons */
const WW=s=>W(s).replace(/#f7941d/g,'#fff');
function paintIcons(root){root.querySelectorAll('[data-icon]').forEach(el=>{if(!el.dataset.painted){const s=ICONS[el.dataset.icon]||'';el.insertAdjacentHTML('afterbegin',el.dataset.white?W(s):s);el.dataset.painted=1}})}

/* ============ topic chrome (top bar on each topic) ============ */
document.querySelectorAll('.screen.topic').forEach(s=>{
  s.insertAdjacentHTML('beforeend',`<div class="topbar"><img class="logo" src="assets/logo.png" alt="מאוחדת" onclick="go('home')"><div class="crumbs"><a onclick="go('home')">מרכז הניהול</a>›<b>${s.dataset.title}</b></div><button class="homebtn" onclick="go('home')">${ICONS.home}דף הבית</button></div>`);
});
document.querySelectorAll('[data-icon-home]').forEach(b=>b.insertAdjacentHTML('afterbegin',ICONS.home));

/* ============ navigation & progress ============ */
const TOPICS={ai:'כלי AI',leadership:'מודל הניהול והמנהיגות',strategy:'אסטרטגיית מאוחדת',workplan:'תכנית העבודה במאוחדת',procurement:'יסודות הרכש',performance:'הערכת ביצועים',data:'ניהול מבוסס נתונים'};
const visited=new Set();
function go(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const el=document.getElementById(id); el.classList.add('active');
  closeModal();
  const t=id.startsWith('ai-')?'ai':id;
  if(TOPICS[t]) visited.add(t);
  updateProgress();
}
function updateProgress(){
  document.querySelectorAll('.tcard').forEach(c=>c.classList.toggle('visited',visited.has(c.dataset.topic)));
  document.getElementById('progTxt').textContent=visited.size+' מתוך 7 נושאים';
  document.getElementById('progBar').style.width=(visited.size/7*100)+'%';
  document.getElementById('elist').innerHTML=Object.entries(TOPICS).map(([k,v])=>`<span class="${visited.has(k)?'ok':''}">${visited.has(k)?'✓ ':''}${v}</span>`).join('');
}
function welcomeStep(n){document.querySelectorAll('#welcome .step').forEach((s,i)=>s.classList.toggle('on',i===n))}

function wpPart(i,b){b.parentNode.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));document.querySelectorAll('#workplan .wppart').forEach((p,k)=>p.classList.toggle('on',k===i))}
/* ============ tabs ============ */
function tab(group,idx){
  const tabs=document.querySelectorAll(`.tabs[data-group="${group}"] .tab`);
  const panels=document.querySelectorAll(`.pcontent[data-group="${group}"] > .panel`);
  tabs.forEach((t,i)=>{t.classList.toggle('on',i===idx); if(i===idx)t.classList.add('seen')});
  panels.forEach((p,i)=>p.classList.toggle('on',i===idx));
  /* end of chapter: highlight the "back to home" button */
  const scr=tabs[0].closest('.screen'), hb=scr&&scr.querySelector('.topbar .homebtn');
  if(hb){const end=idx===tabs.length-1;hb.classList.toggle('cta',end);hb.lastChild.textContent=end?'סיימתם את הפרק! חזרה לדף הבית':'דף הבית'}
}
document.querySelectorAll('.tabs').forEach(tb=>{
  tb.querySelectorAll('.tab').forEach((t,i)=>t.addEventListener('click',()=>tab(tb.dataset.group,i)));
  tb.querySelector('.tab').classList.add('seen');
});

/* ============ modals / links ============ */
function openModal(id,src){closeModal();document.getElementById(id).classList.add('on');if(src&&src.classList)src.classList.add('done');if(id==='m-survey')playSurvey()}
/* doctors survey – source: chart in the script PPTX (slide 14) */
const SURVEY=[
 {n:'מאוחדת',img:'assets/logo-meuhedet.png',a:21,b:30,me:1},
 {n:'מכבי',img:'assets/logo-maccabi.png',a:31,b:24},
 {n:'כללית',img:'assets/logo-clalit.png',a:5,b:5},
 {n:'לאומית',img:'assets/logo-leumit.png',a:3,b:2},
 {n:'כולם אותו דבר',a:11,b:10},
 {n:'לא יודע/ת',a:29,b:30}
];
const SVMAX=40;
document.getElementById('svChart').innerHTML=SURVEY.map(r=>`<div class="sv-row ${r.me?'me':''}">
  <div class="sv-name">${r.img?`<img src="${r.img}" alt="${r.n}">`:r.n}</div>
  <div class="sv-bars">
    <div class="sv-bar old"><i data-w="${r.a/SVMAX*100}" title="${r.n} · סקר 08.24: ${r.a}%"></i><span>${r.a}%</span></div>
    <div class="sv-bar new"><i data-w="${r.b/SVMAX*100}" title="${r.n} · סקר 11.25: ${r.b}%"></i><span>${r.b}%</span></div>
  </div></div>`).join('');
function playSurvey(){const c=document.getElementById('svChart');c.classList.remove('play');c.querySelectorAll('.sv-bar i').forEach(i=>i.style.width=0);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{c.querySelectorAll('.sv-bar i').forEach(i=>i.style.width=i.dataset.w+'%');c.classList.add('play')}))}
function closeModal(){document.querySelectorAll('.modal-bg.on').forEach(m=>m.classList.remove('on'))}
document.querySelectorAll('.modal-bg').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal()}));
addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
let tt;function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2200)}
/* LINKS: replace '#' with real URLs */
const LINKS={'questionnaire':'#','strategy-deck':'#','workplan-helper':'#','procurement-procedure':'#'};
function openLink(b){const u=LINKS[b.dataset.link];if(u&&u!=='#')window.open(u,'_blank');else toast('הקישור יוטמע בגרסה הסופית')}

/* ============ leadership wheel ============ */
const QUADS=[
 {name:'התווית כיוון ודרך',lines:['התווית','כיוון ודרך'],comps:['מטרה ארגונית משותפת','חשיבה ותכנון קדימה','ניהול שותפויות אפקטיבי'],c1:'#4f7bff',c2:'#2b33d6',ic:'compass'},
 {name:'הובלה לביצועים',lines:['הובלה','לביצועים'],comps:['מחויבות לאיכות ומוכוונות לתוצאות','מיקוד לקוח (פנימי וחיצוני)','ניהול משאבים מושכל'],c1:'#ffb066',c2:'#f7801e',ic:'chartup'},
 {name:'הובלת אנשים',lines:['הובלת','אנשים'],comps:['דוגמה אישית המבטאת את ערכי הארגון','מנהיגות מחברת ומחוברת','בניית חוסן אישי וצוותי'],c1:'#6a86ff',c2:'#3a48e0',ic:'people'},
 {name:'פתיחות ואומץ ניהולי',lines:['פתיחות','ואומץ ניהולי'],comps:['פתיחות וסקרנות אישית','אומץ לשנות ולהשתנות','פיתוח הדור הבא'],c1:'#ffc07f',c2:'#fa9238',ic:'rocket'}
];
(function buildWheel(){
  const svg=document.getElementById('wheel'),cx=220,cy=220,R=205,r=92,g=3.5;
  const P=(a,rad)=>[cx+rad*Math.cos(a*Math.PI/180),cy+rad*Math.sin(a*Math.PI/180)];
  let h='<defs>'+QUADS.map((q,i)=>`<linearGradient id="qg${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${q.c1}"/><stop offset="1" stop-color="${q.c2}"/></linearGradient>`).join('')+'</defs>';
  const starts=[-135,-45,45,135];
  QUADS.forEach((q,i)=>{
    const a0=starts[i]+g,a1=starts[i]+90-g;
    const [x0,y0]=P(a0,R),[x1,y1]=P(a1,R),[x2,y2]=P(a1,r),[x3,y3]=P(a0,r);
    const mid=starts[i]+45,[tx,ty]=P(mid,150);
    h+=`<g class="q" data-i="${i}" onclick="pickQuad(${i})"><path d="M${x0},${y0} A${R},${R} 0 0 1 ${x1},${y1} L${x2},${y2} A${r},${r} 0 0 0 ${x3},${y3}Z" fill="url(#qg${i})"/>
      <text x="${tx}" y="${ty-6}" text-anchor="middle" fill="#fff" font-size="19">${q.lines[0]}</text><text x="${tx}" y="${ty+18}" text-anchor="middle" fill="#fff" font-size="19">${q.lines[1]}</text></g>`;
  });
  h+=`<circle cx="${cx}" cy="${cy}" r="${r-12}" fill="#fff" stroke="#e3e8f7" stroke-width="2"/><text x="${cx}" y="${cy-6}" text-anchor="middle" fill="#16196b" font-size="20">מודל ניהול</text><text x="${cx}" y="${cy+20}" text-anchor="middle" fill="#f7801e" font-size="20">ומנהיגות</text>`;
  svg.innerHTML=h;
})();
function pickQuad(i){
  const q=QUADS[i];
  document.querySelectorAll('#wheel .q').forEach(g=>{g.style.opacity=(+g.dataset.i===i)?1:.45});
  document.getElementById('qtitle').innerHTML=`<span class="ico">${ICONS[q.ic]}</span>${q.name}`;
  document.getElementById('qcomps').innerHTML=q.comps.map((c,k)=>`<div class="comp"><div class="num ${i%2?'o':''}">${k+1}</div>${c}</div>`).join('');
  qseen.add(i);
  document.querySelectorAll('#qprog span').forEach((s,k)=>s.classList.toggle('on',k<qseen.size));
  document.getElementById('qcount').textContent=qseen.size+'/4 מרכיבים נצפו';
  if(qseen.size===4)document.getElementById('qnext').classList.add('show');
}
const qseen=new Set();

/* ============ strategy directions ============ */
const DIRS=[
 {ic:'kids',t:'הקופה האטרקטיבית ביותר לילדים',i:'מאוחדת פועלת ליצירת בידול משמעותי בשירותים לילדים, באמצעות חיזוק תחום קופות הבחירה, הרחבת שירותים ייחודיים ופיתוח חוויית שירות מותאמת למשפחות.',l:['הרחבת והנגשת שירותי רפואה ייעודיים לילדים','פיתוח תכניות ושירותים חדשניים','שיתופי פעולה ותכניות מניעה ייעודיות','חוויית שירות מותאמת למשפחה'],g:'להוביל את תחום בריאות הילדים ולהיות הבחירה המועדפת למשפחות בישראל.'},
 {ic:'stethoscope',t:'רפואה ראשונית מצוינת',i:'הרפואה הראשונית היא הבסיס לפעילות הרפואית במאוחדת ונקודת המפגש המרכזית עם הלקוח. מאוחדת מחויבת להוביל ברפואה ראשונית איכותית, זמינה ומבוססת אמון – באמצעות:',l:['זמינות גבוהה של רופאי משפחה לילדים, נשים ומבוגרים','שיעור גבוה של רופאים ואחיות מומחים','חוויית טיפול איכותית ושביעות רצון גבוהה','חיזוק האמון בין המטופל לרופא','שימוש בכלים טכנולוגיים תומכי החלטה'],g:'להבטיח רפואה מקצועית, נגישה ואפקטיבית – שמייצרת ערך אמיתי ללקוחות.',noLabel:1},
 {ic:'careheart',t:'שירות אכפתי, פרואקטיבי ומותאם לקהל היעד',i:'מאוחדת מטמיעה תפיסת שירות שמזהה את הצרכים הייחודיים של קהלים שונים ופועלת באופן יזום כדי לתת להם מענה מותאם.',l:['תהליכי שירות מסונכרנים ומותאמים למאפייני הלקוחות','פיתוח שירותים יזומים ופרואקטיביים','עיצוב ושיפור מתמיד של תשתיות השירות','חיזוק הממשק עם הלקוח והממשקים הפנימיים','שביעות רצון והמלצה גבוהה דרך יחס אישי והתאמה תרבותית'],g:'לעבור משירות תגובתי לשירות יוזם, מדויק ומותאם – שמייצר חוויית לקוח משמעותית.'},
 {ic:'doctor',t:'הקופה המועדפת לצוותים רפואיים',i:'מאוחדת שואפת להיות הארגון שבו הצוותים הרפואיים בוחרים לעבוד – ולהישאר.',l:['תנאי העסקה תחרותיים והשקעה בפיתוח מקצועי ואישי','תהליכי קליטה איכותיים ותומכים','חיזוק תחושת השייכות והחיבור לארגון','שיפור שביעות רצון ואיזון עבודה-חיים','סביבת עבודה מקצועית, מכבדת ומקדמת'],g:'לחזק את המחויבות, המקצועיות והגאווה הארגונית – כבסיס למצוינות רפואית.',survey:1},
 {ic:'maplocal',t:'מיקוד וחיזוק הפריסה והשירותים בקהילות ובאזורים בהם אנו חזקים',i:'מאוחדת ממקדת משאבים ומאמץ באזורים ובקהילות שבהם יש לה יתרון יחסי, במטרה להעמיק נוכחות ולהוביל בצמיחה.',l:['מיקוד ניהולי והקצאת משאבים מדויקת','חיזוק וזמינות שירותי הרפואה בקהילה','הרחבת פריסת מרכזי בריאות ומכונים','פיתוח מענים רפואיים גם מעבר לשעות הפעילות'],g:'להעמיק אחיזה באזורים חזקים, להגדיל נתח שוק ולבסס מובילות מקומית.'},
 {ic:'plane',t:'להיות הבחירה הראשונה לעולים חדשים',i:'מאוחדת פועלת לבסס את מעמדה כקופה המועדפת על עולים חדשים, באמצעות שירותים מותאמים ותהליכי קליטה מדויקים.',l:['הצעת שירותים אטרקטיביים ומותאמים לעולים','תהליכי גיוס וקליטה ייעודיים','חיזוק שביעות רצון והמלצה בקהל זה','יצירת קשר מוקדם ומשמעותי עם העולה כבר בשלבי ההגעה'],g:'להעמיק אחיזה באזורים חזקים, להגדיל נתח שוק ולבסס מובילות מקומית.'},
 {ic:'shieldplus',t:'שיפור השב"ן והתאמתו לקהלי היעד של הקופה',i:'מאוחדת פועלת לחזק את האטרקטיביות של השב"ן ולהפוך אותו למנוע שימור וצמיחה מרכזי.',l:['חיזוק תחושת התמורה ושביעות הרצון מהשב"ן','הרחבת שיעור ההצטרפות בכל הרבדים','הובלה בשירותים ייעודיים לילדים','התאמת שיווק והנגשה לחברה הערבית'],g:'למצב את השב"ן ככלי ערך מרכזי עבור הלקוחות וכמנוע נאמנות לקופה.'},
 {ic:'apple',t:'קידום בריאות פרואקטיבי ואורח חיים בריא',i:'מאוחדת פועלת לעבור מגישה תגובתית לגישה יוזמת – לקדם בריאות עוד לפני הופעת מחלה.',l:['פעילות יזומה לשמירה על אורח חיים בריא','מסעות לקוח מותאמים להתמודדות ומניעה','תהליכים דיגיטליים פשוטים ונגישים','שיפור מדדי רפואה מונעת','מתן כלים ומידע מעשי ללקוחות'],g:'להוביל תפיסה של רפואה מונעת ולחזק את בריאות הלקוחות לאורך זמן.'},
 {ic:'tooth',t:'מהפכה בשירות ברפואת השיניים',i:'מאוחדת פועלת לשדרג את חוויית השירות ברפואת השיניים ולהפוך אותה לחלק אינטגרלי ומשמעותי במסע הלקוח.',l:['שדרוג תשתיות ותהליכי עבודה דיגיטליים','הטמעת סטנדרט שירות אחיד וגבוה','שיפור זמינות ונראות השירות','הובלה במדדי זמני המתנה לילדים','חיזוק החיבור בין מרפאות השיניים למרפאת האם'],g:'להפוך את רפואת השיניים למנוע צמיחה ולחזק את שביעות הרצון והנאמנות של הלקוחות.'}
];
let di=0;const dseen=new Set();
document.getElementById('dirnav').innerHTML=DIRS.map((d,i)=>`<button onclick="showDir(${i})">${String(i+1).padStart(2,'0')}</button>`).join('');
function showDir(i){
  di=i;dseen.add(i);const d=DIRS[i];
  document.querySelectorAll('#dirnav button').forEach((b,k)=>{b.classList.toggle('on',k===i);b.classList.toggle('seen',dseen.has(k))});
  document.getElementById('dircard').innerHTML=`<div class="dircard" style="animation:fadeIn .35s">
    <div><div class="dirtitle"><span class="ico">${ICONS[d.ic]}</span><div class="bignum">${String(i+1).padStart(2,'0')}</div></div><h2 style="font-size:26px;margin-top:10px">${d.t}</h2><span class="uline"></span><p>${d.i}</p>
    ${d.survey?`<button class="btn btn-o" style="padding:10px 18px;font-size:15px" onclick="openModal('m-survey')"><span class="bi">${WW(ICONS.chartup)}</span>לצפייה בסקר המחוברות לרופאים 2025</button>`:''}
    ${i===DIRS.length-1?`<button class="btn btn-o pop-in" style="padding:11px 20px;font-size:15px" onclick="tab('strat',2)">איפה זה פוגש אותנו? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 6l-6 6 6 6"/></svg></button>`:''}</div>
    <div style="display:flex;flex-direction:column">${d.noLabel?'':'<h3>המהלך כולל:</h3>'}<ul class="dots">${d.l.map(x=>`<li>${x}</li>`).join('')}</ul>
    <div class="goalbot"><div class="goal"><b>המטרה:</b> ${d.g}</div><img src="assets/robot-clean.png" alt=""></div></div></div>`;
}
function dir(s){showDir(Math.max(0,Math.min(DIRS.length-1,di+s)))}
showDir(0);

/* ============ workplan timeline / SMART ============ */
document.querySelectorAll('.tl').forEach(t=>t.addEventListener('click',()=>{document.querySelectorAll('.tl').forEach(x=>x.classList.remove('on'));t.classList.add('on')}));
const SMART=[
 {k:'S',en:'Specific',he:'ממוקד',d:'מוגדר בצורה מדויקת – מה רוצים להשיג.',no:'לשפר את השירות במרפאה',yes:'להעלות את ציון שביעות הרצון במרפאה מ־82 ל־87 עד סוף השנה'},
 {k:'M',en:'Measurable',he:'מדיד',d:'כולל קריטריון ברור להשגת המטרה – מדד הצלחה בתחומי העשייה של העובד.',no:'לחזק את הקשר עם הצוות הרפואי',yes:'לקיים 6 מפגשי צוות מקצועיים במהלך השנה ולמדוד השתתפות של לפחות 80% מהצוות'},
 {k:'A',en:'Actionable',he:'בר ביצוע',d:'בר השגה בלוחות הזמנים שהוגדרו ובאמצעים הקיימים.',no:'להפוך למרפאה מובילה באזור',yes:'להוסיף 2 ימי רפואה ייעודיים לילדים עד רבעון שלישי, בהתאם ליעד האסטרטגי'},
 {k:'R',en:'Relevant',he:'רלוונטי',d:'מטרה / אתגר בעלי ערך לעובד ולארגון.',no:'לשדרג את עיצוב חדר ההמתנה',yes:'לקצר את זמן ההמתנה הממוצע ב־10%, כחלק מהתייעלות ושיפור חוויית השירות'},
 {k:'T',en:'Time-bound',he:'מתוזמן',d:'תחום בזמן.',no:'להגדיל את מספר המבוטחים',yes:'להגדיל את מספר המבוטחים ב־3% עד סוף רבעון רביעי'}
];
document.getElementById('smartBtns').innerHTML=SMART.map((s,i)=>`<button onclick="smart(${i})"><b>${s.k}</b><span>${s.he}</span></button>`).join('');
function smart(i){const s=SMART[i];document.querySelectorAll('#smartBtns button').forEach((b,k)=>b.classList.toggle('on',k===i));
  document.getElementById('smartBody').innerHTML=`<div style="animation:fadeIn .3s"><h3 style="font-size:22px">${s.en} – ${s.he}</h3><p class="lead">${s.d}</p><div class="yesno"><div class="no"><b>✗ לא:</b>"${s.no}"</div><div class="yes"><b>✓ כן:</b>"${s.yes}"</div></div></div>`}
smart(0);

/* ============ procurement steps ============ */
let s6=0;
function nextStep6(){const st=document.querySelectorAll('.step6');if(s6<st.length){st[s6].classList.add('show');s6++}
  if(s6>=st.length){const b=document.getElementById('stepBtn');b.textContent='התחלה מחדש';b.onclick=()=>{st.forEach(x=>x.classList.remove('show'));s6=0;b.textContent='הצעד הבא';b.onclick=nextStep6;nextStep6()}}}
nextStep6();

/* ============ performance stages ============ */
function stage(el){document.querySelectorAll('.stg').forEach(s=>s.classList.toggle('on',s===el))}

/* ============ rimon ============ */
const RIMON=[
 {t:'מדד הצמיחה',d:'הסרגל מציג את תנועת ההצטרפות והעזיבה של הלקוחות את הקופה.'},
 {t:'מדד איכות השירות',d:'סרגל זה מתבונן בחוויית המטופל מזוויות שונות, מגוונות ומשלימות: אורכי התור בתחומי רפואה מובילים, זמני ההמתנה במרפאה, זמני הטיפול בפניות שירות, עידוד פעולות בערוצים דיגיטליים, וממצאי סקרי חוויית לקוח.<br><b>באמצעות מדדי איכות השירות נוכל להפנות קשב ניהולי ולחזק תחומים אותם נרצה לקדם.</b>'},
 {t:'מדד איכות רפואית',d:'מדדים לאיתור מוקדם של מחלות – כגון סרטן, וכן פעילות התערבות במחלות שכיחות – כגון סוכרת. לצידם משוקפות פעולות פרואקטיביות לשמירה על אורח חיים בריא ומניעת תחלואה.'},
 {t:'מדד יעילות כלכלית',d:'מדדי תקציב לצד מדדים המעודדים שימוש מושכל במשאבים. לדוגמה: עידוד הפניות למלר"ד מאוחדת במקום למיון, תיעדוף שירותים פנים-קופתיים וצירוף לקוחות לחתימה על הוראות קבע.'}
];
function rimon(i,el){document.querySelectorAll('.rimon .hot').forEach(h=>h.classList.toggle('on',h===el));const r=RIMON[i];
  document.getElementById('rimonInfo').innerHTML=`<div style="animation:fadeIn .3s"><span class="kicker">מערכת רימון</span><h2>${r.t}</h2><span class="uline"></span><p>${r.d}</p></div>`}

/* ============ data principles ============ */
const PRINC=[
 {t:'לחבר בין הנתון לאדם',s:'ולא להישאר במספרים',l:['אל תציגו רק נתונים – תנו להם הקשר','שאלו: מה עומד מאחורי הנתון?','איזו התנהגות / תהליך יצרו אותו?'],q:'זכרו: הנתונים הם סימפטום – לא הסיפור המלא',ic:'personchart'},
 {t:'נתונים כבסיס לשיח',s:'לא ככלי שיפוט',l:['הציגו נתונים כדי לפתוח שיח, לא כדי "לתייג" עובדים','הימנעו משיח של האשמה – עברו לשיח של הבנה ושיפור','שלבו נתונים בשיחות משוב עם דוגמאות קונקרטיות'],q:'במקום: "התוצאה שלך נמוכה" – עדיף: "מה לדעתך מסביר את הנתון הזה? איך נוכל לשפר יחד?"',ic:'chat'},
 {t:'התמקדו במדדים מרכזיים',s:'ולא "לטבוע בדוחות"',l:['בחרו מספר מצומצם של מדדים קריטיים לניהול (3–5)','הגדירו מה חשוב באמת להצלחה בתפקיד / ביחידה','חזרו אל אותם מדדים באופן עקבי'],q:'',ic:'target'},
 {t:'יצרו שגרות ניהול',s:'סביב הנתונים',l:['שגרות ניהול קבועות הן כלי לבקרה והנעה'],q:'לדוגמה: ישיבת צוות שבועית עם סקירת מדדים קצרה, פגישות אישיות שמתייחסות גם לביצועים ולא רק לתחושה, מעקב חודשי אחרי מגמות, הדרכות מקצועיות וכו\'.',ic:'routine'},
 {t:'הבליטו הצלחות',s:'לא רק פערים',l:['חפשו גם איפה הנתונים טובים','שתפו הצלחות בצוות ולמדו ממה שעובד'],q:'נתונים הם גם כלי להוקרה והנעה – לא רק לבקרה',ic:'trophy'}
];
let pi=0;
document.getElementById('pnav').innerHTML=PRINC.map((p,i)=>`<button onclick="showP(${i})">${i+1}</button>`).join('');
const WHITE=W;
function showP(i){pi=i;const p=PRINC[i];
  document.querySelectorAll('#pnav button').forEach((b,k)=>b.classList.toggle('on',k===i));
  document.getElementById('pcard').innerHTML=`<div class="pslide" style="animation:fadeIn .35s"><div class="big">${WHITE(ICONS[p.ic])}</div><div style="flex:1">
   <span class="kicker">איך עושים את זה נכון? · ${i+1} מתוך 5</span><h2 style="font-size:30px;margin:0">${p.t}</h2><p class="muted" style="font-size:20px;margin:2px 0 0">${p.s}</p><span class="uline"></span>
   <ul class="dots">${p.l.map(x=>`<li style="font-size:18px">${x}</li>`).join('')}</ul>${p.q?`<div class="goal">${p.q}</div>`:''}</div></div>`;
  document.getElementById('pPrev').disabled=i===0;document.getElementById('pNext').disabled=i===PRINC.length-1}
function pr(s){showP(Math.max(0,Math.min(PRINC.length-1,pi+s)))}
showP(0);

/* ============ AI tools ============ */
const AI_TOOLS=[
 {id:'excel',n:'Excel',bg:'linear-gradient(135deg,#21a366,#107c41)',L:'X',tag:'אקסל שמדבר ניהולית',tint:'linear-gradient(160deg,#dff3e8,#c9e8d6)',doesL:'מה Copilot עושה:',does:['מסביר נתונים במילים','מזהה חריגים','מציע תובנות ניהוליות','בונה סיכום להנהלה'],p:['הסבר לי במילים פשוטות מה הנתונים בגיליון מראים. מה שלושת הממצאים החשובים ביותר למנהל?','זהה חריגות משמעותיות ביחס לממוצע והצג אותן בטבלה חדשה עם הסבר אפשרי.','האם יש יחידות / מרפאות / תקופות שחורגות בצורה עקבית? סכם בתובנות.','כתוב סיכום ניהולי: מה עובד טוב | מה מדאיג | איפה כדאי להתמקד בשיפור.','אם הייתי צריך להציג את הנתונים להנהלה – איזה 3 גרפים היית מציע ולמה?','הצע נוסחה לחישוב חריגה חודשית מהיעד והסבר במילים פשוטות מה היא עושה.','בנה עמודת עזר שמסווגת כל שורה ל: תקין / חריגה קלה / חריגה חמורה, על בסיס עמודות ____.']},
 {id:'powerpoint',n:'PowerPoint',bg:'linear-gradient(135deg,#ed6c47,#c43e1c)',L:'P',tag:'ממסמך – למצגת מנהלים',tint:'linear-gradient(160deg,#fde7df,#f8d3c6)',doesL:'מה Copilot עושה:',does:['הופך מסמך למצגת','בונה מבנה נכון','מציע מסר מרכזי'],p:['הפוך את המסמך המצורף למצגת של 8 שקופיות לקהל מנהלים: בעיה, מצב קיים, פתרון, תועלות, סיכונים, צעדים הבאים.','צור שקופית אחת עם: מסר מרכזי, 3 נקודות מפתח, והערות דובר קצרות.','פשט את המצגת כך שכל שקופית תכיל מסר אחד ברור בלבד.','כתוב הערות דובר לכל שקופית כדי שאוכל להעביר הרצאה של 40–60 דקות.','בנה שקופית "עם מה יוצאים מההרצאה" (Takeaways) ב-3 בולטים.']},
 {id:'word',n:'Word',bg:'linear-gradient(135deg,#2b7cd3,#185abd)',L:'W',tag:'מדף ריק – לטיוטה תוך דקה',tint:'linear-gradient(160deg,#e0ebfb,#cddff7)',doesL:'שימושים נפוצים:',does:['טיוטות נהלים','סיכום ועדות','ניסוח מחדש לקהל אחר'],p:['כתוב טיוטת נוהל קצרה בנושא: ____. מבנה: מטרה, תחולה, תהליך עבודה, חריגים, מדדי בקרה.','נסח מחדש את הטקסט הבא כך שיהיה ברור לאיש צוות רפואי, ללא ז\'רגון משפטי מיותר: [הדבק טקסט]','סכם את המסמך לעמוד אחד למנהלים, ובנוסף כתוב תקציר בן 5 שורות לצוות.','בדוק אם יש חזרות, חוסר בהירות או סתירות במסמך. הצע שיפורים ממוקדים.','השווה בין שתי גרסאות של מסמך והדגש שינויי משמעות (לא רק ניסוח).','תרגם את המסמך לאנגלית בטון מקצועי ושמור על המבנה (כותרות / רשימות).']},
 {id:'outlook',n:'Outlook',bg:'linear-gradient(135deg,#28a8ea,#0f6cbd)',L:'O',tag:'לא קוראים שרשור – מקבלים החלטה',tint:'linear-gradient(160deg,#ddf0fb,#c8e5f7)',doesL:'מה Copilot עושה:',does:['סיכום שרשורי מייל','טיוטת תשובה חכמה','התאמת טון (רשמי / קצר / ניהולי)'],p:['סכם את שרשור המיילים הזה ל-5 נקודות. בסוף הוסף: (1) מה הוחלט (2) מה עדיין פתוח (3) מה נדרש ממני כמנהל.','בהתבסס על השרשור: הכן לי נקודות הכנה לפגישה – נושאים רגישים, שאלות צפויות והצעת החלטה.','נסח תשובה עניינית וקצרה שמאשרת את כיוון הפעולה, ומבקשת לוח זמנים ברור. טון: מקצועי, לא מתגונן.','כתוב שתי גרסאות לתשובה: (1) גרסה קצרה להנהלה (2) גרסה מפורטת לצוות המקצועי.','תן 3 ניסוחים חלופיים לאותו מייל: רשמי מאוד / חברי / אסרטיבי.']},
 {id:'teams',n:'Teams',bg:'linear-gradient(135deg,#7b83eb,#4b53bc)',L:'T',tag:'פגישה שלא הולכת לאיבוד!',tint:'linear-gradient(160deg,#e6e7fb,#d5d7f6)',doesL:'מה Copilot עושה:',does:['מסכם פגישות','מזהה החלטות','מחלץ משימות ואחריות'],p:['סכם את הפגישה ל-5 נקודות עיקריות. הדגש החלטות, מחלוקות ונושאים שדורשים המשך טיפול.','חלץ מהפגישה רשימת משימות: משימה | אחראי | דדליין | סיכון אם לא מבוצע.','מה סוכם עד עכשיו ומה שני הנושאים הקריטיים שעליי להכיר?','מה ההחלטות שהתקבלו עד כה ומי התחייב לבצע מה?','מה נאמר על נושא X בצ\'אט של הפגישה? סכם בקצרה וציין מי אמר מה.']},
 {id:'forms',n:'Forms',bg:'linear-gradient(135deg,#1fb5a7,#077568)',L:'F',tag:'כלי לבניית שאלונים פשוטים',tint:'linear-gradient(160deg,#dcf3f0,#c6e9e4)',doesL:'',does:[],p:['נסח לי 10 שאלות קצרות לסקר בנושא X, כולל שאלה פתוחה אחת.','הצע מבנה לטופס דיווח תקלות: שדות חובה, שדות רשות וסדר מילוי.','כתוב הודעת הזמנה למילוי סקר בטון ידידותי וקצר.']},
 {id:'chatgpt',n:'ChatGPT',bg:'conic-gradient(from 200deg,#3f6bff,#24c08a,#f7c331,#f76b4a,#c64ad8,#3f6bff)',L:'✦',tag:'העוזר האישי שלכם!',tint:'linear-gradient(160deg,#e6ecff,#f6e6f6)',doesL:'',does:[],p:['עזור לי לתעדף את המשימות שלי לשבוע הקרוב. חלק ל: דחוף / חשוב / יכול לחכות.','סכם יתרונות וחסרונות של האפשרויות הבאות והצע כיוון פעולה מנומק: _____.','הכן אותי לשיחה מקצועית רגישה: מה חשוב להגיד, ממה להימנע, ואיך לשמור על טון ענייני.','הפוך את ההערות הבאות לסיכום מנהלים + הודעה קצרה לצוות: [הדבק]','הסבר את הנושא הבא בשפה פשוטה כך שכל עובד יבין: _____.','איפה דיברנו על נושא X? הבא 3 מקורות (מסמך / מייל / פגישה) ותמצית מכל מקור.','מצא את המסמך / הקובץ האחרון שכולל את המונח ____ והסבר בקצרה מה יש בו.','ספק לי תמונת מצב על פרויקט X: מה חדש, מה חסום, מה המשימות הפתוחות.','השווה בין שני הקבצים המצורפים והצג הבדלים מהותיים בטבלה.','סכם לי את המסמך המצורף ל-7 נקודות + המלצות.']}
];
const tdone=new Set();
const ticon=t=>`<div class="ticon img"><img src="assets/tool-${t.id}.png" alt="${t.n}"></div>`;
const TOOL_POS={excel:[278,126],powerpoint:[423,126],word:[569,126],outlook:[210,274],teams:[350,274],chatgpt:[494,273],forms:[638,274]};
function renderTools(){document.getElementById('tools').innerHTML=AI_TOOLS.map(t=>`<button class="toolhot ${tdone.has(t.id)?'done':''}" style="left:${TOOL_POS[t.id][0]}px;top:${TOOL_POS[t.id][1]}px" onclick="go('ai-${t.id}')" aria-label="${t.n}"></button>`).join('');const all=AI_TOOLS.every(t=>tdone.has(t.id));document.querySelectorAll('#ai .homebtn').forEach(b=>b.classList.toggle('cta',all))}
renderTools();
document.getElementById('aiToolScreens').outerHTML=AI_TOOLS.map((t,i)=>{
  const prev=AI_TOOLS[i-1],next=AI_TOOLS[i+1];
  return `<section class="screen aitool" id="ai-${t.id}" data-title="כלי AI – ${t.n}">
  <div class="bgsoft" style="background:radial-gradient(600px 400px at 10% 20%,#e7e3ff,transparent 70%),radial-gradient(600px 400px at 90% 90%,#e3ebff,transparent 70%),#f7f8fe"></div>
  <div class="topbar"><img class="logo" src="assets/logo.png" alt="מאוחדת" onclick="go('home')"><div class="crumbs"><a onclick="go('home')">מרכז הניהול</a>›<a onclick="go('ai')">כלי AI</a>›<b>${t.n}</b></div><button class="homebtn" onclick="go('ai')">לכל הכלים</button></div>
  <div class="aih"><h1>כלי <span class="aigrad">AI</span> לשיפור העבודה היומיומית</h1>
    <div class="badge">${ticon(t)}<div><b>${t.n}</b><small>${t.tag}</small></div></div></div>
  <img class="robot" src="assets/robot.png" alt="">
  <div class="tipblob"><b>${ICONS.bulb}טיפ קטן</b>ככל שתנסחו שאלה מדויקת יותר – תקבלו תשובה טובה יותר.</div>
  <div class="chatwin">
    <div class="chatarea" style="background:${t.tint}">
      ${t.does.length?`<div class="does"><b>${t.doesL}</b>${t.does.map(d=>`<span>${d}</span>`).join('')}</div>`:''}
      <div class="plabel">פרומפטים לדוגמה – לחצו על פרומפט כדי להעתיק אותו:</div>
      ${t.p.map((p,k)=>`<button class="prompt" onclick="pickPrompt(this,'${t.id}')"><i>${k+1}</i><span>${p}</span></button>`).join('')}
    </div>
    <div class="askbar"><div class="plus">+</div><div class="txt" id="ask-${t.id}">בחרו פרומפט מהרשימה...</div>
      <button class="copy" onclick="copyPrompt('${t.id}')">⧉ העתקה</button><div class="send"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2.5"><path d="M12 19V5M6 11l6-6 6 6"/></svg></div></div>
  </div>
  <div class="toolnav">
    ${next?`<button class="btn btn-g" style="padding:9px 16px;font-size:14px" onclick="go('ai-${next.id}')">${next.n} ←</button>`:''}
    ${prev?`<button class="btn btn-g" style="padding:9px 16px;font-size:14px" onclick="go('ai-${prev.id}')">→ ${prev.n}</button>`:''}
  </div>
</section>`}).join('');
function pickPrompt(b,id){b.parentNode.querySelectorAll('.prompt').forEach(p=>p.classList.toggle('on',p===b));const t=document.getElementById('ask-'+id);t.textContent=b.querySelector('span').textContent;t.classList.add('filled');copyPrompt(id)}
function copyPrompt(id){const t=document.getElementById('ask-'+id);if(!t.classList.contains('filled')){toast('בחרו קודם פרומפט מהרשימה');return}
  try{navigator.clipboard.writeText(t.textContent).then(()=>toast('הפרומפט הועתק ✓'),()=>toast('הפרומפט נבחר ✓'))}catch(e){toast('הפרומפט נבחר ✓')}}
const _go=go;go=function(id){_go(id);if(id.startsWith('ai-')){tdone.add(id.slice(3));renderTools()}};

paintIcons(document);
updateProgress();
