const htmlQuestions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Transfer Markup Language",
    ],
    correct: 0,
    explanation:
      "HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages and describes the structure of a web page.",
  },
  {
    id: 2,
    question: "Who is making the Web standards?",
    options: [
      "Google",
      "The World Wide Web Consortium",
      "Microsoft",
      "Mozilla Foundation",
    ],
    correct: 1,
    explanation:
      "The World Wide Web Consortium (W3C) is the main international standards organization for the Web. It was founded by Tim Berners-Lee and develops protocols and guidelines to ensure long-term growth of the Web.",
  },
  {
    id: 3,
    question: "Choose the correct HTML element for the largest heading.",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    correct: 2,
    explanation:
      "<h1> defines the most important (largest) heading. HTML headings range from <h1> (largest) to <h6> (smallest). <h1> should be used for the main page title.",
  },
  {
    id: 4,
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<lb>", "<break>", "<newline>", "<br>"],
    correct: 3,
    explanation:
      "The <br> element inserts a single line break. It is an empty element (has no closing tag) and is used when you want a line break without starting a new paragraph.",
  },
  {
    id: 5,
    question: "What is the correct HTML for adding a background color?",
    options: [
      '<body style="background-color:yellow;">',
      '<body bg="yellow">',
      "<background>yellow</background>",
      '<body color="yellow">',
    ],
    correct: 0,
    explanation:
      'The correct way to add a background color using inline styles is <body style="background-color:yellow;">. The bg attribute and <background> element are not valid HTML.',
  },
  {
    id: 6,
    question: "Choose the correct HTML element to define important text.",
    options: ["<b>", "<important>", "<strong>", "<i>"],
    correct: 2,
    explanation:
      "The <strong> element defines text with strong importance. The content is typically displayed in bold. Unlike <b>, which is purely visual, <strong> carries semantic meaning — it tells browsers and screen readers that the text is important.",
  },
  {
    id: 7,
    question: "Choose the correct HTML element to define emphasized text.",
    options: ["<em>", "<italic>", "<i>", "<emphasize>"],
    correct: 0,
    explanation:
      "The <em> element defines emphasized text. The content is typically displayed in italic. Unlike <i>, which is purely presentational, <em> carries semantic meaning indicating stress emphasis.",
  },
  {
    id: 8,
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      '<a href="http://www.w3schools.com">W3Schools</a>',
      '<a url="http://www.w3schools.com">W3Schools</a>',
      "<a>http://www.w3schools.com</a>",
      '<hyperlink href="http://www.w3schools.com">W3Schools</hyperlink>',
    ],
    correct: 0,
    explanation:
      'Hyperlinks are created with the <a> (anchor) tag using the href attribute to specify the destination URL. The correct syntax is <a href="URL">link text</a>.',
  },
  {
    id: 9,
    question: "Which character is used to indicate an end tag?",
    options: ["*", "/", "!", "<"],
    correct: 1,
    explanation:
      "A forward slash (/) is used to indicate an end (closing) tag in HTML. For example, </p> closes a paragraph element. End tags signal the browser that the element's content is complete.",
  },
  {
    id: 10,
    question: "How can you open a link in a new tab/browser window?",
    options: [
      '<a href="url" target="new">',
      '<a href="url" target="_new">',
      '<a href="url" target="_blank">',
      '<a href="url" newtab>',
    ],
    correct: 2,
    explanation:
      'Setting target="_blank" on an anchor tag causes the link to open in a new browser tab or window. The values "new" and "_new" are not valid target attribute values.',
  },
  {
    id: 11,
    question: "Which of these elements are all table elements?",
    options: [
      "<table><head><tfoot>",
      "<table><tr><td>",
      "<table><tr><tt>",
      "<thead><body><tr>",
    ],
    correct: 1,
    explanation:
      "<table> defines the table, <tr> defines a table row, and <td> defines a table data cell. These three elements work together to create the basic structure of an HTML table.",
  },
  {
    id: 12,
    question:
      "Inline elements are normally displayed without starting a new line.",
    options: [
      "True",
      "False",
      "Only in HTML5",
      "Depends on the browser",
    ],
    correct: 0,
    explanation:
      "True. Inline elements do not start on a new line and only take up as much width as necessary. Examples include <span>, <a>, <img>, <strong>, and <em>. Block elements, by contrast, always start on a new line.",
  },
  {
    id: 13,
    question: "How can you make a numbered list?",
    options: ["<ul>", "<nl>", "<list>", "<ol>"],
    correct: 3,
    explanation:
      "The <ol> element defines an ordered (numbered) list. Each list item is defined with <li>. <ul> creates an unordered (bulleted) list. <nl> and <list> are not valid HTML elements.",
  },
  {
    id: 14,
    question: "How can you make a bulleted list?",
    options: ["<ul>", "<bl>", "<ol>", "<list type='bullet'>"],
    correct: 0,
    explanation:
      "The <ul> element defines an unordered (bulleted) list. Each list item is defined with <li>. <ol> creates a numbered list. <bl> and <list> are not valid HTML elements.",
  },
  {
    id: 15,
    question: "What is the correct HTML for making a checkbox?",
    options: [
      '<input type="check">',
      "<checkbox>",
      '<input type="checkbox">',
      "<input type='tick'>",
    ],
    correct: 2,
    explanation:
      'A checkbox is created with <input type="checkbox">. The type attribute must be set to "checkbox". There is no <checkbox> element or type="check" in HTML.',
  },
  {
    id: 16,
    question: "What is the correct HTML for making a text input field?",
    options: [
      '<input type="textfield">',
      "<textfield>",
      '<input type="text">',
      '<input type="input">',
    ],
    correct: 2,
    explanation:
      'A text input field is created with <input type="text">. This renders a single-line text input box. There is no <textfield> element or type="textfield" in standard HTML.',
  },
  {
    id: 17,
    question: "What is the correct HTML for making a drop-down list?",
    options: [
      "<input type='dropdown'>",
      "<list>",
      "<drop-down>",
      "<select>",
    ],
    correct: 3,
    explanation:
      "The <select> element creates a drop-down list. Options within the list are defined using <option> elements. There is no <drop-down> element or input type='dropdown' in HTML.",
  },
  {
    id: 18,
    question: "What is the correct HTML for making a text area?",
    options: [
      "<input type='textarea'>",
      "<textarea>",
      "<textbox>",
      "<input type='textbox'>",
    ],
    correct: 1,
    explanation:
      "The <textarea> element defines a multi-line text input control. Unlike <input type='text'>, <textarea> allows users to enter multiple lines of text and has a closing tag.",
  },
  {
    id: 19,
    question: "What is the correct HTML for inserting an image?",
    options: [
      '<image src="image.gif" alt="MyImage">',
      '<img href="image.gif" alt="MyImage">',
      '<img src="image.gif" alt="MyImage">',
      '<img alt="MyImage">image.gif</img>',
    ],
    correct: 2,
    explanation:
      'Images are embedded with the <img> tag using the src attribute for the image path and alt for alternative text. The correct syntax is <img src="image.gif" alt="MyImage">. Note that <img> is a self-closing (void) element.',
  },
  {
    id: 20,
    question: "What is the correct HTML for inserting a background image?",
    options: [
      '<body bg="background.gif">',
      '<body style="background-image:url(background.gif)">',
      '<background img="background.gif">',
      '<body style="background:img(background.gif)">',
    ],
    correct: 1,
    explanation:
      'The correct way to set a background image using inline styles is <body style="background-image:url(background.gif)">. The bg attribute is deprecated and not valid in HTML5. The <background> element does not exist.',
  },
  {
    id: 21,
    question:
      "An iframe is used to display a web page within a web page.",
    options: [
      "False",
      "True",
      "Only for local pages",
      "Only on mobile browsers",
    ],
    correct: 1,
    explanation:
      "True. The <iframe> (inline frame) element embeds another HTML document within the current page. It is commonly used to embed maps, videos, or other web content inside a page.",
  },
  {
    id: 22,
    question: "HTML comments start with <!-- and end with -->.",
    options: [
      "True",
      "False",
      "Comments use // in HTML",
      "Comments use /* */ in HTML",
    ],
    correct: 0,
    explanation:
      "True. HTML comments begin with <!-- and end with -->. Everything between these delimiters is ignored by the browser. Comments in CSS use /* */ and JavaScript uses // or /* */, but HTML uses its own syntax.",
  },
  {
    id: 23,
    question:
      "Block elements are normally displayed without starting a new line.",
    options: ["True", "False", "Only in HTML5", "Depends on CSS"],
    correct: 1,
    explanation:
      "False. Block-level elements always start on a new line and take up the full width available. Examples include <div>, <p>, <h1>–<h6>, <ul>, and <table>. Inline elements are what display without starting a new line.",
  },
  {
    id: 24,
    question: "Which HTML element defines the title of a document?",
    options: ["<head>", "<meta>", "<header>", "<title>"],
    correct: 3,
    explanation:
      "The <title> element defines the title of the HTML document shown in the browser's title bar or tab. It is placed inside the <head> element and is required in all HTML documents.",
  },
  {
    id: 25,
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["title", "src", "longdesc", "alt"],
    correct: 3,
    explanation:
      'The alt attribute specifies an alternative text for an image if the image cannot be displayed. It is also read by screen readers to describe the image to visually impaired users. Example: <img src="dog.jpg" alt="A brown dog">.',
  },
  {
    id: 26,
    question: "Which doctype is correct for HTML5?",
    options: [
      "<!DOCTYPE HTML5>",
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 5.0//EN">',
      "<!DOCTYPE>",
      "<!DOCTYPE html>",
    ],
    correct: 3,
    explanation:
      "The correct doctype declaration for HTML5 is <!DOCTYPE html>. It must be the very first line of an HTML document. Unlike previous HTML versions, the HTML5 doctype is simple and case-insensitive.",
  },
  {
    id: 27,
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<section>", "<footer>", "<foot>"],
    correct: 2,
    explanation:
      "The <footer> element defines a footer for a document or section. It typically contains authorship information, copyright notices, contact details, or links to related documents. A document can have multiple <footer> elements.",
  },
  {
    id: 28,
    question:
      "In HTML, you can embed SVG elements directly into an HTML page.",
    options: [
      "True",
      "False",
      "Only using an external file",
      "Only as a data URL",
    ],
    correct: 0,
    explanation:
      "True. SVG (Scalable Vector Graphics) elements can be embedded directly inline in an HTML5 document. You simply write the <svg> element and its children directly in the HTML markup without needing an external file.",
  },
  {
    id: 29,
    question:
      "What is the correct HTML element for playing video files?",
    options: ["<media>", "<movie>", "<video>", "<vid>"],
    correct: 2,
    explanation:
      "The <video> element is used to embed video content in an HTML document. It supports multiple source formats via nested <source> elements and provides built-in controls with the controls attribute.",
  },
  {
    id: 30,
    question:
      "What is the correct HTML element for playing audio files?",
    options: ["<mp3>", "<sound>", "<music>", "<audio>"],
    correct: 3,
    explanation:
      "The <audio> element is used to embed audio content in an HTML document. Like <video>, it supports the controls attribute for built-in playback controls and multiple <source> elements for different audio formats.",
  },
  {
    id: 31,
    question: "The HTML global attribute 'contenteditable' is used to:",
    options: [
      "Specify the content type of an element",
      "Specify whether the content of an element should be editable or not",
      "Define editable regions in a template",
      "Control content visibility",
    ],
    correct: 1,
    explanation:
      "The contenteditable attribute specifies whether the content of an element is editable by the user. When set to true, the user can modify the element's content directly in the browser. It is a global attribute, meaning it can be applied to any HTML element.",
  },
  {
    id: 32,
    question: "In HTML, onblur and onfocus are:",
    options: [
      "Style attributes",
      "Event attributes",
      "Global attributes",
      "Form attributes",
    ],
    correct: 1,
    explanation:
      "onblur and onfocus are event attributes. onfocus fires when an element receives focus (e.g., when a user clicks into an input field), and onblur fires when an element loses focus. They are commonly used with form elements.",
  },
  {
    id: 33,
    question: "Graphics defined by SVG is in which format?",
    options: ["HTML", "CSS", "JSON", "XML"],
    correct: 3,
    explanation:
      "SVG (Scalable Vector Graphics) is defined in XML format. SVG graphics are text-based XML files that describe two-dimensional vector graphics. Because they are XML-based, SVG images can be created and edited with any text editor.",
  },
  {
    id: 34,
    question: "The HTML canvas element is used to:",
    options: [
      "embed video content",
      "draw graphics",
      "display a data table",
      "create web forms",
    ],
    correct: 1,
    explanation:
      "The <canvas> element is used to draw graphics on the fly via scripting (usually JavaScript). It provides a resolution-dependent bitmap canvas for rendering shapes, images, and animations dynamically.",
  },
  {
    id: 35,
    question:
      "In HTML, which attribute is used to specify that an input field must be filled out before submitting a form?",
    options: ["validate", "placeholder", "required", "mandatory"],
    correct: 2,
    explanation:
      "The required attribute specifies that an input field must be filled out before submitting the form. It is a boolean attribute — simply adding required (or required='required') to an <input> element enforces this validation.",
  },
  {
    id: 36,
    question: "Which input type defines a slider control?",
    options: ["slider", "number", "range", "select"],
    correct: 2,
    explanation:
      'The input type="range" creates a slider control that lets the user select a numeric value within a specified range. You can set the min, max, and step attributes to control its behaviour. <select> is a separate element for drop-down lists.',
  },
  {
    id: 37,
    question:
      "Which HTML element is used to display a scalar measurement within a known range (a gauge)?",
    options: ["<gauge>", "<progress>", "<range>", "<meter>"],
    correct: 3,
    explanation:
      "The <meter> element represents a scalar measurement within a known range, such as disk usage or a relevance score. It differs from <progress>, which represents the completion of a task. Attributes include min, max, value, low, high, and optimum.",
  },
  {
    id: 38,
    question: "Which HTML element defines navigation links?",
    options: ["<navigate>", "<navigation>", "<nav>", "<menu>"],
    correct: 2,
    explanation:
      "The <nav> element defines a set of navigation links. It is a semantic HTML5 element intended for major blocks of navigation links, such as a site menu or a table of contents. Not all links need to be inside a <nav> element.",
  },
  {
    id: 39,
    question: "In HTML, what does the <aside> element define?",
    options: [
      "The main content of the document",
      "A section for footnotes",
      "Content aside from the page content",
      "A fixed sidebar navigation menu",
    ],
    correct: 2,
    explanation:
      "The <aside> element defines content that is tangentially related to the main content, such as a sidebar, call-out box, or related links. Its content should be indirectly related to the surrounding content.",
  },
  {
    id: 40,
    question:
      "Which HTML element is used to specify a header for a document or section?",
    options: ["<top>", "<head>", "<heading>", "<header>"],
    correct: 3,
    explanation:
      "The <header> element represents a container for introductory content or navigational links. It typically contains headings, logos, and navigation menus. Note the difference: <head> contains document metadata, while <header> is a visible page section.",
  },
];

export default htmlQuestions;
