export function useBem(name) {
  function self(second?: any, props?: any) {
    let _name = name;
    if (typeof second === "string") _name = `${_name}__${second}`;
    else if (second) props = second;
    else props = {};
    let ret = _name;
    for (const k in props) {
      const v = props[k];
      if (!v) undefined;
      else if (v === true) ret += ` ${_name}--${k}`;
      else ret += ` ${_name}--${k}-${v}`;
    }
    return ret;
  }
  return self;
}
