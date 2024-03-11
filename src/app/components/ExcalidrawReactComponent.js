import React, { useRef, useEffect, useState } from 'react';
// import { Excalidraw } from '@excalidraw/excalidraw';

const ExcalidrawReactComponent = () => {
    const [Comp, setComp] = useState(null);
    const excalRef = useRef(null);
    useEffect(() => {
      import("@excalidraw/excalidraw").then((comp) => {
        setComp(comp.Excalidraw);
      });
    }, []);
  
    const onChange = () => {
      // The ref will get initialized with API
      console.log(excalRef.current, "HEY");
    };

  return (
    <>
    
        <div style={{ height: "800px", margin: "40px" }}>
          {Comp && <Comp ref={excalRef} onChange={onChange} />}
        </div>
  </>);
};

export default ExcalidrawReactComponent;