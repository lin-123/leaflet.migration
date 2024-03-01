import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import MigrationLayer from './MigrationLayer';
import { randomDataByLen } from './mock';

export const Example = forwardRef(({ dataLen = 10, visible, ...props }, ref) => {
  const [data, setData] = useState(randomDataByLen(dataLen));
  const [options, setOptions] = useState( {
    marker: {
      // [min, max]
      radius: [5, 10],
      // show marker ring animation
      pulse: true,
      textVisible: true
    },
    line: {
      width: 1,
      order: false,
      icon: {
        type: 'circle',
        imgUrl: '',
        size: 10
      },
    }
  });
  const updateStyle = () => {
    options.marker.radius[1] = Math.random() * 20;
    options.line.width = Math.random() * 5;
    setOptions({ ...options });
  };
  const updateData = () => setData(randomDataByLen(dataLen));

  useImperativeHandle(ref, () => ({
    updateStyle,
    updateData
  }));
  return <MigrationLayer visible={visible} data={data} options={options} {...props}></MigrationLayer>
});
