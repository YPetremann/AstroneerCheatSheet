export function useBem(name) {
  function self(second?: any, props?: any) {
    if (typeof second === "string") name = `${name}__${second}`;
    else if (second) props = second;
    else props = {};
    let ret = name;
    for (const k in props) {
      const v = props[k];
      if (!v) undefined;
      else if (v === true) ret += ` ${name}--${k}`;
      else ret += ` ${name}--${k}-${v}`;
    }
    return ret;
  }
  return self;
}
