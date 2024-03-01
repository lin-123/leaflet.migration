---
order: 1
---

# large

```tsx
import React, { useEffect, useState } from 'react';
import BaseMap from './demos/BaseMap';
import { Example } from './demos/Example';

export default function Large() {
  const [visible, setVisible] = useState(true);
  return <div>
    <BaseMap style={{ height: 600 }} latitude={35.4199} longitude={95.2402} zoom={4}>
      <Example
        visible={visible}
        dataLen={600}
      />
    </BaseMap>
    <div className="control">
    </div>
  </div>;
}
```
