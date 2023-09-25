function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $43d7963e56408b24$export$2e2bcd8739ae039);
const $811c22e66fb1c041$var$api = "http://localhost:8080/api/logs";
const $811c22e66fb1c041$var$postLog = async (params)=>{
    await fetch($811c22e66fb1c041$var$api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    });
};
var $811c22e66fb1c041$export$2e2bcd8739ae039 = $811c22e66fb1c041$var$postLog;


const $43d7963e56408b24$var$createLog = async (level, message, Context = {})=>{
    const levels = [
        "error",
        "warn",
        "http",
        "debug",
        "verbose",
        "info",
        "silly"
    ];
    if (!levels.includes(level)) return console.log("Invalid Level");
    const params = {
        level: level,
        message: message,
        meta: {
            Context: Context
        }
    };
    (0, $811c22e66fb1c041$export$2e2bcd8739ae039)(params);
};
var $43d7963e56408b24$export$2e2bcd8739ae039 = $43d7963e56408b24$var$createLog;


//# sourceMappingURL=index.cjs.map
