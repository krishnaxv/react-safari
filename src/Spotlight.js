import React from "react";
import { Rect } from "./Rect";
import { Title } from "./Title";

class Spotlight extends React.Component {
  state = {
    mask: false,
    rect: {},
    activeTourId: null,
    itemList: [],
    scrollHeight: document.body.scrollHeight
  };

  componentDidMount() {
    this.trigger();
  }

  trigger() {
    const scrollY = window.scrollY;
    const tourNodeList = document.querySelectorAll("[data-tour-id]");
    const itemList = [];
    tourNodeList.forEach(node => {
      const { top, left, width, height } = node.getBoundingClientRect();
      itemList.push({
        rect: {
          top: top + scrollY,
          left,
          height,
          width
        },
        tour: {
          id: node.getAttribute("data-tour-id"),
          nextId: node.getAttribute("data-tour-next-id"),
          text: node.getAttribute("data-tour-text")
        }
      });
    });
    this.setState({
      itemList
    });
  }

  highlight(rect, tourId) {
    this.setState(
      {
        mask: false,
        rect: {},
        activeTourId: tourId
      },
      () => {
        this.setState({
          mask: true,
          rect
        });
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            color: "rgba(0,0,0,.7)"
          }}
          width="100%"
          height={this.state.scrollHeight}
        >
          {this.state.mask && (
            <defs>
              <mask id="mask">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <Rect rect={this.state.rect} />
              </mask>
            </defs>
          )}
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="currentColor"
            mask="url(#mask)"
          />
        </svg>
        {this.state.itemList.map((item, index) => (
          <Title
            key={index}
            item={item}
            onClick={(rect, tourId) => this.highlight(rect, tourId)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export { Spotlight };
