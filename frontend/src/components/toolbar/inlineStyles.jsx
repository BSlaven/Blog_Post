import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faUnderline, faItalic } from "@fortawesome/free-solid-svg-icons";

const inlineStyles = [
  {
    label: "bold",
    style: "BOLD",
    icon: <FontAwesomeIcon icon={faBold} />
  },
  {
    label: "italic",
    style: "ITALIC",
    icon: <FontAwesomeIcon icon={faItalic} />
  },
  {
    label: "Underline",
    style: "UNDERLINE",
    icon: <FontAwesomeIcon icon={faUnderline} />
  }
];

const blockTypes = [
  { label: " “ ” ", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "{ }", style: 'code-block' }
];

const blockHeadings = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" }
]

export { inlineStyles, blockTypes, blockHeadings };