System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={97980:(t,e)=>{e.buildFormatLongFn=function(t){return(e={})=>{const a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}},46746:(t,e)=>{e.buildLocalizeFn=function(t){return(e,a)=>{let n;if("formatting"===(a?.context?String(a.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,i=a?.width?String(a.width):e;n=t.formattingValues[i]||t.formattingValues[e]}else{const e=t.defaultWidth,i=a?.width?String(a.width):t.defaultWidth;n=t.values[i]||t.values[e]}return n[t.argumentCallback?t.argumentCallback(e):e]}}},20640:(t,e)=>{e.buildMatchFn=function(t){return(e,a={})=>{const n=a.width,i=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],r=e.match(i);if(!r)return null;const o=r[0],d=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(d)?function(t,e){for(let a=0;a<t.length;a++)if(e(t[a]))return a;return}(d,(t=>t.test(o))):function(t,e){for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&e(t[a]))return a;return}(d,(t=>t.test(o)));let u;u=t.valueCallback?t.valueCallback(l):l,u=a.valueCallback?a.valueCallback(u):u;return{value:u,rest:e.slice(o.length)}}}},2528:(t,e)=>{e.buildMatchPatternFn=function(t){return(e,a={})=>{const n=e.match(t.matchPattern);if(!n)return null;const i=n[0],r=e.match(t.parsePattern);if(!r)return null;let o=t.valueCallback?t.valueCallback(r[0]):r[0];o=a.valueCallback?a.valueCallback(o):o;return{value:o,rest:e.slice(i.length)}}}},99518:(t,e)=>{e.formatDistance=void 0;const a={lessThanXSeconds:{one:"\u5c11\u65bc 1 \u79d2",other:"\u5c11\u65bc {{count}} \u79d2"},xSeconds:{one:"1 \u79d2",other:"{{count}} \u79d2"},halfAMinute:"\u534a\u5206\u9418",lessThanXMinutes:{one:"\u5c11\u65bc 1 \u5206\u9418",other:"\u5c11\u65bc {{count}} \u5206\u9418"},xMinutes:{one:"1 \u5206\u9418",other:"{{count}} \u5206\u9418"},xHours:{one:"1 \u5c0f\u6642",other:"{{count}} \u5c0f\u6642"},aboutXHours:{one:"\u5927\u7d04 1 \u5c0f\u6642",other:"\u5927\u7d04 {{count}} \u5c0f\u6642"},xDays:{one:"1 \u5929",other:"{{count}} \u5929"},aboutXWeeks:{one:"\u5927\u7d04 1 \u500b\u661f\u671f",other:"\u5927\u7d04 {{count}} \u500b\u661f\u671f"},xWeeks:{one:"1 \u500b\u661f\u671f",other:"{{count}} \u500b\u661f\u671f"},aboutXMonths:{one:"\u5927\u7d04 1 \u500b\u6708",other:"\u5927\u7d04 {{count}} \u500b\u6708"},xMonths:{one:"1 \u500b\u6708",other:"{{count}} \u500b\u6708"},aboutXYears:{one:"\u5927\u7d04 1 \u5e74",other:"\u5927\u7d04 {{count}} \u5e74"},xYears:{one:"1 \u5e74",other:"{{count}} \u5e74"},overXYears:{one:"\u8d85\u904e 1 \u5e74",other:"\u8d85\u904e {{count}} \u5e74"},almostXYears:{one:"\u5c07\u8fd1 1 \u5e74",other:"\u5c07\u8fd1 {{count}} \u5e74"}};e.formatDistance=(t,e,n)=>{let i;const r=a[t];return i="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",String(e)),n?.addSuffix?n.comparison&&n.comparison>0?i+"\u5167":i+"\u524d":i}},12431:(t,e,a)=>{e.formatLong=void 0;var n=a(97980);e.formatLong={date:(0,n.buildFormatLongFn)({formats:{full:"y'\u5e74'M'\u6708'd'\u65e5' EEEE",long:"y'\u5e74'M'\u6708'd'\u65e5'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},defaultWidth:"full"}),time:(0,n.buildFormatLongFn)({formats:{full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},defaultWidth:"full"}),dateTime:(0,n.buildFormatLongFn)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})}},54353:(t,e)=>{e.formatRelative=void 0;const a={lastWeek:"'\u4e0a\u500b'eeee p",yesterday:"'\u6628\u5929' p",today:"'\u4eca\u5929' p",tomorrow:"'\u660e\u5929' p",nextWeek:"'\u4e0b\u500b'eeee p",other:"P"};e.formatRelative=(t,e,n,i)=>a[t]},59545:(t,e,a)=>{e.localize=void 0;var n=a(46746);e.localize={ordinalNumber:(t,e)=>{const a=Number(t);switch(e?.unit){case"date":return a+"\u65e5";case"hour":return a+"\u6642";case"minute":return a+"\u5206";case"second":return a+"\u79d2";default:return"\u7b2c "+a}},era:(0,n.buildLocalizeFn)({values:{narrow:["\u524d","\u516c\u5143"],abbreviated:["\u524d","\u516c\u5143"],wide:["\u516c\u5143\u524d","\u516c\u5143"]},defaultWidth:"wide"}),quarter:(0,n.buildLocalizeFn)({values:{narrow:["1","2","3","4"],abbreviated:["\u7b2c\u4e00\u523b","\u7b2c\u4e8c\u523b","\u7b2c\u4e09\u523b","\u7b2c\u56db\u523b"],wide:["\u7b2c\u4e00\u523b\u9418","\u7b2c\u4e8c\u523b\u9418","\u7b2c\u4e09\u523b\u9418","\u7b2c\u56db\u523b\u9418"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:(0,n.buildLocalizeFn)({values:{narrow:["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u5341\u4e00","\u5341\u4e8c"],abbreviated:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],wide:["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"]},defaultWidth:"wide"}),day:(0,n.buildLocalizeFn)({values:{narrow:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],short:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],abbreviated:["\u9031\u65e5","\u9031\u4e00","\u9031\u4e8c","\u9031\u4e09","\u9031\u56db","\u9031\u4e94","\u9031\u516d"],wide:["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"]},defaultWidth:"wide"}),dayPeriod:(0,n.buildLocalizeFn)({values:{narrow:{am:"\u4e0a",pm:"\u4e0b",midnight:"\u51cc\u6668",noon:"\u5348",morning:"\u65e9",afternoon:"\u4e0b\u5348",evening:"\u665a",night:"\u591c"},abbreviated:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u9593"},wide:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u9593"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u4e0a",pm:"\u4e0b",midnight:"\u51cc\u6668",noon:"\u5348",morning:"\u65e9",afternoon:"\u4e0b\u5348",evening:"\u665a",night:"\u591c"},abbreviated:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u9593"},wide:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u9593"}},defaultFormattingWidth:"wide"})}},8877:(t,e,a)=>{e.match=void 0;var n=a(20640),i=a(2528);e.match={ordinalNumber:(0,i.buildMatchPatternFn)({matchPattern:/^(\u7b2c\s*)?\d+(\u65e5|\u6642|\u5206|\u79d2)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)}),era:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(\u524d)/i,abbreviated:/^(\u524d)/i,wide:/^(\u516c\u5143\u524d|\u516c\u5143)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u524d)/i,/^(\u516c\u5143)/i]},defaultParseWidth:"any"}),quarter:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b/i,wide:/^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b\u9418/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|\u4e00)/i,/(2|\u4e8c)/i,/(3|\u4e09)/i,/(4|\u56db)/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])/i,abbreviated:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00]|\d|1[12])\u6708/i,wide:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])\u6708/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u4e00/i,/^\u4e8c/i,/^\u4e09/i,/^\u56db/i,/^\u4e94/i,/^\u516d/i,/^\u4e03/i,/^\u516b/i,/^\u4e5d/i,/^\u5341(?!(\u4e00|\u4e8c))/i,/^\u5341\u4e00/i,/^\u5341\u4e8c/i],any:[/^\u4e00|1/i,/^\u4e8c|2/i,/^\u4e09|3/i,/^\u56db|4/i,/^\u4e94|5/i,/^\u516d|6/i,/^\u4e03|7/i,/^\u516b|8/i,/^\u4e5d|9/i,/^\u5341(?!(\u4e00|\u4e8c))|10/i,/^\u5341\u4e00|11/i,/^\u5341\u4e8c|12/i]},defaultParseWidth:"any"}),day:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,short:/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,abbreviated:/^\u9031[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,wide:/^\u661f\u671f[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/\u65e5/i,/\u4e00/i,/\u4e8c/i,/\u4e09/i,/\u56db/i,/\u4e94/i,/\u516d/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.buildMatchFn)({matchPatterns:{any:/^(\u4e0a\u5348?|\u4e0b\u5348?|\u5348\u591c|[\u4e2d\u6b63]\u5348|\u65e9\u4e0a?|\u4e0b\u5348|\u665a\u4e0a?|\u51cc\u6668)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u4e0a\u5348?/i,pm:/^\u4e0b\u5348?/i,midnight:/^\u5348\u591c/i,noon:/^[\u4e2d\u6b63]\u5348/i,morning:/^\u65e9\u4e0a/i,afternoon:/^\u4e0b\u5348/i,evening:/^\u665a\u4e0a?/i,night:/^\u51cc\u6668/i}},defaultParseWidth:"any"})}}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,a),r.exports}var n={};return(()=>{var t=n;t.zhTW=void 0;var e=a(99518),i=a(12431),r=a(54353),o=a(59545),d=a(8877);t.zhTW={code:"zh-TW",formatDistance:e.formatDistance,formatLong:i.formatLong,formatRelative:r.formatRelative,localize:o.localize,match:d.match,options:{weekStartsOn:1,firstWeekContainsDate:4}}})(),n})())}}}));