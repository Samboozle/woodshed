import React, { useState } from 'react';


export default ({noodle, setNoodle}) => {
  const [secondaryTools, setSecondaryTools] = useState(null);

  return(
    <>
      <div
        className="w-48 h-16 flex flex-row shadow"
      >
        {renderTools(noodle, setNoodle)}
      </div>
      <div>
        {/* {renderSecondary()} */}
      </div>
    </>
  );
}


const renderTools = (noodle, setNoodle) => {
  const tools = [
    { tooltip: "Add a measure to your noodle",
      icon: "icons/measure.png",
    },
    // { tooltip: "Add a voice to the current measure",
    //   icon: "icons/voices.png"
    // },
    { tooltip: "Add a note to the current voice",
      icon: "icons/quarter.png"
    },
    { tooltip: "Add a tuplet to the current voice",
      icon: "icons/tuplet.png"
    }
  ]
  return tools.map(tool => {
    return <Tool tool={tool} noodle={noodle} setNoodle={noodle} />
  });
}

const Tool = ({ tool, noodle, setNoodle }) => {

  const [isHovered, setIsHovered] = useState(false);

  return(
    <div className="w-1/3 h-full"
      onMouseEnter={_ => setIsHovered(true)}
      onMouseLeave={_ => setIsHovered(false)}
      style={{ backgroundColor: isHovered ? "lightGrey" : "white" }}
    >
      <img src={tool.icon} />
    </div>
  );

}