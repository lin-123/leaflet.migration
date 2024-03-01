import { useRef, useState } from 'react';
import BaseMap from './demos/BaseMap';
import { Example } from './demos/Example';

export default function Demo() {
  const [visible, setVisible] = useState(true);
  const layerRef = useRef();
  return <div>
    <BaseMap style={{ height: 600 }} latitude={35.4199} longitude={95.2402} zoom={4}>
      <Example
        visible={visible}
        dataLen={10}
        ref={layerRef}
        replacePopover={(x, y, data, index) => {
          console.log(x, y, data, index, 'replace popover');
          return `value: ${data.value} from: ${data.labels[1]} to: ${data.labels[0]}`
        }}
        onShowPopover={(data, index) => {
          console.log(data, index, 'show popover');
        }}
        onHidePopover={(data) => {
          console.log('hide popover', data);
        }}
      />
    </BaseMap>
    <div className="control">
      <button onClick={() => layerRef.current?.updateData()}>rendomData</button>
      <button onClick={() => layerRef.current?.updateStyle()}>rendomStyle</button>
      <button onClick={() => setVisible(false)}>hide</button>
      <button onClick={() => setVisible(true)}>show</button>
    </div>
  </div>;
}