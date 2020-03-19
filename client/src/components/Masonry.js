import * as React from "react";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

export default function MasonryLayout(props) {




  const childElements = props.resources.map(function(element) {
    return (
      <li className="image-element-class">
        <img src={element.img_url} height="500em" width="500em" />
      </li>
    );
  });

  return (<Masonry
      className={"my-gallery-class"} // default ''
      elementType={"ul"} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      imagesLoadedOptions={imagesLoadedOptions} // default {}
    >
      {childElements}
    </Masonry>
  );
}
