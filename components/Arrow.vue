<script lang="ts" setup>
  interface Coords {
    x: number;
    y: number;
    d: "L" | "R" | "LU" | "RU" | "LD" | "RD";
  }

  const props = defineProps<{
    from: string;
    to: string;
  }>();

  function hydrate(c: string): Coords {
    const [x, y, d] = c.split(";");
    // @ts-ignore
    return { x, y, d };
  }
  function calc(c: Coords): [number, number] {
    const o = 10;
    const fx = c.x * 250 - 10 - (c.d.includes("L") ? 220 : 0);
    const fy =
      c.y * 60 - 10 + o * (c.d.includes("U") ? -1 : c.d.includes("D") ? +1 : 0);
    return [fx, fy];
  }

  function calcPath(f: Coords, t: Coords) {
    let [fx, fy] = calc(f);
    let [tx, ty] = calc(t);
    const l = 0;
    const c = 15;
    const dfx = f.d.includes("L") ? -1 : +1;
    const dtx = t.d.includes("L") ? 1 : -1;

    const dmy = fy - ty > 0 ? -1 : fy - ty < 0 ? +1 : 0;
    let d = `M ${fx},${fy}`;
    d += ` l ${dfx * l},0`;
    d += ` q ${dfx * c},0 ${dfx * c},${dmy * c}`;
    d += ` V ${ty - dmy * c}`;
    d += ` q 0,${dmy * c} ${dtx * c},${dmy * c}`;
    d += ` L ${tx},${ty}`;
    return d;
  }

  const from = hydrate(props.from);
  const to = hydrate(props.to);
  const [fx, fy] = calc(from);
  const [tx, ty] = calc(to);
  const path = calcPath(from, to);
</script>
<template>
  <path :d="path" fill="none" stroke-linecap="round" />
  <circle :cx="fx" :cy="fy" r="5" stroke="none" fill="black" />
  <polygon
    :points="`${tx + -(to.d.includes('R') ? 7 : -7)},${ty} ${tx},${ty - 7}
  ${tx},${ty + 7}`"
    stroke="none"
    fill="black"
  />
</template>
