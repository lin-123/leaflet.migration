---
hide: true
---

# canvas verify

```jsx
import React from 'react';
export default () => {
  const canvas = React.useRef(null);
  const tmpCanvas = React.useRef(null);
  React.useEffect(() => {
    const img = document.createElement('img');
    img.src = 'https://github.githubassets.com/favicons/favicon.png';
    img.width = 100;

    const ctx = canvas.current.getContext('2d');
    img.onload = () => {
      ctx.save();
      ctx.rotate(60*(Math.PI/180));
      ctx.drawImage(img, 20, -20);
      ctx.restore();

      const tmpCtx = tmpCanvas.current.getContext('2d');
      tmpCanvas.current.width = canvas.current.width;
      tmpCanvas.current.height = canvas.current.height;
      tmpCtx.drawImage(canvas.current,0,0); // 将缓存 canvas 复制到旧的 canvas
    }
  }, []);

  return <div>
    <img src="https://github.githubassets.com/favicons/favicon.png"/>
    <canvas ref={canvas} style={{ border: '1px solid' }} width={100} height={100} />

    <canvas ref={tmpCanvas} style={{ border: '1px solid' }} />
  </div>
}
```