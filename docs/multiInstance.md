---
order: 1
---

# MultiInstance

> multi layer instance

```tsx
import React, { useRef } from 'react';
import BaseMap from './demos/BaseMap';
import { Example } from './demos/Example';

export default function MultiInst() {
  const m1 = useRef();
  return <div>
    <BaseMap style={{ height: 600 }} latitude={35.4199} longitude={95.2402} zoom={4}>
      <Example dataLen={1} ref={m1}></Example>
      <Example dataLen={2} />
    </BaseMap>
    <div className="control">
      <button onClick={() => m1.current?.updateData()}>rendomData</button>
      <button onClick={() => m1.current?.updateStyle()}>rendomStyle</button>
    </div>
  </div>;
}
```