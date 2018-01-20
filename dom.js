//How would you access the array that is the value of the children' key of the first element in the 'document' array?

document[0].children

var document = [
  {
    tagName: "div",
    children: [
      {
        tagName: "ul",
        children: [
          {tagName: "li", value: "list item 1"},
          {tagName: "li", value: "list item 2"},
          {tagName: "li", value: "list item 3"}
        ]
      }
    ]
  },
  {
    tagName: "div",
    children: [
      {
        tagName: "form",
        children: [
          {
            tagName: "input",
            type: "text",
            value: "name"
          },
          {
            tagName: "input",
            type: "submit"
          }
        ]
      }
    ]
  },
  {
    tagName: "div",
    children: [
      {
        tagName: "p",
        value: "I'm a paragraph"
      }
    ]
  }
]
